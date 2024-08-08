"use client";
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Section - Logo or Name */}
        <div>
          <Link href="/" className="text-xl font-bold text-neutral-100">
            Alex Vieru | Web Developer
          </Link>
          <p className="text-neutral-400 text-sm text-center md:text-start">
            © 2024 Alex Vieru
          </p>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="flex space-x-4">
          <Link
            href="https://github.com/alexvieru1"
            target="_blank"
            className="text-neutral-400 hover:text-neutral-100"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vieru-alexandru/"
            target="_blank"
            className="text-neutral-400 hover:text-neutral-100"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://x.com/alexvieru7"
            target="_blank"
            className="text-neutral-400 hover:text-neutral-100"
          >
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
