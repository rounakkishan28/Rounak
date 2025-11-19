
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  BrainCircuit,
  CircuitBoard,
  Github as LucideGithub,
  Github as GithubIcon,
} from "lucide-react";
import { FlipWords } from "../components/ui/flip-words";
import { BackgroundBeams } from "../components/ui/background-beams";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { LinkPreview } from "../components/ui/link-preview";

import profile from "../public/profile.jpeg";
import aboutImage from "../public/aboutImage.png";
import NodeJs from "../public/nodejs.png";
import C from "../public/c++.png";
import ReactImg from "../public/react.png";
import MySQL from "../public/mysql.png";
import Neon from "../public/neon.png";
import Socket from "../public/socket.png";
import NextJs from "../public/nextjs.png";
import Mongo from "../public/mongodb.svg";
import Git from "../public/git.png";
import Express from "../public/express.svg";
import Tailwind from "../public/tailwind-css.svg";
import Github from "../public/github.png";
import Javascript from "../public/javascript.png";
import Typescript from "../public/typescript.png";
import Java from "../public/java.png";
import SpringBoot from "../public/springBoot.png";

export default function Home() {
  const words = ["Web Developer", "Problem Solver"];

  const projects = [
    { title: "JavaScript", img: Javascript },
    { title: "React", img: ReactImg },
    { title: "Next.js", img: NextJs },
    { title: "C++", img: C },
    { title: "TypeScript", img: Typescript },
    { title: "Tailwind", img: Tailwind },
    { title: "MongoDB", img: Mongo },
    { title: "MySQL", img: MySQL },
    { title: "Neon", img: Neon },
    { title: "Express", img: Express },
    { title: "Node.js", img: NodeJs },
    { title: "Java", img: Java },
    { title: "Spring Boot", img: SpringBoot },
    { title: "Socket.IO", img: Socket },
    { title: "Git", img: Git },
    { title: "GitHub", img: Github },
  ];

  const social = [
    { Icon: Linkedin, href: "https://www.linkedin.com/in/rounak-kishan-931394257/", label: "LinkedIn" },
    { Icon: LucideGithub, href: "https://github.com/rounakkishan28", label: "GitHub" },
    { Icon: Facebook, href: "https://www.facebook.com/rounak.kishan.3", label: "Facebook" },
    { Icon: Twitter, href: "https://x.com/rounak_kishan28", label: "X" },
    { Icon: Instagram, href: "https://www.instagram.com/_rounak_kishan/", label: "Instagram" },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen text-gray-200 flex flex-col items-center pb-12">
      <div className="w-[92%] sm:w-[80%] lg:w-[70%] z-20">
        {/* Header */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sticky top-6 z-50 backdrop-blur-md bg-white/3 border border-white/6 rounded-full p-4 flex items-center justify-between shadow-md"
        >
          <div className="flex items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-gray-200 via-white to-gray-300">
              Rounak Kishan
            </h1>
            <span className="hidden sm:inline-block px-3 py-1 text-xs rounded-full bg-white/5 border border-white/6 text-gray-300">
              B.Tech CSE • Web & Backend
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="./Rounak Kishan.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 bg-gradient-to-b from-white/3 to-transparent text-sm font-medium hover:scale-105 transition"
              aria-label="Download resume"
            >
              Resume
            </a>

            <nav className="hidden sm:flex items-center gap-3">
              {social.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/3 transition"
                  aria-label={label}
                >
                  <Icon width={20} height={20} />
                </a>
              ))}
            </nav>

            {/* mobile social menu */}
            <div className="sm:hidden flex items-center gap-2">
              <button
                aria-label="open-socials"
                className="p-2 rounded-md border border-gray-600"
                onClick={() => window.scrollTo({ top: 450, behavior: 'smooth' })}
              >
                <LucideGithub width={18} height={18} />
              </button>
            </div>
          </div>
        </motion.header>

        {/* Hero */}
        <section className="flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-[0_8px_30px_rgba(255,255,255,0.06)]">
              <Image
                src={profile}
                alt="Rounak Kishan"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 160px, 192px"
              />
              <span className="absolute -bottom-3 -right-3 bg-gradient-to-tr from-sky-400 to-violet-400 rounded-full p-1 shadow-lg" />
            </div>

            <h2 className="mt-6 text-lg sm:text-xl text-gray-400">Hi there! I'm</h2>
            <h1 className="mt-2 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-gray-200 via-white to-gray-300">
              Rounak Kishan
            </h1>

            <div className="mt-3 text-xl">
              <FlipWords words={words} />
            </div>

            {/* Clean social bar for smaller screens */}
            <div className="mt-6 flex gap-4 sm:hidden">
              {social.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-gray-600 hover:bg-white/5 transition"
                  aria-label={label}
                >
                  <Icon width={20} height={20} />
                </a>
              ))}
            </div>

          </motion.div>

          {/* Quick contact CTA */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="mt-8 flex gap-3"
          >
            <a
              href="mailto:rounakkishan28@gmail.com"
              className="px-5 py-3 rounded-full border border-gray-600 hover:scale-105 transition"
            >
              Contact Me
            </a>
            <a
              href="tel:+919155272627"
              className="px-5 py-3 rounded-full border border-transparent bg-white/3 hover:scale-105 transition"
            >
              Call
            </a>
          </motion.div>
        </section>

        {/* About */}
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
              <Image src={aboutImage} alt="about" width={520} height={400} className="object-cover" />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-900">
              About Me
            </h3>
            <div className="w-28 h-1 bg-gradient-to-r from-gray-300 to-gray-600 rounded-full my-4" />

            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I'm Rounak Kishan — a passionate technologist merging creativity with code to build meaningful software. I am currently pursuing a B.Tech in Computer Science and Engineering at Birsa Institute of Technology Sindri, Dhanbad. I focus on web & backend development, system design, and problem solving.
            </p>

            <ul className="mt-6 space-y-2 text-gray-300">
              <li>• Production-ready backend systems with Spring Boot & PostgreSQL</li>
              <li>• Frontend applications with React / Next.js and Tailwind CSS</li>
              <li>• Real-time features using Socket.IO and scalable data stores (MongoDB / MySQL)</li>
            </ul>

          </motion.div>

        </section>

        {/* Skills */}
        <section className="mt-24">
          <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-900 text-center">
            My Skills
          </h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -6 }} className="p-6 border border-gray-700 rounded-2xl bg-white/2">
              <div className="text-[84px] text-center text-neutral-500">{`</>`}</div>
              <h4 className="text-2xl mt-4 text-center">Web Development</h4>
              <p className="mt-3 text-gray-300">I build responsive, performant web apps — from UI to APIs — with an emphasis on clean code and good UX.</p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="p-6 border border-gray-700 rounded-2xl bg-white/2">
              <div className="flex justify-center items-center"><BrainCircuit className="w-24 h-24" /></div>
              <h4 className="text-2xl mt-4 text-center">Problem Solving</h4>
              <p className="mt-3 text-gray-300">I enjoy tackling algorithmic and systems problems — designing robust, efficient solutions under constraints.</p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="p-6 border border-gray-700 rounded-2xl bg-white/2">
              <div className="flex justify-center items-center"><CircuitBoard className="w-24 h-24" /></div>
              <h4 className="text-2xl mt-4 text-center">System Design (LLD)</h4>
              <p className="mt-3 text-gray-300">Designing modular, maintainable low-level designs for services, focusing on scalability and clarity.</p>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-24">
          <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-900 text-center">Tech Stack</h3>

          <div className="mt-8">
            <HoverEffect items={projects.map(p => ({ title: p.title, description: p.img }))} />
          </div>
        </section>

        {/* Projects */}
        <section className="mt-24">
          <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-900 text-center">Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <LinkPreview url={"https://www.github.com/rounakkishan28/MedPoint-Server"} className="p-6 rounded-xl border border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all">
              <h4 className="text-2xl text-neutral-400 font-bold">MedPoint</h4>
              <p className="mt-3 text-gray-300">Production-ready hospital backend built with Spring Boot and PostgreSQL — patient management, appointments, billing.</p>
              <p className="mt-4 text-blue-400 underline">View on GitHub</p>
            </LinkPreview>

            <LinkPreview url={"https://studio-ai-five.vercel.app/"} className="p-6 rounded-xl border border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all">
              <h4 className="text-2xl text-neutral-400 font-bold">StudioAI</h4>
              <p className="mt-3 text-gray-300">AI-powered video generation & editing platform with a credit system and integrated payments.</p>
              <p className="mt-4 text-blue-400 underline">Open Demo</p>
            </LinkPreview>

            <LinkPreview url={"https://quiz-ai-xi.vercel.app"} className="p-6 rounded-xl border border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all">
              <h4 className="text-2xl text-neutral-400 font-bold">QuizAI</h4>
              <p className="mt-3 text-gray-300">AI-driven quiz app with performance analytics, XP, and progress graphs.</p>
              <p className="mt-4 text-blue-400 underline">Open Demo</p>
            </LinkPreview>

            <LinkPreview url={"https://trekon-1.onrender.com/"} className="p-6 rounded-xl border border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all">
              <h4 className="text-2xl text-neutral-400 font-bold">TrekOn</h4>
              <p className="mt-3 text-gray-300">A travel app with booking, real-time chat, and dynamic routing using React Router.</p>
              <p className="mt-4 text-blue-400 underline">Open Demo</p>
            </LinkPreview>

            <LinkPreview url={"https://shopme-1.onrender.com/"} className="p-6 rounded-xl border border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all">
              <h4 className="text-2xl text-neutral-400 font-bold">ShopMe</h4>
              <p className="mt-3 text-gray-300">MERN e-commerce with authentication, cart, orders, and secure payments.</p>
              <p className="mt-4 text-blue-400 underline">Open Demo</p>
            </LinkPreview>

            <LinkPreview url={"https://rounakkishan28.github.io/Move_It/"} className="p-6 rounded-xl border border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all">
              <h4 className="text-2xl text-neutral-400 font-bold">MoveIt</h4>
              <p className="mt-3 text-gray-300">A courier frontend app for tracking shipments and delivery cost calculations.</p>
              <p className="mt-4 text-blue-400 underline">Open Demo</p>
            </LinkPreview>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-white/6 pt-8">
            <div>
              <p className="text-sm text-gray-400">Designed & Developed by</p>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-white to-slate-900">Rounak Kishan</h2>
              <div className="mt-4 flex gap-4">
                {social.map(({ Icon, href, label }, i) => (
                  <a key={i} aria-label={label} href={href} target="_blank" rel="noreferrer" className="p-2 rounded-md border border-transparent hover:border-white/10">
                    <Icon width={18} height={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-300">Contact</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a href="tel:+919155272627" className="flex items-center gap-2 hover:text-gray-300"><Phone /> +91 91552 72627</a>
                <a href="mailto:rounakkishan28@gmail.com" className="flex items-center gap-2 hover:text-gray-300"><Mail /> rounakkishan28@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()}. All rights reserved.</div>
        </footer>
      </div>

      <BackgroundBeams />
    </div>
  );
}
