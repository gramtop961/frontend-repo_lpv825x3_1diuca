import React from 'react';
import { Rocket, Bot, MessageSquare, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch faster',
    desc: 'Plug-and-play widgets, prebuilt flows, and zero-code onboarding so you go live in days, not months.'
  },
  {
    icon: Bot,
    title: 'Smarter replies',
    desc: 'Retrieval-augmented generation grounded in your docs to keep answers accurate and on-brand.'
  },
  {
    icon: MessageSquare,
    title: 'Omnichannel',
    desc: 'Web, in-app, email, and chat platforms. Meet customers where they already are.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'Role-based controls, audit logs, and SOC2-ready practices keep your data safe.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to ship an AI assistant</h2>
          <p className="mt-3 text-gray-600">Powerful building blocks that scale from startup to enterprise.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
