npx claude-flow@alpha hive-mind spawn "System / Instructional Role:
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

Deployment instructions for GitHub Pages." --claude
