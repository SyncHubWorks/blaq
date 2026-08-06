import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import SplashScreen from "../components/home/SplashScreen";
import Hero from "../components/home/Hero";
import BeautyExperience from "../components/home/BeautyExperience";
import CreativeSpaces from "../components/home/CreativeSpaces";
import BecomeOperator from "../components/home/BecomeOperator";
import Memberships from "../components/home/Memberships";
import Products from "../components/home/Products";
import Events from "../components/home/Events";
import AboutUs from "../components/home/AboutUs";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";
import ChatBot from "../components/chatbot/ChatBot";

function Unathorized() {
  const [appLoaded, setAppLoaded] = useState(false);

  return (
    <>
      {!appLoaded && <SplashScreen onFinish={() => setAppLoaded(true)} />}

      <Navbar />
      <Hero appLoaded={appLoaded} />
      <BeautyExperience />
      <CreativeSpaces />
      <BecomeOperator />
      <Memberships />
      <Products />
      <Events />
      <AboutUs />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  );
}

export default Unathorized;
