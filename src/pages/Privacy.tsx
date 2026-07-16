import { Logo } from '../components/Logo'
import { Footer } from '../components/Footer'

const LAST_UPDATED = 'July 16, 2026'

const SECTIONS = [
  {
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Account Information',
        text: 'When you sign up, we collect your phone number for authentication via OTP. If you are a milkman (vendor), you may also provide your business name.',
      },
      {
        subtitle: 'Customer Data (added by vendors)',
        text: 'Vendors add their customers\u2019 names, phone numbers, addresses, and subscription details (product, quantity, delivery schedule). This data is entered by the vendor and used solely to manage their dairy delivery business.',
      },
      {
        subtitle: 'Delivery & Billing Records',
        text: 'We store delivery logs, payment records (cash, UPI, or bank \u2014 recorded by the vendor), billing history, and skip/pause requests made by customers through the portal.',
      },
      {
        subtitle: 'Device & Usage Data',
        text: 'We collect basic analytics such as device type, browser, app version, and usage patterns to improve the product. We use Google Analytics and Google Tag Manager for this purpose.',
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      {
        text: 'We use the information we collect to:',
        list: [
          'Provide, operate, and maintain the Zantro platform',
          'Authenticate users via OTP',
          'Enable vendors to manage deliveries, billing, and customer subscriptions',
          'Generate and send bills to customers via WhatsApp',
          'Allow customers to view bills, skip/pause deliveries through their portal',
          'Send transactional messages (welcome messages, bill PDFs) via WhatsApp',
          'Improve the product based on usage patterns',
          'Provide customer support',
        ],
      },
    ],
  },
  {
    title: '3. How We Share Your Information',
    content: [
      {
        text: 'We do not sell, rent, or trade your personal information. We share data only in these limited cases:',
        list: [
          'Between vendor and customer \u2014 A vendor\u2019s customers can see their own delivery and billing data through the customer portal. Vendors can see their customers\u2019 subscription and delivery data.',
          'WhatsApp \u2014 We use WhatsApp (via official APIs) to send bills, welcome messages, and portal links to customers on behalf of vendors.',
          'Service providers \u2014 We use third-party services for hosting, analytics, and authentication. These providers process data on our behalf and are bound by their own privacy policies.',
          'Legal requirements \u2014 We may disclose information if required by law, regulation, or legal process.',
        ],
      },
    ],
  },
  {
    title: '4. Payment Information',
    content: [
      {
        text: 'Zantro does not process, store, or handle any financial transactions. All payments happen directly between the vendor and their customers (cash, UPI, or bank transfer). Zantro only records payment entries as logged by the vendor for bookkeeping purposes.',
      },
    ],
  },
  {
    title: '5. Data Storage & Security',
    content: [
      {
        text: 'Your data is stored on secure cloud servers. We implement industry-standard security measures including encrypted connections (HTTPS), secure authentication, and access controls. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.',
      },
    ],
  },
  {
    title: '6. Data Retention',
    content: [
      {
        text: 'We retain your data for as long as your account is active or as needed to provide our services. If you wish to delete your account and associated data, please contact us at support@zantro.in. Vendor-created customer data will be deleted along with the vendor\u2019s account.',
      },
    ],
  },
  {
    title: '7. Your Rights',
    content: [
      {
        text: 'You have the right to:',
        list: [
          'Access the personal data we hold about you',
          'Request correction of inaccurate data',
          'Request deletion of your account and data',
          'Withdraw consent for data processing (which may limit your ability to use the service)',
        ],
      },
      {
        text: 'To exercise any of these rights, contact us at support@zantro.in.',
      },
    ],
  },
  {
    title: '8. Children\u2019s Privacy',
    content: [
      {
        text: 'Zantro is not intended for use by anyone under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.',
      },
    ],
  },
  {
    title: '9. Third-Party Links & Services',
    content: [
      {
        text: 'Our platform may contain links to third-party websites or services (such as Google Play Store or WhatsApp). We are not responsible for the privacy practices of these external services. We encourage you to read their privacy policies.',
      },
    ],
  },
  {
    title: '10. Changes to This Policy',
    content: [
      {
        text: 'We may update this privacy policy from time to time. Changes will be posted on this page with an updated date. Continued use of Zantro after changes constitutes acceptance of the revised policy.',
      },
    ],
  },
  {
    title: '11. Contact Us',
    content: [
      {
        text: 'If you have any questions about this privacy policy or our data practices, contact us at:',
        list: [
          'Email: support@zantro.in',
          'Website: zantro.in',
        ],
      },
    ],
  },
]

export default function Privacy() {
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
            Privacy Policy
          </h1>
          <p
            style={{
              color: '#64748b',
              fontFamily: "'Manrope', sans-serif",
              marginTop: 12,
              fontSize: 15,
            }}
          >
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: '#ffffff', flex: 1 }} className="px-6 py-10 sm:py-14">
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p
            style={{
              fontSize: 16,
              color: '#334155',
              lineHeight: 1.8,
              fontFamily: "'Manrope', sans-serif",
              marginBottom: 40,
            }}
          >
            Zantro (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the Zantro mobile application and website (zantro.app, zantro.in). This privacy policy explains how we collect, use, and protect your information when you use our services.
          </p>

          {SECTIONS.map((section) => (
            <div key={section.title} style={{ marginBottom: 36 }}>
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
                {section.title}
              </h2>

              {section.content.map((block, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  {'subtitle' in block && block.subtitle && (
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: '#1e293b',
                        fontFamily: "'Manrope', sans-serif",
                        marginBottom: 6,
                      }}
                    >
                      {block.subtitle}
                    </h3>
                  )}
                  <p
                    style={{
                      fontSize: 15,
                      color: '#475569',
                      lineHeight: 1.8,
                      fontFamily: "'Manrope', sans-serif",
                      margin: 0,
                    }}
                  >
                    {block.text}
                  </p>
                  {'list' in block && block.list && (
                    <ul
                      style={{
                        margin: '10px 0 0',
                        paddingLeft: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                      }}
                    >
                      {block.list.map((item, j) => (
                        <li
                          key={j}
                          style={{
                            fontSize: 15,
                            color: '#475569',
                            lineHeight: 1.7,
                            fontFamily: "'Manrope', sans-serif",
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
