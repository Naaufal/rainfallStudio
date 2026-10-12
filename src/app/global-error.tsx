'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body
        style={{
          backgroundColor: '#10131C',
          color: '#F4F1EA',
          minHeight: '100dvh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          fontFamily: 'monospace',
          textAlign: 'center' as const,
          margin: 0,
        }}
      >
        <div
          style={{
            border: '1px solid #343B4D',
            padding: '32px',
            maxWidth: '28rem',
            backgroundColor: '#191E2B',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>
            TERJADI KESALAHAN SISTEM
          </h2>
          <p style={{ fontSize: '0.75rem', opacity: 0.7, marginBottom: '24px' }}>
            Maaf, terjadi masalah tak terduga. Silakan coba memuat ulang halaman.
          </p>
          <button
            onClick={() => reset()}
            style={{
              backgroundColor: '#AFC6EE',
              color: '#10131C',
              fontWeight: 700,
              fontSize: '0.75rem',
              padding: '12px 24px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Coba Lagi
          </button>
        </div>
      </body>
    </html>
  );
}
