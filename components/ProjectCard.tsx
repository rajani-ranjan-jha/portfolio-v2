type ProjectCard = {
  mediaUrl: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
};

const ProjectCard = ({ ProjectData }: { ProjectData: ProjectCard[] }) => {
  return (
    <div id='projects' className="w-full border-t-2 py-10 flex flex-col justify-center items-center">
      <h1 className="text-center font-semibold text-3xl my-5">Projects</h1>
      <div className="w-full flex flex-wrap justify-center gap-5">
        {ProjectData.map((project, index) => (
          <div
            key={index}
            className="shadow-md border border-white/50 rounded-lg hover:scale-102 transition-all duration-300 delay-100 w-full flex flex-col justify-between items-center md:flex-row gap-5"
          >
            {/* <Image width={100} height={100}>{mediaUrl}</Image> */}
            <img
              className=" h-50 rounded-lg"
              src={`/assets/projects/${project.title.toLowerCase().replaceAll(" ", "-")}.png`}
              alt={project.title}
              title={project.title}
            />
            <div className="w-full md:max-w-1/2 flex flex-col justify-center items-center gap-3">
              <h1 className="w-full text-2xl font-semibold text-left">
                {project.title}
              </h1>
              <p className="text-md"> {project.description}</p>
              {/* tools used in the project */}
              <div className="flex w-full items-center justify-center gap-5">
                <a
                  className="px-3 py-2 border rounded-md cursor-pointer bg-red-500 text-white"
                  href={project.githubUrl}
                >
                  Github
                </a>
                {project.liveUrl && (
                  <a
                    className="px-3 py-2 border rounded-md cursor-pointer bg-red-500 text-white"
                    href={project.liveUrl}
                  >
                    Live Page
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
