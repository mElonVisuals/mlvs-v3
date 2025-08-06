export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="glassmorphism rounded-lg p-8 border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
          <span className="text-lg font-semibold text-white">Loading mlvs.me...</span>
        </div>
      </div>
    </div>
  );
}
