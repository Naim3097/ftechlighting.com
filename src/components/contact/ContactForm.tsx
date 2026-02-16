'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('/api/submit-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.service || 'General Inquiry',
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
        return;
      }

      setStatus({ type: 'success', message: 'Thank you for your message. We will get back to you within 24 hours!' });
      setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '', consent: false });
    } catch {
      setStatus({ type: 'error', message: 'Unable to submit your inquiry. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <div className="form-header">
          <h2>Send Us a Message</h2>
          <p>We&apos;d love to hear about your project.</p>
        </div>
        {status && (
          <div className={`form-status ${status.type === 'success' ? 'form-status-success' : 'form-status-error'}`}>
            {status.message}
          </div>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className={`form-input ${formData.name ? 'has-value' : ''}`}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label className="form-label">Full Name *</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="company"
                className={`form-input ${formData.company ? 'has-value' : ''}`}
                value={formData.company}
                onChange={handleInputChange}
              />
              <label className="form-label">Company / Organization</label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="email"
                name="email"
                className={`form-input ${formData.email ? 'has-value' : ''}`}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label className="form-label">Email Address *</label>
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                className={`form-input ${formData.phone ? 'has-value' : ''}`}
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <label className="form-label">Phone Number *</label>
            </div>
          </div>
          <div className="form-group">
            <select
              name="service"
              className={`form-input form-select ${formData.service ? 'has-value' : ''}`}
              value={formData.service}
              onChange={handleInputChange}
            >
              <option value="">Select a service...</option>
              <option value="new-project">New Project Inquiry</option>
              <option value="design">Design &amp; Consultation</option>
              <option value="installation">Installation Services</option>
              <option value="maintenance">Maintenance &amp; Support</option>
              <option value="retrofit">LED Retrofit / Upgrade</option>
              <option value="emergency">Emergency Repair</option>
              <option value="quote">Request Quote</option>
              <option value="other">Other</option>
            </select>
            <label className="form-label">Service Interest</label>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className={`form-input form-textarea ${formData.message ? 'has-value' : ''}`}
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
            />
            <label className="form-label">Message *</label>
          </div>
          <div className="form-group form-checkbox">
            <label>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                required
              />
              I agree to be contacted by FTECH Solutions regarding my inquiry *
            </label>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          <p className="form-required-note">* Required fields</p>
        </form>
      </div>
    </section>
  );
}
