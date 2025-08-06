import Layout from '@/components/Layout'
import SignupForm from '@/components/SignupForm'
import StylishDivider from '@/components/StylishDivider'
import WeekOutlineWithPhrases from '@/components/WeekOutlineWithPhrases'
import Link from 'next/link';


export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
     <section style={{
  position: 'relative',
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '2rem',
  overflow: 'hidden',
  color: '#5A4B47',
  backgroundAttachment: 'fixed',
  backgroundImage: `linear-gradient(to bottom right, rgba(255, 209, 193, 0.85), rgba(255, 248, 231, 0.85)),
                    url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}>
  <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>
    <h1 style={{
      fontSize: '3.5rem',
      fontWeight: '700',
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1.2,
      marginBottom: '1rem',
      color: '#5A4B47'
    }}>
      Speak English Like a Pro at Work — in Just 10 Weeks!
    </h1>
    <p style={{
      fontSize: '1.25rem',
      marginBottom: '2rem',
      fontWeight: '400',
    }}>
      Confident communication. Better job opportunities. Global success. <br />
      Join our Business English Coaching Program for Professionals.
    </p>

    <Link
  href="/#signup"
  className="floating-cta"
  style={{
    backgroundColor: '#5A4B47',
    color: 'white',
    padding: '1rem 2.5rem',
    fontSize: '1.125rem',
    fontWeight: '500',
    borderRadius: '8px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',

  }}
  onMouseOver={(e) => e.target.style.backgroundColor = '#a16152'}
  onMouseOut={(e) => e.target.style.backgroundColor = '#5A4B47'}
>
  👉 Book Your Free Consultation
</Link>

  </div>
</section>



      {/* 10-Week Business English Program Section */}
      <section style={{
        padding: '4rem 1.5rem',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          fontFamily: "'Playfair Display', serif",
          color: '#5A4B47',
          marginBottom: '1rem',
        }}>
          10-Week Casual Business English Program
        </h2>
        <p style={{
          fontSize: '1.25rem',
          color: '#5A4B47',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          Learn the lingo, the emails, the texts, and how to talk like you belong — all in a chill, friendly space. 🧡
        </p>
      </section>

      {/* WHO IT’S FOR */}
<section 
data-aos="fade-up"
style={{
  backgroundColor: 'var(--cream)',
  color: '#5A4B47',
  padding: '4rem 1.5rem',
  textAlign: 'center',
}}>
 <StylishDivider />
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <h2 style={{
      fontSize: '2.2rem',
      fontFamily: "'Playfair Display', serif",
      marginBottom: '1rem',
    }}>
      Who It’s For
    </h2>
    <p style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
      Professionals who want to sound confident, casual, and clear in real business settings. Whether you're working in marketing, tech, finance, or client services — this program helps you speak naturally with your team, your clients, and your boss.
    </p>
  </div>
</section>

{/* WHAT YOU'LL LEARN */}
<section
data-aos="fade-up" style={{
  backgroundColor: 'var(--sunny)',
  color: '#5A4B47',
  padding: '4rem 1.5rem',
  textAlign: 'center',
}}>
 <StylishDivider />
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <h2 style={{
      fontSize: '2.2rem',
      fontFamily: "'Playfair Display', serif",
      marginBottom: '1rem',
    }}>
      What You’ll Learn
    </h2>
    <ul style={{ fontSize: '1.125rem', lineHeight: 1.6, listStyle: 'none', padding: 0 }}>
      <li>✔️ Business buzzwords and everyday workplace lingo</li>
      <li>✔️ How to write clear emails, texts, and group messages</li>
      <li>✔️ Casual conversation skills for meetings and 1-on-1s</li>
      <li>✔️ Cultural cues so you sound natural, not awkward</li>
    </ul>
  </div>
</section>

{/* WHY IT WORKS */}
<section 
data-aos="fade-up"
style={{
  backgroundColor: '#5A4B47',
  color: '#FFF8E7',
  padding: '4rem 1.5rem',
  textAlign: 'center',
}}>
 <StylishDivider />
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <h2 style={{
      fontSize: '2.2rem',
      fontFamily: "'Playfair Display', serif",
      marginBottom: '1rem',
    }}>
      Why It Works
    </h2>
    <p style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
      This isn’t boring textbook English. You’ll practice in real-world situations — chatting like a colleague, texting like a pro, and presenting with clarity. Every week includes friendly convos, practical tips, and real industry language.
    </p>
  </div>
</section>

      <WeekOutlineWithPhrases />
      <SignupForm />
    </Layout>
  )
}
