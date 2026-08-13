import { lazy, Suspense } from "react";
import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";

const lazyLoad = (component) => {
  return lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(component());
      }, 2000);
    });
  });
};

const Home = lazyLoad(() => import("./components/pages/Home"));
const About = lazyLoad(() => import("./components/pages/About"));
const Error = lazyLoad(() => import("./components/pages/Error"));
const PlantsType = lazyLoad(() => import("./components/pages/PlantsType"));
const Contact = lazyLoad(() => import("./components/pages/Contact"));
const More = lazyLoad(() => import("./components/pages/More"));






function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="plantsType" element={<PlantsType />} />
          <Route path="more" element={<More />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;