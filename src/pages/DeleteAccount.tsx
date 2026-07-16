import { Logo } from '../components/Logo'
import { Footer } from '../components/Footer'

const DELETED_DATA = [
  'Your profile and business information',
  'All customer records you have added',
  'Delivery history and logs',
  'Invoices, bills, and payment records',
  'Customer portal links (your customers will lose access to their portal)',
]

const RETAINED_NOTE = 'We may retain certain data for a limited period if required by law or for legitimate business purposes (e.g., resolving disputes). Any retained data will be permanently deleted after the applicable retention period.'

export default function DeleteAccount() {
  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: "'Manrope', 'Noto Sans Devanagari', sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Nav */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '14px 24px',
          }}
        >
          <a href="/" className="flex items-center" style={{ gap: 10, textDecoration: 'none' }}>
            <Logo size={40} />
            <span
              style={{
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: '-0.5px',
                color: '#0f172a',
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Zantro
            </span>
          </a>
        </div>
      </nav>

      {/* Header */}
      <section
        style={{ backgroundColor: '#0f172a' }}
        className="px-6 py-12 sm:py-16"
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h1
            style={{
              fontWeight: 800,
              letterSpacing: '-1px',
              color: '#ffffff',
              lineHeight: 1.2,
              fontFamily: "'Manrope', sans-serif",
              margin: 0,
            }}
            className="text-3xl sm:text-4xl"
          >
            Delete Your Zantro Account
          </h1>
          <p
            style={{
              color: '#94a3b8',
              fontFamily: "'Manrope', sans-serif",
              marginTop: 12,
              fontSize: 16,
              lineHeight: 1.6,
            }}
          >
            We're sorry to see you go. Here's how to request deletion of your account and all associated data.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: '#ffffff', flex: 1 }} className="px-6 py-10 sm:py-14">
        <div style={{ maxWidth: 720, margin: '0 auto' }}>

          {/* Steps */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: '#0f172a',
                fontFamily: "'Manrope', sans-serif",
                marginBottom: 20,
                letterSpacing: '-0.3px',
              }}
            >
              How to request account deletion
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                {
                  num: '1',
                  text: 'Send a WhatsApp message or email to our support team',
                  detail: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
                      <a
                        href="mailto:support@zantro.in?subject=Delete%20my%20Zantro%20account&body=Please%20delete%20my%20Zantro%20account.%0A%0ARegistered%20phone%20number%3A%20"
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: '#16a34a',
                          textDecoration: 'none',
                          fontFamily: "'Manrope', sans-serif",
                        }}
                      >
                        support@zantro.in
                      </a>
                    </div>
                  ),
                },
                {
                  num: '2',
                  text: 'Include your registered phone number and write "Delete my account"',
                },
                {
                  num: '3',
                  text: 'We will verify your identity and confirm the deletion within 3 business days',
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="flex items-start"
                  style={{
                    backgroundColor: '#f8fafc',
                    borderRadius: 16,
                    padding: '18px 20px',
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      backgroundColor: '#0f172a',
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                      fontWeight: 800,
                      color: '#fff',
                      fontFamily: "'Manrope', sans-serif",
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: '#334155',
                        lineHeight: 1.5,
                        fontFamily: "'Manrope', sans-serif",
                      }}
                    >
                      {step.text}
                    </span>
                    {'detail' in step && step.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What gets deleted */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: '#0f172a',
                fontFamily: "'Manrope', sans-serif",
                marginBottom: 16,
                letterSpacing: '-0.3px',
              }}
            >
              Data that will be deleted
            </h2>
            <p
              style={{
                fontSize: 15,
                color: '#475569',
                lineHeight: 1.7,
                fontFamily: "'Manrope', sans-serif",
                marginBottom: 14,
              }}
            >
              When your account is deleted, the following data will be permanently removed:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {DELETED_DATA.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 15,
                    color: '#334155',
                    lineHeight: 1.6,
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <div style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: '#0f172a',
                fontFamily: "'Manrope', sans-serif",
                marginBottom: 16,
                letterSpacing: '-0.3px',
              }}
            >
              Deletion timeline
            </h2>
            <p
              style={{
                fontSize: 15,
                color: '#475569',
                lineHeight: 1.8,
                fontFamily: "'Manrope', sans-serif",
                margin: 0,
              }}
            >
              Your account and all associated data will be permanently deleted within <strong style={{ color: '#0f172a' }}>7 days</strong> of your request being verified. You will receive a confirmation once the deletion is complete.
            </p>
          </div>

          {/* Retention note */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: 16,
              padding: '20px 22px',
              border: '1px solid #e2e8f0',
              marginBottom: 40,
            }}
          >
            <p
              style={{
                fontSize: 14,
                color: '#64748b',
                lineHeight: 1.7,
                fontFamily: "'Manrope', sans-serif",
                margin: 0,
              }}
            >
              <strong style={{ color: '#475569' }}>Note:</strong> {RETAINED_NOTE}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: '#0f172a',
                fontFamily: "'Manrope', sans-serif",
                marginBottom: 16,
                letterSpacing: '-0.3px',
              }}
            >
              Questions?
            </h2>
            <p
              style={{
                fontSize: 15,
                color: '#475569',
                lineHeight: 1.8,
                fontFamily: "'Manrope', sans-serif",
                margin: 0,
              }}
            >
              If you have any questions about account deletion or data retention, contact us at{' '}
              <a
                href="mailto:support@zantro.in"
                style={{ color: '#16a34a', fontWeight: 700, textDecoration: 'none' }}
              >
                support@zantro.in
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
