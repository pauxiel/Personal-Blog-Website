import getPinnedRepos from "@/app/actions/getPinnedRepos";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import SectionLink from "./SectionLink";
import Section from "./Section";

async function FeaturedProjects() {
  const projects = await getPinnedRepos();

  if (!projects || projects.length === 0) {
    return null;
  }

  // Limit to first 3 projects for homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <Section>
      <SectionHeading>Featured Projects</SectionHeading>
      <p>
        Here are some of the cloud solutions and projects I have worked on.
      </p>
      <div className="flex flex-col w-full max-w-[700px] text-left">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <SectionLink href="/projects">View All Projects {"-->"}</SectionLink>
    </Section>
  );
}

export default FeaturedProjects;
