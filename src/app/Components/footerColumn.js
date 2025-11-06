import React from 'react';

function FooterColumn({ header, links }) {
  return (
    <div>
      <div className="font-bold text-white mb-3">{header}</div>
      <ul>
        {links.map(({ label, href }) => (
          <li key={label} className="mb-2">
            <a href={href} className="text-gray-300 hover:text-[#FF8400] transition">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
