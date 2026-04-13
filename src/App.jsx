import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import { i } from "framer-motion/client";
i

const App = () => {
  return (
    <Layout>
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default App;
