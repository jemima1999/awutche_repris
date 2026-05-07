'use client';
import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, MapPin, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import CouturierCard from '../components/CouturierCard';
import { COUTURIERS_MOCK, VILLES, SPECIALITES_LABELS, Specialite } from '@/lib/data';

export default function RecherchePage() {
  const [ville, setVille] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [disponible, setDisponible] = useState(false);
  const [verified, setVerified] = useState(false);
  const [prixMax, setPrixMax] = useState(200000);
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    return COUTURIERS_MOCK.filter(c => {
      if (ville && c.ville !== ville) return false;
      if (specialite && !c.specialites.includes(specialite as Specialite)) return false;
      if (disponible && !c.disponible) return false;
      if (verified && !c.verified) return false;
      if (c.prixMin > prixMax) return false;
      if (search && !`${c.prenom} ${c.nom} ${c.quartier}`.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [ville, specialite, disponible, verified, prixMax, search]);

  const activeFilters = [ville, specialite, disponible ? 'Disponible' : '', verified ? 'Vérifié' : ''].filter(Boolean);

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
        {/* Search header */}
        <div className="pattern-bg" style={{ padding: '36px 0 28px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: 'white', marginBottom: '20px' }}>
              Trouver un couturier
            </h1>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px', background: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px' }}>
                <Search size={18} color="#6b7280" />
                <input
                  type="text"
                  placeholder="Nom, quartier..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  style={{ border: 'none', outline: 'none', fontSize: '14px', flex: 1, fontFamily: 'DM Sans, sans-serif' }}
                />
              </div>
              <select
                value={ville}
                onChange={e => setVille(e.target.value)}
                style={{ background: 'white', border: 'none', borderRadius: '10px', padding: '10px 16px', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', color: '#1a1a2e', minWidth: '160px' }}
              >
                <option value="">Toutes les villes</option>
                {VILLES.map(v => <option key={v}>{v}</option>)}
              </select>
              <select
                value={specialite}
                onChange={e => setSpecialite(e.target.value)}
                style={{ background: 'white', border: 'none', borderRadius: '10px', padding: '10px 16px', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', color: '#1a1a2e', minWidth: '180px' }}
              >
                <option value="">Toutes spécialités</option>
                {(Object.entries(SPECIALITES_LABELS) as [Specialite, string][]).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
              <button
                onClick={() => setShowFilters(!showFilters)}
                style={{ background: showFilters ? 'var(--orange)' : 'white', color: showFilters ? 'white' : '#1a1a2e', border: 'none', borderRadius: '10px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}
              >
                <SlidersHorizontal size={16} /> Filtres {activeFilters.length > 0 && `(${activeFilters.length})`}
              </button>
            </div>

            {showFilters && (
              <div style={{ background: 'white', borderRadius: '12px', padding: '20px', marginTop: '12px', display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'center' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#1a1a2e' }}>
                  <input type="checkbox" checked={disponible} onChange={e => setDisponible(e.target.checked)} style={{ accentColor: 'var(--orange)' }} />
                  Disponible maintenant
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#1a1a2e' }}>
                  <input type="checkbox" checked={verified} onChange={e => setVerified(e.target.checked)} style={{ accentColor: 'var(--orange)' }} />
                  Couturiers vérifiés
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '200px' }}>
                  <span style={{ fontSize: '13px', color: '#6b7280', whiteSpace: 'nowrap' }}>Prix max :</span>
                  <input type="range" min={5000} max={200000} step={5000} value={prixMax} onChange={e => setPrixMax(Number(e.target.value))}
                    style={{ flex: 1, accentColor: 'var(--orange)' }} />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)', whiteSpace: 'nowrap' }}>
                    {new Intl.NumberFormat('fr-FR').format(prixMax)} FCFA
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Active filters pills */}
        {activeFilters.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', color: '#6b7280' }}>Filtres actifs :</span>
            {ville && <span style={{ background: '#eff6ff', color: '#1e40af', borderRadius: '20px', padding: '4px 12px', fontSize: '12px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>{ville} <X size={12} style={{ cursor: 'pointer' }} onClick={() => setVille('')} /></span>}
            {specialite && <span style={{ background: '#fff7ed', color: 'var(--orange)', borderRadius: '20px', padding: '4px 12px', fontSize: '12px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>{SPECIALITES_LABELS[specialite as Specialite]} <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSpecialite('')} /></span>}
            {disponible && <span style={{ background: '#f0fdf4', color: '#15803d', borderRadius: '20px', padding: '4px 12px', fontSize: '12px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>Disponible <X size={12} style={{ cursor: 'pointer' }} onClick={() => setDisponible(false)} /></span>}
          </div>
        )}

        {/* Results */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ fontSize: '15px', color: '#6b7280' }}>
              <span style={{ fontWeight: 700, color: '#1a1a2e' }}>{results.length}</span> couturier{results.length !== 1 ? 's' : ''} trouvé{results.length !== 1 ? 's' : ''}
            </p>
          </div>

          {results.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>Aucun résultat</h3>
              <p style={{ color: '#6b7280', fontSize: '15px' }}>Essayez de modifier vos filtres ou d'élargir votre recherche.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {results.map(c => <CouturierCard key={c.id} couturier={c} />)}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
