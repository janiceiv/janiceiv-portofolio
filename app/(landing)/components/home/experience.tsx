const experienceList = [
  {
    title : "Validation Intern",
    company : "@PT Konimex",
    period : "Feb – May 2025",
    responsibilities : [
      "Built a Python desktop app to automate Excel data parsing, duplicate detection, and missing value handling.",
      "Generated Statistical Process Control charts (UCL/LCL) using Matplotlib for quality validation."
    ]
  },
]

const certificationList = [
  {
    title : "AWS Certified Cloud Practitioner",
    period : "Feb 2026",
  },
    {
    title : "Certiport IT Specialist in Python",
    period : "Mar 2025",
  }
]

const Experience = () => {
  return(
    <section id="experience" className="container mx-auto">
      <div className="container mx-auto px-6 lg:px-40 mb-50">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-muted tracking-widest uppercase font-jetbrains-mono">
            EXPERIENCE
          </span>
          <div className="flex-1 h-0.5 bg-slate-200" />
        </div>
        <div className="flex flex-col gap-10 mb-12">
          {experienceList.map((experience, index) => (
            <div key={index} className="border border-slate-200 rounded-md p-5 bg-white flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-playfair-display text-[20px]">
                    {experience.title}
                  </span>
                  <span className="text-secondary font-dm-sans text-md">
                    {experience.company}
                  </span>
                </div>
                <span className="text-muted font-jetbrains-mono text-sm">
                  {experience.period}
                </span>
              </div>
              <ul className="list-disc list-inside text-muted font-dm-sans">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="mb-2">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-muted tracking-widest uppercase font-jetbrains-mono">
            Certification
          </span>
        </div>
        <div className="flex flex-col gap-5 mb-12">
          {certificationList.map((certification, index) => (
            <div key={index} className="border border-slate-200 rounded-md p-5 bg-white flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-secondary font-dm-sans text-md">
                  {certification.title}
                </span>
                <span className="text-muted font-jetbrains-mono text-sm">
                  {certification.period}
                </span>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </section>
  )
}

export default Experience;