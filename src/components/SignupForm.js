import { useState } from 'react'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setStatus('Please enter a valid email.')
      return
    }

    setStatus('Submitting...')

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus('Thank you for signing up!')
      } else {
        setStatus(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('Error submitting the form. Please try again.')
    }
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ color: '#5A4B47' }}>Sign up for the 10-Week Business English Program</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{ padding: '0.8rem', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ddd', marginBottom: '1rem' }}
        />
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: '#5A4B47',
            color: 'white',
            padding: '0.8rem 2rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Sign Up
        </button>
      </form>
      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </div>
  )
}
