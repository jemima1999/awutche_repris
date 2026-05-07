'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: 'var(--navy)', borderBottom: '1px solid rgba(255,255,255,0.1)' }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div style={{ background: 'var(--orange)', borderRadius: '8px', padding: '6px' }}>
              <Scissors size={18} color="white" />
            </div>
            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '20px', color: 'white', letterSpacing: '-0.5px' }}>
              CoutureConnect
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/recherche" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: 500 }} className="hover:text-white transition-colors">
              Trouver un couturier
            </Link>
            <Link href="/inscription-couturier" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: 500 }} className="hover:text-white transition-colors">
              Je suis couturier
            </Link>
            <Link href="/connexion" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: 500 }} className="hover:text-white transition-colors">
              Connexion
            </Link>
            <Link href="/inscription-couturier"
              style={{ background: 'var(--orange)', color: 'white', padding: '8px 18px', borderRadius: '8px', fontSize: '14px', fontWeight: 600 }}
              className="hover:opacity-90 transition-opacity">
              Commencer
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: 'white' }}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: 'var(--navy-dark)', borderTop: '1px solid rgba(255,255,255,0.1)' }} className="md:hidden px-4 py-4 flex flex-col gap-4">
          <Link href="/recherche" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px' }} onClick={() => setOpen(false)}>Trouver un couturier</Link>
          <Link href="/inscription-couturier" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px' }} onClick={() => setOpen(false)}>Je suis couturier</Link>
          <Link href="/connexion" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px' }} onClick={() => setOpen(false)}>Connexion</Link>
          <Link href="/inscription-couturier" style={{ background: 'var(--orange)', color: 'white', padding: '10px 18px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textAlign: 'center' }} onClick={() => setOpen(false)}>
            Commencer gratuitement
          </Link>
        </div>
      )}
    </nav>
  );
}
