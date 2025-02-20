// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import CoachingTeam from "../components/CoachingTeam";
import Footer from "../components/Footer";
import ApplicationProcess from "@/components/ApplicationProcess";
import FootballProgram from "@/components/FootballProgram";
import ContactForm from "@/components/ContactForm";
import Affiliates from "@/components/Affiliates";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Programs />
      <FootballProgram />
      <CoachingTeam />
      <ApplicationProcess />
      <ContactForm />
      <Affiliates />
      <Footer />
    </div>
  );
}