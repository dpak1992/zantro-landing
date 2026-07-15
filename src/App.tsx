import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Kaise kaam karta hai', href: '#how-it-works' },
]

const FEATURES = [
  {
    title: 'Route Mode',
    desc: 'Route order ek baar set karo — app roz usi order me card-by-card chalega. Ek tap: "Deliver 1L". Agla customer khud aa jayega.',
    iconType: 'dot' as const,
  },
  {
    title: 'Kal ka doodh, aaj pata',
    desc: 'Skips, pauses aur quantity changes adjust karke app khud bata dega — kal kitna cow milk, buffalo milk, curd lana hai. Na guess, na waste.',
    iconType: 'text' as const,
    iconText: '45L',
  },
  {
    title: 'WhatsApp pe bill',
    desc: 'Pure mahine ke bill ek tap me bane. Branded PDF ke saath seedha customer ke WhatsApp pe. Payment aaya? Cash, UPI ya Bank — wahi record karo.',
    iconType: 'whatsapp' as const,
  },
  {
    title: 'Customer ek tap me',
    desc: 'Naam aur number dalo, ho gaya. Customer ko WhatsApp pe welcome message aur apna portal link khud chala jayega.',
    iconType: 'text' as const,
    iconText: '#1',
  },
  {
    title: 'Customer khud sambhale',
    desc: 'Portal se customer khud pause, skip ya quantity change request kare — bina download, browser se. 6 baje ke phone call band.',
    iconType: 'square' as const,
  },
  {
    title: 'Mahine ka report',
    desc: 'Total litre, revenue, collected, outstanding — sab ek screen pe, daily trend chart ke saath. Business ab andaaze pe nahi chalega.',
    iconType: 'bars' as const,
  },
]

const STEPS = [
  {
    num: '1',
    title: 'Number se login',
    desc: 'Apna phone number daalo, OTP aayega — bas sign up ho gaya.',
  },
  {
    num: '2',
    title: 'Customer add karo',
    desc: 'Naam, number, subscription set karo — ek minute me ek customer ready.',
  },
  {
    num: '3',
    title: 'Route set karo',
    desc: 'Customers ko drag karke apni delivery order me lagao.',
  },
  {
    num: '4',
    title: 'Bas deliver karo',
    desc: 'Route Mode on, ghar-ghar jaao, ek tap me mark karo — done.',
  },
]

const FAQS = [
  {
    q: 'Kya mere customers ko app download karni padegi?',
    a: 'Nahi. Customer portal browser me khulta hai — link WhatsApp pe jaata hai. Kisi bhi phone pe chalega, bina download.',
  },
  {
    q: 'Internet slow ho ya na ho, tab bhi chalega?',
    a: 'Haan. Delivery mark karna offline bhi kaam karta hai — network aane pe app khud sync kar leta hai.',
  },
  {
    q: 'Mera purana register ka data kaise aayega?',
    a: 'Customers ek-ek karke add karo ya WhatsApp support pe register ki photo bhejo — hum setup me madad karenge.',
  },
  {
    q: 'Payment record karne pe paisa Zantro ke paas jaata hai?',
    a: 'Bilkul nahi. Payment seedha aapke paas aata hai — cash, aapka UPI, ya bank. Zantro sirf hisaab rakhta hai.',
  },
  {
    q: 'Bhains ka doodh, paneer, dahi — sab chalega?',
    a: 'Haan. Jitne products chahiye add karo — apna rate, apna unit. Har customer ka alag subscription set hota hai.',
  },
]

function Logo({ size = 40, variant = 'dark' }: { size?: number; variant?: 'dark' | 'light' }) {
  const isDark = variant === 'dark'
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: isDark ? '#0f172a' : '#ffffff',
        borderRadius: size * 0.275,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          color: isDark ? '#fff' : '#0f172a',
          fontSize: size * 0.55,
          fontWeight: 800,
          lineHeight: 1,
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        Z
      </span>
    </div>
  )
}

