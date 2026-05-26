export const PremiumButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900 px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50 active:scale-95"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    <span className="relative z-10">{children}</span>
  </button>
);
