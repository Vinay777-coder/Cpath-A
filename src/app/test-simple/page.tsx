import Link from 'next/link'

export default function TestSimplePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ffffff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        background: '#f8f9fa'
      }}>
        <h1 style={{
          fontSize: '2rem',
          color: '#2d3748',
          marginBottom: '1rem'
        }}>
          🎉 Website is Working!
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#4a5568',
          marginBottom: '1.5rem'
        }}>
          The Next.js application is running successfully.
        </p>
        <div style={{
          background: '#e6fffa',
          border: '1px solid #38b2ac',
          borderRadius: '4px',
          padding: '1rem',
          marginBottom: '1rem'
        }}>
          <p style={{
            color: '#2c7a7b',
            margin: 0
          }}>
            ✅ Server: Running on http://localhost:3002<br />
            ✅ Next.js: 15.5.3<br />
            ✅ Middleware: Active
          </p>
        </div>
        <Link 
          href="/"
          style={{
            display: 'inline-block',
            background: '#4299e1',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  )
}