import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { TwitterIcon, GithubIcon, LinkedInIcon } from "./Icons";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  // Determine if the current path matches the href to set the initial width
  const isCurrentPath = router.asPath === href;

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
        transition-width ease duration-300 ${
          isCurrentPath ? "w-full" : "w-0"
        } group-hover:w-full`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/experiences" title="Experiences" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="/"
          target='{"_blank"}'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-7 mx-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/anh-nguyenn"
          target='{"_blank"}'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-7 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/jerrynguyentuananh/"
          target='{"_blank"}'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-7 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;
