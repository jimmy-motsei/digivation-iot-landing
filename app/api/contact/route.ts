import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { firstName, surname, farmName, province, cropType, mobile, email } = await req.json()

  if (!firstName || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'Digivation IoT <noreply@digivation.global>',
      to: 'digivation@digivation.global',
      replyTo: email,
      subject: `New Site Assessment Request — ${firstName} ${surname}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#0d1f0f;padding:24px 32px;border-bottom:3px solid #bcd047;">
            <h1 style="color:#bcd047;font-size:20px;margin:0;">New Site Assessment Request</h1>
          </div>
          <div style="padding:32px;background:#ffffff;border:1px solid #d4dfe1;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#7a7a7a;font-size:13px;width:160px;">Name</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#0d1f0f;">${firstName} ${surname}</td></tr>
              <tr><td style="padding:8px 0;color:#7a7a7a;font-size:13px;">Farm / Business</td><td style="padding:8px 0;font-size:14px;color:#0d1f0f;">${farmName || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#7a7a7a;font-size:13px;">Province</td><td style="padding:8px 0;font-size:14px;color:#0d1f0f;">${province || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#7a7a7a;font-size:13px;">Crop / Operation</td><td style="padding:8px 0;font-size:14px;color:#0d1f0f;">${cropType || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#7a7a7a;font-size:13px;">Mobile</td><td style="padding:8px 0;font-size:14px;color:#0d1f0f;">${mobile || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#7a7a7a;font-size:13px;">Email</td><td style="padding:8px 0;font-size:14px;color:#0d1f0f;"><a href="mailto:${email}" style="color:#9db032;">${email}</a></td></tr>
            </table>
          </div>
          <div style="padding:16px 32px;background:#f2f6f7;font-size:11px;color:#7a7a7a;border:1px solid #d4dfe1;border-top:none;">
            Sent from the Digivation Smart Ag IoT landing page
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
