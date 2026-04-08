import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
