import "./App.css";
import CommunitySection from "./components/CommunitySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LocationSection from "./components/LocationSection";
import "./App.css";
import MenuSection from "./components/MenuSection";
import RecipeSection from "./components/RecipeSection";
import { createContext, useEffect, useState } from "react";

export const Context = createContext("");

const sections = [
  { id: "about", val: "01" },
  { id: "community", val: "02" },
  { id: "location", val: "03" },
  { id: "menu", val: "04" },
  { id: "recipes", val: "05" },
  { id: "contact", val: "06" },
];

function App() {
  const [tab, setTab] = useState(sections[0]);

  const refCallback = (element) => {
    if (element) {
      console.log(element);
    }
  };

  useEffect(() => {
    const targetSections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTab(entry.target.getAttribute("id"));
        }
      });
    }, options);

    targetSections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <Context.Provider value={{ tab, setTab }}>
      <div className="h-full relative">
        <div className="fixed left-6 top-1/2 flex flex-col gap-8 z-50">
          {sections.map((item) => (
            <div
              className={`${
                tab === item.id ? "w-8" : "w-4"
              } h-0.5 bg-[#333333] relative`}
            >
              {tab === item.id && (
                <p className="absolute 2xl:text-xl text-lg font-medium -top-3 left-1 transition-all">
                  {item.val}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="bg-white uppercase fixed px-3 py-1 2xl:text-xl text-lg font-bold -right-6 top-1/2 -rotate-90 z-50">
          Request Info
        </div>
        <Header />
        <HeroSection callback={refCallback} />
        <CommunitySection callback={refCallback} />
        <LocationSection callback={refCallback} />
        <MenuSection callback={refCallback} />
        <RecipeSection callback={refCallback} />
        <ContactSection callback={refCallback} />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
