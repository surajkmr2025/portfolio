"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CometCard } from "../components/ui/comet-card";
// Adjust import path based on where you placed dummyStyles.js
import { toolsPageStyles } from "@/public/dummyStyles";

interface Tool {
  name: string;
  category: string;
  icon: string;
  href: string;
}

const tools: Tool[] = [
  {
    name: "ChatGPT",
    category: "AI",
    icon: "/chatgpt.webp",
    href: "https://chat.openai.com",
  },
  {
    name: "VS Code",
    category: "IDE",
    icon: "/vscode.webp",
    href: "https://code.visualstudio.com",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: "/git.svg",
    href: "https://git-scm.com",
  },
  {
    name: "GitHub",
    category: "Development",
    icon: "/github.svg",
    href: "https://github.com",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "/react.svg",
    href: "https://react.dev",
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: "/nextdotjs.svg",
    href: "https://nextjs.org",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: "/tailwindcss.svg",
    href: "https://tailwindcss.com",
  },
  {
    name: "Aceternity UI",
    category: "UI Library",
    icon: "/aceternity%20ui.webp",
    href: "https://ui.aceternity.com",
  },
  {
    name: "Magic UI",
    category: "UI Library",
    icon: "/magic%20ui.webp",
    href: "https://magicui.design",
  },
  {
    name: "React Hook Form",
    category: "Forms",
    icon: "/reacthookform.svg",
    href: "https://react-hook-form.com",
  },
  {
    name: "Zod",
    category: "Validation",
    icon: "/zod.svg",
    href: "https://zod.dev",
  },
  {
    name: "Prisma",
    category: "ORM",
    icon: "/prisma.svg",
    href: "https://prisma.io",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "/postgresql.svg",
    href: "https://postgresql.org",
  },
  {
    name: "Neon",
    category: "Database",
    icon: "/neon.svg",
    href: "https://neon.tech",
  },
  {
    name: "Vercel",
    category: "Deployment",
    icon: "/vercel.svg",
    href: "https://vercel.com",
  },
];




export default function ToolsPage() {
  return (
    <div className={toolsPageStyles.pageContainer}>
      <div className={toolsPageStyles.contentContainer}>
        <div className={toolsPageStyles.headerContainer}>
          <h1 className={toolsPageStyles.headerTitle}>
            Shovels
          </h1>
          <p className={toolsPageStyles.headerSubtitle}>
            Tools I frequently use to make life easier
          </p>
        </div>
        <div className={toolsPageStyles.toolsGrid}>
          {
            tools.map((tool) => (
              <CometCard key={tool.name}>
                <Link
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={toolsPageStyles.toolCardLink}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  <div className={toolsPageStyles.toolIconContainer}>
                    <Image
                    src={tool.icon}
                    alt={`${tool.name} logo`}
                    width={56}
                    height={56}
                    className={toolsPageStyles.toolIcon}
                    />
                  </div>

                  <div className={toolsPageStyles.toolTextContainer}>
                    <h3 className={toolsPageStyles.toolName}>
                      {tool.name}
                    </h3>
                    <p className={toolsPageStyles.toolCategory}>
                      {tool.category}
                    </p>
                  </div>
                </Link>
              </CometCard>
            ))
          }
        </div>
      </div>
    </div>
  );
}