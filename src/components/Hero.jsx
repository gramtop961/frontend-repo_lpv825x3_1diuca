import React, { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Hero() {
  const [form, setForm] = useState({ name: '', email: '', use_case: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [count, setCount] = useState(null);

  const fetchCount = async () => {
    try {
      const res = await fetch(`${API_BASE}/waitlist/count`);
      const data = await res.json();
      setCount(data.count ?? null);
    } catch (e) {
      // silently ignore for first paint
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch(`${API_BASE}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name || undefined,
          email: form.email,
          use_case: form.use_case || undefined,
          source: 'landing',
          status: 'new'
        })
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || 'Failed to join waitlist');
      }
      await res.json();
      setMessage({ type: 'success', text: 'Thanks! You\'re on the list. We\'ll be in touch soon.' });
      setForm({ name: '', email: '', use_case: '' });
      fetchCount();
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/60 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-200/60 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-indigo-100">AI Chatbot for Modern Teams</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Turn conversations into outcomes with AI
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            AstraChat helps you automate support, qualify leads, and boost productivity with a conversational assistant that actually understands your users.
          </p>
          <div className="mt-8">
            <form id="waitlist" onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/70 backdrop-blur rounded-xl p-4 ring-1 ring-gray-200">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Jane Doe"
                  className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="jane@company.com"
                  className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Primary use case</label>
                <input
                  type="text"
                  name="use_case"
                  value={form.use_case}
                  onChange={onChange}
                  placeholder="Customer support, lead gen, onboarding, …"
                  className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="sm:col-span-2 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Joining…' : 'Join the waitlist'}
                </button>
                {typeof count === 'number' && (
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">{count.toLocaleString()}</span> already joined
                  </div>
                )}
              </div>
            </form>
            {message && (
              <div className={`mt-3 text-sm ${message.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                {message.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
