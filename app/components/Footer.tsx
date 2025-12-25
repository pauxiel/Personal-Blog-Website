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
