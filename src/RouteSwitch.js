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
import PhPost1 from './Components/BlogSections/Photography/jan22/11-jan-22';
import PhPost1Es from './Components/BlogSections/Photography/jan22/11-jan-22-es';
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
import PodPost1 from './Components/BlogSections/Podcast/jan22/11-jan-22';
import PodPost1Es from './Components/BlogSections/Podcast/jan22/11-jan-22-es';
import BookPost1 from './Components/BlogSections/Book/jan22/11-jan-22';
import BookPost1Es from './Components/BlogSections/Book/jan22/11-jan-22-es';
import SisPost1 from './Components/BlogSections/Sister/jan22/11-jan-22';
import SisPost1Es from './Components/BlogSections/Sister/jan22/11-jan-22-es';
import MomPost1 from './Components/BlogSections/Mom/jan22/11-jan-22';
import MomPost1Es from './Components/BlogSections/Mom/jan22/11-jan-22-es';

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
        <Route path="/hector-es" element={<HectorEs />} />
        <Route path="/about-es" element={<AboutEs />} />
        <Route path="/blog-es" element={<BlogEs />} />
        <Route path="/community-board-es" element={<BoardEs />} />
        <Route path="/contact-me-es" element={<ContactEs />} />


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
        <Route path="/blog/my-photography-es" element={<PhotographyEs />} />
        <Route path="/blog/my-podcast-es" element={<PodcastEs />} />
        <Route path="/blog/my-book-es" element={<BookEs />} />
        <Route path="/blog/my-daughters-projects-es" element={<ProyectsEs />} />
        <Route path="/blog/my-sisters-advice-es" element={<SisterEs />} />
        <Route path="/blog/my-moms-recommendations-es" element={<MomEs />} />
        <Route path="/blog/moment-of-the-month-es" element={<MomentOTWEs />} />
        <Route path="/blog/person-of-the-month-es" element={<WIISYPersonEs />} />


        {/* Photography posts ENG */}
        <Route path="/blog/my-photography/11-jan-22" element={<PhPost1 />} />

        {/* Podcast posts ENG */}
        <Route path="/blog/my-podcast/11-jan-22" element={<PodPost1 />} />

        {/* Book posts ENG */}
        <Route path="/blog/my-book/11-jan-22" element={<BookPost1 />} />
        
        {/* Proyects posts ENG */}


        {/* Sister posts ENG */}
        <Route path="/blog/my-sisters-advice/11-jan-22" element={<SisPost1 />} />
        
        {/* Mom posts ENG */}
        <Route path="/blog/my-moms-recommendations/11-jan-22" element={<MomPost1 />} />

        {/* MOTW posts ENG */}


        {/* WIISY posts ENG */}
        <Route path="/blog/person-of-the-month/jan22" element={<Jan22 />} />





        {/* Photography posts ESP */}
        <Route path="/blog/my-photography/11-jan-22-es" element={<PhPost1Es />} />
        

        {/* Podcast posts ESP */}
        <Route path="/blog/my-podcast/11-jan-22-es" element={<PodPost1Es />} />

        {/* Book posts ESP */}
        <Route path="/blog/my-book/11-jan-22-es" element={<BookPost1Es />} />
        
        {/* Proyects posts ESP */}


        {/* Sister posts ESP */}
        <Route path="/blog/my-sisters-advice/11-jan-22-es" element={<SisPost1Es />} />
        
        {/* Mom posts ESP */}
        <Route path="/blog/my-moms-recommendations/11-jan-22-es" element={<MomPost1Es />} />


        {/* MOTW posts ESP */}


        {/* WIISY posts ESP */}
        <Route path="/blog/person-of-the-month/jan22-es" element={<Jan22Es />} />

        
        
        

        


      </Routes>
    </Router>
  );
};


export default RouteSwitch;