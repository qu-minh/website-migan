// routes.tsx
import { RouteObject } from "react-router-dom";
import AboutPage from "./pages/about/About";
// import HomePage from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import DetailService from "./pages/detail_service/DetailService";
import FAQSection from "./pages/faq/FAQSection";
import NewHomePage from "./pages/new_home/NewHome";
import NotFoundPage from "./pages/notFound/NotFound";

export const routes: RouteObject[] = [
  { path: "/", element: <NewHomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/detail_service/", element: <DetailService /> },
  { path: "/faq_section/", element: <FAQSection /> },
  { path: "/blog/", element: <Blog /> },
  { path: "*", element: <NotFoundPage /> },
];
