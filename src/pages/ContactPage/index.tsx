import { useState } from 'react'
import styles from './style.module.css'

type FormState = { name: string; email: string; subject: string; message: string }
type Status = 'idle' | 'sending' | 'sent'

function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    const mailto = `mailto:shushanikarakl62@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setTimeout(() => setStatus('sent'), 500)
  }

  const isValid = form.name.trim() && form.email.trim() && form.message.trim()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Get In Touch</h1>
          <p className={styles.sub}>Let's build something great together</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Email</p>
              <a href="mailto:shushanikarakl62@gmail.com" className={styles.infoValue}>
                shushanikarakl62@gmail.com
              </a>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>GitHub</p>
              <a href="https://github.com/Shushanik01" target="_blank" rel="noopener noreferrer" className={styles.infoValue}>
                github.com/Shushanik01
              </a>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>LinkedIn</p>
              <a href="https://www.linkedin.com/in/shushanik-arakelyan-4b763b365/" target="_blank" rel="noopener noreferrer" className={styles.infoValue}>
                Shushanik Arakelyan
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className={styles.input}
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Tell me about your project..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submit}
              disabled={!isValid || status === 'sending'}
            >
              {status === 'sent' ? 'Message Opened ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
