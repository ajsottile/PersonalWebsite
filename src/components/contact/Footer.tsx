export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-6 text-center text-sm text-white/40">
      <p>&copy; {new Date().getFullYear()} Anthony Sottile. Built with Next.js, Tailwind CSS & Framer Motion.</p>
    </footer>
  );
}
