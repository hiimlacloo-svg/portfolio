import Silk from "@/components/Silk/Silk";
import BorderGlow from "@/components/BorderGlow/BorderGlow";

const creatorPosts = [
  "http://xhslink.com/o/wHH3IexPWx",
  "http://xhslink.com/o/8ADPQWmohZi",
  "http://xhslink.com/o/1hBN3VPjSs5",
  "http://xhslink.com/o/9BG3we0671d",
];

const contributions = [
  {
    number: "01",
    title: "Audience-specific creative",
    copy: "Developed separate B2B and B2C messaging and artwork for corporate gifting, personal gifting and collectors.",
  },
  {
    number: "02",
    title: "Digital campaign assets",
    copy: "Designed digital campaign artwork and prepared creative variations for testing across advertising and social placements.",
  },
  {
    number: "03",
    title: "Retail campaign artwork",
    copy: "Designed A2 foamboard displays and A4 posters, including promotional artwork for the TAKA Mid-Autumn booth.",
  },
  {
    number: "04",
    title: "Website content",
    copy: "Created Shopify blog content and supporting campaign visuals to introduce the collection and support product discovery.",
  },
];

const results = [
  { value: "73.5K", label: "Meta impressions" },
  { value: "39.5K", label: "People reached on Meta" },
  { value: "1.8K", label: "Meta landing-page views" },
  { value: "18K", label: "Google Search impressions" },
  { value: "658", label: "Google Search clicks" },
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
              <strong>Graphic Designer —<br />Campaign Creative &amp; Content</strong>
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
              <strong>B2B &amp; B2C Content · Digital Artwork · Retail Materials · Shopify Content · Ad Testing &amp; Optimisation</strong>
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
              Working from the CMO’s campaign direction, I developed audience-specific
              messaging, digital artwork, retail materials and Shopify blog content,
              translating the brief into consistent creative across online and physical
              touchpoints.
            </p>

            <div className="case-brief-subsection">
              <h3>Audience &amp; objective</h3>
              <div className="case-brief-columns">
                <article>
                  <h4>Audience</h4>
                  <p>
                    Corporate buyers exploring customised Mid-Autumn gifts for clients
                    and teams, and individual shoppers buying gifts for family and friends
                    or collecting the sets themselves. The campaign covered Singapore and
                    Malaysia through digital, retail and creator touchpoints.
                  </p>
                </article>
                <article>
                  <h4>Objective</h4>
                  <p>
                    Build awareness of SUNS and its Mid-Autumn collection, support product
                    discovery and establish an initial awareness and traffic baseline for
                    future campaign comparisons.
                  </p>
                </article>
              </div>
            </div>

            <div className="case-brief-subsection">
              <h3>Campaign approach</h3>
              <div className="case-approach-grid">
                <article>
                  <h4>Channel direction</h4>
                  <p>
                    The CMO selected the channels to build awareness of SUNS. LinkedIn
                    focused on corporate gifting and customisation, while Meta supported
                    brand familiarity and targeted reach. Instagram content also kept
                    existing followers informed about the collection.
                  </p>
                </article>
                <article>
                  <h4>Two audiences, two creative directions</h4>
                  <p>
                    I developed separate messaging and artwork for B2B and B2C audiences.
                    The B2B version focused on corporate gifting and customisation; the B2C
                    version presented the collection as gifts for family and friends, as
                    well as pieces to collect personally.
                  </p>
                </article>
                <article>
                  <h4>Testing from a new baseline</h4>
                  <p>
                    With no previous campaign data available to me, I tested variations in
                    artwork, captions, keywords and scheduling to establish an initial
                    baseline for future campaigns.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-section-label">02 / My contribution</div>
          <div className="case-contribution-content">
            <div className="case-contribution-grid">
              {contributions.map((item) => (
                <article className="case-contribution" key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <div className="case-collaboration">
              <h3>Team collaboration</h3>
              <p>
                Wells, the CMO, provided the campaign direction and selected the channels.
                I developed the campaign artwork and content described above. Calvin
                created the catalogue and contributed selected product images, while the
                external agency handled communication with the Malaysia KOLs.
              </p>
            </div>
          </div>
        </section>

        <section className="case-section shell case-results-section">
          <div className="case-section-label">03 / Selected results</div>
          <div>
            <div className="case-results-intro">
              <h2>An initial reporting baseline for future campaigns.</h2>
              <p>
                No historical campaign reports were available to me for comparison.
                These figures provide an initial reference point for awareness and
                traffic reporting and reflect the campaign as a whole.
              </p>
            </div>
            <div className="case-results-grid">
              {results.map((item, index) => (
                <BorderGlow
                  className="case-result"
                  edgeSensitivity={30}
                  glowColor="40 80 80"
                  backgroundColor={index === 0 ? "#d9ff43" : "#070908"}
                  borderRadius={22}
                  glowRadius={32}
                  glowIntensity={0.9}
                  coneSpread={25}
                  animated={false}
                  colors={["#c084fc", "#f472b6", "#38bdf8"]}
                  key={item.label}
                >
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </BorderGlow>
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

          <div className="case-audience-comparison">
            <div className="case-audience-comparison-heading">
              <span>Creative direction</span>
              <h3>B2B vs B2C creative</h3>
            </div>
            <div className="case-audience-comparison-grid">
              <figure>
                <a
                  href="/projects/mid-autumn/b2b-corporate-gifting.jpg"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Enlarge the B2B corporate gifting creative"
                >
                  <img
                    src="/projects/mid-autumn/b2b-corporate-gifting.jpg"
                    alt="SUNS Mid-Autumn B2B corporate gifting campaign creative"
                    loading="lazy"
                  />
                </a>
                <figcaption>
                  <span>B2B / Corporate gifting</span>
                  <p>Focused on corporate gifting and customisation for client and team gifting.</p>
                </figcaption>
              </figure>
              <figure>
                <a
                  href="/projects/mid-autumn/b2c-personal-gifting.png"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Enlarge the B2C personal gifting creative"
                >
                  <img
                    src="/projects/mid-autumn/b2c-personal-gifting.png"
                    alt="SUNS Mid-Autumn B2C personal gifting campaign creative"
                    loading="lazy"
                  />
                </a>
                <figcaption>
                  <span>B2C / Personal gifting</span>
                  <p>Presented the collection for family and friends, as well as personal collecting.</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="case-section shell case-creators-section">
          <div className="case-section-label">05 / Live creator content</div>
          <div className="case-creators-copy">
            <h2>Malaysia creator activity</h2>
            <p>
              The campaign included six Malaysia-based creators, with creator communication
              handled by the external agency. Four selected live examples are linked below.
            </p>
          </div>
          <BorderGlow
            className="case-result case-creator-count"
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#d9ff43"
            borderRadius={22}
            glowRadius={32}
            glowIntensity={0.9}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            <strong>6</strong>
            <span>Participating creators</span>
          </BorderGlow>
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
              This project demonstrates my ability to translate a marketing brief into
              audience-specific messaging and consistent creative across digital and
              retail. It also shows how I work within a wider campaign team and use
              testing to build an initial evidence base for future decisions.
            </p>
            <div className="case-outcome-tags" aria-label="Project strengths">
              <span>B2B &amp; B2C Creative</span>
              <span>Digital &amp; Retail Design</span>
              <span>Campaign Collaboration</span>
              <span>Creative Testing</span>
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
