import { Link } from "wouter";

export default function Header() {
  return (
    <header>
      <h1>S.P.E.A.R.™ Protocol</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/demo">Demo</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