function Nav() {
  return (
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
        <div className="flex items-center" style={{ gap: 10 }}>
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
        </div>

        <div className="hidden md:flex items-center" style={{ gap: 32 }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: '#475569',
                textDecoration: 'none',
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://zantro.app/login"
          style={{
            backgroundColor: '#0f172a',
            color: '#fff',
            fontSize: 15,
            fontWeight: 800,
            padding: '12px 22px',
            borderRadius: 12,
            textDecoration: 'none',
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          Free me shuru karo
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section
      style={{
        backgroundColor: '#0f172a',
        padding: '80px 24px 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{ maxWidth: 1200, margin: '0 auto' }}
        className="flex flex-col lg:flex-row items-center"
      >
        {/* Left content */}
        <div className="flex-1" style={{ textAlign: 'left', maxWidth: 600 }}>
          {/* Pill badge */}
          <div
            className="inline-flex items-center"
            style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderRadius: 100,
              padding: '8px 18px',
              gap: 8,
              marginBottom: 28,
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
                color: '#94a3b8',
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Doodhwalon ke liye banaya gaya
            </span>
          </div>

          <h1
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: '-1.5px',
              color: '#ffffff',
              lineHeight: 1.1,
              margin: '0 0 20px',
              fontFamily: "'Manrope', sans-serif",
            }}
          >
            Apna register,
            <br />
            ab phone pe.
          </h1>

          <p
            style={{
              fontSize: 20,
              color: '#94a3b8',
              lineHeight: 1.6,
              margin: '0 0 36px',
              fontFamily: "'Manrope', sans-serif",
            }}
          >
            Delivery, hisaab, billing aur customer — sab ek app me. Register
            chhodo, Zantro pe aao.
          </p>

          <div className="flex flex-wrap" style={{ gap: 14, marginBottom: 48 }}>
            <a
              href="https://zantro.app/login"
              style={{
                backgroundColor: '#16a34a',
                color: '#fff',
                fontSize: 16,
                fontWeight: 800,
                padding: '16px 28px',
                borderRadius: 14,
                textDecoration: 'none',
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Free me shuru karo
            </a>
            <a
              href="#how-it-works"
              style={{
                border: '1.5px solid rgba(255,255,255,0.2)',
                color: '#fff',
                fontSize: 16,
                fontWeight: 600,
                padding: '16px 28px',
                borderRadius: 14,
                textDecoration: 'none',
                fontFamily: "'Manrope', sans-serif",
                backgroundColor: 'transparent',
              }}
            >
              2 min me samjho
            </a>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{
              gap: 1,
              backgroundColor: 'rgba(255,255,255,0.06)',
              borderRadius: 16,
              overflow: 'hidden',
              marginBottom: 60,
            }}
          >
            {[
              { big: '5 min', small: 'me setup ho jaata hai' },
              { big: '₹0', small: 'koi paisa nahi lagta' },
              { big: 'WhatsApp', small: 'pe bill seedha customer ko' },
            ].map((s) => (
              <div
                key={s.big}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  padding: '24px 20px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: '#fff',
                    fontFamily: "'Manrope', sans-serif",
                    marginBottom: 4,
                  }}
                >
                  {s.big}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: '#64748b',
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {s.small}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone mockup — matching design spec */}
        <div className="hidden lg:block" style={{ width: 340, flexShrink: 0, margin: '0 auto' }}>
          <div style={{ background: '#1e293b', borderRadius: '40px 40px 0 0', padding: '10px 10px 0', boxShadow: '0 -24px 64px rgba(0,0,0,.4)' }}>
            <div style={{ background: '#f8fafc', borderRadius: '32px 32px 0 0', overflow: 'hidden', height: 420 }} className="flex flex-col">
              <div style={{ padding: '18px 18px 0' }} className="flex flex-col" >
                <div className="flex items-center justify-between">
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#0f172a' }}>Morning round</div>
                  <div style={{ background: '#0f172a', color: '#fff', borderRadius: 99, padding: '5px 12px', fontSize: 11, fontWeight: 800 }}>Route Mode</div>
                </div>
                <div className="flex flex-col" style={{ gap: 5, marginTop: 12 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#16a34a' }}>82/245 delivered</div>
                  <div style={{ height: 7, background: '#e2e8f0', borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{ width: '33%', height: '100%', background: '#16a34a', borderRadius: 99 }} />
                  </div>
                </div>
                <div style={{ background: '#ffffff', borderRadius: 18, padding: 18, boxShadow: '0 8px 24px rgba(15,23,42,.08)', marginTop: 12 }} className="flex flex-col" >
                  <div className="flex items-start justify-between">
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: '#0f172a' }}>Sunita Verma</div>
                      <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600 }}>B-14, Shanti Nagar</div>
                    </div>
                    <div style={{ background: '#f1f5f9', color: '#0f172a', fontSize: 12, fontWeight: 800, borderRadius: 9, padding: '5px 9px' }}>#83</div>
                  </div>
                  <div className="flex items-center justify-between" style={{ borderTop: '2px solid #f1f5f9', paddingTop: 10, marginTop: 12 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#334155' }}>Cow Milk</div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: '#0f172a' }}>1L · ₹60</div>
                  </div>
                  <div style={{ background: '#16a34a', borderRadius: 12, padding: 14, textAlign: 'center', fontSize: 15, fontWeight: 800, color: '#fff', marginTop: 12 }}>Deliver 1L</div>
                </div>
                <div style={{ textAlign: 'center', fontSize: 12, color: '#64748b', fontWeight: 600, marginTop: 12 }}>Next: Rajesh Kumar · #84</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemStrip() {
  return (
    <section style={{ backgroundColor: '#f8fafc', padding: '80px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 34,
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.5px',
            marginBottom: 16,
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          Register ka zamana gaya.
        </h2>
        <p
          style={{
            fontSize: 18,
            color: '#64748b',
            lineHeight: 1.7,
            maxWidth: 600,
            margin: '0 auto 48px',
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          Har subah 5 baje uthna, har ghar yaad rakhna, mahine ke end pe hisaab
          jodna — sab kuch aap akele karte ho. Ab nahi.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: 16 }}>
          {[
            {
              big: '1 din',
              small: 'bhi chhuti nahi milti',
              color: '#0f172a',
            },
            {
              big: '6 AM',
              small: 'se pehle nikalna padta hai',
              color: '#0f172a',
            },
            {
              big: '₹ hazaaron',
              small: 'ka hisaab dimaag me',
              color: '#d97706',
            },
            { big: 'Roz', small: 'wahi kaam, wahi tension', color: '#d97706' },
          ].map((s) => (
            <div
              key={s.big}
              style={{
                backgroundColor: '#fff',
                borderRadius: 18,
                padding: '28px 16px',
                border: '1px solid #e2e8f0',
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: s.color,
                  fontFamily: "'Manrope', sans-serif",
                  marginBottom: 6,
                }}
              >
                {s.big}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: '#94a3b8',
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                {s.small}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section
      id="features"
      style={{ backgroundColor: '#fff', padding: '80px 24px' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              color: '#16a34a',
              letterSpacing: 2,
              textTransform: 'uppercase',
              fontFamily: "'Manrope', sans-serif",
              display: 'block',
              marginBottom: 14,
            }}
          >
            FEATURES
          </span>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-1px',
              lineHeight: 1.2,
              fontFamily: "'Manrope', sans-serif",
              margin: 0,
            }}
          >
            Jo register nahi kar sakta,
            <br />
            Zantro karta hai
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 20 }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: 24,
                padding: 32,
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: f.iconType === 'whatsapp' ? '#25d366' : '#0f172a',
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  gap: 3,
                  paddingBottom: f.iconType === 'bars' ? 10 : 0,
                }}
              >
                {f.iconType === 'dot' && <div style={{ width: 16, height: 16, background: '#16a34a', borderRadius: '50%' }} />}
                {f.iconType === 'text' && <div style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>{f.iconText}</div>}
                {f.iconType === 'whatsapp' && <div style={{ width: 18, height: 18, border: '3px solid #fff', borderRadius: '50%' }} />}
                {f.iconType === 'square' && <div style={{ width: 16, height: 16, border: '3px solid #fff', borderRadius: 5 }} />}
                {f.iconType === 'bars' && (
                  <>
                    <div style={{ width: 5, height: 10, background: '#fff', borderRadius: 2, alignSelf: 'flex-end' }} />
                    <div style={{ width: 5, height: 16, background: '#fff', borderRadius: 2, alignSelf: 'flex-end' }} />
                    <div style={{ width: 5, height: 22, background: '#16a34a', borderRadius: 2, alignSelf: 'flex-end' }} />
                  </>
                )}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: 8,
                  fontFamily: "'Manrope', sans-serif",
                  marginTop: 0,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: '#64748b',
                  lineHeight: 1.6,
                  fontFamily: "'Manrope', sans-serif",
                  margin: 0,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ backgroundColor: '#0f172a', padding: '80px 24px' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              color: '#16a34a',
              letterSpacing: 2,
              textTransform: 'uppercase',
              fontFamily: "'Manrope', sans-serif",
              display: 'block',
              marginBottom: 14,
            }}
          >
            KAISE KAAM KARTA HAI
          </span>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-1px',
              lineHeight: 1.2,
              fontFamily: "'Manrope', sans-serif",
              margin: 0,
            }}
          >
            Shuru karna register
            <br />
            kholne se aasan
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 20 }}
        >
          {STEPS.map((s) => (
            <div
              key={s.num}
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: 24,
                padding: 32,
                textAlign: 'left',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#16a34a',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontWeight: 800,
                  color: '#fff',
                  fontFamily: "'Manrope', sans-serif",
                  marginBottom: 20,
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: 8,
                  fontFamily: "'Manrope', sans-serif",
                  marginTop: 0,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: '#94a3b8',
                  lineHeight: 1.6,
                  fontFamily: "'Manrope', sans-serif",
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonial() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '80px 24px' }}>
      <div
        style={{ maxWidth: 1200, margin: '0 auto' }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {/* Quote */}
        <div
          style={{
            padding: '40px 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 48,
              color: '#e2e8f0',
              fontFamily: 'Georgia, serif',
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            &ldquo;
          </div>
          <blockquote
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#0f172a',
              lineHeight: 1.5,
              fontFamily: "'Manrope', sans-serif",
              margin: '0 0 28px',
              fontStyle: 'normal',
            }}
          >
            Pehle month-end pe 2 din hisaab jodta tha. Ab Zantro pe bill banta
            hai, WhatsApp pe jaata hai. Customer khush, main khush.
          </blockquote>
          <div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: '#0f172a',
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Mohan Yadav
            </div>
            <div
              style={{
                fontSize: 14,
                color: '#94a3b8',
                fontFamily: "'Manrope', sans-serif",
                marginTop: 2,
              }}
            >
              Mohan Dairy &middot; 245 customers &middot; Pune
            </div>
          </div>
        </div>

        {/* Bill card */}
        <div className="flex items-center justify-center" style={{ padding: 20 }}>
          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: 24,
              padding: 40,
              maxWidth: 380,
              width: '100%',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#0f172a',
                fontFamily: "'Noto Sans Devanagari', 'Manrope', sans-serif",
                marginBottom: 24,
                lineHeight: 1.5,
              }}
            >
              अब बिल भेजो
              <br />
              WhatsApp पे
            </p>
            {/* Fake PDF bill */}
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: 14,
                padding: '24px 20px',
                border: '1px solid #e2e8f0',
                textAlign: 'left',
              }}
            >
              <div
                className="flex items-center justify-between"
                style={{ marginBottom: 16 }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: '#0f172a',
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  Mohan Dairy
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: '#94a3b8',
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  July 2026
                </div>
              </div>
              <div
                style={{
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: 12,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {[
                  { item: 'Cow Milk (1L)', days: '30', amt: '₹2,100' },
                  { item: 'Paneer (250g)', days: '4', amt: '₹360' },
                ].map((r) => (
                  <div
                    key={r.item}
                    className="flex items-center justify-between"
                  >
                    <span
                      style={{
                        fontSize: 12,
                        color: '#475569',
                        fontFamily: "'Manrope', sans-serif",
                      }}
                    >
                      {r.item} x {r.days}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: '#0f172a',
                        fontFamily: "'Manrope', sans-serif",
                      }}
                    >
                      {r.amt}
                    </span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  borderTop: '1px solid #f1f5f9',
                  marginTop: 12,
                  paddingTop: 12,
                }}
                className="flex items-center justify-between"
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: '#0f172a',
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  Total
                </span>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: '#16a34a',
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  ₹2,460
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ backgroundColor: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 34,
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            marginBottom: 40,
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          Aksar poochhe jaane wale sawaal
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: 18,
                padding: '20px 24px',
                cursor: 'pointer',
              }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between">
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#0f172a',
                    fontFamily: "'Manrope', sans-serif",
                    flex: 1,
                    paddingRight: 16,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    fontSize: 22,
                    color: '#94a3b8',
                    fontWeight: 300,
                    flexShrink: 0,
                    transform:
                      openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                  }}
                >
                  +
                </span>
              </div>
              {openIndex === i && (
                <p
                  style={{
                    fontSize: 15,
                    color: '#64748b',
                    lineHeight: 1.7,
                    marginTop: 12,
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaDownload() {
  return (
    <section style={{ backgroundColor: '#0f172a', padding: '80px 24px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }} className="flex flex-col items-center">
        <Logo size={72} variant="light" />
        <div style={{ marginTop: 28 }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.5px',
              lineHeight: 1.2,
              fontFamily: "'Manrope', sans-serif",
              marginBottom: 36,
            }}
          >
            Register bandh karo,
            <br />
            Zantro kholo.
          </h2>

          <div
            className="flex flex-wrap justify-center"
            style={{ gap: 14 }}
          >
            <a
              href="https://play.google.com/store/apps"
              style={{
                backgroundColor: '#16a34a',
                color: '#fff',
                fontSize: 16,
                fontWeight: 800,
                padding: '16px 28px',
                borderRadius: 14,
                textDecoration: 'none',
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Google Play se download
            </a>
            <a
              href="#"
              style={{
                border: '1.5px solid rgba(255,255,255,0.2)',
                color: '#fff',
                fontSize: 16,
                fontWeight: 600,
                padding: '16px 28px',
                borderRadius: 14,
                textDecoration: 'none',
                fontFamily: "'Manrope', sans-serif",
                backgroundColor: 'transparent',
              }}
            >
              WhatsApp pe demo lo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
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
            { label: 'Privacy', href: '#' },
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

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: "'Manrope', 'Noto Sans Devanagari', sans-serif",
      }}
    >
      <Nav />
      <Hero />
      <ProblemStrip />
      <Features />
      <HowItWorks />
      <Testimonial />
      <FAQ />
      <CtaDownload />
      <Footer />
    </div>
  )
}

export default App
