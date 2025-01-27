"use client"
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, BrainCircuit } from "lucide-react";
import { FlipWords } from "../components/ui/flip-words";
import { BackgroundBeams } from "../components/ui/background-beams";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { LinkPreview } from "../components/ui/link-preview";
import profile from '../public/profile.jpeg'
import aboutImage from '../public/aboutImage.png'
import NodeJs from '../public/nodejs.png'
import C from '../public/c++.png'
import React from '../public/react.png'
import MySQL from '../public/mysql.png'
import Neon from '../public/neon.png'
import Socket from '../public/socket.png'
import NextJs from '../public/nextjs.png'
import Mongo from '../public/mongodb.svg'
import Git from '../public/git.png'
import Express from '../public/express.svg'
import Tailwind from '../public/tailwind-css.svg'
import Github from '../public/github.png'
import Sparkle from '../public/sparkle.png'
import Javascript from '../public/javascript.png'
import Typescript from '../public/typescript.png'

export default function Home() {
  const words = ["Web Developer", "Problem Solver"];
  const projects = [
    {
      title: "JavaScript",
      description:
        Javascript,
    },
    {
      title: "ReactJs",
      description:
        React,
    },
    {
      title: "NextJs",
      description:
        NextJs,
    },
    {
      title: "C++",
      description:
        C,
    },
    {
      title: "TypeScript",
      description:
        Typescript,
    },
    {
      title: "TailwindCSS",
      description:
        Tailwind,
    },
    {
      title: "MongoDB",
      description:
        Mongo,
    },
    {
      title: "MySQL",
      description:
        MySQL,
    },
    {
      title: "Neon",
      description:
        Neon,
    },
    {
      title: "ExpressJs",
      description:
        Express,
    },
    {
      title: "NodeJs",
      description:
        NodeJs,
    },
    {
      title: "Gemini",
      description:
        Sparkle,
    },
    {
      title: "Socket IO",
      description:
        Socket,
    },
    {
      title: "Git",
      description:
        Git,
    },
    {
      title: "GitHub",
      description:
        Github,
    },
  ];
  return (
    <div className="bg-neutral-950 flex flex-col pb-8 items-center min-h-screen text-gray-200">
      <div className="w-[90%] sm:w-[70%] z-20">
        <div className="pt-8 px-8 top-4 flex justify-between items-center shadow-lg border-white rounded-full bg-transparent">
          <h1 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-white to-gray-900">Rounak Kishan</h1>
          <a href='./resume.pdf' className="h-12 animate-shimmer flex items-center justify-center rounded-full border border-gray-200 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:outline-none hover:ring-1 hover:ring-slate-200 hover:ring-offset-2 hover:ring-offset-slate-200">
            Resume
          </a>
        </div>
        <div className="flex flex-col justify-center items-center h-[600px] mt-12">
          <div className="flex flex-col justify-center">
            <Image src={profile} alt="profile" height={150} width={150} className="rounded-full" />
          </div>
          <div className="flex flex-col justify-center mt-4">
            <h2 className="text-lg sm:text-xl md:text-2xl text-center text-gray-400 mb-2">Hi there! I'm</h2>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-white to-gray-900">Rounak Kishan</h1>
            <FlipWords words={words} />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-10 mt-10">
            <a href="https://www.facebook.com/rounak.kishan.3" target="_blank" rel="noopener noreferrer" className="hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-900 transition border border-gray-700 p-4 rounded-xl">
              <Facebook width={30} height={30} />
            </a>
            <div className="flex justify-center items-center"><p>--:--</p></div>
            <a href="https://x.com/rounak_kishan28" target="_blank" rel="noopener noreferrer" className="hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-900 transition border border-gray-700 p-4 rounded-xl">
              <Twitter width={30} height={30} />
            </a>
            <div className="flex justify-center items-center"><p>--:--</p></div>
            <a href="https://www.instagram.com/_rounak_kishan/" target="_blank" rel="noopener noreferrer" className="hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-900 transition border border-gray-700 p-4 rounded-xl">
              <Instagram width={30} height={30} />
            </a>
            <div className="flex justify-center items-center"><p>--:--</p></div>
            <a href="https://www.linkedin.com/in/rounak-kishan-931394257/" target="_blank" rel="noopener noreferrer" className="hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-900 transition border border-gray-700 p-4 rounded-xl">
              <Linkedin width={30} height={30} />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center min-h-[700px] mt-12">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-gray-900">About Me</h1>
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-16 mt-4">
            <div>
              <h1 className="text-2xl -mb-3">Merging Creativity with Code to Shape a Better Tomorrow</h1>
              <p className="mb-4">____________________</p>
              <p className="text-xl">Hi, I'm Rounak Kishan – a passionate technologist driven to create a brighter future by blending innovation and creativity. I am currently pursuing a B.Tech in Computer Science and Engineering at Birsa Institute of Technology Sindri, Dhanbad. As a dedicated web developer and problem solver, I strive to craft meaningful solutions that leave a positive impact on the world.</p>
            </div>
            <Image src={aboutImage} alt="about-image" height={400} width={400} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center min-h-[700px] mt-12">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-gray-900">My Domains</h1>
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 mt-12">
            <div className="flex flex-col justify-end hover:shadow-md hover:shadow-gray-200 p-6 border rounded-2xl border-gray-700 h-[400px]">
              <h1 className="text-[130px] text-center text-gray-900">{'</>'}</h1>
              <h1 className="text-3xl mb-8">Web Development</h1>
              <p className="text-xl">If you're looking for a web developer to bring your vision to life, I'm here to handle everything from concept to launch with precision and creativity.</p>
            </div>
            <div className="flex flex-col justify-end hover:shadow-md hover:shadow-gray-200 transition-shadow p-6 border rounded-2xl border-gray-700 h-[400px]">
              <h1 className="flex justify-center items-center text-center text-gray-900 pb-7"><BrainCircuit className="w-32 h-32" /></h1>
              <h1 className="text-3xl mb-8">Problem Solving</h1>
              <p className="text-xl">A dedicated problem solver to tackle challenges and find effective solutions, I'm here to apply my growing skills and fresh perspective to help you succeed.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center min-h-[700px] mt-12">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-gray-900">My Skills</h1>
          <HoverEffect items={projects} />
        </div>
        <div className="flex flex-col justify-center items-center min-h-[700px] mt-12">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-gray-900">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <LinkPreview url={'https://studio-ai-five.vercel.app/'} className="text-white font-bold p-6 pt-14 border border-gray-700 rounded-xl">
              <h1 className="text-4xl mb-4">StudioAI</h1>
              <p className="text-gray-300 text-xl font-normal mb-2">An AI-powered video generation and editing platform with a credit-based system and integrated payment gateway for seamless transactions. Enabled users to purchase credits to access advanced video creation and smart editing.</p>
              <p className="text-blue-800 font-light">Click here</p>
            </LinkPreview>
            <LinkPreview url={'https://trekon-1.onrender.com/'} className="text-white font-bold p-6 pt-14 border border-gray-700 rounded-xl">
              <h1 className="text-4xl mb-4">TrekOn</h1>
              <p className="text-gray-300 text-xl font-normal mb-2">A responsive web application for travel enthusiasts to explore trending destinations, book adventure activities, and a secure payment gateway. The platform features an intuitive UI with dynamic routing using React Router and real-time chat functionality using Socket.io for enhanced customer engagement.</p>
              <p className="text-blue-800 font-light">Click here</p>
            </LinkPreview>
            <LinkPreview url={'https://shopme-1.onrender.com/'} className="text-white font-bold p-6 pt-14 border border-gray-700 rounded-xl">
              <h1 className="text-4xl mb-4">ShopMe</h1>
              <p className="text-gray-300 text-xl font-normal mb-2">A full-stack electronics e-commerce website using the MERN stack. Implemented features such as user authentication, product listing, shopping cart, order management, and a secure payment gateway.</p>
              <p className="text-blue-800 font-light">Click here</p>
            </LinkPreview>
            <LinkPreview url={'https://rounakkishan28.github.io/Move_It/'} className="text-white font-bold p-6 pt-14 border border-gray-700 rounded-xl">
              <h1 className="text-4xl mb-4">MoveIt</h1>
              <p className="text-gray-300 text-xl font-normal mb-2">A responsive frontend web application for a courier service, enabling users to track shipments and calculate delivery costs. The application features an intuitive interface, interactive forms, and real-time updates using modern frontend technologies like HTML and CSS to enhance user experience and accessibility.</p>
              <p className="text-blue-800 font-light">Click here</p>
            </LinkPreview>
            <LinkPreview url={'https://rounakkishan28.github.io/Event-Hub/'} className="text-white font-bold p-6 pt-14 border border-gray-700 rounded-xl">
              <h1 className="text-4xl mb-4">EventHub</h1>
              <p className="text-gray-300 text-xl font-normal mb-2">A interactive frontend web page for an event management platform using HTML and CSS. The page included a visually appealing layout with sections for event details, schedules, and contact information, along with hover effects and a navigation menu for seamless user interaction.</p>
              <p className="text-blue-800 font-light">Click here</p>
            </LinkPreview>
            <LinkPreview url={'https://todolist-wob8.onrender.com/'} className="text-white font-bold p-6 pt-14 border border-gray-700 rounded-xl">
              <h1 className="text-4xl mb-4">TodoList</h1>
              <p className="text-gray-300 text-xl font-normal mb-2">A simple yet effective To-Do List web application using React.js for managing tasks. The app allows users to add, edit, and delete tasks, with real-time updates stored in the browser’s localStorage for persistence across sessions. Built with React.js to provide a smooth, dynamic user experience.</p>
              <p className="text-blue-800 font-light">Click here</p>
            </LinkPreview>
          </div>
        </div>
        <footer className="text-gray-200 py-8 px-4 mt-12">
          <div className="flex flex-col justify-center items-center mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-gray-900">Let's work together</h1>
            <p className="text-gray-300 text-xl sm:text-3xl mt-12">Get in touch</p>
            <p className="-mt-4">_______</p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Company Information */}
            <div className="flex flex-col space-y-4">
              <p className="text-sm text-gray-400">
                Designed & Developed by
              </p>
              <h2 className="text-3xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-white to-slate-900 cursor-pointer">Rounak Kishan</h2>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.facebook.com/rounak.kishan.3" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                  <Facebook width={20} height={20} />
                </a>
                <a href="https://x.com/rounak_kishan28" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                  <Twitter width={20} height={20} />
                </a>
                <a href="https://www.instagram.com/_rounak_kishan/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                  <Instagram width={20} height={20} />
                </a>
                <a href="https://www.linkedin.com/in/rounak-kishan-931394257/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                  <Linkedin width={20} height={20} />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-slate-300">Contact</h3>
              <div className="flex flex-col gap-5">
                <p className="flex gap-3 text-sm hover:text-gray-400 transition"><Phone /> +91 91552 72627</p>
                <p className="flex gap-3 text-sm hover:text-gray-400 transition"><Mail /> rounakkishan28@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-base text-gray-500">
            <p className="flex items-center justify-center">© {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </footer>
      </div>
      <BackgroundBeams />
    </div>
  );
}
