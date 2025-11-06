import React from 'react';

function SocialIconButton({ href, children, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#1A237E] hover:bg-[#FF8400] text-white transition"
    >
      {children}
    </a>
  );
}

export default SocialIconButton;
