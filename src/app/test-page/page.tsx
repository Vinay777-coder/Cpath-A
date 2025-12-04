'use client';

export default function TestPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f9ff',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '500px'
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
          🎯 Career Suggestions - Working!
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
          This page is loading successfully. The server is working properly.
        </p>
        <div style={{
          backgroundColor: '#dcfce7',
          border: '1px solid #bbf7d0',
          borderRadius: '0.375rem',
          padding: '1rem',
          marginBottom: '1.5rem'
        }}>
          <p style={{ color: '#166534', fontWeight: '600' }}>
            ✅ Server Status: Online
          </p>
          <p style={{ color: '#15803d', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            The Next.js development server is running correctly on port 3002.
          </p>
        </div>
        <button style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.375rem',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer'
        }} onClick={() => alert('Button clicked! The page is interactive.')}>
          Test Interaction
        </button>
      </div>
    </div>
  );
}