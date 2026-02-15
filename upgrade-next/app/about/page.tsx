import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { Timeline } from "../../components/Timeline";

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="about" />

      <main className="container">
        <section className="panel grid-2">
          <article className="col">
            <p className="kicker">About</p>
            <h1>Operationally grounded. Technically fluent.</h1>
            <p className="lead">
              Over 20 years in technical and operational service management roles, delivering from initial scope through go-live and support.
            </p>
            <p className="lead">
              Focus areas include client onboarding, technical service delivery, governance, and relationship leadership.
            </p>
            <p className="lead">
              I provide a practical bridge between business priorities and technical execution, helping teams maintain quality and momentum.
            </p>
          </article>
          <aside className="col">
            <img src="/img/about-me.png" alt="Nicholas Ward profile" style={{ width: "100%", border: "1px solid var(--line)" }} />
          </aside>
        </section>

        <section className="panel">
          <Timeline />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
