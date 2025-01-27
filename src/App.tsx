import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StarterGuide from "./pages/StarterGuide";
import Quiz from "./pages/Quiz";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Xiaohongshu from "./pages/Xiaohongshu";
import XHS from "./pages/XHS";
import GrowthStrategyForm from "./pages/GrowthStrategyForm";
import Academy from "./pages/Academy";
import HashtagGenerator from "./pages/HashtagGenerator";
import AestheticMedical from "./pages/AestheticMedical";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/starter-guide" element={<StarterGuide />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/xiaohongshu" element={<Xiaohongshu />} />
          <Route path="/xhs" element={<XHS />} />
          <Route path="/growth-strategy" element={<GrowthStrategyForm />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/hashtag-generator" element={<HashtagGenerator />} />
          <Route path="/aesthetic-medical" element={<AestheticMedical />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;