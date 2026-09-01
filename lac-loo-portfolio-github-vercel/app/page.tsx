import type { ReactNode } from "react";
import StickyHeader from "./StickyHeader";
import Silk from "@/components/Silk/Silk";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import BorderGlow from "@/components/BorderGlow/BorderGlow";

type ProjectCase = {
  brand: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
};

type Project = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  className?: string;
  visual?: ReactNode;
  status?: string;
  details?: string[][];
  cases?: ProjectCase[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "Mid-Autumn 2026",
    subtitle: "Integrated Campaign System",
    description:
      "A full-funnel launch connecting five gift-set stories across retail, social, paid media and corporate gifting.",
    tags: ["Campaign", "Art Direction", "Paid Media"],
    status: "Campaign in progress · Launching August 2026",
    details: [
      ["Role", "Graphic Designer & Campaign Coordinator"],
      ["Company", "SUNS Singapore"],
      ["Market", "Singapore"],
      [
        "Scope",
        "Campaign visual direction, Shopify content, social assets, paid-ad creatives and retail collateral",
      ],
      [
        "Collaboration",
        "Marketing, retail, regional and external agency teams",
      ],
    ],
    className: "project-feature project-moon",
    visual: (
      <div className="moon-scene">
        <img
          src="/projects/mid-autumn-2026.jpg"
          alt="SUNS Mid-Autumn gift sets presented in a Peranakan-inspired moonlit setting"
        />
        <span className="moon-orbit">MID—AUTUMN / 2026</span>
      </div>
    ),
  },
  {
    number: "02",
    title: "YSG / E-commerce Projects",
    subtitle: "Visual Merchandising & Engagement / YSG",
    description:
      "Selected storefront and campaign work created across Shopee, Lazada and Shopify.",
    tags: ["Store Design", "Shopee · Lazada", "Shopify"],
    cases: [
      {
        brand: "innisfree",
        title: "innisfree E-commerce Campaign Assets",
        description:
          "Designed campaign and promotional banners for Shopee, Lazada and Shopify, and prepared the final assets for platform banner upload.",
        tags: [
          "E-commerce Design",
          "Campaign Assets",
          "Shopee",
          "Lazada",
          "Shopify",
        ],
        image: "/projects/innisfree-vitamin-c.jpg",
        alt: "Innisfree Vitamin C LazMall campaign visual designed by Lac",
      },
      {
        brand: "Murad",
        title: "Murad Official Store Launch",
        description:
          "Created the brand’s e-commerce storefront from the ground up, including store structure, visual assets, product presentation and storefront banner upload.",
        tags: [
          "Store Wireframe",
          "E-commerce Design",
          "Product Content",
        ],
        image: "/projects/murad-store-enhanced.png",
        alt: "Murad Shopee official store designed and launched by Lac",
      },
      {
        brand: "hansgrohe",
        title: "E-commerce Store Revamp",
        description:
          "Refreshed the online storefront and product content to improve visual consistency, product clarity and the overall shopping experience.",
        tags: [
          "Store Revamp",
          "Product Content",
          "E-commerce Design",
          "Platform Banner Upload",
        ],
        image: "/projects/hansgrohe-store.jpg",
        alt: "Hansgrohe marketplace store revamp designed by Lac",
      },
    ],
  },
  {
    number: "03",
    title: "B2K Pet Product",
    subtitle: "E-commerce Design / 2021—23",
    description:
      "Designed long-form e-commerce product listings that translated detailed pet-nutrition information into clear, structured and shopper-friendly visual content.",
    tags: ["Product Listing", "E-commerce", "Pet Care"],
    details: [
      ["Role", "Graphic Designer"],
      [
        "Deliverables",
        "Product listings, educational graphics, campaign assets and print-ready artwork",
      ],
      [
        "Focus",
        "Information hierarchy, product education and e-commerce conversion",
      ],
    ],
    className: "project-feature project-b2k",
    visual: (
      <div className="pet-scene">
        <div className="pet-scene-copy" aria-hidden="true">
          <span>My first chapter</span>
          <strong>Information,<br />made visual.</strong>
          <small>Graphic Designer · Apr 2021—Feb 2023</small>
        </div>
        <figure className="pet-panel pet-panel-one">
          <img
            src="/projects/b2k-pronto-card-v2.jpg"
            alt="Primal Pronto long-form product listing designed by Lac at B2K Pet Product"
            loading="lazy"
          />
          <figcaption>Pronto / Freeze-dried raw</figcaption>
        </figure>
        <figure className="pet-panel pet-panel-two">
          <img
            src="/projects/b2k-toppers-card-v2.jpg"
            alt="Primal Toppers long-form product listing designed by Lac at B2K Pet Product"
            loading="lazy"
          />
          <figcaption>Toppers / Product education</figcaption>
        </figure>
      </div>
    ),
  },
  {
    number: "04",
    title: "High J",
    subtitle: "Jewellery Content Direction",
    description:
      "Developed social media visuals and creative directions for a fine jewellery brand, balancing accurate product presentation with a refined editorial aesthetic.",
    tags: ["Art Direction", "Social", "Jewellery", "AI-assisted Production"],
    details: [
      ["Role", "Graphic Designer / Content Designer"],
      [
        "Deliverables",
        "Social media concepts, campaign visuals, image-generation direction and content adaptations",
      ],
      [
        "Focus",
        "Product accuracy, visual consistency and premium brand presentation",
      ],
      ["Process", "AI-assisted concept development and image production"],
    ],
    className: "project-highj",
    visual: (
      <div className="jewel-scene" aria-hidden="true">
        <figure className="jewel-frame jewel-frame-main">
          <img src="/projects/highj-paraiba-ring.jpg" alt="" loading="lazy" />
        </figure>
        <figure className="jewel-frame jewel-frame-earrings">
          <img src="/projects/highj-paraiba-earrings.jpg" alt="" loading="lazy" />
        </figure>
        <figure className="jewel-frame jewel-frame-lifestyle">
          <img src="/projects/highj-paraiba-lifestyle.jpg" alt="" loading="lazy" />
        </figure>
        <span className="jewel-note">PARAIBA / SOCIAL CONTENT</span>
      </div>
    ),
  },
  {
    number: "05",
    title: "SUNS × SEIBU TRX",
    subtitle: "Retail Awareness & KOL",
    description:
      "A cross-market content and KOL plan designed to extend a private in-store event into broader brand and store awareness.",
    tags: ["Campaign Coordination", "KOL", "Retail"],
    status: "Ongoing project · Singapore and Kuala Lumpur · 2026",
    details: [
      ["Role", "Campaign Coordinator & Visual Designer"],
      [
        "Scope",
        "Event communications, creator coordination, content planning and social assets",
      ],
      ["Markets", "Singapore and Malaysia"],
      [
        "Collaboration",
        "Internal teams, retail partner and external marketing agency",
      ],
    ],
    className: "project-seibu",
    visual: (
      <div className="seibu-scene">
        <span className="seibu-grid" />
        <figure className="seibu-photo seibu-photo-one">
          <img
            src="/projects/seibu-ikebana-host.jpeg"
            alt="Ikebana demonstration at the SUNS concept store in SEIBU TRX"
            loading="lazy"
          />
        </figure>
        <figure className="seibu-photo seibu-photo-two">
          <img
            src="/projects/seibu-ikebana-event.jpeg"
            alt="Guests attending the SUNS ikebana event at SEIBU TRX"
            loading="lazy"
          />
        </figure>
        <span className="seibu-caption">Singapore ↔ Kuala Lumpur</span>
      </div>
    ),
  },
];

