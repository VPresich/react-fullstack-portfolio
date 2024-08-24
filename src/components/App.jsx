import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import SplashScreen from "./SplashScreen/SplashScreen";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const AboutMePage = lazy(() => import("../pages/AboutMePage/AboutMePage"));
const BenefitsPage = lazy(() => import("../pages/BenefitsPage/BenefitsPage"));
const FaqPage = lazy(() => import("../pages/FaqPage/FaqPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage/ProjectsPage"));
const ReviewsPage = lazy(() => import("../pages/ReviewsPage/ReviewsPage"));
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<SplashScreen />} />
        <Route path="home" element={<HomePage />} />
        <Route path="aboutme" element={<AboutMePage />} />
        <Route path="benefits" element={<BenefitsPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
