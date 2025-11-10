import { motion } from 'framer-motion';

export default function AnimatedLinesBackground({ colorClass = 'bg-primary/20' }) {
  const lineCount = 4;
  const lines = [...Array(lineCount)];

  return (
    <div 
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none" 
      aria-hidden="true">

      {lines.map((_, i) => {
        const isVertical = Math.random() > 0.5;
        const delay = Math.random() * 2;
        const duration = 4 + Math.random() * 2;

        return (
          <motion.div
            key={i}
            className={`absolute ${colorClass}`}
            style={{
              width: isVertical ? '2px' : '100%',
              height: isVertical ? '100%' : '2px',
              left: isVertical ? `${Math.random() * 100}%` : 0,
              top: isVertical ? 0 : `${Math.random() * 100}%`,
              transformOrigin: isVertical
                ? Math.random() > 0.5
                  ? 'top'
                  : 'bottom'
                : Math.random() > 0.5
                ? 'left'
                : 'right',
              opacity: 0.6,
            }}
            initial={{
              scaleY: isVertical ? 0 : 1,
              scaleX: isVertical ? 1 : 0,
              opacity: 0,
            }}
            animate={{
              scaleY: 1,
              scaleX: 1,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              delay,
              ease: 'linear',
              repeat: Infinity,
              repeatDelay: 5,
            }}
          />
        );
      })}
    </div>
  );
}
