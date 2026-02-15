import Link from "next/link";

type SiteHeaderProps = {
  active?: "home" | "about" | "contact";
};

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="header">
      <div className="container header-inner">
        <strong>Nicholas Ward</strong>
        <nav className="nav">
          <Link className={active === "home" ? "nav-active" : ""} href="/">
            Home
          </Link>
          <Link className={active === "about" ? "nav-active" : ""} href="/about">
            About
          </Link>
          <Link className={active === "contact" ? "nav-active" : ""} href="/contact">
            Contact
          </Link>
        </nav>
        <a className="btn" href="/ab-wow-2/index.html">
          Variant C
        </a>
      </div>
    </header>
  );
}
