import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Industries from "@/pages/Industries";
import About from "@/pages/About";
import CaseStudies from "@/pages/CaseStudies";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/industries", element: <Industries /> },
  { path: "/about", element: <About /> },
  { path: "/case-studies", element: <CaseStudies /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/contact", element: <Contact /> },
  // Catch-all route (should always be last)
  { path: "*", element: <NotFound /> },
];

export default appRoutes;
