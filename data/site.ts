import { withBasePath } from "@/lib/site-path";

// Edit this file first when updating portfolio copy, links, screenshots, and project detail pages.
export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type FeaturedProject = {
  slug: string;
  name: string;
  summary: string;
  caseStudy: string;
  tags: readonly string[];
  github?: ProjectLink;
  demo?: ProjectLink;
  images: readonly ProjectImage[];
  detailTitle: string;
  detailPoints: readonly string[];
};

export type LabWorkItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type VideoFeature = {
  title: string;
  description: string;
  youtubeUrl: string;
  embedId: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  roleOrCompany: string;
  image: string;
  link?: string;
};

export const siteContent = {
  name: "Martin Campetta",
  siteUrl: "https://campetta.com",
  headline: "Data Recovery Engineer | Software Engineer | R&D Solutions Architect",
  heroLabel: "Portfolio",
  intro:
    "Im an engineer focused on solving difficult data recovery problems across both hardware and software. My work spans board-level diagnostics, Apple device workflows, and internal tooling built to make complex recovery processes more reliable and repeatable.",
  navigation: [
    { label: "Lab Work", href: "#lab-work" },
    { label: "Recovery Work", href: "#recovery-practice" },
    { label: "Guides", href: "#engineering-guides" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Focus", href: "#focus" },
    { label: "Contact", href: "#contact" },
  ],
  heroHighlights: [
    "Applied recovery engineering, internal software, and board-level diagnostics shaped by real failure analysis and production lab work.",
  ],
  heroBackgroundImage: withBasePath("/portfolio-assets/background/hero-background.png"),
  pageBackgroundImage: withBasePath("/portfolio-assets/background/hero-background2.png"),
  about: {
    title: "Applied engineering across hardware, software, and recovery operations",
    headshot: withBasePath("/portfolio-assets/headshot/headshot.png"),
    copy:
      "I work in technical environments where hardware state, software behavior, and workflow all affect the outcome.",
    points: [
      "Hands-on recovery and diagnostics experience backed by software tooling that supports analysis, extraction, and repeatable lab workflows.",
      "Comfortable moving between bench work, scripting, interface development, and process refinement when a problem crosses disciplines.",
      "Interested in engineering roles that value technical depth, practical judgment, and real-world execution over presentation-heavy abstraction.",
    ],
  },
  experience: [
    {
      role: "Cleanroom Engineer / R&D Engineer",
      company: "Ontrack",
      period: "Current",
      description:
        "Work in an advanced data recovery environment supporting hard drives, flash media, smartphones, tablets, and embedded systems. The role combines recovery engineering, Apple device research, internal software development, and process design for technically difficult cases.",
      detailPoints: [
        "Develop recovery procedures and tooling for Apple-focused workflows shaped by corruption, extraction challenges, and device-specific behavior.",
        "Build and refine internal software used for analysis, automation, cleanroom evaluation, intake capture, and operational support inside the lab.",
        "Translate technical findings into methods and workflows that other engineers can apply consistently in production recovery work.",
      ],
    },
  ],
  projects: [
    {
      slug: "ios-backup-manager",
      name: "iOS Backup Manager",
      summary:
        "Desktop recovery software for creating, browsing, extracting, and restoring iTunes-style backups with app-aware workflows.",
      caseStudy:
        "Built around real recovery and transfer work rather than generic backup browsing.",
      tags: ["C#", "iOS Backups", "Data Recovery", "Desktop UI"],
      github: { label: "GitHub", href: "https://github.com/your-handle/ios-backup-manager" },
      demo: { label: "Project Page", href: "https://example.com/ios-backup-manager" },
      images: [
        {
          src: withBasePath("/portfolio-assets/projects/ios-backup-manager/backup-ui.png"),
          alt: "iOS Backup Manager interface showing backup and restore workflow panels",
        },
        {
          src: withBasePath("/portfolio-assets/projects/ios-backup-manager/photo-browser.png"),
          alt: "iOS Backup Manager extraction interface showing selectable data categories and options",
        },
      ],
      detailTitle: "Desktop recovery tooling shaped by real operator workflows",
      detailPoints: [
        "Designed around backup creation, comparison, extraction, and restore tasks that need to be practical under real technical constraints.",
        "Structured the interface so important backup context remains visible while detailed actions stay accessible.",
        "Used software to make data recovery tasks more repeatable and less dependent on ad hoc manual handling.",
      ],
    },
    {
      slug: "ibackup-legacy",
      name: "iBackup Legacy",
      summary:
        "An earlier generation of iBackup focused on browsing, extracting, and restoring mobile backup data through a practical recovery workflow.",
      caseStudy:
        "Included here as historical continuity for the backup tooling work, showing how the recovery-focused interface evolved over time.",
      tags: ["Legacy Tooling", "iOS Backups", "Recovery Workflow"],
      demo: { label: "Project Preview", href: withBasePath("/portfolio-assets/projects/ibackup-legacy/ibackup-legacy.gif") },
      images: [
        {
          src: withBasePath("/portfolio-assets/projects/ibackup-legacy/ibackup-legacy.gif"),
          alt: "Animated preview of the iBackup Legacy interface",
        },
      ],
      detailTitle: "Earlier recovery tooling that informed later desktop workflows",
      detailPoints: [
        "Represents an earlier phase of the backup management tooling before the current interface and workflow refinements.",
        "Shows continued iteration around data browsing, extraction, and restore operations in a recovery context.",
        "Useful as a supporting project because it makes the evolution of the tooling more concrete.",
      ],
    },
    {
      slug: "intake-capture-system",
      name: "Intake Capture System",
      summary:
        "A foot-pedal-operated capture system for shipping and intake teams to quickly document incoming devices, serial numbers, and condition data.",
      caseStudy:
        "Built for high-throughput lab operations, with photo capture, condition logging, and integration into internal business systems and customer-facing status flows.",
      tags: ["Internal Tools", "Operations", "Capture Workflow", "System Integration"],
      images: [
        {
          src: withBasePath("/portfolio-assets/projects/intake-capture-system/cover.jpg"),
          alt: "Intake Capture System interface used for shipping and device intake documentation",
        },
      ],
      detailTitle: "Operational tooling for fast, structured intake capture",
      detailPoints: [
        "Designed around shipping-floor speed, using foot-pedal interaction to reduce friction during repetitive intake tasks.",
        "Captured serial numbers, photos, and incoming or outgoing device condition details in a structured workflow.",
        "Integrated with internal business systems so captured information could flow into job tracking and customer-facing portals.",
      ],
    },
    {
      slug: "obsidianq",
      name: "ObsidianQ",
      summary:
        "A desktop encryption utility with a terminal-like interface designed to keep a technical workflow direct and readable.",
      caseStudy:
        "Minimal, operator-focused UI that keeps state, inputs, and output visible without noise.",
      tags: ["Desktop UI", "C#", "Encryption Tooling", "Operator Workflow"],
      github: { label: "GitHub", href: "https://github.com/mcampetta/ObsidianQ" },
      demo: { label: "Project Page", href: "https://example.com/obsidianq" },
      images: [
        {
          src: withBasePath("/portfolio-assets/projects/obsidianq/terminal-ui.png"),
          alt: "ObsidianQ application interface showing a terminal-inspired encryption workflow",
        },
      ],
      detailTitle: "A focused interface for a technical utility",
      detailPoints: [
        "Presented a complex workflow through a stripped-down visual system that feels technical without becoming hard to use.",
        "Treated UI design as an operational problem: clarity, trust, and visibility of state matter more than decoration.",
        "Shows the same engineering preference present in lab tooling: strong workflow structure, low friction, and useful output.",
      ],
    },
    {
      slug: "heic-converter",
      name: "HEIC Converter",
      summary:
        "A batch conversion utility for HEIC-to-JPG workflows with clear operator controls and practical output handling.",
      caseStudy:
        "Focused on queue visibility, useful settings, and reliable operation at scale.",
      tags: ["Image Processing", "Desktop Utility", "Workflow Design"],
      github: { label: "GitHub", href: "https://github.com/mcampetta/HEICtoJPG" },
      demo: { label: "Project Page", href: "https://example.com/heic-converter" },
      images: [
        {
          src: withBasePath("/portfolio-assets/projects/heic-converter/main-ui.jpg"),
          alt: "HEIC Converter application showing batch queue, settings, and preview panel",
        },
      ],
      detailTitle: "Utility software designed for repeat use",
      detailPoints: [
        "Focused on making a repetitive file-conversion task predictable, configurable, and easy to monitor.",
        "Used a straightforward operator view instead of hiding process details behind abstraction.",
        "Demonstrates practical software judgment in a tool that needs to be reliable before it needs to be impressive.",
      ],
    },
  ] as readonly FeaturedProject[],
  labWork: [
    {
      title: "Fire-Damaged Laptop Recovery",
      description:
        "A severe physical-damage case included to show the kind of catastrophic hardware conditions that can still require disciplined recovery planning and extraction work.",
      image: withBasePath("/portfolio-assets/lab/fire-damaged-laptop.jpg"),
      imageAlt: "Severely fire-damaged laptop disassembled on a workbench",
    },
    {
      title: "PMIC Rework",
      description:
        "Microscope-guided component rework and board handling in cases where power management behavior is central to diagnosis or recovery viability.",
      image: withBasePath("/portfolio-assets/lab/pmic-rework.jpg"),
      imageAlt: "Microscope view of PMIC rework on Apple device board",
    },
    {
      title: "DC Power Injection",
      description:
        "Board-level troubleshooting using direct power injection to isolate fault behavior and confirm whether a device is viable for deeper recovery work.",
      image: withBasePath("/portfolio-assets/lab/dc-power-injection.jpg"),
      imageAlt: "Phone board connected to lab power supply during DC power injection testing",
    },
    {
      title: "Mechanical Media Damage",
      description:
        "Physical media failures where recovery planning depends on understanding the extent of platter damage and the limits of safe handling.",
      image: withBasePath("/portfolio-assets/lab/shattered-hdd.jpg"),
      imageAlt: "Hard disk drive with heavily shattered platter damage",
    },
    {
      title: "NAND Wiring and Direct Access",
      description:
        "Fine-pitch wiring and custom connection work used to establish stable read paths when standard interfaces are no longer sufficient.",
      image: withBasePath("/portfolio-assets/lab/nand-wiring.jpg"),
      imageAlt: "Custom NAND wiring setup attached to USB interface hardware",
    },
    {
      title: "Signal and Waveform Analysis",
      description:
        "Using low-level signal inspection to understand bus behavior, timing, and communication issues during hardware analysis and research.",
      image: withBasePath("/portfolio-assets/lab/waveform-analysis.jpg"),
      imageAlt: "Waveform analysis display showing digital timing signals",
    },
    {
      title: "microSD Trace Mapping",
      description:
        "Trace analysis and pin mapping work used to identify usable access points and recover damaged or undocumented media paths.",
      image: withBasePath("/portfolio-assets/lab/microsd-trace.jpg"),
      imageAlt: "microSD trace image with annotated contact and signal points",
    },
  ] as readonly LabWorkItem[],
  recoveryPracticeVideos: [
    {
      title: "Extreme Physical Damage Recovery",
      description:
        "A recovery case demonstrating data extraction work on mobile devices after severe physical damage. Included to show real-world recovery conditions, device-level failure scenarios, and the practical constraints involved in difficult extraction work.",
      youtubeUrl: "https://www.youtube.com/watch?v=Nz4p490Nm_E",
      embedId: "Nz4p490Nm_E",
    },
    {
      title: "Inside the Lab and Cleanroom",
      description:
        "Background footage and interview material showing hands-on work in technical lab, cleanroom, and development environments. This supports the portfolio's focus on practical engineering across hardware, software, and recovery workflows.",
      youtubeUrl: "https://www.youtube.com/watch?v=j01yFpDAQk8",
      embedId: "j01yFpDAQk8",
    },
  ] as readonly VideoFeature[],
  engineeringGuide: {
    title: "Battery Diagnostics and Controlled Testing",
    description:
      "A practical guide focused on hardware troubleshooting techniques, including multimeter-based testing and controlled battery / charging workflow analysis. Included as evidence of technical depth and the ability to explain engineering processes clearly.",
    youtubeUrl: "https://www.youtube.com/watch?v=zDLFdOnM5zU",
    embedId: "zDLFdOnM5zU",
    moreLabel: "View more technical guides on YouTube",
  } as const,
  testimonials: [
    {
      quote:
        "Martin Campetta is highly intelligent, methodical and task oriented. A hard-working employee that takes pride in his work and doesn't finish until the task is finished. Humble, hungry, and smart, Martin continues to educate and better himself every day.",
      author: "Ashley Wilkins",
      roleOrCompany: "Ontrack",
      image: withBasePath("/portfolio-assets/testimonials/ashley-wilkins.jpg"),
      link: "https://www.linkedin.com/in/ashley-wilkins",
    },
    {
      quote:
        "Martin is 100% committed to finding innovative and bespoke solutions for us and delivers. Quality candidate and employee that brings value to the table across a wide variety of spectrums. Was a pleasure to work closely with Martin for over 5 years at Ontrack.",
      author: "Sean McBride",
      roleOrCompany: "Innovate Solutions & Support",
      image: withBasePath("/portfolio-assets/testimonials/sean-mcbride.jpg"),
    },
  ] as readonly Testimonial[],
  githubCta: {
    title: "More on GitHub",
    copy: "Additional public projects and utilities are available on GitHub.",
    href: "https://github.com/mcampetta?tab=repositories",
    label: "View More Repositories",
  },
  skills: [
    {
      title: "Data Recovery Engineering",
      copy: "Applied recovery work across damaged storage, mobile devices, embedded systems, and technically constrained extraction environments.",
    },
    {
      title: "Apple Device Workflows",
      copy: "Research, diagnostics, and process development around Apple devices, backup structures, device behavior, and recovery edge cases.",
    },
    {
      title: "Software Tooling and Automation",
      copy: "Internal applications and scripts that reduce manual effort, improve repeatability, and support engineers in day-to-day technical work.",
    },
    {
      title: "Python, C#, and Shell",
      copy: "Practical tooling languages for analysis, utilities, internal applications, workflow support, and quick-turn engineering tasks.",
    },
    {
      title: "Hardware Diagnostics",
      copy: "Bench-level troubleshooting informed by device behavior, board-level symptoms, media condition, and recovery-method constraints.",
    },
    {
      title: "Board-Level Investigation",
      copy: "Investigation of difficult hardware cases where recovery strategy depends on understanding failure mode, signal path, and access method.",
    },
    {
      title: "JavaScript and Web Tooling",
      copy: "Used when a lightweight, maintainable interface improves access to technical workflows or structured information.",
    },
    {
      title: "Process Improvement and R&D",
      copy: "Turning technical research, experiments, and case experience into workflows that are more consistent, efficient, and usable.",
    },
  ],
  contact: {
    title: "Available for engineering, R&D, and recovery-focused technical roles",
    copy:
      "For engineering, R&D, and recovery-focused roles, contact details and resume are available below.",
    email: {
      label: "martin.campetta@gmail.com",
      href: "mailto:martin.campetta@gmail.com",
    },
    linkedin: {
      label: "linkedin.com/in/martincampetta",
      href: "https://www.linkedin.com/in/martincampetta/",
    },
    github: {
      label: "github.com/mcampetta",
      href: "https://github.com/mcampetta",
    },
    resumeHref: withBasePath("/resume.doc"),
  },
  footerText: "Martin Campetta portfolio. Static, image-led, and designed to be edited from a single content file.",
} as const;

export function getProjectBySlug(slug: string) {
  return siteContent.projects.find((project) => project.slug === slug);
}
