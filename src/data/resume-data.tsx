import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rashmi Sharma",
  initials: "RS",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Full Stack Software Engineer with a passion for building high-quality product.",
  summary:
    "As a Full Stack Engineer with 3+ years of experience, I specialize in building scalable web solutions from concept to deployment. I perform well in dynamic environments and currently work with TypeScript, Angular, Spring Boot, PostgreSQL, and AWS. Dedicated to delivering high-quality, efficient applications that meet user needs.",
  avatarUrl: "https://avatars.githubusercontent.com/u/91252011?v=4",
  personalWebsiteUrl: "/",
  contact: {
    email: "rashmisharma19019@gmail.com",
    tel: "+91 9818076054",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RashmiSharmaOfficial",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rashmi-sharma-30a689193/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Guru Gobind Singh Indraprastha University",
      degree: "Bachelor's Degree in Electronics and Communication Engineering",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Maverick Quantum (mavQ)",
      link: "https://www.mavq.com/",
      badges: ["Remote"],
      title: "Software Development Engineer",
      logo: ConsultlyLogo,
      start: "2022",
      end: "2024",
      description:
        "Lead multiple end-to-end feature develpoment. Technologies: Angular, TypeScript, Spring Boot, AWS, Python, SQL",
    },
    {
      company: "MTX Group",
      link: "https://www.mtxb2b.com/s/",
      badges: ["Remote"],
      title: "Consultant Trainee",
      logo: ParabolLogo,
      start: "2021",
      end: "2022",
      description:
        "Hands on Full Stack training, later promoted to the role of Associate Software Development Engineer based on performance. Technologies: React, TypeScript, Angular, NodeJs, ExpressJs, SQL, NoSQL",
    },
    {
      company: "TCS",
      link: "https://www.tcs.com/",
      badges: ["Remote"],
      title: "Data Science Intern",
      logo: ClevertechLogo,
      start: "2020",
      end: "2020",
      description:
        "Developed an ML model for the project title “Automate Emotion Analysis on Textual Comments and Feedback using Artificial Intelligence,” achieving an accuracy of 91%. Technologies: Python, AI",
    },
    {
      company: "Triedge",
      link: "https://triedge.in/",
      badges: [],
      title: "Web Crawler Intern",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2020",
      description:
        "Scraped data from educational websites, employing data structures, algorithms, and regular expressions for efficient extraction. Managed extracted data with SQL. Technologies: Python, BeautifulSoup, SQL, Data Structures, Algorithms, Regular Expressions",
    },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Developed and tested software for LTE base stations",
    // },
  ],
  skills: [
    "HTML/CSS/JavaScript",
    "TypeScript",
    "Angular",
    "React/Next.js",
    "Node.js",
    "Java",
    "Spring Boot",
    "Spring Security",
    "Hibernate",
    "SQL",
    "NoSQL",
    "Python",
    "PostgreSql",
    "MongoDB",
    "Firebase",
    "AWS",
    "Docker",
    "Git",
    "C/C++",
  ],
  projects: [
    {
      title: "Blogger",
      techStack: [
        "Side Project",
        "TypeScript",
        "React",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDb",
      ],
      description: "Blogging web application",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "https://github.com/RashmiSharmaOfficial/enhanced-react-blog",
      },
    },
    {
      title: "Groffers",
      techStack: [
        "Side Project",
        "TypeScript",
        "HTML/CSS/Javascript",
        "Responsive Website",
      ],
      description: "A single page static responsive website",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/RashmiSharmaOfficial/Groffers",
      },
    },
    {
      title: "Vogue",
      techStack: [
        "Side Project",
        "TypeScript",
        "Angular",
        "NodeJs",
        "MongoDb",
        "Stripe",
      ],
      description: "E-Commerce clothes website",
      logo: MonitoLogo,
      link: {
        label: "",
        href: "/",
      },
    },
    {
      title: "AlgoAlert",
      techStack: [
        "Side Project",
        "TypeScript",
        "Angular",
        "Spring Boot",
        "Spring Security",
        "Java Mail",
        "Hibernate",
        "Firebase",
        "MongoDb",
        "Docker",
      ],
      description:
        "Coding practice website, set daily coding question practice reminder",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/RashmiSharmaOfficial/Algo-Alert",
      },
    },
    // {
    //   title: "Jarocki.me",
    //   techStack: ["Side Project", "Next.js", "MDX"],
    //   description:
    //     "Personal website and blog. Built with Next.js and Notion API",
    //   logo: JarockiMeLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://jarocki.me/",
    //   },
    // },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers, and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description: "Howdy is a place for joining communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
