import About from "./components/About";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import Headers from "./components/Headers";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
        <Navbar/>
        <Headers/>
        <About/>
        {/* <Services/> */}
        <Work/>
        <Contact/>
        <Footer/>
    </>
  );
}
