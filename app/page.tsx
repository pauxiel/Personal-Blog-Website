import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import Section from "@/app/components/Section";
import SectionHeading from "@/app/components/SectionHeading";
import SectionLink from "@/app/components/SectionLink";
import skills from "@/app/lib/skills.json";
import Image from "next/image";
import Link from "next/link";
import { addHomeJsonLd } from "./utils/seo/addHomeJsonLd";
import profile from "@/app/lib/profile.json";
import GoogleAnalytics from "./components/GoogleAnalytics";

export default function Home() {
  return (
    <>
      <GoogleAnalytics />
      <main className="flex flex-col items-center w-full max-w-[830px] px-[2rem] xs:px-[3rem] text-center gap-[10rem] mt-[3.5rem] mb-[6rem]">
        <Section>
          <div className="relative w-[10rem] h-[10rem] xs:w-[15rem] xs:h-[15rem] sm:w-[20rem] sm:h-[20rem] bg-secondary-light dark:bg-secondary-dark rounded-full overflow-hidden">
            <Image
              src="/assets/images/profile.jpg"
              alt={profile.name}
              fill
              className="object-cover object-center"
            />
          </div>
          <h1 className="text-black dark:text-white text-[1.8rem] xs:text-[2.4rem] font-semibold leading-[150%]">
            Hey! 👋 I&apos;m{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Paul.
            </span>
            <br />
            It’s nice to meet you!
          </h1>
          <p>
            I am a Software Engineer and Cloud Developer passionate about building scalable, 
            secure, and cost-efficient solutions in AWS. My core strengths lie in serverless 
            architectures, DevOps practices, and cloud-native development, with hands-on experience 
            designing systems that improve performance and reduce operational overhead.
          </p>
          <SectionLink href="/blogs">My Blogs {"-->"}</SectionLink>
          <a
            href="/assets/resume.pdf"
            download
            className="text-accent-light dark:text-accent-dark text-[1.4rem] font-medium"
          >
            Download Resume {"-->"}
          </a>
        </Section>
        <Section>
          <SectionHeading>What I Do</SectionHeading>
          <p>
            In my recent projects, I have deployed static websites with global reach using AWS S3, 
            CloudFront, and Route 53, automated CI/CD pipelines to accelerate releases, and leveraged 
            serverless frameworks to cut infrastructure costs by up to 30 percent. I work on containerized 
            applications and serverless full-stack solutions, not just static websites.
          </p>
          <p>
            I am AWS Certified Solutions Architect Associate, strengthening my expertise in designing 
            highly available and fault-tolerant systems. I enjoy transforming business requirements 
            into reliable cloud solutions that deliver measurable impact.
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
          <p>Here are some of the cloud solutions and projects I have worked on.</p>
          <SectionLink href="/projects">
            Checkout my Projects {"-->"}
          </SectionLink>
        </Section>
        <Section>
          <SectionHeading>Connect With Me</SectionHeading>
          <p>
            My goal is to continue growing as a cloud solutions engineer and contribute to teams 
            where innovation and scalability are at the heart of technology strategy. I welcome 
            opportunities to collaborate on challenging projects that push the boundaries of what 
            cloud can do.
          </p>
          <p>
            Alongside my technical work, I regularly share tutorials and write articles that 
            simplify complex cloud topics for developers and businesses. You can find me here.
          </p>
          <div className="flex gap-[3rem] text-[2rem] xs:text-[2.5rem] text-accent-light dark:text-accent-dark">
            <Link href={profile.handles.socials.twitter}>
              <FaXTwitter />
            </Link>
            <Link href={profile.handles.socials.linkedin}>
              <FaLinkedin />
            </Link>
            <Link href={`mailto:${profile.email}`}>
              <IoMailOutline />
            </Link>
          </div>
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
