import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import HomeEs from "./Components/Home-es";
import About from './Components/About';
import AboutEs from "./Components/About-es";
import Blog from './Components/Blog';
import BlogEs from './Components/Blog-es';
import Board from './Components/Board';
import Contact from './Components/Contact';
import Photography from "./Components/BlogSections/Photography";
import PhotographyEs from "./Components/BlogSections/Photography-es";
import PhPostJan22 from './Components/BlogSections/Photography/jan22/11-jan-22';
import PhPostJan22Es from './Components/BlogSections/Photography/jan22/11-jan-22-es';
import Podcast from "./Components/BlogSections/Podcast";
import PodcastEs from "./Components/BlogSections/Podcast-es";
import Book from './Components/BlogSections/Book';
import BookEs from "./Components/BlogSections/Book-es";
import Proyects from './Components/BlogSections/Proyects';
import Sister from './Components/BlogSections/Sister';
import Mom from './Components/BlogSections/Mom';
import MomentOTW from './Components/BlogSections/MomentOTW';
import WIISYPerson from './Components/BlogSections/WIISYPerson';
import Hector from './Components/BlogSections/Hector';
import HectorEs from "./Components/BlogSections/Hector-es";
import ScrollToTop from './Components/ScrollToTop';
import Jan22 from "./Components/BlogSections/POTM/Jan22";
import ProyectsEs from "./Components/BlogSections/Proyects-es";
import SisterEs from "./Components/BlogSections/Sister-es";
import MomEs from "./Components/BlogSections/Mom-es";
import MomentOTWEs from "./Components/BlogSections/MomentOTW-es";
import WIISYPersonEs from "./Components/BlogSections/WIISYPerson-es";
import Jan22Es from "./Components/BlogSections/POTM/Jan22-es";
import BoardEs from "./Components/Board-es";
import ContactEs from "./Components/Contact-es";
import PodPostJan22 from './Components/BlogSections/Podcast/jan22/jan22';
import PodPostJan22Es from './Components/BlogSections/Podcast/jan22/jan22-es';
import BookPostJan22 from './Components/BlogSections/Book/jan22/jan22';
import BookPostJan22Es from './Components/BlogSections/Book/jan22/jan22-es';
import SisPostJan22 from './Components/BlogSections/Sister/jan22/11-jan-22';
import SisPostJan22Es from './Components/BlogSections/Sister/jan22/11-jan-22-es';
import MomPostJan22 from './Components/BlogSections/Mom/jan22/11-jan-22';
import MomPostJan22Es from './Components/BlogSections/Mom/jan22/11-jan-22-es';
import MOTMPostJan22 from './Components/BlogSections/MOTM/Jan22';
import MOTMPostJan22Es from './Components/BlogSections/MOTM/Jan22-es';
import ProjectsPostJan22 from './Components/BlogSections/Projects/jan22';
import ProjectsPostJan22Es from './Components/BlogSections/Projects/jan22-es';

const RouteSwitch = () => {
  return (
    <Router>
      <ScrollToTop />
      
      <Routes>
        
        {/* Main routes ENG */}
        <Route path="/" element={<Home />} />
        <Route path="/hector" element={<Hector />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community-board" element={<Board />} />
        <Route path="/contact-me" element={<Contact />} />


        {/* Main routes ESP */}
        <Route path="/es" element={<HomeEs />} />
        <Route path="/hector/es" element={<HectorEs />} />
        <Route path="/about/es" element={<AboutEs />} />
        <Route path="/blog/es" element={<BlogEs />} />
        <Route path="/community-board/es" element={<BoardEs />} />
        <Route path="/contact-me/es" element={<ContactEs />} />


        {/* Blog routes ENG */}
        <Route path="/blog/my-photography" element={<Photography />} />
        <Route path="/blog/my-podcast" element={<Podcast />} />
        <Route path="/blog/my-book" element={<Book />} />
        <Route path="/blog/my-daughters-projects" element={<Proyects />} />
        <Route path="/blog/my-sisters-advice" element={<Sister />} />
        <Route path="/blog/my-moms-recommendations" element={<Mom />} />
        <Route path="/blog/moment-of-the-month" element={<MomentOTW />} />
        <Route path="/blog/person-of-the-month" element={<WIISYPerson />} />


        {/* Blog routes ESP */}
        <Route path="/blog/my-photography/es" element={<PhotographyEs />} />
        <Route path="/blog/my-podcast/es" element={<PodcastEs />} />
        <Route path="/blog/my-book/es" element={<BookEs />} />
        <Route path="/blog/my-daughters-projects/es" element={<ProyectsEs />} />
        <Route path="/blog/my-sisters-advice/es" element={<SisterEs />} />
        <Route path="/blog/my-moms-recommendations/es" element={<MomEs />} />
        <Route path="/blog/moment-of-the-month/es" element={<MomentOTWEs />} />
        <Route path="/blog/person-of-the-month/es" element={<WIISYPersonEs />} />


        {/* Photography posts ENG */}
        <Route path="/blog/my-photography/jan22" element={<PhPostJan22 />} />

        {/* Podcast posts ENG */}
        <Route path="/blog/my-podcast/jan22" element={<PodPostJan22 />} />

        {/* Book posts ENG */}
        <Route path="/blog/my-book/jan22" element={<BookPostJan22 />} />
        
        {/* Proyects posts ENG */}
        <Route path="/blog/my-daughters-projects/jan22" element={<ProjectsPostJan22 />} />

        {/* Sister posts ENG */}
        <Route path="/blog/my-sisters-advice/jan22" element={<SisPostJan22 />} />
        
        {/* Mom posts ENG */}
        <Route path="/blog/my-moms-recommendations/jan22" element={<MomPostJan22 />} />

        {/* MOTW posts ENG */}
        <Route path="/blog/moment-of-the-month/jan22" element={<MOTMPostJan22 />} />

        {/* WIISY posts ENG */}
        <Route path="/blog/person-of-the-month/jan22" element={<Jan22 />} />





        {/* Photography posts ESP */}
        <Route path="/blog/my-photography/jan22/es" element={<PhPostJan22Es />} />
        

        {/* Podcast posts ESP */}
        <Route path="/blog/my-podcast/jan22/es" element={<PodPostJan22Es />} />

        {/* Book posts ESP */}
        <Route path="/blog/my-book/jan22/es" element={<BookPostJan22Es />} />
        
        {/* Proyects posts ESP */}
        <Route path="/blog/my-daughters-projects/jan22/es" element={<ProjectsPostJan22Es />} />

        {/* Sister posts ESP */}
        <Route path="/blog/my-sisters-advice/jan22/es" element={<SisPostJan22Es />} />
        
        {/* Mom posts ESP */}
        <Route path="/blog/my-moms-recommendations/jan22/es" element={<MomPostJan22Es />} />


        {/* MOTW posts ESP */}
        <Route path="/blog/moment-of-the-month/jan22/es" element={<MOTMPostJan22Es />} />
        


        {/* WIISY posts ESP */}
        <Route path="/blog/person-of-the-month/jan22/es" element={<Jan22Es />} />



      </Routes>
    </Router>
  );
};


export default RouteSwitch;