import { Heart, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const MessageSection = () => {
  const messages = [
    {
      text: "S'il m'était donné la possibilité de te rendre heureuse de quelconque manière, je le ferais pour revoir ton sourire, toi mon Endless Love ❤️",
      icon: Heart,
      className: "md:col-span-3 max-w-2xl mx-auto special-message"
    },
    {
      text: "Chaque battement de mon cœur résonne au rythme de ton sourire, illuminant ma vie de bonheur infini ✨",
      icon: Sparkles,
    },
    {
      text: "Dans tes yeux, je vois mon avenir. Dans ton sourire, je trouve ma joie. Dans ton amour, je découvre l'infini 💫",
      icon: Heart,
    },
    {
      text: "Tu es ma muse, mon inspiration, ma raison de vouloir être meilleur chaque jour �",
      icon: Sparkles,
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="name-celebration mb-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto] mb-8">
          ✨ Une étoile nommée ✨
        </h2>
        
        <div className="name-parts space-y-6 max-w-3xl mx-auto">
          <div className="name-part">
            <h3 className="text-2xl font-semibold text-primary mb-2 relative group">
              NOUKOUYEKPON
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10 px-2 py-1 rounded">
                Nom de famille royal
              </span>
            </h3>
            <p className="text-muted-foreground italic">
              "La force ancestrale qui guide et protège"
            </p>
          </div>

          <div className="name-part">
            <h3 className="text-2xl font-semibold text-secondary mb-2 relative group">
              Peace
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-secondary/10 px-2 py-1 rounded">
                Don de paix
              </span>
            </h3>
            <p className="text-muted-foreground italic">
              "Celle qui apporte la sérénité et l'harmonie partout où elle va"
            </p>
          </div>

          <div className="name-part">
            <h3 className="text-2xl font-semibold text-accent mb-2 relative group">
              Succès
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-accent/10 px-2 py-1 rounded">
                Destinée de réussite
              </span>
            </h3>
            <p className="text-muted-foreground italic">
              "La réussite incarnée, destinée à accomplir de grandes choses"
            </p>
          </div>

          <div className="name-part">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2 relative group">
              Kpètchehoue
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 px-2 py-1 rounded">
                Nom traditionnel sacré
              </span>
            </h3>
            <p className="text-muted-foreground italic">
              "L'héritage précieux, porteur de sagesse et de bénédictions"
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
        Messages d'Amour
      </h2>
      
      <div className="grid gap-6 md:grid-cols-3">
        {messages.map((message, index) => {
          const Icon = message.icon;
          return (
            <Card
              key={index}
              className={cn(
                "p-6 bg-card/80 backdrop-blur-sm border-2 border-primary/20",
                "hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
                "transition-all duration-300 hover:scale-105 group",
                "animate-zoom-in",
                message.className
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:animate-pulse-glow">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-foreground leading-relaxed">
                  {message.text}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Love Counter */}
      <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/30 animate-zoom-in">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-2">Ensemble depuis</p>
          <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            3 ans
          </p>
          <p className="text-xl text-muted-foreground mt-2">
            Depuis 2021 💝
          </p>
          <div className="mt-6 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="h-6 w-6 text-primary fill-primary animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MessageSection;
