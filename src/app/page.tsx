'use client';

import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { HiOutlineSparkles, HiOutlineLightBulb, HiOutlineFire, HiOutlineHeart, HiOutlineStar, HiOutlineLightningBolt, HiOutlineCube } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

// Define the Link type for our links
interface Link {
  id: number;
  title: string;
  url: string;
  icon: React.ReactNode;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

export default function Home() {
  // Fixed theme color - softer green
  const themeColor = 'var(--accent-color)';
  
  // Using a local image file from the public directory
  // You can replace this file with your own image
  const profileImagePath = "/images/profile.jpg";
  
  // Sample links - replace with your own
  const links: Link[] = [
    {
      id: 1,
      title: 'Link One',
      url: 'https://x.com/1kpier',
      icon: <HiOutlineSparkles className="text-2xl" />
    },
    {
      id: 2,
      title: 'Link Two',
      url: 'https://github.com/0xPier',
      icon: <HiOutlineLightBulb className="text-2xl" />
    },
    {
      id: 3,
      title: 'Link Three',
      url: 'https://youtube.com/c/1kpier',
      icon: <HiOutlineFire className="text-2xl" />
    },
    {
      id: 4,
      title: 'Link Four',
      url: 'https://linkedin.com/in/yourusername',
      icon: <HiOutlineHeart className="text-2xl" />
    },
    {
      id: 5,
      title: 'Link Five',
      url: 'https://example.com',
      icon: <HiOutlineStar className="text-2xl" />
    },
    {
      id: 6,
      title: 'Link Six',
      url: 'https://example.com',
      icon: <HiOutlineLightningBolt className="text-2xl" />
    },
    {
      id: 7,
      title: 'Link Seven',
      url: 'mailto:your.email@example.com',
      icon: <HiOutlineCube className="text-2xl" />
    }
  ];

  return (
    <main 
      className="min-h-screen py-12 px-4 sm:px-6 flex flex-col items-center justify-start"
      style={{ 
        backgroundColor: 'rgb(var(--background-rgb))',
        color: 'rgb(var(--foreground-rgb))'
      }}
    >
      <motion.div 
        className="w-full max-w-md mx-auto flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Profile Section */}
        <motion.div variants={itemVariants} className="mb-6 text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent mx-auto">
            <Image 
              src={profileImagePath}
              alt="Profile Picture"
              width={96}
              height={96}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <h1 className="mt-4 text-2xl font-bold">0xPier</h1>
          <p className="mt-2 text-sm opacity-80 max-w-sm">
            Blockchain developer and crypto enthusiast. Building the future of web3 one block at a time.
          </p>
        </motion.div>
        
        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.a
            href="https://github.com/0xPier"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-card text-accent"
            whileHover={{ scale: 1.1, backgroundColor: '#2D2D2D' }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-2xl" />
          </motion.a>
          <motion.a
            href="https://x.com/1kpier"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-card text-accent"
            whileHover={{ scale: 1.1, backgroundColor: '#2D2D2D' }}
            whileTap={{ scale: 0.95 }}
          >
            <SiX className="text-2xl" />
          </motion.a>
          <motion.a
            href="https://youtube.com/c/1kpier"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-card text-accent"
            whileHover={{ scale: 1.1, backgroundColor: '#2D2D2D' }}
            whileTap={{ scale: 0.95 }}
          >
            <FaYoutube className="text-2xl" />
          </motion.a>
        </motion.div>
        
        {/* Links Section */}
        <motion.div 
          className="w-full max-w-md mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-lg bg-card hover:bg-card-hover transition-all duration-300"
              style={{ 
                borderLeft: `4px solid ${themeColor}`,
              }}
              variants={itemVariants}
              whileHover={{ 
                x: 5, 
                boxShadow: `0 0 12px 0 rgba(138, 226, 52, 0.2)` 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full mr-4 text-accent">
                {link.icon}
              </div>
              <span className="font-medium text-white">{link.title}</span>
            </motion.a>
          ))}
        </motion.div>
        
        {/* Footer */}
        <motion.footer 
          className="w-full max-w-md mx-auto mt-12 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p>© {new Date().getFullYear()} 1kPier</p>
          <p className="mt-1">Made with <span className="text-accent">❤️</span></p>
        </motion.footer>
      </motion.div>
    </main>
  );
}
