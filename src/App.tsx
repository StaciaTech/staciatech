
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Leadership from "./pages/Leadership";
import Partnerships from "./pages/Partnerships";
import Services from "./pages/Services";
import Products from "./pages/Products";
import OurBrands from "./pages/OurBrands";
import Industries from "./pages/Industries";
import Clients from "./pages/Clients";
import Resources from "./pages/Resources";
import CaseStudies from "./pages/CaseStudies";
import Projects from "./pages/Projects";
import MediaKit from "./pages/MediaKit";
import WhatsNew from "./pages/WhatsNew";
import Testimonials from "./pages/Testimonials";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollTop";
import SpecificServices from "./pages/SpecificServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us/our-story" element={<AboutUs />} />
          <Route path="/about-us/leadership" element={<Leadership />} />
          <Route path="/about-us/partnerships" element={<Partnerships />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:title" element={<SpecificServices />}/>
          <Route path="/products" element={<Products />} />
          <Route path="/our-brands" element={<OurBrands />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/projects" element={<Projects />} />
          <Route path="/resources/media-kit" element={<MediaKit />} />
          <Route path="/whats-new" element={<WhatsNew />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
