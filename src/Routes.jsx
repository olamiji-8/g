import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SlideEight = React.lazy(() => import("pages/SlideEight"));
const SermonsVariant2One = React.lazy(() => import("pages/SermonsVariant2One"));
const AboutUsFour = React.lazy(() => import("pages/AboutUsFour"));
const AboutUsFive = React.lazy(() => import("pages/AboutUsFive"));
const SermonsVariant2 = React.lazy(() => import("pages/SermonsVariant2"));
const AboutUsThree = React.lazy(() => import("pages/AboutUsThree"));
const AboutUsTwo = React.lazy(() => import("pages/AboutUsTwo"));
const MeetOurExcos = React.lazy(() => import("pages/MeetOurExcos"));
const SermonsVariant1 = React.lazy(() => import("pages/SermonsVariant1"));
const SlideThree = React.lazy(() => import("pages/SlideThree"));
const SlideTwo = React.lazy(() => import("pages/SlideTwo"));
const SlideOne = React.lazy(() => import("pages/SlideOne"));
const AboutUsOne = React.lazy(() => import("pages/AboutUsOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<SlideOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutusone" element={<AboutUsOne />} />
          <Route path="/slidetwo" element={<SlideTwo />} />
          <Route path="/slidethree" element={<SlideThree />} />
          <Route path="/sermonsvariant1" element={<SermonsVariant1 />} />
          <Route path="/meetourexcos" element={<MeetOurExcos />} />
          <Route path="/aboutustwo" element={<AboutUsTwo />} />
          <Route path="/aboutusthree" element={<AboutUsThree />} />
          <Route path="/sermonsvariant2" element={<SermonsVariant2 />} />
          <Route path="/aboutusfive" element={<AboutUsFive />} />
          <Route path="/aboutusfour" element={<AboutUsFour />} />
          <Route path="/sermonsvariant2one" element={<SermonsVariant2One />} />
          <Route path="/slideeight" element={<SlideEight />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