const capabilities = [
  {
    index: "01",
    title: "Visual Design",
    copy: "Brand campaigns, e-commerce assets, packaging, catalogues, print collateral and retail visuals developed consistently across formats.",
    note: "Craft across formats",
  },
  {
    index: "02",
    title: "Social Content & Art Direction",
    copy: "Platform-ready visual content for Instagram, TikTok, LinkedIn and Xiaohongshu, from content concepts to final asset adaptations.",
    note: "Design for context",
  },
  {
    index: "03",
    title: "Campaign Execution",
    copy: "Supporting paid campaign creatives, KOL coordination, landing-page content, rollout timelines and hands-on launch execution.",
    note: "Carry it to launch",
  },
  {
    index: "04",
    title: "Cross-functional Collaboration",
    copy: "Translating briefs and moving parts into practical decks, toolkits, timelines and deliverables for teams across Singapore, Malaysia and China.",
    note: "Make work move",
  },
];

const skillGroups = [
  {
    title: "Design",
    items: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Adobe After Effects",
    ],
  },
  {
    title: "E-commerce",
    items: [
      "Shopify",
      "Shopee Seller Centre",
      "Lazada Seller Center",
      "Product listing and storefront uploads",
    ],
  },
  {
    title: "Content & Marketing",
    items: [
      "Social media content design",
      "Campaign asset adaptation",
      "Basic paid-media creative support",
      "KOL coordination",
      "Content planning",
    ],
  },
  {
    title: "Production",
    items: [
      "Print-ready artwork",
      "Retail collateral",
      "Packaging and catalogue design",
      "Vendor coordination",
    ],
  },
];

