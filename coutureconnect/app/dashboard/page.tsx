'use client';
import { useState } from 'react';
import { Scissors, TrendingUp, Star, Eye, CheckCircle, Clock, Bell, Settings, LogOut, Package } from 'lucide-react';
import Navbar from '../components/Navbar';
import { COUTURIERS_MOCK, formatPrix } from '@/lib/data';

const couturier = COUTURIERS_MOCK[0]; // Simulate logged-in user

const COMMANDES = [
  { id: '#1247', client: 'Aminata Koudouno', tenue: 'Robe de cérémonie wax', montant: 45000, statut: 'Prête', date: '2025-05-01' },
  { id: '#1246', client: 'Fidèle Dossou', tenue: 'Ensemble pagne femme', montant: 28000, statut: 'En cours', date: '2025-04-28' },
  { id: '#1245', client: 'Marie Gbaguidi', tenue: 'Boubou traditionnel', montant: 35000, statut: 'En cours', date: '2025-04-25' },
  { id: '#1244', client: 'Joëlle Tokpanou', tenue: 'Tenue cérémonie 2 pièces', montant: 55000, statut: 'Livrée', date: '2025-04-20' },
  { id: '#1243', client: 'Carine Oloude', tenue: 'Robe soirée longue', montant: 40000, statut: 'Livrée', date: '2025-04-15' },
];

