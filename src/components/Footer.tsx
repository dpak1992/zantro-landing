import { Logo } from './Logo'

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0f172a',
        borderTop: '1px solid #1e293b',
        padding: '40px 24px',
      }}
    >
      <div
        style={{ maxWidth: 1200, margin: '0 auto' }}
        className="flex flex-col sm:flex-row items-center justify-between"
      >
        <div className="flex items-center" style={{ gap: 10, marginBottom: 16 }}>
          <Logo size={32} variant="light" />
          <span
            style={{
              fontSize: 14,
              color: '#64748b',
              fontFamily: "'Manrope', sans-serif",
            }}
          >
            &copy; 2026 Zantro &middot; zantro.in
          </span>
        </div>
        <div
          className="flex flex-wrap justify-center"
          style={{ gap: 24 }}
        >
          {[
            { label: 'Privacy', href: '/privacy' },
            { label: 'Terms', href: '#' },
            { label: 'support@zantro.in', href: 'mailto:support@zantro.in' },
            { label: 'WhatsApp support', href: '#' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 14,
                color: '#64748b',
                textDecoration: 'none',
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
