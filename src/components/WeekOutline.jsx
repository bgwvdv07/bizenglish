import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'

const weekOutline = [
  { emoji: "🌟", week: 1, title: "Intro to Business English", desc: "Set the vibe. Learn the goals. Meet your coach and team." },
  { emoji: "🤝", week: 2, title: "Talk Like a Team Player", desc: "Everyday workplace phrases, group chats, and daily standups." },
  { emoji: "💬", week: 3, title: "Slack, Email, Texts", desc: "Write casual yet clear messages that sound native." },
  { emoji: "📞", week: 4, title: "Meeting Magic", desc: "Speak up and sound smart in Zoom meetings and calls." },
  { emoji: "🚀", week: 5, title: "Industry Buzzwords", desc: "Understand and use lingo from tech, finance, and marketing." },
  { emoji: "📖", week: 6, title: "Storytelling at Work", desc: "Share ideas and explain things clearly in a natural tone." },
  { emoji: "🌍", week: 7, title: "Cross-Cultural Cool", desc: "Communicate clearly with global teams, minus confusion." },
  { emoji: "🧠", week: 8, title: "Feedback Like a Pro", desc: "Give and receive feedback like a confident adult." },
  { emoji: "😂", week: 9, title: "Small Talk & Banter", desc: "Office jokes, watercooler talk, and friendly vibes." },
  { emoji: "🏁", week: 10, title: "Wrap-Up & Level-Up", desc: "Final presentations + personalized next steps." }
]

export default function WeekOutline() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section style={{
      background: 'var(--cream)',
      padding: '4rem 2rem',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontFamily: "'Playfair Display', serif",
        color: '#5A4B47',
        marginBottom: '3rem',
      }}>
        What’s Inside – Your 10-Week Journey ✨
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
      }}>
        {weekOutline.map((item, index) => {
          const bg = index % 2 === 0 ? 'var(--sunny)' : 'var(--peach)'
          const randomMargin = Math.floor(Math.random() * 30) - 15 // range: -15px to +15px
          return (
            <div
              key={item.week}
              data-aos="zoom-in-up"
              style={{
                background: bg,
                color: '#5A4B47',
                borderRadius: '16px',
                padding: '1.5rem',
                width: '260px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                animation: 'floatPulse 4s ease-in-out infinite alternate',
                transform: `translateY(${randomMargin}px)`,
                fontSize: '1rem',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.emoji}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                Week {item.week}: {item.title}
              </h3>
              <p style={{ lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
