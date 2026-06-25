import { Sparkles, PlusCircle, TrendingUp, Lightbulb } from 'lucide-react';

export default function HabitTrackerHero() {
  return (
    <section className="mx-auto w-full max-w-md px-4 pt-6 pb-4">
      {/* AI Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 p-[1.5px]">
          <div className="flex h-full w-full items-center gap-2.5 rounded-full bg-white px-4 py-3">
            <Sparkles className="h-4 w-4 shrink-0 text-violet-400" />
            <input
              type="text"
              placeholder="Ask Advizmo AI..."
              className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Hero Action Cards */}
      <div className="grid grid-cols-3 gap-3">
        <HabitCard
          icon={<PlusCircle className="h-5 w-5" />}
          label="New Habit"
          color="emerald"
        />
        <HabitCard
          icon={<TrendingUp className="h-5 w-5" />}
          label="Progress"
          color="sky"
        />
        <HabitCard
          icon={<Lightbulb className="h-5 w-5" />}
          label="Insights"
          color="amber"
        />
      </div>
    </section>
  );
}

function HabitCard({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  color: 'emerald' | 'sky' | 'amber';
}) {
  const colorMap = {
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200/60',
      icon: 'text-emerald-500',
      hover: 'hover:bg-emerald-100/70 hover:border-emerald-300/80',
      active: 'active:scale-[0.97]',
    },
    sky: {
      bg: 'bg-sky-50',
      border: 'border-sky-200/60',
      icon: 'text-sky-500',
      hover: 'hover:bg-sky-100/70 hover:border-sky-300/80',
      active: 'active:scale-[0.97]',
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-200/60',
      icon: 'text-amber-500',
      hover: 'hover:bg-amber-100/70 hover:border-amber-300/80',
      active: 'active:scale-[0.97]',
    },
  };

  const c = colorMap[color];

  return (
    <button
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border p-4
        ${c.bg} ${c.border} ${c.hover} ${c.active}
        transition-all duration-200 ease-out cursor-pointer select-none`}
    >
      <span className={c.icon}>{icon}</span>
      <span className="text-xs font-medium text-gray-600">{label}</span>
    </button>
  );
}
