'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Scissors, Eye, EyeOff } from 'lucide-react';

export default function ConnexionPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [mode, setMode] = useState<'client' | 'couturier'>('client');

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream, #faf8f4)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 16px' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <div style={{ background: 'var(--navy)', borderRadius: '10px', padding: '8px' }}><Scissors size={18} color="var(--orange)" /></div>
            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '22px', color: 'var(--navy)' }}>CoutureConnect</span>
          </Link>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>Connexion</h1>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>Bienvenue ! Connectez-vous à votre espace.</p>
        </div>

        <div style={{ background: 'white', borderRadius: '20px', border: '1px solid var(--border)', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
          {/* Toggle */}
          <div style={{ display: 'flex', background: '#f3f4f6', borderRadius: '10px', padding: '4px', marginBottom: '24px' }}>
            {[['client', 'Je suis client'], ['couturier', 'Je suis couturier']].map(([v, l]) => (
              <button key={v} onClick={() => setMode(v as typeof mode)}
                style={{ flex: 1, padding: '8px', border: 'none', borderRadius: '7px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', background: mode === v ? 'white' : 'transparent', color: mode === v ? 'var(--navy)' : '#6b7280', boxShadow: mode === v ? '0 1px 4px rgba(0,0,0,0.1)' : 'none', transition: 'all 0.2s' }}>
                {l}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                {mode === 'couturier' ? 'Téléphone / Email' : 'Email'}
              </label>
              <input type="email" placeholder={mode === 'couturier' ? '+229 9X XX XX XX ou email' : 'votre@email.com'}
                style={{ width: '100%', padding: '12px 14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif' }} />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>Mot de passe</label>
                <a href="#" style={{ fontSize: '12px', color: 'var(--orange)', fontWeight: 500 }}>Oublié ?</a>
              </div>
              <div style={{ position: 'relative' }}>
                <input type={showPwd ? 'text' : 'password'} placeholder="••••••••"
                  style={{ width: '100%', padding: '12px 44px 12px 14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif' }} />
                <button onClick={() => setShowPwd(!showPwd)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}>
                  {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Link href={mode === 'couturier' ? '/dashboard' : '/'}
              style={{ display: 'block', width: '100%', background: 'var(--navy)', color: 'white', padding: '13px', borderRadius: '10px', textAlign: 'center', fontWeight: 700, fontSize: '15px', marginTop: '4px' }}>
              Se connecter
            </Link>

            <div style={{ textAlign: 'center', position: 'relative', margin: '4px 0' }}>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: '#e5e7eb' }} />
              <span style={{ position: 'relative', background: 'white', padding: '0 12px', fontSize: '12px', color: '#9ca3af' }}>ou</span>
            </div>

            <button style={{ width: '100%', background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', color: '#1a1a2e' }}>
              <span style={{ fontSize: '18px' }}>📱</span> Continuer avec WhatsApp OTP
            </button>
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#6b7280' }}>
            Pas encore de compte ?{' '}
            <Link href="/inscription-couturier" style={{ color: 'var(--orange)', fontWeight: 600 }}>
              {mode === 'couturier' ? 'Inscrivez-vous' : 'Trouver un couturier'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
