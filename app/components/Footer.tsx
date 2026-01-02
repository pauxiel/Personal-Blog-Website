import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import profile from "@/app/lib/profile.json";

function Footer() {
  return (
    <footer className="px-[2rem] xs:px-[3rem] md:px-[48px] lg:px-[64px] py-[48px] bg-background-light dark:bg-background-dark border-t border-secondary-light/20 dark:border-secondary-dark/20 w-full">
      <div className="max-w-[1280px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-[48px]">
          {/* Column 1: Logo/Name */}
          <div className="flex flex-col gap-[8px]">
            <Link
              href="/"
              className="text-[1.8rem] xs:text-[2rem] font-semibold text-black dark:text-white hover:text-accent-light dark:hover:text-accent-dark transition-colors"
            >
              {profile.name}
            </Link>
            <p className="text-[1.2rem] xs:text-[1.4rem] text-secondary-light dark:text-secondary-dark">
              Cloud Developer | AWS Solutions Architect
            </p>
            {/* Every.to Promo Box */}
            <Link
              href="https://every.to/?via=paul-obayuwana"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[12px] inline-flex items-center gap-[8px] px-[12px] py-[8px] rounded-[8px] bg-accent-light/10 dark:bg-accent-dark/10 border border-accent-light/20 dark:border-accent-dark/20 hover:bg-accent-light/20 dark:hover:bg-accent-dark/20 transition-colors group w-fit"
            >
              <span className="text-[1.2rem] font-medium text-accent-light dark:text-accent-dark">
                Read Every.to
              </span>
              <svg
                className="w-[14px] h-[14px] text-accent-light dark:text-accent-dark group-hover:translate-x-[2px] transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </Link>
          </div>

          {/* Column 2: Navigation Links */}
          <nav>
            <h4 className="text-[1.4rem] font-semibold text-black dark:text-white mb-[16px]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-[12px] text-[1.4rem] text-secondary-light dark:text-secondary-dark">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: Social Icons */}
          <div>
            <h4 className="text-[1.4rem] font-semibold text-black dark:text-white mb-[16px]">
              Connect
            </h4>
            <div className="flex gap-[16px] text-[2rem] text-secondary-light dark:text-secondary-dark">
              <Link
                href={profile.handles.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </Link>
              <Link
                href={profile.handles.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
              <Link
                href={profile.handles.portfolios.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
              <Link
                href={`mailto:${profile.email}`}
                className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                aria-label="Email"
              >
                <IoMailOutline />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-[32px] pt-[24px] border-t border-secondary-light/20 dark:border-secondary-dark/20">
          <p className="text-[1.2rem] leading-[150%] text-secondary-light dark:text-secondary-dark text-center">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
