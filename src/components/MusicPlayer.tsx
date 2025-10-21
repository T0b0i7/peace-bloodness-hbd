import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, SkipForward, SkipBack } from 'lucide-react';
import '@/styles/music-player.css';
import { playlist } from '@/config/playlist';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration || 0);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoaded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoaded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  };

  const seek = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const currentTrack = playlist[currentTrackIndex];
  
  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  const previousTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play().catch((error) => {
          console.log("Erreur lors de la lecture:", error);
          setPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentTrackIndex, playing]);

  // Ajouter un gestionnaire d'événements pour détecter quand l'audio est prêt
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onCanPlay = () => {
      console.log("L'audio peut être joué");
    };

    const onError = (e: Event) => {
      console.log("Erreur de chargement audio:", (e.target as HTMLAudioElement).error);
    };

    audio.addEventListener('canplay', onCanPlay);
    audio.addEventListener('error', onError);

    return () => {
      audio.removeEventListener('canplay', onCanPlay);
      audio.removeEventListener('error', onError);
    };
  }, []);

  const format = (s: number) => {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  return (
    <div className="music-player fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <audio ref={audioRef} src={currentTrack.src} loop />

      <div className="player-card">
        <div className="player-controls">
          <button
            onClick={previousTrack}
            className="control-button"
            aria-label="Previous track"
          >
            <SkipBack size={20} />
          </button>
          <button
            onClick={togglePlay}
            className="control-button"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button
            onClick={nextTrack}
            className="control-button"
            aria-label="Next track"
          >
            <SkipForward size={20} />
          </button>
        </div>

        <div className="track-info">
          <div className="track-title">{currentTrack.title}</div>
          <div className="track-artist">{currentTrack.artist}</div>

          <div className="progress-container">
            <div className="progress-row">
              <div className="time-display">{format(currentTime)}</div>
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.01}
                value={currentTime}
                onChange={(e) => seek(Number(e.target.value))}
                className="progress"
                aria-label="Seek"
              />
              <div className="time-display">{format(duration)}</div>
            </div>
          </div>
        </div>

        <div className="controls flex items-center gap-3">
          <div className="visualizer-container">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`visualizer-bar visualizer-bar-${i} ${playing ? 'active' : ''}`}
              />
            ))}
          </div>

          <button onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'} className="p-2">
            {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>

          <div className="flex items-center gap-2">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              aria-label="Volume"
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
