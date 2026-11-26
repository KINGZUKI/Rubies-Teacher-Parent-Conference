import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import {
  AboutPage,
  RegisterPage,
  SponsorPage,
  PartnersPage,
  VenuePage,
  FoundationPage,
  ImpactDetailPage,
  MomentDetailPage,
  ProgrammePage,
} from "./pages/ContentPages.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/foundation" element={<FoundationPage />} />
        <Route path="/impact/:id" element={<ImpactDetailPage />} />
        <Route path="/moments/:id" element={<MomentDetailPage />} />
        <Route path="/programme" element={<ProgrammePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/sponsor" element={<SponsorPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/venue" element={<VenuePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
