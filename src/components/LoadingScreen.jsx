import { motion } from 'framer-motion';

export default function LoadingScreen() {

  const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: [0, 2.8, 0] },
    transition: {
      duration: 3.2,
      ease: "easeInOut",
    }
  };

  const lineTransitions = {
    horizontal1: { duration: 1, delay: 0.2, ease: "easeInOut" },
    horizontal2: { duration: 1, delay: 0.4, ease: "easeInOut" },
    vertical1: { duration: 1, delay: 0.7, ease: "easeInOut" },
    vertical2: { duration: 1, delay: 0.9, ease: "easeInOut" },
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-bg">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={fadeAnimation.initial}
        animate={fadeAnimation.animate}
        transition={fadeAnimation.transition}
      >
      {/* Linhas Horizontais */}
        <motion.div
          className="absolute top-32 left-0 right-0 h-[2px] bg-secondary origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={lineTransitions.horizontal1}
        />
        <motion.div
          className="absolute bottom-32 left-0 right-0 h-[2px] bg-secondary origin-right"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={lineTransitions.horizontal2}
        />

        {/* Linhas Verticais */}
        <motion.div
          className="absolute top-0 bottom-0 left-32 w-[2px] bg-secondary origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={lineTransitions.vertical1}
        />
        <motion.div
          className="absolute top-0 bottom-0 right-32 w-[2px] bg-secondary origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={lineTransitions.vertical2}
        />
      </motion.div>

      <div className="text-center">
        <h1 className="
                text-5xl lg:text-7xl font-title font-bold tracking-widest
                text-primary">
          FDA <span className="text-white">AWARDS</span>
        </h1>
        <div className="w-136 h-2 bg-white overflow-hidden mx-auto mt-2">
          <motion.div
            className="h-full"
            initial={{ 
              width: '0%', 
              backgroundColor: '#d63b41'
            }}
            animate={{ 
              width: '100%'
            }}
            transition={{ 
              duration: 1.75,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
