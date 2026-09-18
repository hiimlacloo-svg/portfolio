import Silk from "@/components/Silk/Silk";

const creatorPosts = [
  "http://xhslink.com/o/wHH3IexPWx",
  "http://xhslink.com/o/8ADPQWmohZi",
  "http://xhslink.com/o/1hBN3VPjSs5",
  "http://xhslink.com/o/9BG3we0671d",
];

const contributions = [
  {
    number: "01",
    title: "Campaign & social planning",
    copy: "Built the rollout plan and independently managed the social workflow from content direction and format planning through artwork, posting and execution.",
  },
  {
    number: "02",
    title: "Paid-media planning",
    copy: "Planned the first campaign flights across Meta, Google Search and LinkedIn, then developed the creative adaptations needed for each channel.",
  },
  {
    number: "03",
    title: "Retail & digital artwork",
    copy: "Designed a connected set of campaign assets for retail displays, social placements, web content, corporate gifting and product discovery.",
  },
  {
    number: "04",
    title: "Creator activation",
    copy: "Coordinated six Malaysia-based content creators and translated the campaign story into clear, platform-ready creator deliverables.",
  },
  {
    number: "05",
    title: "Website content",
    copy: "Created the company website blog content and supporting campaign visuals to connect paid and social traffic with the product story.",
  },
  {
    number: "06",
    title: "Hands-on rollout",
    copy: "Carried the campaign across formats and markets while keeping the visual system consistent from planning to final delivery.",
  },
];

const results = [
  { value: "73.5K", label: "Meta impressions" },
  { value: "39.5K", label: "People reached on Meta" },
  { value: "1.8K", label: "Meta landing-page views" },
  { value: "18K", label: "Google Search impressions" },
  { value: "658", label: "Google Search clicks" },
  { value: "06", label: "Malaysia creators activated" },
];

