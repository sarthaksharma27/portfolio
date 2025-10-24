import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sarthak sharma",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Give me a problem that interests me, and I’ll keep going until I figure it out. ",
  summary:
  "tldr; I'm deeply fascinated by how things work under the hood. At the moment Applying machine Learning and writing production level Backend.",
  avatarUrl: "/me.png",
  skills: [
    "Typescript",
    "Node.js",
    "Express.js",
    "Postgres",
    "Docker",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sharma.sarthak222872@gmail.com",
    tel: "34",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sarthaksharma27",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sarthaksharma27/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/sarthaksharma85",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
   
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    {
      company: "Vericap",
      href: "https://www.vericap.io",
      badges: [],
      location: "Bangalore, India",
      title: "Backend Engineer Intern",
      logoUrl: "/vericap_io_logo.jpeg",
      start: "December 2023",
      end: "Jan 2024",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
  ],
  education: [
    {
      school: "Bennett Unversity",
      href: "https://www.bennett.edu.in",
      degree: "Mathematics and Computer Science",
      logoUrl: "/Bennett_University.jpg",
      start: "2024",
      end: "2027",
    },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Graptor",
      href: "https://docs-graptor.tech/",
      dates: "Sep 2025 - Present",
      active: true,
      description:
      "Graptor turns your entire repository into a structured, vectorized representation giving LLMs the context they need to reason about your code without hallucination.",
      technologies: [
        "Typescript",
        "Tree-sitter",
        "Node.js",
        "Transformers.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sarthaksharma27/graptor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Graptor.png",
    },
    {
      title: "Flow",
      href: "https://flow-theta-inky.vercel.app/",
      dates: "July 2025",
      active: true,
      description:
        "Built Flow that turns prompts into 2D animated videos using the Manim animation engine!",
      technologies: [
        "Next.js",
        "Typescript",
        "Redis",
        "Docker",
        "BullMQ",
        "WebSockets",
      ],
      links: [
        {
          type: "Website",
          href: "https://flow-theta-inky.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sarthaksharma27/flow",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "System Architecture",
          href: "https://www.notion.so/Flow-System-design-doc-220c591ae88a80da87bbe95ade0222f1?source=copy_link",
          icon: <Icons.notion className="size-3" />,
        },
      ],
      image: "",
      video: "https://private-user-images.githubusercontent.com/130299888/461372881-58e85802-e9a4-469c-af38-aa804322073b.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjEzMDkyODUsIm5iZiI6MTc2MTMwODk4NSwicGF0aCI6Ii8xMzAyOTk4ODgvNDYxMzcyODgxLTU4ZTg1ODAyLWU5YTQtNDY5Yy1hZjM4LWFhODA0MzIyMDczYi5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAyNFQxMjI5NDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMzU1MmE2MDc5MjMwMzI4ZjRiMTU3MDZiMjVkODMzZDk0ZGRiNGI4NjUyOTZmMzQ5NTQzNWRhNDBiNTQzN2Q5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9._CmwoRDM7JZuDL2hUrpRnuWfx98yc5i5FC7JH7w4xaQ",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    // {
    //   title: "Hack The North",
    //   dates: "September 14th - 16th, 2018",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
