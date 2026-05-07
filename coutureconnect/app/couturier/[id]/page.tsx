'use client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Star, CheckCircle, Clock, Phone, ArrowLeft, MessageCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import { COUTURIERS_MOCK, formatPrix, SPECIALITES_LABELS } from '@/lib/data';

export default function CouturierPage({ params }: { params: { id: string } }) {
  const couturier = COUTURIERS_MOCK.find(c => c.id === params.id);
  if (!couturier) notFound();

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
        {/* Back */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Link href="/recherche" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '14px', marginBottom: '24px' }}>
            <ArrowLeft size={16} /> Retour aux résultats
          </Link>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px', alignItems: 'start' }} className="profile-grid">
            {/* Left column */}
            <div>
              {/* Header card */}
              <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', padding: '28px', marginBottom: '20px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={couturier.photo}
                    alt={couturier.prenom}
                    style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--border)' }}
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${couturier.prenom}+${couturier.nom}&background=1A3C6E&color=fff&size=100`; }}
                  />
                  {couturier.disponible && (
                    <div style={{ position: 'absolute', bottom: '4px', right: '4px', width: '20px', height: '20px', borderRadius: '50%', background: '#10b981', border: '2px solid white' }} />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>
                      {couturier.prenom} {couturier.nom}
                    </h1>
                    {couturier.verified && (
                      <span style={{ background: '#eff6ff', color: '#1d4ed8', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>
                        <CheckCircle size={12} /> Vérifié
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                    <MapPin size={15} color="#6b7280" />
                    <span style={{ fontSize: '14px', color: '#6b7280' }}>{couturier.quartier}, {couturier.ville}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} size={16} fill={i <= Math.round(couturier.note) ? '#f59e0b' : 'none'} color={i <= Math.round(couturier.note) ? '#f59e0b' : '#d1d5db'} />
                      ))}
                    </div>
                    <span style={{ fontSize: '15px', fontWeight: 700 }}>{couturier.note}</span>
                    <span style={{ fontSize: '13px', color: '#6b7280' }}>({couturier.nbAvis} avis)</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#6b7280' }}>
                      <Clock size={13} /> {couturier.experience} ans d'expérience
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', padding: '24px', marginBottom: '20px' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>À propos</h2>
                <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7 }}>{couturier.bio}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                  {couturier.specialites.map(s => (
                    <span key={s} style={{ background: '#fff7ed', color: 'var(--orange)', fontSize: '13px', fontWeight: 500, padding: '5px 12px', borderRadius: '20px', border: '1px solid rgba(232,101,10,0.2)' }}>
                      {SPECIALITES_LABELS[s]}
                    </span>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              {couturier.modeles.length > 0 && (
                <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', padding: '24px', marginBottom: '20px' }}>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: 'var(--navy)', marginBottom: '16px' }}>Portfolio</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '14px' }}>
                    {couturier.modeles.map(m => (
                      <div key={m.id} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                        <img src={m.photo} alt={m.nom} style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                          onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&h=200&fit=crop'; }} />
                        <div style={{ padding: '10px 12px' }}>
                          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>{m.nom}</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '12px', color: 'var(--orange)', fontWeight: 700 }}>{formatPrix(m.prixEstime)}</span>
                            <span style={{ fontSize: '11px', color: '#6b7280' }}>~{m.delaiJours}j</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Avis */}
              <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', padding: '24px' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: 'var(--navy)', marginBottom: '16px' }}>
                  Avis clients ({couturier.nbAvis})
                </h2>
                {couturier.avis.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {couturier.avis.map(a => (
                      <div key={a.id} style={{ padding: '16px', background: '#f9fafb', borderRadius: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                          <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--navy)' }}>{a.auteur}</div>
                          <div>
                            <div style={{ display: 'flex', gap: '2px' }}>
                              {[1,2,3,4,5].map(i => <Star key={i} size={12} fill={i <= a.note ? '#f59e0b' : 'none'} color={i <= a.note ? '#f59e0b' : '#d1d5db'} />)}
                            </div>
                            <div style={{ fontSize: '11px', color: '#9ca3af', textAlign: 'right', marginTop: '2px' }}>{new Date(a.date).toLocaleDateString('fr-FR')}</div>
                          </div>
                        </div>
                        <p style={{ fontSize: '14px', color: '#4b5563', margin: 0, lineHeight: 1.6 }}>{a.commentaire}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: '#9ca3af', fontSize: '14px' }}>Pas encore d'avis.</p>
                )}
              </div>
            </div>

            {/* Right column — CTA */}
            <div style={{ position: 'sticky', top: '80px' }}>
              <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', padding: '24px', marginBottom: '16px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '4px' }}>Prix à partir de</div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: 'var(--navy)' }}>{formatPrix(couturier.prixMin)}</div>
                  <div style={{ fontSize: '13px', color: '#9ca3af' }}>jusqu'à {formatPrix(couturier.prixMax)}</div>
                </div>

                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ flex: 1, background: couturier.disponible ? '#f0fdf4' : '#f3f4f6', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>Statut</div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: couturier.disponible ? '#15803d' : '#6b7280' }}>
                      {couturier.disponible ? '✅ Disponible' : '⏳ Occupé'}
                    </div>
                  </div>
                  <div style={{ flex: 1, background: '#eff6ff', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>Note</div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#1e40af' }}>⭐ {couturier.note}/5</div>
                  </div>
                </div>

                <Link href={`/commande/${couturier.id}`}
                  style={{ display: 'block', width: '100%', background: 'var(--orange)', color: 'white', padding: '14px', borderRadius: '12px', textAlign: 'center', fontWeight: 700, fontSize: '15px', marginBottom: '10px' }}>
                  ✂️ Demander un devis
                </Link>
                <a href={`https://wa.me/${couturier.telephone.replace(/\D/g,'')}`} target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', background: '#f0fdf4', color: '#15803d', padding: '12px', borderRadius: '12px', fontWeight: 600, fontSize: '14px', border: '1px solid #86efac' }}>
                  <MessageCircle size={16} /> Contacter sur WhatsApp
                </a>
              </div>

              <div style={{ background: 'var(--sand, #f5f0e8)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Phone size={16} color="var(--navy)" />
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy)' }}>Contact direct</span>
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>{couturier.telephone}</div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>Commission 10% sur commandes via la plateforme</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.profile-grid{grid-template-columns:1fr !important;}}`}</style>
    </>
  );
}
