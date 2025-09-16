import { HashRouter, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

// Optional Layouts
import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        {/* Wrap pages in a layout (Navbar + Footer) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
