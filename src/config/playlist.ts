export interface Track {
  src: string;
  title: string;
  artist: string;
}

export const playlist: Track[] = [
  { 
    src: '/song/song1 (1).mp3',
    title: 'Notre première chanson',
    artist: 'Douce Mélodie'
  },
  {
    src: '/song/song1 (2).mp3',
    title: 'Moment magique',
    artist: 'Souvenirs Précieux'
  }
];