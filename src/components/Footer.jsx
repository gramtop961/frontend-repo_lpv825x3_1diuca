import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {year} AstraChat, Inc. All rights reserved.</p>
        <div className="flex items-center gap-5 text-sm">
          <a className="text-gray-600 hover:text-gray-900" href="#features">Features</a>
          <a className="text-gray-600 hover:text-gray-900" href="#waitlist">Join waitlist</a>
          <a className="text-gray-600 hover:text-gray-900" href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
