import React from "react";
import WordRotate from "../magicui/word-rotate";
import GridPattern from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";
import IconCloud from "../magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const HeroLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center  overflow-hidden bg-black md:shadow-xl md:flex-row ">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="h-500 w-500 max-w-[32rem] items-center justify-center overflow-hidden bg-transparent">
        <IconCloud iconSlugs={slugs} />
      </div>

      <WordRotate
        className="text-4xl font-bold text-center text-white dark:text-black m-20"
        words={["Muhammad Faiz", "Software Engineeer", "Masih Belajar Bang"]}
      />
    </div>
  );
};

export default HeroLayout;
