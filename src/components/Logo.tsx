export function Logo({ size = 40, variant = 'dark' }: { size?: number; variant?: 'dark' | 'light' }) {
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
