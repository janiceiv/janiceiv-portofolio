import Button from "../ui/button";

const skillsList = [
  {
    category: "AI/ML",
    tools: ["TensorFlow", "PyTorch", "Keras", "Transfer Learning", "OpenCV", "Scikit-learn"]
  },
  {
    category: "DATA",
    tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    category: "CLOUD & DEPLOY",
    tools: ["AWS (EC2, S3, IAM, VPC)", "Hugging Face Spaces", "Railway", "Vercel"]
  },
  {
    category: "WEB",
    tools: ["React.js", "Next.js", "Tailwind CSS", "FastAPI", "Node.js", "Express.js"]
  },
  {
    category: "LANGUAGES",
    tools: ["Python", "JavaScript", "PHP", "Java"]
  },
  {
    category: "DATABASES",
    tools: ["MySQL", "PostgreSQL", "MongoDB"]
  }
];

const Skills = () => {
  return(
    <section id="skills" className="container mx-auto">
      <div className="container mx-auto px-6 lg:px-40 mb-50">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-muted tracking-widest uppercase font-jetbrains-mono">
            SKILLS & TOOLS
          </span>
          <div className="flex-1 h-0.5 bg-slate-200" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsList.map((skill,index) => (
            <div key={index} className="h-fit flex flex-col gap-3 border border-slate-200 rounded-md p-5 bg-white">
              <span className="text-muted font-jetbrains-mono">{skill.category}</span>
              <div className="flex flex-wrap gap-3">
                {
                  skill.tools.map((tool, toolIndex) => (
                    <Button variant='light' key={toolIndex} className="text-secondary font-dm-sans text-sm">
                      {tool}
                    </Button>
                  ))
                }
              </div>
            </div>
          ))}
          </div>
        </div>
    </section>
  )
}

export default Skills;