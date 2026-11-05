import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/Reveal';

type Status = 'idle' | 'loading' | 'success' | 'error';
type Errors = { name?: string; email?: string; subject?: string; message?: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const validate = () => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!emailPattern.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.subject.trim()) e.subject = 'Please enter a subject.';
    if (!form.message.trim()) e.message = 'Please enter your message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    const params = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      public_key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    };

    const configured = params.service_id && params.template_id && params.public_key;

    try {
      if (!configured) {
        // mailto fallback
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
        );
        const subject = encodeURIComponent(form.subject);
        window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
        await new Promise((r) => setTimeout(r, 800));
      } else {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: params.service_id,
            template_id: params.template_id,
            user_id: params.public_key,
            template_params: {
              from_name: form.name,
              from_email: form.email,
              subject: form.subject,
              message: form.message,
              to_email: personal.email,
            },
          }),
        });
        if (!res.ok) throw new Error('Email service error');
      }
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const field = (
    label: string,
    name: keyof typeof form,
    type = 'text',
    textarea = false,
  ) => (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-[var(--text)]">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className={`w-full rounded-lg glass px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-electric-500/40 ${
            errors[name] ? 'ring-2 ring-red-400/50' : ''
          }`}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className={`w-full rounded-lg glass px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-electric-500/40 ${
            errors[name] ? 'ring-2 ring-red-400/50' : ''
          }`}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      )}
      {errors[name] && <p className="mt-1.5 text-xs text-red-400">{errors[name]}</p>}
    </div>
  );

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's Build Something <span className="gradient-text">Great Together</span>
            </>
          }
          subtitle="I'm always interested in discussing Python development, AI/ML opportunities, innovative projects, and collaboration."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* contact info */}
          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              {[
                { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
                { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
                { icon: MapPin, label: 'Location', value: personal.location },
                { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: personal.linkedin },
                { icon: Github, label: 'GitHub', value: 'View my repos', href: personal.github },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="glass flex items-center gap-4 rounded-xl p-4 transition-all hover:-translate-y-0.5"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-electric-500/10 text-electric-500">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="truncate text-sm font-medium text-[var(--text)] hover:text-electric-500"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-[var(--text)]">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* form */}
          <Reveal className="lg:col-span-3" delay={0.2}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                {field('Name', 'name')}
                {field('Email', 'email', 'email')}
              </div>
              <div className="mt-5">{field('Subject', 'subject')}</div>
              <div className="mt-5">{field('Message', 'message', 'text', true)}</div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-electric-500 px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70 sm:w-auto"
              >
                {status === 'loading' ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
                  >
                    <CheckCircle2 size={18} />
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400"
                  >
                    <AlertCircle size={18} />
                    Something went wrong. Please try again or email me directly at {personal.email}.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
