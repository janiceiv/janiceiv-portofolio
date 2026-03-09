import { TiSocialLinkedin } from "react-icons/ti";
import Button from "../ui/button";
import { MdEmail } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";

const Contact = () => {
  return(
    <section id="contact" className="container mx-auto">
      <div className="container mx-auto px-6 lg:px-40 mb-50">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-muted tracking-widest uppercase font-jetbrains-mono">
            CONTACT
          </span>
          <div className="flex-1 h-0.5 bg-slate-200" />
        </div>
        <h3 className="text-primary tracking-tighter font-playfair-display text-3xl">Let's work</h3>
        <h3 className="text-secondary tracking-tighter font-playfair-display text-3xl italic mb-5">together.</h3>
        <p className="text-secondary font-dm-sans text-lg max-w-xl mb-10">Open to opportunities in Computer Vision, AI Engineering, Machine Learning, and Data Analytics. Feel free to reach out.</p>     
        <div className="flex gap-5">
          <a href="mailto:janiceivn93@gmail.com">
            <Button variant='dark' size='small' className="lg:px-5 lg:py-3 lg:text-base"> <MdEmail className="text-primary" size={25} color="white"/> Send Email</Button>
          </a>
          <a href="https://linkedin.com/in/janice-ivena" target="_blank">
            <Button variant="light" size='small' className="lg:px-5 lg:py-3 lg:text-base"> <TiSocialLinkedin className="text-primary" size={25}/> LinkedIn</Button>
          </a>
          <a href="https://github.com/janiceiv" target="_blank">
            <Button variant="light" size='small' className="lg:px-5 lg:py-3 lg:text-base"> <AiOutlineGithub className="text-primary" size={25}/> GitHub</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
export default Contact;