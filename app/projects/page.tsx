"use client"

import { useRouter } from "next/navigation";
import { projectStyles as s } from "@/public/dummyStyles"
import { projects, Project } from "@/lib/projects-data";
import { FollowerPointerCard } from "@/app/components/ui/following-pointer";


const TitleComponent = ({
  title,
  avatar,

}: {
  title: string;
  avatar: string;
}) => (
  <div className={s.titleComponentContainer}>
    <img
      src={avatar}
      height={20}
      width={20}
      alt={title}
      className={s.titleComponentAvatar}
    />

    <p className={s.titleComponentText}>{title}</p>
  </div>
)


export default function ProjectsPage() {
  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        <div className={s.header}>
          <h1 className={s.pageTitle}>
            Projects
          </h1>
          <p className={s.pageSubtitle}>
            Playground -Small MVP to Production Apps
          </p>
        </div>
        <div className={s.projectsGrid}>
          {projects.map((project) => (
            <FollowerPointerCard
              key={project.slug}
              title={
                <TitleComponent
                  title={project.author}
                  avatar={project.authorAvatar}
                />
              }
            >
              <ProjectCard project={project} />
            </FollowerPointerCard>
          ))}
        </div>
      </div>
    </div>
  );
}


function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <div className={s.projectCard}
      onClick={() => {
        router.push(`/projects/${project.slug}`)
      }}>

      <div className={s.imageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={s.projectImage}
        />

        <div className={s.statusBadgeContainer}>
          <span className={`${s.statusBadge} ${project.status === "active" ? s.statusActive : s.statusInactive}`}>
            {project.status}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={s.bookmarkButton}
        >
          <svg
            className={s.bookmarkIcon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>

        </button>
      </div>

      <div className={s.contentSection}>
        <h3 className={s.projectTitle}>
          {project.title}
        </h3>
        <p className={s.projectDescription}>{project.description}</p>

        <div className={s.tagsContainer}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={s.tag}

            >
              {tag}
            </span>
          ))}
        </div>

        <div className={s.actionsContainer}>
          <div className={s.actionsLinksContainer}>
            {project.links.visit && (
              <a
                href={project.links.visit}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className={s.visitButton}
              >
                Visit
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className={s.otherButton}
              >
                GitHub
              </a>
            )}
            {project.links.pypi && (
              <a
                href={project.links.pypi}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className={s.otherButton}
              >
                PyPI
              </a>
            )}
            {project.links.link && (
              <a
                href={project.links.link}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className={s.otherButton}
              >
                Link
              </a>
            )}

          </div>

          <div className="flex gap-1">
            {project.links.archive && (
              <span className={s.archivedText}>
                Archived
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}