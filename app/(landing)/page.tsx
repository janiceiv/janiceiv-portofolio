import About from "./components/home/about"
import Contact from "./components/home/contact";
import Experience from "./components/home/experience";
import Project from "./components/home/project";
import Skills from "./components/home/skills";
export default function Home(){
  return (<main>
    <About/>
    <Skills/>
    <Project/>
    <Experience/>
    <Contact/>
  </main>);
};