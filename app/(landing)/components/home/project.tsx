const projectList = [
  {
    title: "Batik Solo Motif Classification",
    tags: ["Computer Vision", "Deep Learning", "ResNet50", "GLCM"],
    description: "Investigated hybrid deep learning + handcrafted texture features for batik pattern recognition. Found that GLCM improves accuracy pre-finetuning but becomes redundant post-finetuning.",
    highlight: "93% accuracy · ResNet50 vs Hybrid comparison",
    link: "https://huggingface.co/spaces/janiceiv/batik-classifier",
    linkLabel: "Live Demo",
  },
  {
    title: "OPV Data Processing",
    tags: ["Python", "Pandas", "Matplotlib", "Excel Automation"],
    description: "Built a desktop application to automate quality control data processing, handling duplicate detection, missing value imputation, and generating Statistical Process Control charts (UCL/LCL) for the validation team.",
    highlight: "Reduced manual validation effort · Python desktop app",
    link: null,
    linkLabel: "Confidential",
    confidential : true,
  }
]

const Project = () => {
  return(
    <section id="projects" className="container mx-auto">
      <div className="container mx-auto px-6 lg:px-40 mb-50">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-muted tracking-widest uppercase font-jetbrains-mono">
            PROJECTS
          </span>
          <div className="flex-1 h-0.5 bg-slate-200" />
        </div>
        <div className="flex flex-col gap-10 mb-12">
          {projectList.map((project, index) => (
            <div key={index} className="border border-slate-200 rounded-md p-5 bg-white flex flex-col gap-3 hover:-translate-y-px">
              <div className="flex justify-between items-center">
                <span className="text-primary font-playfair-display text-[20px]">
                  {project.title}
                </span>
                <a href={project.link || undefined} className={`text-sm ${project.confidential ? "text-muted" : "text-links"}`} target="_blank">
                  {project.linkLabel}
                </a>
              </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="w-fit px-3 py-1 border border-slate-200 rounded-full text-muted bg-background text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              <p className="text-secondary mt-3">{project.description}</p>
              <span className="mt-3 w-fit text-xs font-jetbrains-mono text-links bg-blue-background px-3 py-2 rounded-md">
                {project.highlight}
              </span>
            </div> 
          ))}
          <div className="border-2 border-dashed border-slate-200 rounded-md p-5 flex flex-col gap-3 items-center">
            <h1 className="text-muted py-5">
              More projects coming soon
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;