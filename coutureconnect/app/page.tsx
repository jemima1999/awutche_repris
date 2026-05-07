'use client';
import Link from 'next/link';
import { Scissors, Search, MapPin, Star, CheckCircle, ArrowRight, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import CouturierCard from './components/CouturierCard';
import { COUTURIERS_MOCK, SPECIALITES_LABELS } from '@/lib/data';

export default function Home() {
  const topCouturiers = COUTURIERS_MOCK.filter(c => c.verified).slice(0, 3);
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="pattern-bg" style={{ minHeight:'92vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-100px', right:'-100px', width:'500px', height:'500px', borderRadius:'50%', background:'rgba(232,101,10,0.08)', pointerEvents:'none' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px', alignItems:'center' }} className="grid-hero">
              <div className="animate-fade-up">
                <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(232,101,10,0.15)', border:'1px solid rgba(232,101,10,0.3)', borderRadius:'20px', padding:'6px 14px', marginBottom:'24px' }}>
                  <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#E8650A' }} />
                  <span style={{ color:'#f97316', fontSize:'13px', fontWeight:500 }}>Disponible à Cotonou, Calavi, Parakou</span>
                </div>
                <h1 style={{ fontFamily:'Playfair Display, serif', fontSize:'clamp(38px, 5vw, 58px)', fontWeight:700, color:'white', lineHeight:1.15, marginBottom:'20px' }}>
                  Votre couturier <span style={{ color:'var(--orange)', fontStyle:'italic' }}>idéal</span> à portée de clic
                </h1>
                <p style={{ fontSize:'17px', color:'rgba(255,255,255,0.75)', marginBottom:'36px', lineHeight:1.7, maxWidth:'480px' }}>
                  Trouvez, comparez et commandez vos tenues sur mesure auprès de couturiers locaux qualifiés au Bénin.
                </p>
                <div style={{ background:'white', borderRadius:'14px', padding:'6px', display:'flex', gap:'8px', marginBottom:'32px', boxShadow:'0 20px 60px rgba(0,0,0,0.3)', maxWidth:'520px', flexWrap:'wrap' }}>
                  <div style={{ flex:1, minWidth:'140px', display:'flex', alignItems:'center', gap:'10px', padding:'8px 14px' }}>
                    <MapPin size={18} color="#6b7280" />
                    <select style={{ border:'none', outline:'none', fontSize:'14px', color:'#1a1a2e', background:'transparent', flex:1 }}>
                      <option>Votre ville...</option>
                      <option>Cotonou</option><option>Abomey-Calavi</option><option>Parakou</option><option>Porto-Novo</option>
                    </select>
                  </div>
                  <div style={{ width:'1px', background:'#e5e7eb', margin:'8px 0' }} />
                  <div style={{ flex:1, minWidth:'140px', display:'flex', alignItems:'center', gap:'10px', padding:'8px 14px' }}>
                    <Scissors size={18} color="#6b7280" />
                    <select style={{ border:'none', outline:'none', fontSize:'14px', color:'#1a1a2e', background:'transparent', flex:1 }}>
                      <option>Type de tenue...</option>
                      <option>Femme</option><option>Homme</option><option>Enfant</option><option>Traditionnel</option><option>Cérémonie</option>
                    </select>
                  </div>
                  <Link href="/recherche" style={{ background:'var(--orange)', color:'white', padding:'12px 20px', borderRadius:'10px', display:'flex', alignItems:'center', gap:'6px', fontSize:'14px', fontWeight:600, whiteSpace:'nowrap' }}>
                    <Search size={16} /> Rechercher
                  </Link>
                </div>
                <div style={{ display:'flex', gap:'32px', flexWrap:'wrap' }}>
                  {[['200+','Couturiers'],['1 500+','Clients'],['4.8★','Note moy.']].map(([n,l])=>(
                    <div key={l}><div style={{ fontSize:'22px', fontWeight:700, color:'white' }}>{n}</div><div style={{ fontSize:'13px', color:'rgba(255,255,255,0.6)' }}>{l}</div></div>
                  ))}
                </div>
              </div>
              <div style={{ position:'relative', height:'440px' }} className="hidden lg:block">
                <div style={{ position:'absolute', top:0, right:0, width:'260px', background:'white', borderRadius:'16px', padding:'20px', boxShadow:'0 20px 60px rgba(0,0,0,0.25)' }}>
                  <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=220&h=130&fit=crop&crop=face" style={{ width:'100%', height:'130px', objectFit:'cover', borderRadius:'10px', marginBottom:'12px' }} alt="" />
                  <div style={{ fontSize:'15px', fontWeight:700, fontFamily:'Playfair Display,serif', color:'var(--navy)' }}>Rosalie Adékpédjou</div>
                  <div style={{ fontSize:'12px', color:'#6b7280', marginBottom:'8px' }}>📍 Ganhi, Cotonou</div>
                  <div style={{ display:'flex', gap:'2px' }}>{[1,2,3,4,5].map(i=><Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />)}</div>
                </div>
                <div style={{ position:'absolute', bottom:'40px', left:0, width:'200px', background:'var(--orange)', borderRadius:'16px', padding:'18px', boxShadow:'0 16px 40px rgba(232,101,10,0.4)' }}>
                  <div style={{ fontSize:'28px', fontWeight:700, color:'white' }}>3 200</div>
                  <div style={{ fontSize:'13px', color:'rgba(255,255,255,0.85)' }}>Commandes réalisées</div>
                  <div style={{ marginTop:'8px', display:'flex', alignItems:'center', gap:'6px' }}>
                    <TrendingUp size={14} color="rgba(255,255,255,0.8)" />
                    <span style={{ fontSize:'12px', color:'rgba(255,255,255,0.8)' }}>+24% ce mois</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ background:'var(--cream,#faf8f4)', padding:'80px 0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ textAlign:'center', marginBottom:'56px' }}>
              <span style={{ color:'var(--orange)', fontSize:'13px', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em' }}>Comment ça marche</span>
              <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(28px,4vw,40px)', fontWeight:700, color:'var(--navy)', marginTop:'8px' }}>Simple, rapide, fiable</h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'32px' }}>
              {[
                { step:'01', icon:<Search size={26} color="white" />, title:'Recherchez', desc:'Filtrez par ville, spécialité, type de tenue et budget.' },
                { step:'02', icon:<Users size={26} color="white" />, title:'Comparez', desc:'Consultez les profils, portfolios et avis des couturiers.' },
                { step:'03', icon:<Scissors size={26} color="white" />, title:'Commandez', desc:'Envoyez votre demande et discutez des détails directement.' },
                { step:'04', icon:<CheckCircle size={26} color="white" />, title:'Recevez', desc:'Récupérez votre tenue. Payez via Mobile Money.' },
              ].map(({ step, icon, title, desc })=>(
                <div key={step} style={{ textAlign:'center' }}>
                  <div style={{ position:'relative', display:'inline-block', marginBottom:'20px' }}>
                    <div style={{ width:'64px', height:'64px', borderRadius:'16px', background:'var(--navy)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto' }}>{icon}</div>
                    <div style={{ position:'absolute', top:'-8px', right:'-8px', width:'22px', height:'22px', borderRadius:'50%', background:'var(--orange)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px', fontWeight:700, color:'white' }}>{step}</div>
                  </div>
                  <h3 style={{ fontSize:'17px', fontWeight:700, fontFamily:'Playfair Display,serif', color:'var(--navy)', marginBottom:'8px' }}>{title}</h3>
                  <p style={{ fontSize:'14px', color:'var(--text-secondary)', lineHeight:1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section style={{ padding:'80px 0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'40px', flexWrap:'wrap', gap:'16px' }}>
              <div>
                <span style={{ color:'var(--orange)', fontSize:'13px', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em' }}>Catégories</span>
                <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(26px,4vw,36px)', fontWeight:700, color:'var(--navy)', marginTop:'8px' }}>Tout type de tenue</h2>
              </div>
              <Link href="/recherche" style={{ display:'flex', alignItems:'center', gap:'6px', color:'var(--orange)', fontWeight:600, fontSize:'14px' }}>Voir tout <ArrowRight size={16} /></Link>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:'16px' }}>
              {[
                { type:'femme', emoji:'👗', color:'#fce7f3', border:'#f9a8d4', text:'#be185d' },
                { type:'homme', emoji:'👔', color:'#eff6ff', border:'#93c5fd', text:'#1e40af' },
                { type:'enfant', emoji:'🧒', color:'#f0fdf4', border:'#86efac', text:'#15803d' },
                { type:'traditionnel', emoji:'🪡', color:'#fff7ed', border:'#fdba74', text:'#c2410c' },
                { type:'ceremonie', emoji:'💫', color:'#faf5ff', border:'#c4b5fd', text:'#7c3aed' },
              ].map(({ type, emoji, color, border, text })=>(
                <Link key={type} href={`/recherche?specialite=${type}`}>
                  <div className="card-hover" style={{ background:color, border:`1px solid ${border}`, borderRadius:'14px', padding:'24px 16px', textAlign:'center' }}>
                    <div style={{ fontSize:'32px', marginBottom:'10px' }}>{emoji}</div>
                    <div style={{ fontSize:'13px', fontWeight:600, color:text }}>{SPECIALITES_LABELS[type as keyof typeof SPECIALITES_LABELS]}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TOP COUTURIERS */}
        <section style={{ background:'var(--sand,#f5f0e8)', padding:'80px 0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'40px', flexWrap:'wrap', gap:'16px' }}>
              <div>
                <span style={{ color:'var(--orange)', fontSize:'13px', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em' }}>Sélection</span>
                <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(26px,4vw,36px)', fontWeight:700, color:'var(--navy)', marginTop:'8px' }}>Couturiers les mieux notés</h2>
              </div>
              <Link href="/recherche" style={{ display:'flex', alignItems:'center', gap:'6px', color:'var(--orange)', fontWeight:600, fontSize:'14px' }}>Voir tous <ArrowRight size={16} /></Link>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'24px' }}>
              {topCouturiers.map(c=><CouturierCard key={c.id} couturier={c} />)}
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section style={{ padding:'80px 0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center' }} className="grid-trust">
              <div>
                <span style={{ color:'var(--orange)', fontSize:'13px', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em' }}>Pourquoi nous</span>
                <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(28px,4vw,40px)', fontWeight:700, color:'var(--navy)', marginTop:'8px', marginBottom:'32px' }}>La confiance au cœur de chaque commande</h2>
                <div style={{ display:'flex', flexDirection:'column', gap:'24px' }}>
                  {[
                    { icon:<ShieldCheck size={20} color="white" />, title:'Couturiers vérifiés', desc:'Chaque couturier est validé par notre équipe avant publication.' },
                    { icon:<Star size={20} color="white" />, title:'Avis authentiques', desc:'Les avis sont déposés uniquement après une commande réelle.' },
                    { icon:<CheckCircle size={20} color="white" />, title:'Paiement sécurisé', desc:'MTN MoMo, Moov Money, FedaPay. Remboursement garanti si problème.' },
                  ].map(({ icon, title, desc })=>(
                    <div key={title} style={{ display:'flex', gap:'16px', alignItems:'flex-start' }}>
                      <div style={{ width:'44px', height:'44px', borderRadius:'12px', background:'var(--orange)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{icon}</div>
                      <div>
                        <div style={{ fontWeight:700, fontSize:'16px', color:'var(--navy)', marginBottom:'4px' }}>{title}</div>
                        <div style={{ fontSize:'14px', color:'var(--text-secondary)', lineHeight:1.6 }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background:'var(--navy)', borderRadius:'20px', padding:'40px', textAlign:'center' }}>
                <div style={{ fontSize:'56px', fontWeight:700, fontFamily:'Playfair Display,serif', color:'white' }}>98%</div>
                <div style={{ color:'rgba(255,255,255,0.7)', fontSize:'16px', marginBottom:'32px' }}>de clients satisfaits</div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                  {[['4.8/5','Note moy.'],['< 24h','Réponse'],['200+','Couturiers'],['0 FCFA','Inscription']].map(([v,l])=>(
                    <div key={l} style={{ background:'rgba(255,255,255,0.08)', borderRadius:'12px', padding:'16px' }}>
                      <div style={{ fontSize:'20px', fontWeight:700, color:'var(--orange)' }}>{v}</div>
                      <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.6)', marginTop:'4px' }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background:'var(--orange)', padding:'80px 0', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-50px', right:'-50px', width:'300px', height:'300px', borderRadius:'50%', background:'rgba(255,255,255,0.08)' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ position:'relative' }}>
            <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(28px,4vw,44px)', fontWeight:700, color:'white', marginBottom:'16px' }}>Vous êtes couturier ?</h2>
            <p style={{ fontSize:'17px', color:'rgba(255,255,255,0.85)', marginBottom:'36px', maxWidth:'500px', margin:'0 auto 36px' }}>
              Rejoignez CoutureConnect gratuitement et développez votre clientèle. Inscription en 5 minutes.
            </p>
            <Link href="/inscription-couturier" style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'white', color:'var(--orange)', padding:'14px 32px', borderRadius:'12px', fontWeight:700, fontSize:'16px' }}>
              <Scissors size={18} /> Créer mon profil gratuitement
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background:'#0d2448', color:'rgba(255,255,255,0.7)', padding:'60px 0 32px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'40px', marginBottom:'40px' }}>
              <div>
                <div style={{ fontFamily:'Playfair Display,serif', fontSize:'22px', fontWeight:700, color:'white', marginBottom:'12px' }}>CoutureConnect</div>
                <p style={{ fontSize:'13px', lineHeight:1.7 }}>La première plateforme béninoise de mise en relation couturiers-clients.</p>
              </div>
              {[
                { title:'Clients', links:['Rechercher un couturier','Catalogue modèles','Comment ça marche'] },
                { title:'Couturiers', links:['Créer mon profil','Dashboard','Guide du couturier'] },
                { title:'Contact', links:['contact@coutureconnect.bj','+229 97 00 00 00','Cotonou, Bénin'] },
              ].map(({ title, links })=>(
                <div key={title}>
                  <div style={{ color:'white', fontWeight:600, fontSize:'14px', marginBottom:'16px' }}>{title}</div>
                  <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                    {links.map(l=><span key={l} style={{ fontSize:'13px' }}>{l}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'24px', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'12px' }}>
              <div style={{ fontSize:'13px' }}>© 2025 CoutureConnect. Tous droits réservés.</div>
              <div style={{ fontSize:'13px' }}>Fait avec ❤️ au Bénin</div>
            </div>
          </div>
        </footer>
      </main>
      <style>{`@media(max-width:768px){.grid-hero,.grid-trust{grid-template-columns:1fr !important;}}`}</style>
    </>
  );
}
