'use client';
import { useState } from 'react';
import { CheckCircle, Upload, Scissors } from 'lucide-react';
import Navbar from '../components/Navbar';
import { VILLES, SPECIALITES_LABELS } from '@/lib/data';

export default function InscriptionCouturierPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ prenom: '', nom: '', telephone: '', ville: '', quartier: '', email: '', experience: '', bio: '', specialites: [] as string[], prixMin: '', prixMax: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const toggleSpec = (s: string) => setForm(f => ({
    ...f, specialites: f.specialites.includes(s) ? f.specialites.filter(x => x !== s) : [...f.specialites, s]
  }));

  if (submitted) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center', maxWidth: '480px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <CheckCircle size={40} color="#10b981" />
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '30px', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>
              Inscription envoyée !
            </h1>
            <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
              Votre profil est en cours de vérification. Vous recevrez une confirmation sur <strong>{form.telephone}</strong> dans les 24 heures.
            </p>
            <a href="/" style={{ display: 'inline-block', background: 'var(--orange)', color: 'white', padding: '12px 28px', borderRadius: '10px', fontWeight: 600, fontSize: '15px' }}>
              Retour à l'accueil
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: 'var(--cream, #faf8f4)', padding: '48px 0' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--navy)', borderRadius: '50px', padding: '8px 18px', marginBottom: '16px' }}>
              <Scissors size={16} color="var(--orange)" />
              <span style={{ color: 'white', fontSize: '13px', fontWeight: 500 }}>Inscription couturier</span>
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>
              Rejoignez CoutureConnect
            </h1>
            <p style={{ color: '#6b7280', fontSize: '15px' }}>Gratuit • Rapide • Commencez à recevoir des clients dès aujourd'hui</p>
          </div>

          {/* Steps indicator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '36px' }}>
            {[1, 2, 3].map(s => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: s <= step ? 'var(--orange)' : '#e5e7eb', color: s <= step ? 'white' : '#9ca3af', fontSize: '13px', fontWeight: 700, transition: 'all 0.3s'
                }}>{s < step ? '✓' : s}</div>
                {s < 3 && <div style={{ width: '48px', height: '2px', background: s < step ? 'var(--orange)' : '#e5e7eb', transition: 'all 0.3s' }} />}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginBottom: '36px' }}>
            {['Informations', 'Spécialités', 'Tarifs'].map((l, i) => (
              <span key={l} style={{ fontSize: '12px', fontWeight: i + 1 === step ? 600 : 400, color: i + 1 <= step ? 'var(--navy)' : '#9ca3af' }}>{l}</span>
            ))}
          </div>

          {/* Form */}
          <div style={{ background: 'white', borderRadius: '20px', border: '1px solid var(--border)', padding: '36px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>Informations personnelles</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {[['Prénom', 'prenom', 'Votre prénom'], ['Nom', 'nom', 'Votre nom']].map(([label, key, ph]) => (
                    <div key={key}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>{label}</label>
                      <input type="text" placeholder={ph} value={form[key as keyof typeof form] as string} onChange={e => update(key, e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif' }} />
                    </div>
                  ))}
                </div>
                {[['Téléphone / WhatsApp', 'telephone', '+229 9X XX XX XX', 'tel'],
                  ['Email', 'email', 'votre@email.com', 'email']].map(([label, key, ph, type]) => (
                  <div key={key}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>{label}</label>
                    <input type={type} placeholder={ph} value={form[key as keyof typeof form] as string} onChange={e => update(key, e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif' }} />
                  </div>
                ))}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>Ville</label>
                    <select value={form.ville} onChange={e => update('ville', e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', color: '#1a1a2e' }}>
                      <option value="">Choisir...</option>
                      {VILLES.map(v => <option key={v}>{v}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>Quartier</label>
                    <input type="text" placeholder="Ex: Ganhi, Tokpa..." value={form.quartier} onChange={e => update('quartier', e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>Années d'expérience</label>
                  <input type="number" min="0" placeholder="Ex: 5" value={form.experience} onChange={e => update('experience', e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>Présentation (bio)</label>
                  <textarea placeholder="Décrivez votre activité, vos spécialités, votre style..." value={form.bio} onChange={e => update('bio', e.target.value)} rows={4}
                    style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', resize: 'vertical' }} />
                </div>
              </div>
            )}

            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>Vos spécialités</h2>
                <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '-8px' }}>Sélectionnez tous les types de tenues que vous confectionnez.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px' }}>
                  {(Object.entries(SPECIALITES_LABELS) as [string, string][]).map(([k, v]) => {
                    const selected = form.specialites.includes(k);
                    return (
                      <button key={k} onClick={() => toggleSpec(k)} type="button"
                        style={{ padding: '16px 12px', borderRadius: '12px', border: `2px solid ${selected ? 'var(--orange)' : '#e5e7eb'}`, background: selected ? '#fff7ed' : 'white', cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s' }}>
                        <div style={{ fontSize: '24px', marginBottom: '6px' }}>
                          {k === 'femme' ? '👗' : k === 'homme' ? '👔' : k === 'enfant' ? '🧒' : k === 'traditionnel' ? '🪡' : '💫'}
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: selected ? 'var(--orange)' : '#1a1a2e' }}>{v}</div>
                        {selected && <div style={{ marginTop: '4px', fontSize: '11px', color: 'var(--orange)' }}>✓ Sélectionné</div>}
                      </button>
                    );
                  })}
                </div>
                <div style={{ background: '#f0fdf4', borderRadius: '10px', padding: '14px 16px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <Upload size={16} color="#15803d" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#15803d', marginBottom: '2px' }}>Photos de vos réalisations</div>
                    <div style={{ fontSize: '12px', color: '#4b5563' }}>Après l'inscription, vous pourrez ajouter vos photos depuis votre dashboard.</div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>Vos tarifs</h2>
                <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '-8px' }}>Indiquez votre fourchette de prix pour aider les clients à vous trouver.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {[['Prix minimum (FCFA)', 'prixMin', 'Ex: 5000'], ['Prix maximum (FCFA)', 'prixMax', 'Ex: 150000']].map(([label, key, ph]) => (
                    <div key={key}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>{label}</label>
                      <input type="number" placeholder={ph} value={form[key as keyof typeof form] as string} onChange={e => update(key, e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif' }} />
                    </div>
                  ))}
                </div>
                <div style={{ background: '#eff6ff', borderRadius: '12px', padding: '18px 20px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)', marginBottom: '10px' }}>Récapitulatif</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '13px', color: '#4b5563' }}>
                    <div>👤 {form.prenom} {form.nom}</div>
                    <div>📍 {form.quartier}, {form.ville}</div>
                    <div>📞 {form.telephone}</div>
                    <div>⭐ {form.experience} ans d'exp.</div>
                    <div style={{ gridColumn: '1/-1' }}>✂️ {form.specialites.map(s => SPECIALITES_LABELS[s as keyof typeof SPECIALITES_LABELS]).join(', ') || '—'}</div>
                  </div>
                </div>
                <div style={{ background: '#fff7ed', borderRadius: '10px', padding: '14px 16px', fontSize: '13px', color: '#92400e' }}>
                  En vous inscrivant, vous acceptez notre commission de 10–15% sur les commandes passées via la plateforme. L'inscription reste gratuite.
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', gap: '12px' }}>
              {step > 1 ? (
                <button onClick={() => setStep(s => s - 1)}
                  style={{ padding: '12px 24px', border: '1px solid #e5e7eb', borderRadius: '10px', background: 'white', fontSize: '14px', fontWeight: 600, cursor: 'pointer', color: '#4b5563' }}>
                  ← Précédent
                </button>
              ) : <div />}
              {step < 3 ? (
                <button onClick={() => setStep(s => s + 1)}
                  style={{ padding: '12px 28px', background: 'var(--navy)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                  Suivant →
                </button>
              ) : (
                <button onClick={() => setSubmitted(true)}
                  style={{ padding: '12px 28px', background: 'var(--orange)', color: 'white', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Scissors size={16} /> Soumettre mon inscription
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
