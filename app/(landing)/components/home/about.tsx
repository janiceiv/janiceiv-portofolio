import Button from "../ui/button";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/dist/client/link";

const About = ()=>{
  return (
    <section id="about" className="container mx-auto h-screen w-full flex">
      <div className="container mx-auto px-6 mt-40 lg:px-40 mb-35">
        <h1 className="font-jetbrains-mono text-muted">
          Hello Everyone, I'm 
        </h1>
        <h3 className="font-playfair-display text-[60px] mt-5">
          <span className="text-primary">Janice</span> <span className="text-secondary">Ivena</span>
        </h3>
        <h1 className="font-dm-sans text-secondary mt-5 text-[18px] max-w-3xl">
          Fresh graduate in Informatics with a focus on deep learning and computer vision, complemented by hands-on experience in software development and data processing.
        </h1>
        <div className="flex gap-5 mt-6">
          <a href="https://linkedin.com/in/janice-ivena" target="_blank">
            <Button variant="light"> <TiSocialLinkedin className="text-primary" size={25}/> LinkedIn</Button>
          </a>
          <a href="https://github.com/janiceiv" target="_blank">
            <Button variant="light"> <AiOutlineGithub className="text-primary" size={25}/> GitHub</Button>
          </a>
        </div>
      </div>
    </section>
  )
};

export default About;