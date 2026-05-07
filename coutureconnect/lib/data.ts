export type Specialite = 'femme' | 'homme' | 'enfant' | 'traditionnel' | 'ceremonie';

export interface Couturier {
  id: string;
  nom: string;
  prenom: string;
  photo: string;
  ville: string;
  quartier: string;
  latitude: number;
  longitude: number;
  specialites: Specialite[];
  note: number;
  nbAvis: number;
  prixMin: number;
  prixMax: number;
  bio: string;
  telephone: string;
  experience: number; // années
  disponible: boolean;
  verified: boolean;
  modeles: Modele[];
  avis: Avis[];
}

export interface Modele {
  id: string;
  nom: string;
  photo: string;
  type: Specialite;
  prixEstime: number;
  delaiJours: number;
}

export interface Avis {
  id: string;
  auteur: string;
  note: number;
  commentaire: string;
  date: string;
}

export const VILLES = ['Cotonou', 'Abomey-Calavi', 'Parakou', 'Abomey', 'Porto-Novo', 'Bohicon'];

export const SPECIALITES_LABELS: Record<Specialite, string> = {
  femme: 'Tenues femme',
  homme: 'Tenues homme',
  enfant: 'Tenues enfant',
  traditionnel: 'Traditionnel',
  ceremonie: 'Cérémonie',
};

