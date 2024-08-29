import { CSSTransition, TransitionGroup } from "react-transition-group";
import { lazy, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import SplashScreen from "./SplashScreen/SplashScreen";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const AboutMePage = lazy(() => import("../pages/AboutMePage/AboutMePage"));
const BenefitsPage = lazy(() => import("../pages/BenefitsPage/BenefitsPage"));
const FaqPage = lazy(() => import("../pages/FaqPage/FaqPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage/ProjectsPage"));
const ReviewsPage = lazy(() => import("../pages/ReviewsPage/ReviewsPage"));

import css from "./App.module.css";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={500}
        classNames={{
          enter: css.fadeEnter,
          enterActive: css.fadeEnterActive,
          exit: css.fadeExit,
          exitActive: css.fadeExitActive,
        }}
      >
        <Routes location={location}>
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
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
