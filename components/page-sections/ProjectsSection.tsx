"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import ModalInfo from "../ModalInfo";
import { projectsData } from "@/constants/projectsData";

export function ProjectsSection() {
  const cards = projectsData.map((project, index) => (
    <Card
      key={project.id}
      card={{
        category: project.category,
        title: project.title,
        src: project.thumbnail, // Use the thumbnail for the card preview
        content: <ModalInfo project={project} />, // Pass the project to ModalInfo
      }}
      index={index}
      layout={true}
    />
  ));

  return (
    <div id="projects" className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        What I&apos;ve Been Working On
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

export default ProjectsSection;
