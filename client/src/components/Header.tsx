import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">S.P.E.A.R.™ Protocol</h1>
          <nav className="flex space-x-8">
            <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/demo" className="text-slate-600 hover:text-blue-600 transition-colors">Demo</Link>
            <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
