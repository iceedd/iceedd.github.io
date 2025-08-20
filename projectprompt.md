System / Instructional Role:
You are a hive mind of expert front-end developers, UI/UX designers, and technical copywriters. Your task is to build a config-driven portfolio website for an M365 Engineer. The site should separate content from code, so it’s easy to update and maintain.

Website Purpose & Audience:
The site will be used to showcase the user’s expertise in Microsoft 365 engineering and IT project delivery to hiring managers, recruiters, and potential clients.

Core Content Areas:

Hero / Intro Section – Name, role, tagline, quick links (LinkedIn, GitHub, Email).

About Me – Career background, values, technical focus.

Skills & Services – Highlight core M365 engineering skills.

Projects / Case Studies – Each project should include title, description, key tech used, and outcomes.

What I’m Working On – Current focus areas (automation, Intune optimisation, etc.).

What I’m Working Towards – Career goals (certifications, Solutions Architect path, security specialisation).

Contact Section – Links and CTA.

Technical & Design Requirements:

Built with React + TailwindCSS (production-ready, clean code).

Mobile-first responsive design.

Dark/light mode toggle.

Content should be pulled from a single configuration file (e.g. content.js or content.json) so the user can update text/projects without modifying layout code.

Use a timeline or card grid for projects and career progression.

Subtle animations (Framer Motion recommended).

Must be deploy-ready for GitHub Pages:

Use React Router’s HashRouter (or configure homepage in package.json).

Include a working gh-pages deployment script.

Provide clear setup and deployment instructions (e.g., npm run deploy).

Deliverables:

Full source code of the portfolio site.

A structured content config file with placeholder text. (E.g. JSON or JS object with fields like about, skills, projects, workingOn, workingTowards, contact.)

Example content written in a professional recruiter-friendly tone.

Deployment instructions for GitHub Pages.




json config

const content = {
  hero: {
    name: "Your Name",
    role: "M365 Engineer",
    tagline: "Building secure, scalable Microsoft 365 environments",
    links: {
      linkedin: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/yourprofile",
      email: "mailto:your@email.com"
    }
  },

  about: {
    title: "About Me",
    description: `
      I’m an M365 Engineer with a background in the Royal Navy and IT project delivery.
      I specialise in designing, deploying, and securing Microsoft 365 environments
      for organisations of all sizes. My work focuses on making cloud adoption smooth,
      secure, and cost-effective.
    `,
    highlights: [
      "Royal Navy veteran turned IT engineer",
      "Strong background in Microsoft 365 tenant builds",
      "Skilled in Intune, Autopilot, and Conditional Access",
      "Passionate about automation and secure deployments"
    ]
  },

  skills: {
    title: "What I Do",
    items: [
      "M365 Tenant Builds & Configuration",
      "Intune & Autopilot Deployment",
      "Conditional Access & Security Policies",
      "Cyber Essentials Compliance",
      "User & Admin Role Management",
      "DNS & Exchange Online Configuration",
      "Google Workspace → M365 Migrations",
      "PowerShell Automation"
    ]
  },

  projects: {
    title: "Projects & Case Studies",
    items: [
      {
        title: "Microsoft 365 Tenant Build",
        description: "Designed and deployed a new M365 tenant for a medium-sized business, including DNS setup, licensing, and security configuration.",
        tech: ["M365", "Azure AD", "Exchange Online", "SharePoint Online"],
        outcome: "Successful adoption with minimal downtime and improved security posture."
      },
      {
        title: "Intune & Autopilot Rollout",
        description: "Configured Intune policies and set up Autopilot deployment workflows for client laptops.",
        tech: ["Intune", "Autopilot", "Endpoint Security"],
        outcome: "Reduced device setup time from hours to minutes, improving onboarding efficiency."
      },
      {
        title: "Google Workspace Migration",
        description: "Migrated a client from Google Workspace to Microsoft 365, including mail, contacts, and calendar data.",
        tech: ["Google Workspace", "M365 Migration Tools"],
        outcome: "Seamless migration with full data integrity and no user disruption."
      }
    ]
  },

  workingOn: {
    title: "What I’m Working On",
    items: [
      "Streamlining Intune device compliance policies",
      "Automating repetitive admin tasks with PowerShell",
      "Improving deployment documentation for clients"
    ]
  },

  workingTowards: {
    title: "What I’m Working Towards",
    items: [
      "Achieving Microsoft Certified: Cybersecurity Architect Expert",
      "Expanding into Azure cloud security and governance",
      "Building towards a Solutions Architect role"
    ]
  },

  contact: {
    title: "Let’s Connect",
    description: "I’m always open to opportunities, collaborations, and sharing knowledge about Microsoft 365 and cloud security.",
    links: {
      linkedin: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/yourprofile",
      email: "mailto:your@email.com"
    }
  }
};

export default content;
