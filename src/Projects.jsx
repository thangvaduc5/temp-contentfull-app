import { useFetchProject } from './fetchProjects'

const Projects = () => {
  const { isLoading, projects } = useFetchProject()
  console.log(isLoading)
  console.log(projects)

  if (isLoading) {
    return (
      <section className="projects">
        <h4>Loading...</h4>
      </section>
    )
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title_underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((item) => {
          const { id, img, title, url } = item
          return (
            <a
              href={url}
              target="_blank"
              key={id}
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
