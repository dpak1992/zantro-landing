import { useState } from 'react'
import { Logo } from '../components/Logo'
import { Footer } from '../components/Footer'

const WHATSAPP_MESSAGE = `Maine Zantro ke baare mein suna — delivery, billing aur customer sab phone se manage hota hai. Mujhe bhi portal milega jahan bill aur delivery dekh sakta hoon.

Ek baar dekho: https://zantro.app`

const BENEFITS = [
  {
    icon: '📄',
    text: 'Mahine ka bill seedha phone pe — koi confusion ya bahas nahi',
  },
  {
    icon: '⏸️',
    text: 'Kal doodh nahi chahiye? Ek tap mein bolo — subah phone karne ki zaroorat nahi',
  },
  {
    icon: '📊',
    text: 'Kitna aaya, kitna baaki — poora hisaab apni screen pe',
  },
  {
    icon: '📱',
    text: 'Koi app download nahi — ek link kholo, browser mein chal jayega',
  },
]

function isValidPhone(phone: string) {
  return /^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''))
}

export default function ForCustomers() {
  const [phone, setPhone] = useState('')
  const cleanPhone = phone.replace(/\s/g, '')
  const valid = isValidPhone(cleanPhone)

  function handleSend() {
    if (!valid) return
    const url = `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    window.open(url, '_blank')
  }

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

          <a
            href="/"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#475569',
              textDecoration: 'none',
              fontFamily: "'Manrope', sans-serif",
            }}
          >
            Doodhwale ke liye
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          backgroundColor: '#0f172a',
        }}
        className="px-6 py-12 sm:py-16 md:py-20"
      >
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <div
            className="inline-flex items-center"
            style={{
              backgroundColor: 'rgba(22,163,74,0.12)',
              borderRadius: 100,
              padding: '8px 18px',
              gap: 8,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#16a34a',
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Aapke liye
            </span>
          </div>

          <h1
            style={{
              fontWeight: 800,
              letterSpacing: '-1.5px',
              color: '#ffffff',
              lineHeight: 1.15,
              fontFamily: "'Manrope', sans-serif",
            }}
            className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-5"
          >
            Doodh ka hisaab,
            <br />
            ab phone pe.
          </h1>

          <p
            style={{
              color: '#94a3b8',
              lineHeight: 1.6,
              margin: 0,
              fontFamily: "'Manrope', sans-serif",
            }}
            className="text-base sm:text-lg"
          >
            Bill dekho, delivery skip karo, payment track karo — sab apne phone se.
            <br className="hidden sm:inline" />
            Bas apne doodhwale ko Zantro ke baare mein batao.
          </p>
        </div>
      </section>

      {/* Benefits + CTA merged */}
      <section style={{ backgroundColor: '#ffffff', flex: 1 }} className="px-6 py-12 sm:py-16">
        <div
          style={{ maxWidth: 1080, margin: '0 auto' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left — Benefits */}
          <div>
            <h2
              style={{
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.5px',
                fontFamily: "'Manrope', sans-serif",
              }}
              className="text-xl sm:text-2xl mb-6 sm:mb-7"
            >
              Aapko kya milega
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {BENEFITS.map((b) => (
                <div
                  key={b.text}
                  className="flex items-start"
                  style={{
                    backgroundColor: '#f8fafc',
                    borderRadius: 18,
                    padding: '18px 20px',
                    gap: 14,
                  }}
                >
                  <span style={{ fontSize: 22, flexShrink: 0, lineHeight: 1.3 }}>{b.icon}</span>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: '#334155',
                      lineHeight: 1.5,
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  >
                    {b.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — CTA */}
          <div
            style={{
              backgroundColor: '#0f172a',
              borderRadius: 28,
            }}
            className="flex flex-col justify-center p-6 sm:p-8 lg:p-10"
          >
            <h2
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.5px',
                lineHeight: 1.3,
                marginBottom: 8,
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Bas ek kaam karo
            </h2>
            <p
              style={{
                fontSize: 14,
                color: '#94a3b8',
                marginBottom: 28,
                lineHeight: 1.6,
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Apne doodhwale ka number daalo — hum unhe WhatsApp pe Zantro ke baare mein bata denge
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <div style={{ position: 'relative' }}>
                <span
                  style={{
                    position: 'absolute',
                    left: 18,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#64748b',
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  +91
                </span>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="Doodhwale ka number"
                  value={phone}
                  onChange={(e) => {
                    const v = e.target.value.replace(/[^0-9]/g, '')
                    if (v.length <= 10) setPhone(v)
                  }}
                  style={{
                    width: '100%',
                    padding: '16px 18px 16px 56px',
                    fontSize: 17,
                    fontWeight: 600,
                    fontFamily: "'Manrope', sans-serif",
                    borderRadius: 14,
                    border: '2px solid rgba(255,255,255,0.1)',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    color: '#ffffff',
                    outline: 'none',
                    boxSizing: 'border-box',
                    letterSpacing: '1px',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#16a34a'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                />
              </div>

              <button
                onClick={handleSend}
                disabled={!valid}
                style={{
                  backgroundColor: valid ? '#16a34a' : '#1e293b',
                  color: valid ? '#fff' : '#475569',
                  fontSize: 16,
                  fontWeight: 800,
                  padding: '16px 28px',
                  borderRadius: 14,
                  border: 'none',
                  cursor: valid ? 'pointer' : 'not-allowed',
                  fontFamily: "'Manrope', sans-serif",
                  transition: 'background-color 0.2s, color 0.2s',
                }}
              >
                WhatsApp pe bhejo
              </button>
            </div>

            {/* Preview of message */}
            {valid && (
              <div
                style={{
                  marginTop: 24,
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  borderRadius: 14,
                  padding: '16px 18px',
                  textAlign: 'left',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#64748b',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    marginBottom: 8,
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  Message preview
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: '#94a3b8',
                    lineHeight: 1.6,
                    margin: 0,
                    fontFamily: "'Manrope', sans-serif",
                    whiteSpace: 'pre-line',
                  }}
                >
                  {WHATSAPP_MESSAGE}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
