import { Cake, Heart } from 'lucide-react';
import PhotoSlider from '@/components/PhotoSlider';
import Confetti from '@/components/Confetti';
import Balloons from '@/components/Balloons';
import Sparkles from '@/components/Sparkles';
import MusicPlayer from '@/components/MusicPlayer';
import MessageSection from '@/components/MessageSection';
const Index = () => {
  const photos = [
    { src: '/img/img (1).jpg', title: 'Selfie Rayonnant', description: "Un sourire qui illumine chaque instant 💝" },
    { src: '/img/img (2).jpg', title: 'Moment de Douceur', description: "La beauté naturelle dans toute sa splendeur ✨" },
    { src: '/img/img (3).jpg', title: 'Regard Pétillant', description: "Ces yeux qui parlent d'amour 🦋" },
    { src: '/img/img (4).jpg', title: 'Instant Précieux', description: "Chaque moment avec toi est un trésor 💖" },
    { src: '/img/img (5).jpg', title: 'Charme et Élégance', description: "Ta grâce naturelle me fascine 🌹" },
    { src: '/img/img (6).jpg', title: 'Sourire Enchanteur', description: "Ton sourire est ma lumière quotidienne ⭐" },
    { src: '/img/img (7).jpg', title: 'Moment de Joie', description: "La joie pure dans ton regard 🎀" },
    { src: '/img/img (8).jpg', title: 'Beauté Naturelle', description: "Simplement toi, simplement magnifique 💫" },
    { src: '/img/img (9).jpg', title: 'Instant Magique', description: "Ces moments où le temps s'arrête 🌟" },
    { src: '/img/img (10).jpg', title: 'Douceur Infinie', description: "Ta douceur me touche au cœur 💕" },
    { src: '/img/img (11).jpg', title: 'Regard Profond', description: "Des yeux qui racontent mille histoires 🎭" },
    { src: '/img/img (12).jpg', title: 'Beauté Rayonnante', description: "Tu illumines chaque instant de ma vie ✨" },
    { src: '/img/img (13).jpg', title: 'Instant de Bonheur', description: "Le bonheur à l'état pur 🎈" },
    { src: '/img/img (14).jpg', title: 'Charme Naturel', description: "Une beauté qui vient du cœur 🌺" },
    { src: '/img/img (15).jpg', title: 'Moment Précieux', description: "Chaque seconde avec toi est un cadeau 🎁" },
    { src: '/img/img (16).jpg', title: 'Amour Éternel', description: "Mon amour pour toi grandit chaque jour 💘" },
    { src: '/img/img (17).jpg', title: 'Lumière Arc-en-ciel', description: "Ta présence colore ma vie de mille nuances 🌈" },
    { src: '/img/img (18).jpg', title: 'Danse de Couleurs', description: "Une aura magique qui t'entoure ✨" },
    { src: '/img/img (19).jpg', title: 'Instant Magique', description: "La magie dans tes mouvements 💫" },
    { src: '/img/img (20).jpg', title: 'Rêve Éveillé', description: "Un moment suspendu dans le temps 🌙" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Decorative Elements */}
      <Confetti />
      <Balloons />
      <Sparkles />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16 space-y-4 animate-zoom-in">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Cake className="h-12 w-12 md:h-16 md:w-16 text-primary animate-float" />
            <Heart className="h-8 w-8 md:h-12 md:w-12 text-secondary fill-secondary animate-pulse-glow" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto] leading-tight">
            Joyeux Anniversaire
            <br />
            Peace Bloodness !
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            3 ans de bonheur depuis 2021 ✨
          </p>
          
          <div className="flex items-center justify-center gap-2 animate-fade-in">
            {[...Array(7)].map((_, i) => (
              <Heart
                key={i}
                className="h-4 w-4 text-accent fill-accent animate-sparkle"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </header>

        {/* Photo Slider */}
        <section className="mb-16 md:mb-20 animate-zoom-in">
          <PhotoSlider photos={photos} autoPlayInterval={5000} />
        </section>

        {/* Messages Section */}
        <section className="mb-12 md:mb-16">
          <MessageSection />
        </section>

        {/* Footer */}
        <footer className="text-center py-8 animate-fade-in">
          <p className="text-muted-foreground text-sm md:text-base">
            Avec tout mon amour 💕
          </p>
          <div className="mt-4 flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full bg-primary animate-pulse-glow animate-delay-${i}`}
              />
            ))}
          </div>
        </footer>
      </div>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
