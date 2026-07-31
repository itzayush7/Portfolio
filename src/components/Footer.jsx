export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} Ayush Mishra. All rights reserved.
        </p>
        <p className="text-slate-500 dark:text-slate-500 text-sm mt-2 md:mt-0">
          Designed and built with ❤️
        </p>
      </div>
    </footer>
  );
}
