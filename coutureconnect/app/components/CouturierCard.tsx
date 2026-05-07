'use client';
import Link from 'next/link';
import { MapPin, Star, CheckCircle, Clock } from 'lucide-react';
import { Couturier, formatPrix, SPECIALITES_LABELS } from '@/lib/data';

export default function CouturierCard({ couturier }: { couturier: Couturier }) {
  return (
    <Link href={`/couturier/${couturier.id}`}>
      <div className="card-hover" style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', cursor: 'pointer', height: '100%' }}>
        {/* Photo header */}
        <div style={{ position: 'relative', height: '180px', background: 'var(--sand)' }}>
          <img
            src={couturier.photo}
            alt={`${couturier.prenom} ${couturier.nom}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${couturier.prenom}+${couturier.nom}&background=1A3C6E&color=fff&size=200`; }}
          />
          <div style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', gap: '6px', flexDirection: 'column', alignItems: 'flex-end' }}>
            {couturier.verified && (
              <span style={{ background: 'var(--navy)', color: 'white', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle size={10} /> Vérifié
              </span>
            )}
            <span style={{ background: couturier.disponible ? '#10b981' : '#6b7280', color: 'white', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '20px' }}>
              {couturier.disponible ? 'Disponible' : 'Occupé'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '16px' }}>
          <div style={{ marginBottom: '8px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>
              {couturier.prenom} {couturier.nom}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <MapPin size={13} color="#6b7280" />
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{couturier.quartier}, {couturier.ville}</span>
            </div>
          </div>

          {/* Stars */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', gap: '1px' }}>
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={13} fill={i <= Math.round(couturier.note) ? '#f59e0b' : 'none'} color={i <= Math.round(couturier.note) ? '#f59e0b' : '#d1d5db'} />
              ))}
            </div>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{couturier.note}</span>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>({couturier.nbAvis} avis)</span>
          </div>

          {/* Specialités */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
            {couturier.specialites.slice(0, 3).map(s => (
              <span key={s} style={{ background: 'var(--orange-pale, #fff7ed)', color: 'var(--orange)', fontSize: '11px', fontWeight: 500, padding: '3px 8px', borderRadius: '20px', border: '1px solid rgba(232,101,10,0.2)' }}>
                {SPECIALITES_LABELS[s]}
              </span>
            ))}
          </div>

          {/* Prix & expérience */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
            <div>
              <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>À partir de</span>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>{formatPrix(couturier.prixMin)}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={13} color="#6b7280" />
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{couturier.experience} ans exp.</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
