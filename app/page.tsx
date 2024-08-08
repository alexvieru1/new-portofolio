import Footer from "@/components/Footer";
import About from "@/components/page-sections/AboutPage";
import ContactPage from "@/components/page-sections/ContactPage";
import HomePage from "@/components/page-sections/HomePage";
import { ProjectsSection } from "@/components/page-sections/ProjectsSection";

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <ProjectsSection/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}
