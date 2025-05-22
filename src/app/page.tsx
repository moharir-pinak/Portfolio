'use client';

import Image from "next/image";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeaderNav from "./components/HeaderNav";
import AboutMeDialog from "./components/AboutMeDialogue";
import ProjectList from "./components/Projectlist";
import ContactForm from "@/components/ui/contactform";
import MatterBackground from "./components/background/MatterBackground";
import technologies from './data/technologies.json'

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-6 sm:p-16 pb-20 gap-16 font-sans bg-gray-100">
      <MatterBackground />
      
      {/* Header */}
      <header className="row-start-1 w-full max-w-6xl mx-auto">
        <HeaderNav />
      </header>

      {/* Social Links */}
      <div className="fixed right-6 sm:right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 sm:gap-6 z-40">
        {[
          { href: "https://www.linkedin.com/in/pinak-moharir-625917227", icon: Linkedin, label: "LinkedIn" },
          { href: "mailto:pinakmoharir12@gmail.com", icon: Mail, label: "Email" },
          { href: "https://github.com/moharir-pinak", icon: Github, label: "GitHub" },
          { href: "https://leetcode.com/u/pinakmoharir12/", icon: Code2, label: "LeetCode" },
        ].map(({ href, icon: Icon, label }) => (
          <Link 
            key={label} 
            href={href} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-orange-400 transition-colors"
          >
            <Icon className="w-6 h-6" />
            <span className="sr-only">{label}</span>
          </Link>
        ))}
      </div>

      {/* Main Content */}
      <main className="row-start-2 w-full max-w-4xl mx-auto flex flex-col gap-16 items-center">
        {/* Hero Section */}
        <section id="home" className="flex flex-col items-center justify-center text-center py-16 px-4 sm:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <Image
              src="/assets/namelogo.png"
              alt="Logo"
              width={350}
              height={350}
              className="ml-2"
            /> {/* Adjust size as needed */}

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-orange-300">Pinak Moharir</h1>
            <p className="text-lg sm:text-xl text-orange-400 mb-8">Software Developer</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AboutMeDialog />
          </motion.div>
        </section>

        {/* Technology Slider */}
        <section id="technologies" className="w-full z-10 py-16">
          <div className="flex flex-wrap gap-6 justify-center">
            {technologies.map((tech, index) => (
              <a
                key={index}
                href={
                  tech.name === "Next.js"
                    ? "https://nextjs.org/"
                    : tech.name === "CSS"
                    ? "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    : tech.name === "MongoDB"
                    ? "https://www.mongodb.com/"
                    : undefined
                }
                target={tech.name === "Next.js" || tech.name === "CSS" || tech.name === "MongoDB" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-[190px] h-[254px] rounded-[20px] bg-gradient-to-tr from-[#00ff75] to-[#3700ff] p-[1px] transition-all duration-300 hover:shadow-[0px_0px_30px_1px_rgba(0,255,117,0.30)]"
                style={{ textDecoration: 'none' }}
              >
                <div className="w-full h-full bg-[#1a1a1a] rounded-[20px] transition-all duration-200 hover:scale-[0.98] flex flex-col items-center justify-center">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="text-white"
                  />
                  <p className="mt-4 text-white text-center">{tech.name}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Project List */}
        <section id="projects" className="w-full z-10 py-16">
          <ProjectList />
        </section>

        {/* Contact Form */}
        <section id="contact" className="w-full z-10 py-16">
          <div className="w-full flex justify-center items-center px-6">
            <div className="w-full max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="row-start-3 w-full max-w-6xl mx-auto flex items-center justify-center py-8 text-gray-500 z-10">
        <p>© {new Date().getFullYear()} Pinak Moharir. All rights reserved.</p>
      </footer>
    </div>
  );
}
