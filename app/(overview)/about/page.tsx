import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import PageHeading from "@/app/components/PageHeading";
import PageBanner from "@/app/components/PageBanner";
import Section from "@/app/components/Section";
import PageCTA from "@/app/components/PageCTA";
import { Metadata } from "next";
import { addAboutJsonLd } from "@/app/utils/seo/addAboutJsonLd";
import profile from "@/app/lib/profile.json";
import Link from "next/link";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: `About Me | ${profile.name}`,
  description: profile.headline,
  twitter: {
    card: "summary_large_image",
    site: profile.handles.socials.twitter,
    title: `About Me | ${profile.name}`,
    description: profile.headline,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `About Me | ${profile.name}`,
    description: profile.headline,
  },
};

const { twitter, linkedin } = profile.handles.socials;

function About() {
  const socials = [
    {
      href: twitter,
      icon: <FaXTwitter />,
      handle: `@${twitter.split("/").pop()}`,
    },
    {
      href: linkedin,
      icon: <FiLinkedin />,
      handle: `/${linkedin.split("/").pop()}`,
    },
    {
      href: `mailto:${profile.email}`,
      icon: <MdOutlineEmail />,
      handle: profile.email,
    },
  ];

  return (
    <>
      <GoogleAnalytics />
      <PageBanner
        title="About Me"
        coverImage="/assets/images/LinkedIn Header Design Blue.jpg"
        coverImageAlt="LinkedIn Header Design Blue"
      />
      <Section>
        <PageHeading>I&apos;m Paul.</PageHeading>
        <div className="flex flex-col gap-[2rem]">
          <p>
            Hi 👋 My name is Paul Obayuwana. 
            I specialize in serverless architectures, DevOps practices, and cloud-native development.
            I&apos;m also a passionate blogger who loves sharing insights on cloud technologies, 
            AWS services, and my experiences in the tech industry. You can read my articles&nbsp;
            <Link
              className=" font-bold dark:hover:text-accent-dark hover:text-accent-light"
              href="/blogs"
            >
              here.
            </Link>
          </p>
          <p>A little bit about myself:</p>
          <ul className="list-disc pl-[2.5rem] flex flex-col gap-[2rem] [&>li]:pl-[8px]">
            <li>
              I&apos;m a passionate football fan (the real football, not American! ⚽) 
              supporting Chelsea Football Club and following transfer news.
            </li>
            <li>
              I enjoy anime, with Attack on Titan and Demon Slayer being my favorites. 
            </li>
            <li>
              I&apos;m an avid reader focused on theology, psychology, and relationships. 
            </li>
            <li>
              I enjoy diverse music - from Nigerian Christian music to classic 60s-80s 
              hits like ABBA, Fleetwood Mac, and Frankie Valli.
            </li>
          </ul>

          <p>
            I&apos;m passionate about solving complex problems through cloud architecture 
            and continuously exploring new AWS services and cloud technologies. I&apos;m 
            excited about the future of serverless computing and look forward to connecting 
            with fellow cloud engineers and like-minded individuals in the tech community.
          </p>
        </div>
      </Section>
      <PageCTA links={socials} />
      <script
        id="about-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(addAboutJsonLd()),
        }}
      />
    </>
  );
}

export default About;
