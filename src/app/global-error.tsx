'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body
        style={{
          backgroundColor: '#0D0C10',
          color: '#EDE8DD',
          minHeight: '100vh',
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
            border: '1px solid rgba(237,232,221,0.2)',
            padding: '32px',
            maxWidth: '28rem',
            backgroundColor: '#16151B',
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
              backgroundColor: '#EDE8DD',
              color: '#0D0C10',
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
