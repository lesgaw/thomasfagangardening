import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { business, services } from '../siteConfig'

// ⬅ EDIT — paste your free Web3Forms access key here (see README, step "Enquiry form").
//    Get one in 30 seconds at https://web3forms.com (no account needed) by entering
//    the email address where enquiries should arrive.
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const validate = (form) => {
    const e = {}
    if (!form.name.value.trim()) e.name = 'Please tell us your name.'
    const email = form.email.value.trim()
    if (!email) e.email = 'Please add an email so we can reply.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'That email doesn’t look right.'
    if (!form.message.value.trim()) e.message = 'Please tell us a little about your garden.'
    return e
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length) return

    setStatus('sending')
    try {
      const data = Object.fromEntries(new FormData(form).entries())
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...data }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free quote"
        subtitle="Tell us about your garden and we’ll get back to you quickly with a friendly, no-obligation price."
        image="/images/header-contact.jpg"
      />

      <section className="py-20">
        <div className="container-tight grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact details */}
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Talk to Thomas</h2>
            <p className="mt-3 text-bark-600">
              Prefer to call or message? Use whatever suits you best — Thomas is always happy to
              chat about what your garden needs.
            </p>

            <ul className="mt-8 space-y-4">
              <ContactRow
                icon={Phone}
                label="Call or text"
                value={business.phone}
                href={business.phoneHref}
              />
              <ContactRow
                icon={Mail}
                label="Email"
                value={business.email}
                href={`mailto:${business.email}`}
              />
              {business.whatsapp && (
                <ContactRow
                  icon={MessageCircle}
                  label="WhatsApp"
                  value="Message us instantly"
                  href={`https://wa.me/${business.whatsapp}`}
                />
              )}
              <ContactRow icon={MapPin} label="Area covered" value={business.serviceArea} />
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-bark-100/70 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 className="h-14 w-14 text-leaf-500" aria-hidden="true" />
                  <h3 className="mt-4 text-2xl">Thank you!</h3>
                  <p className="mt-2 max-w-sm text-bark-600">
                    Your enquiry is on its way to Thomas. He’ll be in touch as soon as he can.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-600 text-leaf-700 underline-offset-4 hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  {/* Honeypot anti-spam field (hidden from people) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <input type="hidden" name="subject" value="New garden enquiry from the website" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name" name="name" error={errors.name} required />
                    <Field
                      label="Phone (optional)"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="mt-5">
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      error={errors.email}
                      required
                    />
                  </div>

                  <div className="mt-5">
                    <label htmlFor="service" className="mb-1.5 block text-sm font-600 text-bark-800">
                      What do you need? (optional)
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl border border-bark-200 bg-cream px-4 py-3 text-bark-900 focus-visible:border-leaf-500"
                      defaultValue=""
                    >
                      <option value="">Choose a service…</option>
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Something else">Something else</option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <Field
                      label="About your garden"
                      name="message"
                      as="textarea"
                      placeholder="e.g. a medium back garden that needs a regular mow and the hedges tidied"
                      error={errors.message}
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <p className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                      <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                      Sorry, something went wrong sending your message. Please try again, or call us
                      instead.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-leaf-500 px-6 py-3.5 text-sm font-600 text-white shadow-soft transition-all hover:bg-leaf-600 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      'Sending…'
                    ) : (
                      <>
                        Send enquiry <Send className="h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-center text-xs text-bark-500">
                    No spam, ever. Your details are only used to reply to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const inner = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-leaf-50 text-leaf-600">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs font-600 uppercase tracking-wide text-bark-500">
          {label}
        </span>
        <span className="block font-600 text-bark-900">{value}</span>
      </span>
    </>
  )
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-center gap-4 rounded-xl hover:text-leaf-700">
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4">{inner}</div>
      )}
    </li>
  )
}

function Field({ label, name, as, type = 'text', error, required, ...props }) {
  const id = `field-${name}`
  const base =
    'w-full rounded-xl border bg-cream px-4 py-3 text-bark-900 placeholder:text-bark-400 focus-visible:border-leaf-500'
  const border = error ? 'border-red-400' : 'border-bark-200'
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-600 text-bark-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          className={`${base} ${border}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          className={`${base} ${border}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
