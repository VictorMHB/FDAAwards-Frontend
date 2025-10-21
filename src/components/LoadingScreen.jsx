export default function LoadingScreen() {
  return (
    <div className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-dark-bg
            transition-opacity duration-500">
      <div className="text-center">
        <h1 className="
                text-5xl lg:text-7xl font-title font-bold tracking-widest
                text-primary animate-pulse">
          FDA <span className="text-white">AWARDS</span>
        </h1>
        <p className="text-silver mt-4 text-sm uppercase tracking-wider">
          Carregando...
        </p>
      </div>
    </div>
  );
}
