import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import WebDesign from "./pages/WebDesign";
import CustomEmail from "./pages/CustomEmail";
import SaasMvp from "./pages/SaasMvp";
import CustomSoftware from "./pages/CustomSoftware";
import Portfolio from "./pages/Portfolio";
import ClientShowcase from "./pages/ClientShowcase";
import BlogWebDesignCost from "./pages/BlogWebDesignCost";

import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="architeq-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnRouteChange />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/web-design" element={<WebDesign />} />
                <Route path="/services/custom-email" element={<CustomEmail />} />
                <Route path="/services/saas-mvp" element={<SaasMvp />} />
                <Route path="/services/custom-software" element={<CustomSoftware />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/clients" element={<ClientShowcase />} />
                <Route path="/blog/web-design-cost-south-africa" element={<BlogWebDesignCost />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
