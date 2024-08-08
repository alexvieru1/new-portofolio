import { Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  deploy?: string;
  contributors?: Array<string | { name: string; role?: string }>;
  technologies: string[];
  details: string;
  createdAt: string;
  category: string;
  status: string;
}

interface ModalInfoProps {
  project: Project;
}

const ModalInfo: React.FC<ModalInfoProps> = ({ project }) => {
  return (
    <div className="bg-[#3e3e3f] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-200 mb-4">{project.details}</p>
      <Image
        src={project.image}
        alt={project.title}
        height="500"
        width="500"
        className="h-full w-full mx-auto object-contain rounded-lg"
      />
      <div className="text-neutral-400 mt-4 italic">Created at: {project.createdAt}</div>
      <div className="text-neutral-400 mt-4">
        <p className="font-semibold">Technologies Used:</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-neutral-500 text-white px-2 py-1 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-6">
        {/* Deployment Link */}
        {project.deploy ? (
          <Link href={project.deploy} target="_blank">
            <Button variant="ghost" className="flex items-center">
              <LinkIcon className="mr-2 w-5 h-5" />
              Deployment
            </Button>
          </Link>
        ) : null}

        {/* GitHub Link */}
        <Link href={project.github} target="_blank">
          <Button variant="ghost" className="flex items-center">
            <Github className="mr-2 w-5 h-5" />
            Github
          </Button>
        </Link>

        {/* Contributors */}
        {project.contributors && project.contributors.length > 0 && (
          <div className="text-neutral-200 mt-4 md:mt-0">
            <p>Contributors:</p>
            <ul className="list-disc list-inside">
              {project.contributors.map((contributor, index) => (
                <li key={index}>
                  {typeof contributor === "string"
                    ? contributor
                    : contributor.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalInfo;