const statutColors: Record<string, { bg: string; color: string }> = {
  'Prête': { bg: '#f0fdf4', color: '#15803d' },
  'En cours': { bg: '#fff7ed', color: '#c2410c' },
  'Livrée': { bg: '#eff6ff', color: '#1e40af' },
  'Annulée': { bg: '#fef2f2', color: '#991b1b' },
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'commandes' | 'profil'>('overview');

  const totalRevenu = COMMANDES.filter(c => c.statut === 'Livrée').reduce((s, c) => s + c.montant, 0);
  const enCours = COMMANDES.filter(c => c.statut === 'En cours').length;
  const prets = COMMANDES.filter(c => c.statut === 'Prête').length;

  return (
    <>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar */}
        <aside style={{ width: '240px', background: 'var(--navy)', display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, left: 0, height: '100vh', zIndex: 40 }} className="hidden md:flex">
          <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <div style={{ background: 'var(--orange)', borderRadius: '6px', padding: '4px' }}><Scissors size={14} color="white" /></div>
              <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '16px', color: 'white' }}>CoutureConnect</span>
            </div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginLeft: '30px' }}>Dashboard couturier</div>
          </div>

          <div style={{ padding: '16px 12px', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px', marginBottom: '20px' }}>
              <img src={couturier.photo} alt="" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${couturier.prenom}&background=E8650A&color=fff`; }} />
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'white' }}>{couturier.prenom}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{couturier.ville}</div>
              </div>
            </div>

            {[
              { id: 'overview', icon: <TrendingUp size={16} />, label: 'Vue d\'ensemble' },
              { id: 'commandes', icon: <Package size={16} />, label: 'Commandes' },
              { id: 'profil', icon: <Settings size={16} />, label: 'Mon profil' },
            ].map(({ id, icon, label }) => (
              <button key={id} onClick={() => setActiveTab(id as typeof activeTab)}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', padding: '10px 12px', borderRadius: '8px', border: 'none', cursor: 'pointer', marginBottom: '4px', textAlign: 'left', background: activeTab === id ? 'rgba(232,101,10,0.25)' : 'transparent', color: activeTab === id ? '#fdba74' : 'rgba(255,255,255,0.7)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                {icon} {label}
              </button>
            ))}
          </div>

          <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', padding: '10px 12px', border: 'none', background: 'transparent', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
              <LogOut size={16} /> Déconnexion
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, marginLeft: '240px', background: '#f9fafb', minHeight: '100vh' }} className="dashboard-main">
          {/* Top bar */}
          <div style={{ background: 'white', borderBottom: '1px solid var(--border)', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 30 }}>
            <div>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>
                {activeTab === 'overview' ? 'Vue d\'ensemble' : activeTab === 'commandes' ? 'Commandes' : 'Mon profil'}
              </h1>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>Bonjour, {couturier.prenom} 👋</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative' }}>
                <Bell size={20} color="#6b7280" />
                <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--orange)', fontSize: '9px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>3</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ fontSize: '12px', color: '#15803d', fontWeight: 500 }}>Disponible</span>
              </div>
            </div>
          </div>

          <div style={{ padding: '32px' }}>
            {activeTab === 'overview' && (
              <>
                {/* KPI cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                  {[
                    { label: 'Revenus ce mois', value: formatPrix(totalRevenu), icon: <TrendingUp size={20} color="var(--orange)" />, bg: '#fff7ed', color: '#c2410c' },
                    { label: 'Commandes en cours', value: enCours, icon: <Clock size={20} color="#1e40af" />, bg: '#eff6ff', color: '#1e40af' },
                    { label: 'Prêtes à livrer', value: prets, icon: <CheckCircle size={20} color="#15803d" />, bg: '#f0fdf4', color: '#15803d' },
                    { label: 'Note moyenne', value: `${couturier.note} ⭐`, icon: <Star size={20} color="#d97706" />, bg: '#fffbeb', color: '#d97706' },
                    { label: 'Vues du profil', value: '342', icon: <Eye size={20} color="#7c3aed" />, bg: '#faf5ff', color: '#7c3aed' },
                  ].map(({ label, value, icon, bg, color }) => (
                    <div key={label} style={{ background: 'white', borderRadius: '14px', border: '1px solid var(--border)', padding: '20px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                        {icon}
                      </div>
                      <div style={{ fontSize: '22px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>{value}</div>
                      <div style={{ fontSize: '12px', color: '#6b7280' }}>{label}</div>
                    </div>
                  ))}
                </div>

                {/* Recent orders */}
                <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden' }}>
                  <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>Commandes récentes</h2>
                    <button onClick={() => setActiveTab('commandes')} style={{ fontSize: '13px', color: 'var(--orange)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Voir tout →</button>
                  </div>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ background: '#f9fafb' }}>
                          {['ID', 'Client', 'Tenue', 'Montant', 'Statut', 'Date'].map(h => (
                            <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {COMMANDES.slice(0, 3).map((c, i) => (
                          <tr key={c.id} style={{ borderTop: '1px solid #f3f4f6' }}>
                            <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>{c.id}</td>
                            <td style={{ padding: '14px 16px', fontSize: '13px', color: '#1a1a2e' }}>{c.client}</td>
                            <td style={{ padding: '14px 16px', fontSize: '13px', color: '#6b7280', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.tenue}</td>
                            <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>{formatPrix(c.montant)}</td>
                            <td style={{ padding: '14px 16px' }}>
                              <span style={{ background: statutColors[c.statut]?.bg, color: statutColors[c.statut]?.color, fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '20px' }}>
                                {c.statut}
                              </span>
                            </td>
                            <td style={{ padding: '14px 16px', fontSize: '12px', color: '#9ca3af' }}>{new Date(c.date).toLocaleDateString('fr-FR')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'commandes' && (
              <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden' }}>
                <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>Toutes les commandes</h2>
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: '#f9fafb' }}>
                        {['ID', 'Client', 'Tenue', 'Montant', 'Statut', 'Date'].map(h => (
                          <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {COMMANDES.map(c => (
                        <tr key={c.id} style={{ borderTop: '1px solid #f3f4f6' }}>
                          <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>{c.id}</td>
                          <td style={{ padding: '14px 16px', fontSize: '13px' }}>{c.client}</td>
                          <td style={{ padding: '14px 16px', fontSize: '13px', color: '#6b7280' }}>{c.tenue}</td>
                          <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: 600 }}>{formatPrix(c.montant)}</td>
                          <td style={{ padding: '14px 16px' }}>
                            <span style={{ background: statutColors[c.statut]?.bg, color: statutColors[c.statut]?.color, fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '20px' }}>
                              {c.statut}
                            </span>
                          </td>
                          <td style={{ padding: '14px 16px', fontSize: '12px', color: '#9ca3af' }}>{new Date(c.date).toLocaleDateString('fr-FR')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'profil' && (
              <div style={{ maxWidth: '560px' }}>
                <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', padding: '28px', marginBottom: '16px' }}>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', fontWeight: 700, color: 'var(--navy)', marginBottom: '20px' }}>Mon profil public</h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <img src={couturier.photo} alt="" style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }}
                      onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${couturier.prenom}&background=1A3C6E&color=fff`; }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '17px', color: 'var(--navy)' }}>{couturier.prenom} {couturier.nom}</div>
                      <div style={{ fontSize: '13px', color: '#6b7280' }}>{couturier.quartier}, {couturier.ville}</div>
                      {couturier.verified && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#eff6ff', color: '#1d4ed8', fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '20px', marginTop: '4px' }}>
                          <CheckCircle size={10} /> Profil vérifié
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {[['Téléphone', couturier.telephone], ['Ville', couturier.ville], ['Expérience', `${couturier.experience} ans`], ['Tarifs', `${formatPrix(couturier.prixMin)} — ${formatPrix(couturier.prixMax)}`]].map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f3f4f6', fontSize: '14px' }}>
                        <span style={{ color: '#6b7280' }}>{k}</span>
                        <span style={{ fontWeight: 500, color: 'var(--navy)' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button style={{ width: '100%', background: 'var(--navy)', color: 'white', border: 'none', borderRadius: '12px', padding: '14px', fontWeight: 600, fontSize: '14px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                  Modifier mon profil
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
      <style>{`@media(max-width:768px){.dashboard-main{margin-left:0 !important;}}`}</style>
    </>
  );
}