export default function Home() {
  return (
    <main className="site-frame">
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
      <StickyHeader />

      <section className="hero shell" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="status-dot" />
              Hello, I’m Lac — a Singapore-based visual designer
            </div>
            <h1>
              Ideas, shaped into
              <span>
                <em>visual stories.</em>
              </span>
            </h1>
            <p className="hero-summary">
              A graphic and visual designer experienced in e-commerce campaigns,
              social content, retail collateral and hands-on campaign execution
              across Singapore and regional markets.
            </p>
            <a className="hero-cta" href="#work">
              View selected projects <span>→</span>
            </a>
          </div>

          <div className="hero-collage" aria-label="Lac's creative disciplines">
            <span className="motif motif-flower" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className="motif motif-spark" aria-hidden="true">✦</span>

            <div className="hero-note">
              <span>Currently</span>
              <strong>Graphic Designer<br />@ SUNS Singapore</strong>
              <i>Design · Social · Marketing</i>
            </div>

            <div className="hero-visual-main">
              <div className="visual-topline">
                <span>Selected practice</span>
                <span>01 / 03</span>
              </div>
              <div className="visual-monogram">
                <span className="monogram-orbit" />
                <img
                  className="hero-avatar"
                  src="/lac-avatar.webp"
                  alt="Illustrated portrait of Lac with a dachshund"
                />
                <i>✦</i>
              </div>
              <div className="visual-bottomline">
                <span>Visual systems</span>
                <span>Social thinking</span>
                <span>Marketing action</span>
              </div>
            </div>

            <div className="hero-visual-side">
              <div className="orbit-card">
                <span className="orbit-ring orbit-one" />
                <span className="orbit-ring orbit-two" />
                <span className="orbit-cross" />
                <b>03</b>
                <small>Markets connected</small>
              </div>
              <div className="signal-card">
                <span className="signal-mark">✦</span>
                <small>Design × Social × Marketing</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-meta">
          <span>Portfolio / 2023—26</span>
          <span className="hero-meta-center">Ideas → Systems → Real-world moments</span>
          <span>Scroll to explore ↓</span>
        </div>
      </section>

      <section className="about-section section-space shell" id="about">
        <div className="section-heading">
          <p>01 / Profile</p>
          <h2>From creative concept to final rollout, I design with execution in mind.</h2>
        </div>

        <div className="about-bento">
          <article className="bento-card portrait-card">
            <div className="portrait-art">
              <span className="portrait-ring" />
              <img
                className="portrait-avatar"
                src="/lac-thinking.webp"
                alt="Illustrated portrait of Lac thinking"
                loading="lazy"
              />
              <span className="portrait-label">Lac / Singapore</span>
            </div>
          </article>

          <SpotlightCard
            className="bento-card intro-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <p className="eyebrow">About Lac</p>
            <h3>
              Designer by craft.<br />
              Marketer by curiosity.<br />
              Problem-solver by nature.
            </h3>
            <p className="intro-copy">
              I’m a Singapore-based graphic designer with experience across
              e-commerce, social media, retail and campaign execution. I
              currently work at <strong>SUNS Singapore</strong>, where I develop
              visual assets and support campaigns across digital platforms,
              physical retail spaces and regional markets.
            </p>
            <p className="intro-copy">
              Previously, I worked on e-commerce storefronts for more than 16
              brands including innisfree, Murad and hansgrohe, covering campaign
              banners, store design, platform banner uploads and store revamps across
              Shopee, Lazada and Shopify.
            </p>
            <p className="intro-copy">
              I enjoy turning ideas into clear, practical visual systems—and
              working closely with marketing, retail and regional teams to bring
              them to life.
            </p>
            <div className="intro-links">
              <a
                href="mailto:hi.imlacloo@gmail.com"
              >
                Contact ↗
              </a>
              <a
                href="https://app.notion.com/p/Portfolio-of-Lac-Loo-23039057837f80039ebef2f799ca07fd?source=copy_link"
                target="_blank"
                rel="noreferrer"
              >
                Résumé ↗
              </a>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="bento-card metric-card metric-dark"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <span className="metric-number">03</span>
            <div>
              <strong>Markets</strong>
              <p>Singapore · Malaysia · China</p>
            </div>
          </SpotlightCard>

          <article className="bento-card metric-card metric-accent">
            <span className="metric-number">5+</span>
            <div>
              <strong>Years</strong>
              <p>Graphic design experience</p>
            </div>
          </article>

          <SpotlightCard
            className="bento-card metric-card metric-dark"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <span className="metric-number">04</span>
            <div>
              <strong>E-commerce platforms</strong>
              <p>Shopee · Lazada · Shopify · TikTok Shop</p>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="bento-card experience-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="experience-top">
              <p className="eyebrow">Experience</p>
              <span>2021—Present</span>
            </div>
            <div className="experience-roles">
              <div className="experience-role experience-role-detailed">
                <div>
                  <h3>SUNS Singapore</h3>
                  <p className="experience-title">Graphic Designer</p>
                  <p className="experience-summary">
                    Creating campaign visuals, social content, e-commerce assets,
                    retail collateral and event materials while supporting
                    regional campaign coordination across Singapore and Malaysia.
                  </p>
                </div>
                <span>Dec 2025—Present | Singapore</span>
              </div>
              <div className="experience-role experience-role-detailed">
                <div>
                  <h3>YSG</h3>
                  <p className="experience-title">
                    Visual Merchandiser → Team Lead, Visual Merchandising &amp; Engagement
                  </p>
                  <p className="experience-summary">
                    Designed and managed e-commerce storefront content for
                    regional brands across Shopee, Lazada, Shopify and TikTok,
                    while coordinating briefs, uploads, store revamps and team
                    delivery.
                  </p>
                </div>
                <span>Mar 2023—Jun 2025</span>
              </div>
              <div className="experience-role experience-role-detailed">
                <div>
                  <h3>B2K Pet Product</h3>
                  <p className="experience-title">Graphic Designer</p>
                  <p className="experience-summary">
                    Designed product listings, campaign assets and e-commerce
                    content that translated detailed pet-product information
                    into clear, shopper-friendly visuals.
                  </p>
                </div>
                <span>Apr 2021—Feb 2023</span>
              </div>
            </div>
            <div className="experience-tags">
              <span>Brand</span>
              <span>Campaigns</span>
              <span>Retail</span>
              <span>Content</span>
              <span>Events</span>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <section className="work-section section-space shell" id="work">
        <div className="section-heading work-heading">
          <p>02 / Selected work</p>
          <h2>A selection of projects built across screen, store and story.</h2>
          <span>Selected across agency, in-house and early-career chapters.</span>
        </div>

        <div className="projects-grid">
          {projects.map((project) =>
            project.cases ? (
              <section
                className="commerce-project"
                id={`project-${project.number}`}
                key={project.number}
              >
                <div className="commerce-project-heading">
                  <div className="project-index">{project.number}</div>
                  <div className="project-copy">
                    <p>{project.subtitle}</p>
                    <h3>{project.title}</h3>
                    <span>{project.description}</span>
                  </div>
                  <span className="commerce-project-note">03 selected cases</span>
                </div>
                <div className="commerce-cases">
                  {project.cases.map((item, index) => (
                    <SpotlightCard
                      className="commerce-case"
                      spotlightColor="rgba(0, 229, 255, 0.2)"
                      key={item.title}
                    >
                      <figure className="commerce-case-media">
                        <img src={item.image} alt={item.alt} loading="lazy" />
                        <figcaption>
                          {item.brand} / 0{index + 1}
                        </figcaption>
                      </figure>
                      <div className="commerce-case-body">
                        <span className="commerce-case-index">0{index + 1}</span>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <div className="project-tags commerce-case-tags">
                          {item.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </SpotlightCard>
                  ))}
                </div>
              </section>
            ) : (
              <SpotlightCard
                className={`project-card ${project.className ?? ""}`}
                spotlightColor="rgba(0, 229, 255, 0.2)"
                id={`project-${project.number}`}
                key={project.number}
              >
                <div className="project-visual">{project.visual}</div>
                <div className="project-content">
                  <div className="project-index">{project.number}</div>
                  <div className="project-copy">
                    <p>{project.subtitle}</p>
                    <h3>{project.title}</h3>
                    <span>{project.description}</span>
                  </div>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                {project.status && (
                  <div className="project-status">
                    <span className="status-dot" />
                    {project.status}
                  </div>
                )}
                {project.details && (
                  <dl className="project-details">
                    {project.details.map(([label, value]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </SpotlightCard>
            ),
          )}
        </div>
        <div className="work-archive-action">
          <a
            className="work-archive-link"
            href="https://drive.google.com/drive/folders/14-jEDAF55zKP09cOZjradfCOoES9XAdM?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View additional work <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="capabilities-section section-space shell" id="capabilities">
        <div className="section-heading capabilities-heading">
          <p>03 / Capabilities</p>
          <h2>What I bring to a creative team.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => {
            const content = (
              <>
                <span className="capability-index">{item.index}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <span className="capability-note">{item.note} ↗</span>
              </>
            );

            return item.index === "03" ? (
              <article className="capability-card" key={item.index}>
                {content}
              </article>
            ) : (
              <BorderGlow
                className="capability-card"
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={28}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={["#c084fc", "#f472b6", "#38bdf8"]}
                key={item.index}
              >
                {content}
              </BorderGlow>
            );
          })}
        </div>
      </section>

      <section className="skills-section section-space shell" id="skills">
        <div className="section-heading skills-heading">
          <p>04 / Tools &amp; skills</p>
          <h2>Tools I use—from design files to final rollout.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-group-heading">
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-inner shell">
          <div className="contact-top">
            <span>Open to graphic design and visual design opportunities in Singapore</span>
            <span>Full-time + selected freelance</span>
          </div>
          <div className="contact-main contact-main-career">
            <p>Let’s create work that looks good—</p>
            <a
              href="mailto:hi.imlacloo@gmail.com"
            >
              and works in the <em>real world.</em>
              <span>↗</span>
            </a>
          </div>
          <p className="contact-availability">
            Available for full-time opportunities and selected freelance projects.
          </p>
          <div className="contact-details" aria-label="Contact details">
            <a href="mailto:hi.imlacloo@gmail.com">
              <span>Email</span>
              <strong>hi.imlacloo@gmail.com</strong>
            </a>
            <a
              href="https://www.linkedin.com/in/lac-loo"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>linkedin.com/in/lac-loo ↗</strong>
            </a>
          </div>
          <div className="contact-bottom">
            <div className="footer-wordmark">LAC LOO®</div>
            <div className="footer-links">
              <a href="mailto:hi.imlacloo@gmail.com">Email</a>
              <a
                href="https://www.linkedin.com/in/lac-loo"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://app.notion.com/p/Portfolio-of-Lac-Loo-23039057837f80039ebef2f799ca07fd?source=copy_link"
                target="_blank"
                rel="noreferrer"
              >
                Résumé
              </a>
              <a href="#top">Back to top ↑</a>
            </div>
            <p>© 2026 · Designed with intention</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