export default function MidAutumnCaseStudy() {
  return (
    <main className="site-frame case-study-page">
      <div className="site-silk" aria-hidden="true">
        <Silk
          speed={5}
          scale={0.6}
          color="#434458"
          noiseIntensity={1.5}
          rotation={1.94}
        />
      </div>
      <div className="site-silk-scrim" aria-hidden="true" />

      <header className="case-header shell">
        <a className="wordmark" href="/" aria-label="Back to Lac Loo portfolio">
          <span className="wordmark-icon">L</span>
          <strong>Lac Loo</strong>
        </a>
        <a className="case-back" href="/#work">
          ← Back to selected work
        </a>
      </header>

      <article>
        <section className="case-hero shell">
          <div className="case-hero-copy">
            <p className="case-kicker">Case study / Integrated campaign / 2026</p>
            <h1>Mid-Autumn<br />2026</h1>
            <p className="case-lead">
              Building one connected festive campaign across paid media, social,
              creator content, retail and the company website.
            </p>
          </div>

          <div className="case-hero-meta">
            <div>
              <span>Role</span>
              <strong>Graphic Designer &amp;<br />Campaign Coordinator</strong>
            </div>
            <div>
              <span>Company</span>
              <strong>SUNS Singapore</strong>
            </div>
            <div>
              <span>Markets</span>
              <strong>Singapore &amp; Malaysia</strong>
            </div>
            <div>
              <span>Scope</span>
              <strong>Planning · Design · Paid · Creators · Web</strong>
            </div>
          </div>

          <figure className="case-hero-media">
            <img
              src="/projects/mid-autumn-2026.jpg"
              alt="SUNS Mid-Autumn gift sets presented in a Peranakan-inspired setting"
            />
          </figure>
        </section>

        <section className="case-section shell case-brief">
          <div className="case-section-label">01 / The brief</div>
          <div className="case-section-copy">
            <h2>A festive launch needed to work as one system—not a collection of separate assets.</h2>
            <p>
              The campaign had to introduce multiple gift-set stories while supporting
              awareness, product discovery and corporate gifting across physical retail,
              social media, paid channels and regional creator content.
            </p>
            <p>
              My role connected the planning and making: I translated the campaign into
              a practical channel rollout, designed the visual assets, supported the paid
              launches and coordinated the Malaysia creator activation.
            </p>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-label">02 / My contribution</div>
          <div className="case-contribution-grid">
            {contributions.map((item) => (
              <article className="case-contribution" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section shell case-results-section">
          <div className="case-section-label">03 / Selected results</div>
          <div>
            <div className="case-results-intro">
              <h2>The first paid-campaign baseline for the company account.</h2>
              <p>
                With no historical campaign benchmark, the first objective was to build
                a measurable starting point across awareness and traffic. Results below
                are rounded and reported without commercially sensitive account details.
              </p>
            </div>
            <div className="case-results-grid">
              {results.map((item) => (
                <article className="case-result" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
            <p className="case-data-note">
              Meta campaign reporting: 1 Jun–31 Aug 2026. Google Ads reporting through
              1 Sep 2026. Spend, cost metrics, targeting, search terms and account IDs
              are intentionally omitted.
            </p>
          </div>
        </section>

        <section className="case-section shell case-assets-section">
          <div className="case-section-label">04 / Campaign system</div>
          <div className="case-assets-grid">
            <figure className="case-asset case-asset-wide">
              <video
                src="/projects/mid-autumn/campaign-motion.mp4"
                poster="/projects/mid-autumn-2026.jpg"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
              />
              <figcaption>
                <span>Motion &amp; digital</span>
                10-second campaign motion asset
              </figcaption>
            </figure>

            <figure className="case-asset case-asset-landscape">
              <img
                src="/projects/mid-autumn/retail-display.jpg"
                alt="Landscape Mid-Autumn retail artwork with Peranakan shophouses"
                loading="lazy"
              />
              <figcaption>
                <span>Retail</span>
                In-store display artwork
              </figcaption>
            </figure>

            <figure className="case-asset case-asset-portrait">
              <img
                src="/projects/mid-autumn/product-discovery.jpg"
                alt="Mid-Autumn gift-set artwork with a QR code for product discovery"
                loading="lazy"
              />
              <figcaption>
                <span>Product discovery</span>
                QR-led retail and digital artwork
              </figcaption>
            </figure>

            <figure className="case-asset case-asset-portrait">
              <img
                src="/projects/mid-autumn/greeting-card.jpg"
                alt="Bilingual SUNS Mid-Autumn greeting card"
                loading="lazy"
              />
              <figcaption>
                <span>Corporate gifting</span>
                Bilingual greeting card
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="case-section shell case-creators-section">
          <div className="case-section-label">05 / Live creator content</div>
          <div className="case-creators-copy">
            <h2>Six creators activated in Malaysia.</h2>
            <p>
              A regional creator layer extended the campaign beyond owned channels.
              Four selected live examples are linked below; creator fees and internal
              commercial terms are not disclosed.
            </p>
          </div>
          <div className="case-creator-links">
            {creatorPosts.map((href, index) => (
              <a href={href} target="_blank" rel="noreferrer" key={href}>
                <span>Live creator post</span>
                <strong>0{index + 1} ↗</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="case-section shell case-outcome">
          <div className="case-section-label">06 / What this demonstrates</div>
          <div className="case-outcome-copy">
            <p>
              I can move between strategy and execution—building a usable campaign plan,
              designing the visual system, adapting it across channels and helping the
              work reach the market.
            </p>
            <div className="case-outcome-tags" aria-label="Project strengths">
              <span>End-to-end ownership</span>
              <span>Cross-market coordination</span>
              <span>Campaign design systems</span>
              <span>Performance-minded execution</span>
            </div>
          </div>
        </section>

        <footer className="case-footer">
          <div className="shell">
            <span>Next</span>
            <a href="/#project-02">Explore e-commerce work <b>↗</b></a>
          </div>
        </footer>
      </article>
    </main>
  );
}
