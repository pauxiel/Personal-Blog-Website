import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import Section from "@/app/components/Section";
import SectionHeading from "@/app/components/SectionHeading";
import Button from "@/app/components/Button";
import BookCard from "@/app/components/BookCard";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import skills from "@/app/lib/skills.json";
import Image from "next/image";
import Link from "next/link";
import { addHomeJsonLd } from "./utils/seo/addHomeJsonLd";
import profile from "@/app/lib/profile.json";
import GoogleAnalytics from "./components/GoogleAnalytics";

// Book data for Resources section
const bookData = {
  title: "Serverless Essentials: An AWS Guide for Beginners and Leaders",
  author: "Paul Obayuwana",
  price: "$10 USD",
  coverImage: "https://public-files.gumroad.com/klfsem6l988xum9q500t7fzinose",
  purchaseLink: "https://obayuwana.gumroad.com/l/eedjz",
  description:
    "62-page practical AWS serverless guide covering Lambda, API Gateway, DynamoDB, EventBridge, Step Functions, and more. Perfect for developers new to serverless and technical leaders.",
};

export default function Home() {
  return (
    <>
      <GoogleAnalytics />
      <main className="flex flex-col items-center w-full max-w-[1280px] px-[2rem] xs:px-[3rem] md:px-[48px] lg:px-[64px] text-center gap-[80px] md:gap-[120px] mt-[3.5rem] mb-[6rem]">
        {/* Hero Section */}
        <Section>
          <div className="relative w-[10rem] h-[10rem] xs:w-[15rem] xs:h-[15rem] sm:w-[20rem] sm:h-[20rem] bg-secondary-light dark:bg-secondary-dark rounded-full overflow-hidden">
            <Image
              src="/assets/images/profile.jpg"
              alt={profile.name}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <h1 className="text-black dark:text-white text-[2.4rem] xs:text-[3rem] font-bold leading-[120%]">
            Hey! 👋 I&apos;m{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Paul.
            </span>
            <br />
            <span className="text-[1.6rem] xs:text-[2rem] font-semibold text-secondary-light dark:text-secondary-dark">
              Cloud Developer & AWS Solutions Architect
            </span>
          </h1>
          <p className="max-w-[600px]">
            Building scalable, secure, and cost-efficient serverless solutions.
            I transform business requirements into reliable cloud architectures
            that deliver measurable impact.
          </p>
          <div className="flex flex-col xs:flex-row gap-[16px]">
            <a
              href="/assets/resume.pdf"
              download
              className="inline-block px-[24px] py-[12px] rounded-[8px] font-medium text-[1.4rem] xs:text-[1.6rem] transition-all duration-200 text-center bg-accent-light dark:bg-accent-dark text-white hover:opacity-90"
            >
              Download Resume
            </a>
            <Button href="/projects" variant="secondary">
              View Projects
            </Button>
          </div>
        </Section>

        {/* Featured Projects Section */}
        <FeaturedProjects />

        {/* About Section */}
        <Section>
          <SectionHeading>About Me</SectionHeading>
          <p className="max-w-[700px]">
            I am a Software Engineer and Cloud Developer passionate about
            building scalable, secure, and cost-efficient solutions in AWS. My
            core strengths lie in serverless architectures, DevOps practices,
            and cloud-native development.
          </p>
          <p className="max-w-[700px]">
            I am AWS Certified Solutions Architect Associate, strengthening my
            expertise in designing highly available and fault-tolerant systems.
            I enjoy transforming business requirements into reliable cloud
            solutions that deliver measurable impact.
          </p>
          <p>I usually work with these technologies.</p>
          <div className="flex flex-wrap gap-[1.6rem] xs:gap-[2.5rem] sm:gap-[3.5rem] justify-center">
            {skills.map((skill) => {
              const [skillName, skillIcon] = skill;
              return (
                <div
                  key={skillName}
                  className="relative w-[22px] h-[22px] xs:w-[27px] xs:h-[27px] sm:w-[36px] sm:h-[36px]"
                >
                  <Image
                    src={`/assets/skill-icons/${skillIcon}`}
                    alt={skillName}
                    sizes="22px, (min-width: 375px) 27px, (min-width: 640px) 36px"
                    fill
                  />
                </div>
              );
            })}
          </div>
        </Section>

        {/* Books/Resources Section */}
        <Section>
          <SectionHeading>Resources</SectionHeading>
          <p className="max-w-[600px]">
            I regularly share tutorials and write articles that simplify complex
            cloud topics. Check out my book on serverless development.
          </p>
          <BookCard
            title={bookData.title}
            author={bookData.author}
            price={bookData.price}
            coverImage={bookData.coverImage}
            purchaseLink={bookData.purchaseLink}
            description={bookData.description}
          />
          <a
            href="/assets/resume.pdf"
            download
            className="text-accent-light dark:text-accent-dark text-[1.4rem] font-medium hover:underline"
          >
            Download Resume {"-->"}
          </a>
        </Section>

        {/* Contact Section */}
        <Section id="contact">
          <SectionHeading>Let&apos;s Connect</SectionHeading>
          <p className="max-w-[600px]">
            My goal is to continue growing as a cloud solutions engineer and
            contribute to teams where innovation and scalability are at the
            heart of technology strategy. I welcome opportunities to collaborate
            on challenging projects.
          </p>
          <div className="flex gap-[3rem] text-[2rem] xs:text-[2.5rem] text-accent-light dark:text-accent-dark">
            <Link
              href={profile.handles.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </Link>
            <Link
              href={profile.handles.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={profile.handles.portfolios.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="GitHub"
            >
              <FaGithub />
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              className="hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              <IoMailOutline />
            </Link>
          </div>
          <Button href={`mailto:${profile.email}`}>Send me an Email</Button>
        </Section>
      </main>
      <script
        id="home-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(addHomeJsonLd()),
        }}
      />
    </>
  );
}
