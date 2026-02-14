'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
        return;
      }

      setStatus({ type: 'success', message: 'Thank you for your inquiry. We will get back to you soon!' });
      setFormData({ name: '', email: '', projectType: '' });
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
          <h2>Send a Message</h2>
          <p>We&apos;d love to hear about your project.</p>
        </div>
        {status && (
          <div className={`form-status ${status.type === 'success' ? 'form-status-success' : 'form-status-error'}`}>
            {status.message}
          </div>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className={`form-input ${formData.name ? 'has-value' : ''}`}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label className="form-label">Your Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className={`form-input ${formData.email ? 'has-value' : ''}`}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label className="form-label">Email Address</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="projectType"
              className={`form-input ${formData.projectType ? 'has-value' : ''}`}
              value={formData.projectType}
              onChange={handleInputChange}
              required
            />
            <label className="form-label">Project Type / Interest</label>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </section>
  );
}
