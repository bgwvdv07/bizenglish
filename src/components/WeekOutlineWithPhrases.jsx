import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'

const phases = [
  {
    title: "🧭 Phase 1: Get Comfy & Conversational",
    subtitle: "Build the foundation for relaxed, confident communication at work.",
    weeks: [
      { emoji: "🌟", week: 1, title: "Intro to Business English", desc: "Set the vibe. Learn the goals. Meet your coach and team." },
      { emoji: "🤝", week: 2, title: "Talk Like a Team Player", desc: "Everyday workplace phrases, group chats, and daily standups." },
      { emoji: "💬", week: 3, title: "Slack, Email, Texts", desc: "Write casual yet clear messages that sound native." },
    ]
  },
  {
    title: "🎙️ Phase 2: Sound Like a Native in Meetings",
    subtitle: "Sharpen your skills for speaking up, storytelling, and cultural clarity.",
    weeks: [
      { emoji: "📞", week: 4, title: "Meeting Magic", desc: "Speak up and sound smart in Zoom meetings and calls." },
      { emoji: "🚀", week: 5, title: "Industry Buzzwords", desc: "Understand and use lingo from tech, finance, and marketing." },
      { emoji: "📖", week: 6, title: "Storytelling at Work", desc: "Share ideas and explain things clearly in a natural tone." },
      { emoji: "🌍", week: 7, title: "Cross-Cultural Cool", desc: "Communicate clearly with global teams, minus confusion." },
    ]
  },
  {
    title: "🚀 Phase 3: Lead, Laugh, and Level Up",
    subtitle: "Master soft skills and present yourself with clarity and warmth.",
    weeks: [
      { emoji: "🧠", week: 8, title: "Feedback Like a Pro", desc: "Give and receive feedback like a confident adult." },
      { emoji: "😂", week: 9, title: "Small Talk & Banter", desc: "Office jokes, watercooler talk, and friendly vibes." },
      { emoji: "🏁", week: 10, title: "Wrap-Up & Level-Up", desc: "Final presentations + personalized next steps." },
    ]
  }
]

export default function WeekOutlineWithPhases() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section style={{ background: 'var(--cream)', padding: '4rem 2rem' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontFamily: "'Playfair Display', serif",
        color: '#5A4B47',
        textAlign: 'center',
        marginBottom: '3rem',
      }}>
        Your 10-Week Journey — In 3 Fun Phases 🎉
      </h2>

      {phases.map((phase, idx) => (
        <div key={idx} data-aos="fade-up" style={{ marginBottom: '4rem' }}>
          <h3 style={{
            fontSize: '1.8rem',
            marginBottom: '0.5rem',
            color: '#5A4B47',
            textAlign: 'center',
            fontWeight: 600,
          }}>
            {phase.title}
          </h3>
          <p style={{
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#5A4B47',
            fontSize: '1.1rem'
          }}>
            {phase.subtitle}
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
          }}>
            {phase.weeks.map((week, wIdx) => {
              const bg = (wIdx + idx) % 2 === 0 ? 'var(--sunny)' : 'var(--peach)'
              const randomMargin = Math.floor(Math.random() * 30) - 15
              return (
                <div
                  key={week.week}
                  style={{
                    background: bg,
                    color: '#5A4B47',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    width: '260px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                    animation: 'floatPulse 4s ease-in-out infinite alternate',
                    transform: `translateY(${randomMargin}px)`,
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{week.emoji}</div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    Week {week.week}: {week.title}
                  </h4>
                  <p style={{ fontSize: '1rem', lineHeight: 1.5 }}>{week.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}