export const COUTURIERS_MOCK: Couturier[] = [
  {
    id: '1',
    nom: 'Adékpédjou',
    prenom: 'Rosalie',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face',
    ville: 'Cotonou',
    quartier: 'Ganhi',
    latitude: 6.3654,
    longitude: 2.4183,
    specialites: ['femme', 'ceremonie', 'traditionnel'],
    note: 4.9,
    nbAvis: 87,
    prixMin: 5000,
    prixMax: 80000,
    bio: 'Couturière passionnée avec 12 ans d\'expérience dans les tenues de cérémonie et la mode africaine. Spécialiste du wax et des tissus traditionnels du Bénin.',
    telephone: '+229 97 12 34 56',
    experience: 12,
    disponible: true,
    verified: true,
    modeles: [
      { id: 'm1', nom: 'Robe de cérémonie wax', photo: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4470?w=400&h=500&fit=crop', type: 'ceremonie', prixEstime: 45000, delaiJours: 7 },
      { id: 'm2', nom: 'Ensemble pagne brodé', photo: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop', type: 'femme', prixEstime: 25000, delaiJours: 5 },
      { id: 'm3', nom: 'Boubou traditionnel', photo: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop', type: 'traditionnel', prixEstime: 35000, delaiJours: 6 },
    ],
    avis: [
      { id: 'a1', auteur: 'Aminata K.', note: 5, commentaire: 'Travail impeccable ! Ma robe de mariage était exactement comme je l\'imaginais.', date: '2025-03-15' },
      { id: 'a2', auteur: 'Fidèle D.', note: 5, commentaire: 'Très professionnelle, respecte les délais. Je recommande vivement !', date: '2025-02-28' },
      { id: 'a3', auteur: 'Marie G.', note: 4, commentaire: 'Excellent travail sur l\'ensemble wax. Quelques ajustements nécessaires mais résultat final parfait.', date: '2025-01-10' },
    ],
  },
  {
    id: '2',
    nom: 'Hounkanrin',
    prenom: 'Théodore',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    ville: 'Abomey-Calavi',
    quartier: 'Togba',
    latitude: 6.4474,
    longitude: 2.3559,
    specialites: ['homme', 'traditionnel'],
    note: 4.7,
    nbAvis: 54,
    prixMin: 8000,
    prixMax: 120000,
    bio: 'Tailleur homme expert depuis 15 ans. Costume trois-pièces, agbada traditionnel, tenue de bureau. Maîtrise des coupes européennes et africaines.',
    telephone: '+229 96 55 44 33',
    experience: 15,
    disponible: true,
    verified: true,
    modeles: [
      { id: 'm4', nom: 'Costume trois-pièces', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop', type: 'homme', prixEstime: 85000, delaiJours: 10 },
      { id: 'm5', nom: 'Agbada brodé', photo: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&h=500&fit=crop', type: 'traditionnel', prixEstime: 55000, delaiJours: 7 },
    ],
    avis: [
      { id: 'a4', auteur: 'Romuald A.', note: 5, commentaire: 'Mon costume de mariage était magnifique. Merci Théodore !', date: '2025-04-01' },
      { id: 'a5', auteur: 'Isidore M.', note: 4, commentaire: 'Bonne qualité, bon rapport qualité/prix.', date: '2025-03-10' },
    ],
  },
  {
    id: '3',
    nom: 'Dèdèhounou',
    prenom: 'Clarisse',
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop&crop=face',
    ville: 'Cotonou',
    quartier: 'Akpakpa',
    latitude: 6.3499,
    longitude: 2.4316,
    specialites: ['enfant', 'femme'],
    note: 4.8,
    nbAvis: 43,
    prixMin: 3000,
    prixMax: 30000,
    bio: 'Spécialiste des tenues pour enfants et tenues quotidiennes femme. Tissus confortables, finitions impeccables. Livraison possible dans Cotonou.',
    telephone: '+229 95 78 90 12',
    experience: 8,
    disponible: false,
    verified: true,
    modeles: [
      { id: 'm6', nom: 'Robe fillette festive', photo: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=500&fit=crop', type: 'enfant', prixEstime: 12000, delaiJours: 4 },
      { id: 'm7', nom: 'Ensemble wax enfant', photo: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=500&fit=crop', type: 'enfant', prixEstime: 15000, delaiJours: 5 },
    ],
    avis: [
      { id: 'a6', auteur: 'Joëlle T.', note: 5, commentaire: 'Les tenues pour mes enfants étaient adorables. Très recommandée !', date: '2025-03-20' },
    ],
  },
  {
    id: '4',
    nom: 'Gbèdji',
    prenom: 'Marcelline',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    ville: 'Porto-Novo',
    quartier: 'Centre-ville',
    latitude: 6.4969,
    longitude: 2.6289,
    specialites: ['femme', 'ceremonie', 'traditionnel'],
    note: 4.6,
    nbAvis: 31,
    prixMin: 6000,
    prixMax: 90000,
    bio: 'Couturière créative spécialisée dans les tenues de cérémonie haut de gamme. Expertise particulière dans les broderies et ornements.',
    telephone: '+229 94 22 33 44',
    experience: 10,
    disponible: true,
    verified: false,
    modeles: [
      { id: 'm8', nom: 'Robe de gala brodée', photo: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop', type: 'ceremonie', prixEstime: 60000, delaiJours: 14 },
    ],
    avis: [
      { id: 'a7', auteur: 'Carine O.', note: 5, commentaire: 'Magnifique travail sur ma robe de gala !', date: '2025-02-14' },
    ],
  },
  {
    id: '5',
    nom: 'Azonhiho',
    prenom: 'Pascal',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    ville: 'Parakou',
    quartier: 'Zongo',
    latitude: 9.3373,
    longitude: 2.6280,
    specialites: ['homme', 'femme', 'traditionnel'],
    note: 4.5,
    nbAvis: 28,
    prixMin: 4000,
    prixMax: 60000,
    bio: 'Couturier polyvalent à Parakou, maîtrise de toutes les tenues. Spécialiste des tissus du nord du Bénin et des tenues de prestige.',
    telephone: '+229 93 11 22 33',
    experience: 9,
    disponible: true,
    verified: true,
    modeles: [
      { id: 'm9', nom: 'Boubou grand boubou', photo: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop', type: 'traditionnel', prixEstime: 40000, delaiJours: 8 },
    ],
    avis: [
      { id: 'a8', auteur: 'Saliou B.', note: 4, commentaire: 'Bon travail, je recommande.', date: '2025-01-20' },
    ],
  },
  {
    id: '6',
    nom: 'Tossou',
    prenom: 'Félicienne',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
    ville: 'Abomey-Calavi',
    quartier: 'Godomey',
    latitude: 6.3884,
    longitude: 2.3403,
    specialites: ['femme', 'enfant'],
    note: 4.4,
    nbAvis: 19,
    prixMin: 2500,
    prixMax: 25000,
    bio: 'Jeune couturière dynamique, prix abordables et qualité assurée. Tenues du quotidien et scolaires.',
    telephone: '+229 92 44 55 66',
    experience: 4,
    disponible: true,
    verified: false,
    modeles: [],
    avis: [],
  },
];

export function formatPrix(prix: number): string {
  return new Intl.NumberFormat('fr-FR').format(prix) + ' FCFA';
}

export function renderStars(note: number): string {
  return '★'.repeat(Math.round(note)) + '☆'.repeat(5 - Math.round(note));
}
