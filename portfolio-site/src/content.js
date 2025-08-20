// Content configuration for M365 Engineer Portfolio
export const siteConfig = {
  name: "Alex Johnson",
  title: "Microsoft 365 Engineer & Solutions Architect",
  email: "alex.johnson@example.com",
  phone: "+1 (555) 123-4567",
  location: "Seattle, WA",
  linkedin: "https://linkedin.com/in/alexjohnson-m365",
  github: "https://github.com/alexjohnson",
  website: "https://alexjohnson.dev",
  tagline: "Transforming business operations through intelligent Microsoft 365 solutions",
  description: "Experienced Microsoft 365 Engineer specializing in modern workplace transformation, automation, and security implementation. Passionate about leveraging cutting-edge Microsoft technologies to drive organizational efficiency and user productivity.",
};

export const heroContent = {
  greeting: "Hello, I'm Alex",
  title: "Microsoft 365 Engineer & Solutions Architect",
  subtitle: "Transforming businesses through intelligent Microsoft 365 solutions and modern workplace innovation",
  description: "I specialize in designing, implementing, and optimizing Microsoft 365 environments that empower organizations to achieve more. From Teams collaboration platforms to Power Platform automation, I deliver solutions that drive real business outcomes.",
  primaryCta: "View My Projects",
  secondaryCta: "Download Resume",
  highlightStats: [
    { number: "50+", label: "M365 Deployments" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Certifications" },
    { number: "99.9%", label: "Uptime Achieved" }
  ]
};

export const aboutContent = {
  title: "About Me",
  subtitle: "Passionate about modern workplace transformation",
  paragraphs: [
    "With over 5 years of experience in Microsoft 365 engineering, I've helped organizations of all sizes transform their digital workplace. My journey began in IT support, but I quickly discovered my passion for Microsoft's cloud ecosystem and the endless possibilities it offers for business transformation.",
    "I specialize in end-to-end Microsoft 365 implementations, from initial planning and architecture design to deployment, security configuration, and user adoption. My approach combines technical expertise with business acumen to deliver solutions that not only work flawlessly but also drive measurable business outcomes.",
    "Currently pursuing advanced certifications in Microsoft Security and exploring the latest developments in AI integration with Microsoft 365. I'm always eager to tackle new challenges and help organizations unlock the full potential of their Microsoft investments."
  ],
  highlights: [
    "Led 50+ successful M365 migrations and deployments",
    "Reduced IT operational costs by 40% through automation",
    "Achieved 98% user adoption rate across implementations",
    "Specialized in zero-trust security architectures"
  ]
};

export const skillsContent = {
  title: "Technical Expertise",
  subtitle: "Comprehensive Microsoft 365 and modern workplace technologies",
  categories: [
    {
      name: "Microsoft 365 Core",
      description: "Complete M365 ecosystem expertise",
      skills: [
        { name: "Exchange Online", level: 95, category: "Communication" },
        { name: "SharePoint Online", level: 90, category: "Collaboration" },
        { name: "Microsoft Teams", level: 92, category: "Communication" },
        { name: "OneDrive for Business", level: 88, category: "Storage" },
        { name: "Outlook", level: 85, category: "Productivity" }
      ]
    },
    {
      name: "Power Platform",
      description: "Low-code/no-code automation and apps",
      skills: [
        { name: "Power Automate", level: 88, category: "Automation" },
        { name: "Power Apps", level: 82, category: "Development" },
        { name: "Power BI", level: 75, category: "Analytics" },
        { name: "Power Virtual Agents", level: 70, category: "AI" }
      ]
    },
    {
      name: "Security & Compliance",
      description: "Modern security and governance solutions",
      skills: [
        { name: "Azure AD/Entra ID", level: 90, category: "Identity" },
        { name: "Microsoft Intune", level: 85, category: "Device Management" },
        { name: "Microsoft Purview", level: 78, category: "Compliance" },
        { name: "Defender for Office 365", level: 80, category: "Security" },
        { name: "Conditional Access", level: 85, category: "Security" }
      ]
    },
    {
      name: "Development & Automation",
      description: "Custom solutions and integrations",
      skills: [
        { name: "PowerShell", level: 90, category: "Scripting" },
        { name: "Microsoft Graph API", level: 82, category: "Integration" },
        { name: "Azure Functions", level: 75, category: "Serverless" },
        { name: "SPFx Development", level: 70, category: "Development" },
        { name: "REST APIs", level: 80, category: "Integration" }
      ]
    }
  ]
};

export const projectsContent = {
  title: "Featured Projects",
  subtitle: "Real-world Microsoft 365 implementations and solutions",
  projects: [
    {
      id: "enterprise-migration",
      title: "Enterprise M365 Migration",
      description: "Led comprehensive migration of 5,000+ users from on-premises Exchange to Microsoft 365, including SharePoint modernization and Teams deployment.",
      longDescription: "This project involved migrating a large financial services company from their legacy on-premises infrastructure to a modern Microsoft 365 environment. The migration included Exchange Server 2013, SharePoint 2016, and Skype for Business to their cloud counterparts.",
      technologies: ["Exchange Online", "SharePoint Online", "Microsoft Teams", "Azure AD Connect", "PowerShell"],
      highlights: [
        "Zero-downtime migration strategy",
        "Custom PowerShell automation scripts",
        "Comprehensive security implementation",
        "User training and adoption program"
      ],
      results: [
        "100% successful mailbox migration",
        "40% reduction in IT operational costs",
        "95% user satisfaction rate",
        "Enhanced security posture"
      ],
      duration: "8 months",
      teamSize: "12 people",
      role: "Lead M365 Engineer",
      image: "/api/placeholder/600/400",
      status: "Completed",
      client: "Financial Services Corp"
    },
    {
      id: "power-platform-automation",
      title: "Power Platform Automation Suite",
      description: "Developed comprehensive automation solution using Power Platform to streamline HR processes, reducing manual work by 60% and improving accuracy.",
      longDescription: "Created an end-to-end automation platform for HR processes including employee onboarding, leave management, and performance reviews using Power Apps, Power Automate, and Power BI.",
      technologies: ["Power Apps", "Power Automate", "Power BI", "SharePoint Lists", "Microsoft Forms"],
      highlights: [
        "Canvas and model-driven apps",
        "Complex workflow automation",
        "Real-time analytics dashboard",
        "Mobile-responsive design"
      ],
      results: [
        "60% reduction in manual HR tasks",
        "99% process accuracy improvement",
        "2-week faster onboarding cycle",
        "$50K annual cost savings"
      ],
      duration: "4 months",
      teamSize: "6 people",
      role: "Power Platform Architect",
      image: "/api/placeholder/600/400",
      status: "Completed",
      client: "Healthcare Organization"
    },
    {
      id: "zero-trust-implementation",
      title: "Zero Trust Security Architecture",
      description: "Implemented comprehensive zero-trust security model across Microsoft 365 environment, enhancing security posture while maintaining user productivity.",
      longDescription: "Designed and implemented a zero-trust security architecture using Azure AD Conditional Access, Microsoft Intune, and Microsoft Defender to protect sensitive data while ensuring seamless user experience.",
      technologies: ["Azure AD", "Microsoft Intune", "Conditional Access", "Microsoft Defender", "Azure Information Protection"],
      highlights: [
        "Risk-based authentication",
        "Device compliance policies",
        "Data loss prevention rules",
        "Advanced threat protection"
      ],
      results: [
        "75% reduction in security incidents",
        "100% compliance with industry standards",
        "Seamless user experience maintained",
        "Enhanced audit and reporting capabilities"
      ],
      duration: "6 months",
      teamSize: "8 people",
      role: "Security Architect",
      image: "/api/placeholder/600/400",
      status: "Completed",
      client: "Manufacturing Company"
    },
    {
      id: "teams-governance",
      title: "Teams Governance & Adoption",
      description: "Designed and implemented Microsoft Teams governance framework with automated provisioning, lifecycle management, and adoption strategies.",
      longDescription: "Created comprehensive governance solution for Microsoft Teams including automated team provisioning, naming conventions, lifecycle policies, and user adoption programs to ensure sustainable Teams environment.",
      technologies: ["Microsoft Teams", "Power Platform", "Azure AD", "PowerShell", "Microsoft Graph"],
      highlights: [
        "Automated team provisioning",
        "Lifecycle management policies",
        "Usage analytics and reporting",
        "Training and adoption programs"
      ],
      results: [
        "90% user adoption rate achieved",
        "50% reduction in orphaned teams",
        "Standardized team structures",
        "Improved collaboration efficiency"
      ],
      duration: "5 months",
      teamSize: "4 people",
      role: "Teams Specialist",
      image: "/api/placeholder/600/400",
      status: "Completed",
      client: "Technology Startup"
    }
  ]
};

export const certificationsContent = {
  title: "Certifications & Learning",
  current: [
    {
      name: "Microsoft 365 Certified: Enterprise Administrator Expert",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "MS-100, MS-101",
      status: "Active"
    },
    {
      name: "Microsoft 365 Certified: Security Administrator Associate",
      issuer: "Microsoft", 
      date: "2023",
      credentialId: "MS-500",
      status: "Active"
    },
    {
      name: "Microsoft 365 Certified: Teams Administrator Associate",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "MS-700",
      status: "Active"
    },
    {
      name: "Microsoft 365 Certified: Modern Desktop Administrator Associate",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "MD-100, MD-101",
      status: "Active"
    },
    {
      name: "Microsoft Power Platform Functional Consultant Associate",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "PL-200",
      status: "Active"
    }
  ],
  inProgress: [
    {
      name: "Microsoft Cybersecurity Architect Expert",
      expectedDate: "Q2 2024",
      status: "In Progress"
    },
    {
      name: "Azure Solutions Architect Expert",
      expectedDate: "Q3 2024", 
      status: "Planning"
    }
  ]
};

export const contactContent = {
  title: "Let's Connect",
  subtitle: "Ready to transform your Microsoft 365 environment? Let's discuss how I can help your organization achieve more.",
  description: "I'm always interested in discussing new opportunities, sharing knowledge, and connecting with fellow Microsoft 365 professionals. Whether you're looking for consultation, collaboration, or just want to chat about the latest M365 features, I'd love to hear from you.",
  contactMethods: [
    {
      type: "email",
      value: siteConfig.email,
      label: "Email Me",
      icon: "Mail",
      primary: true
    },
    {
      type: "linkedin",
      value: siteConfig.linkedin,
      label: "Connect on LinkedIn",
      icon: "Linkedin",
      primary: true
    },
    {
      type: "github",
      value: siteConfig.github,
      label: "Follow on GitHub",
      icon: "Github"
    },
    {
      type: "phone",
      value: siteConfig.phone,
      label: "Call Me",
      icon: "Phone"
    }
  ],
  availability: {
    status: "Available for new projects",
    note: "Currently accepting consulting opportunities and full-time positions"
  }
};

export const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];