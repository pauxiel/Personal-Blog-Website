import { FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import PageHeading from "@/app/components/PageHeading";
import PageBanner from "@/app/components/PageBanner";
import Section from "@/app/components/Section";
import PageCTA from "@/app/components/PageCTA";
import { Metadata } from "next";
import profile from "@/app/lib/profile.json";
import Link from "next/link";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: `Freelance Services | ${profile.name}`,
  description:
    "AWS Cloud Services & Strategic Web Design. Specializing in serverless architecture, AWS cost optimization, and conversion-focused websites that stand out in the AI era.",
  twitter: {
    card: "summary_large_image",
    site: profile.handles.socials.twitter,
    title: `Freelance Services | ${profile.name}`,
    description:
      "AWS Cloud Services & Strategic Web Design. Specializing in serverless architecture and conversion-focused websites.",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `Freelance Services | ${profile.name}`,
    description:
      "AWS Cloud Services & Strategic Web Design. Specializing in serverless architecture, AWS cost optimization, and conversion-focused websites.",
  },
};

const { linkedin } = profile.handles.socials;

function Freelance() {
  const contactLinks = [
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
        title="Freelance"
        coverImage="/assets/images/LinkedIn Header Design Blue.jpg"
        coverImageAlt="Freelance Services Banner"
      />
      <Section>
        <PageHeading>Stand Out In The AI Era.</PageHeading>
        <div className="flex flex-col gap-[3rem]">
          {/* Intro */}
          <p>
            In today&apos;s saturated marketplace, generic solutions aren&apos;t
            just ineffective—they&apos;re expensive, costing you missed
            opportunities. Whether you need cloud infrastructure that scales or
            a website that converts, I deliver strategic solutions that set you
            apart.
          </p>

          {/* AWS Services Section */}
          <div className="flex flex-col gap-[2rem]">
            <h3 className="text-[1.8rem] xs:text-[2rem] font-bold">
              AWS Cloud Services
            </h3>
            <p>
              My primary expertise lies in AWS cloud architecture. I help small
              businesses harness the power of the cloud without the complexity
              or runaway costs.
            </p>
            <ul className="list-disc pl-[2.5rem] flex flex-col gap-[1.5rem] [&>li]:pl-[8px]">
              <li>
                <strong>Serverless Architecture:</strong> Build and migrate to
                serverless—eliminating server management, reducing costs, and
                scaling automatically with demand.
              </li>
              <li>
                <strong>AWS Cost Optimization:</strong> Audit your AWS spending
                and implement strategies to cut unnecessary expenses while
                maintaining performance.
              </li>
              <li>
                <strong>Small Business AWS Setup:</strong> Get started with AWS
                the right way—IAM best practices, secure VPC configurations, and
                infrastructure that grows with you.
              </li>
              <li>
                <strong>Quick AWS Gigs:</strong> Need a Lambda function, API
                Gateway setup, S3 bucket configuration, or DynamoDB table? I
                handle focused, quick-turnaround cloud tasks.
              </li>
            </ul>
          </div>

          {/* Website Building Section */}
          <div className="flex flex-col gap-[2rem]">
            <h3 className="text-[1.8rem] xs:text-[2rem] font-bold">
              Strategic Web Design
            </h3>
            <p>
              We&apos;re in the AI era, and the internet is flooded with
              cookie-cutter websites that all look the same—built from the same
              templates, generating the same forgettable experiences.{" "}
              <strong>That&apos;s not what I offer.</strong>
            </p>
            <p>
              I work with experienced designers who understand that your website
              should be your hardest-working asset—a 24/7 salesperson that
              communicates your unique value and guides visitors through a
              conversion-focused journey.
            </p>
            <ul className="list-disc pl-[2.5rem] flex flex-col gap-[1.5rem] [&>li]:pl-[8px]">
              <li>
                <strong>Brand Positioning:</strong> We help you dominate your
                niche instead of blending in with competitors using the same
                templates.
              </li>
              <li>
                <strong>Conversion-Focused Design:</strong> Every element is
                strategically placed to guide visitors toward action—not just
                look pretty.
              </li>
              <li>
                <strong>Psychology-Driven Layouts:</strong> Color choices,
                imagery, and structure that subconsciously move visitors toward
                &quot;yes.&quot;
              </li>
            </ul>
          </div>

          {/* Case Study Section */}
          <div className="flex flex-col gap-[2rem]">
            <h3 className="text-[1.8rem] xs:text-[2rem] font-bold">
              Case Study
            </h3>
            <div className="p-[2rem] rounded-[1rem] bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
              <h4 className="text-[1.6rem] font-semibold mb-[1rem]">
                FurCircle
              </h4>
              <p className="text-[1.4rem] text-gray-600 dark:text-gray-400 mb-[1rem]">
                <Link
                  href="https://furcircle.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                >
                  furcircle.ca
                </Link>
              </p>
              <p>
                Currently in development—a project showcasing strategic design
                and cloud infrastructure working together to deliver a seamless
                user experience. More details coming soon.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-[1.5rem] mt-[1rem]">
            <p className="font-semibold">
              Ready to transform your digital presence into a competitive
              advantage?
            </p>
            <p>
              Let&apos;s discuss how I can help your business stand out.
              Reach out via the contact links on this page.
            </p>
          </div>
        </div>
      </Section>
      <PageCTA links={contactLinks} />
    </>
  );
}

export default Freelance;
