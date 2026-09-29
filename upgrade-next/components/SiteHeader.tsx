import Link from "next/link";

type SiteHeaderProps = { active?: "home" | "work" | "about" | "contact" };

export function SiteHeader({ active }: SiteHeaderProps) {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header"><div className="container header-inner">
      <Link className="brand" href="/"><span className="brand-mark">N</span> Nicholas Ward</Link>
      <nav className="nav" aria-label="Primary navigation">
        <Link className={active === "home" ? "nav-active" : ""} href="/">Home</Link>
        <Link className={active === "about" ? "nav-active" : ""} href="/about">About</Link>
        <Link className={active === "contact" ? "nav-active" : ""} href="/contact">Contact</Link>
      </nav>
    </div></header>
  </>;
}
