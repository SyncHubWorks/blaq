import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import BeautyExperience from "../components/home/BeautyExperience";
import CreativeSpaces from "../components/home/CreativeSpaces";
import BecomeOperator from "../components/home/BecomeOperator";
import Memberships from "../components/home/Memberships";
import Products from "../components/home/Products";
import Events from "../components/home/Events";
import CorporateServices from "../components/home/CorporateServices";
import StartBusiness from "../components/home/StartBusiness";
import AboutUs from "../components/home/AboutUs";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/chatbot/ChatBot";

function Unathorized() {
  return (
    <>
      <Navbar />
      <Hero />
      <BeautyExperience />
      <CreativeSpaces />
      <BecomeOperator />
      <Memberships />
      <Products />
      <Events />
      <CorporateServices />
      <StartBusiness />
      <AboutUs />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  );
}

export default Unathorized;
