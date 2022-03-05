// Essential and functional imports

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';


// Main section imports ENG

import Home from './Components/Home';
import Hector from './Components/BlogSections/Hector';
import About from './Components/About';
import Blog from './Components/Blog';
import Board from './Components/Board';
import Contact from './Components/Contact';

// Main section imports ESP

import HomeEs from "./Components/Home-es";
import HectorEs from "./Components/BlogSections/Hector-es";
import AboutEs from "./Components/About-es";
import BlogEs from './Components/Blog-es';
import BoardEs from "./Components/Board-es";
import ContactEs from "./Components/Contact-es";

// Blog sections ENG

import Photography from "./Components/BlogSections/Photography";
import Podcast from "./Components/BlogSections/Podcast";
import Book from './Components/BlogSections/Book';
import Proyects from './Components/BlogSections/Proyects';
import Sister from './Components/BlogSections/Sister';
import Mom from './Components/BlogSections/Mom';
import MomentOTW from './Components/BlogSections/MomentOTW';
import WIISYPerson from './Components/BlogSections/WIISYPerson';

// Blog sections ESP

import PhotographyEs from "./Components/BlogSections/Photography-es";
import PodcastEs from "./Components/BlogSections/Podcast-es";
import BookEs from "./Components/BlogSections/Book-es";
import ProyectsEs from "./Components/BlogSections/Proyects-es";
import SisterEs from "./Components/BlogSections/Sister-es";
import MomEs from "./Components/BlogSections/Mom-es";
import MomentOTWEs from "./Components/BlogSections/MomentOTW-es";
import WIISYPersonEs from "./Components/BlogSections/WIISYPerson-es";

// Photography posts ENG

import PhPostJan22 from './Components/BlogSections/Photography/jan22/Jan22';

// Photography posts ESP

import PhPostJan22Es from './Components/BlogSections/Photography/jan22/Jan22-es';

// Podcast posts ENG

import PodPostJan22 from './Components/BlogSections/Podcast/jan22/jan22';

// Podcast posts ESP

import PodPostJan22Es from './Components/BlogSections/Podcast/jan22/jan22-es';

// Book posts ENG

import BookPostJan22 from './Components/BlogSections/Book/jan22/jan22';

// Book posts ESP

import BookPostJan22Es from './Components/BlogSections/Book/jan22/jan22-es';

// Projects posts ENG

import ProjectsPostJan22 from './Components/BlogSections/Projects/jan22/jan22';
import ProjectsPostFeb22 from './Components/BlogSections/Projects/feb22/feb22';

// Projects posts ESP 

import ProjectsPostJan22Es from './Components/BlogSections/Projects/jan22/jan22-es';
import ProjectsPostFeb22Es from './Components/BlogSections/Projects/feb22/feb22-es';

// Sister posts ENG

import SisPostJan22 from './Components/BlogSections/Sister/Jan22/11-jan-22';
import SisPostFeb22 from './Components/BlogSections/Sister/Feb22/Feb22';

// Sister posts ESP

import SisPostJan22Es from './Components/BlogSections/Sister/Jan22/11-jan-22-es';
import SisPostFeb22Es from './Components/BlogSections/Sister/Feb22/Feb22-es';

// Abuelita posts ENG

import MomPostJan22 from './Components/BlogSections/Mom/jan22/11-jan-22';
import MomPostFeb22 from './Components/BlogSections/Mom/feb22/feb22';

// Abuelita posts ESP

import MomPostJan22Es from './Components/BlogSections/Mom/jan22/11-jan-22-es';
import MomPostFeb22Es from './Components/BlogSections/Mom/feb22/feb22-es';

// MOTM posts ENG

import MOTMPostDec21 from './Components/BlogSections/MOTM/Dec21/dec21';
import MOTMPostJan22 from './Components/BlogSections/MOTM/Jan22/jan22';

// MOTM posts ESP

import MOTMPostDec21Es from './Components/BlogSections/MOTM/Dec21/dec21-es';
import MOTMPostJan22Es from './Components/BlogSections/MOTM/Jan22/jan22-es';


// POTM posts ENG

import POTMJan22 from "./Components/BlogSections/POTM/Jan22/Jan22";
import POTMFeb22 from "./Components/BlogSections/POTM/Feb22/feb22";


// POTM posts ESP

import POTMJan22Es from "./Components/BlogSections/POTM/Jan22/Jan22-es";
import POTMFeb22Es from "./Components/BlogSections/POTM/Feb22/feb22-es";



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
        
        {/* Projects posts ENG */}
        <Route path="/blog/my-daughters-projects/jan22" element={<ProjectsPostJan22 />} />
        <Route path="/blog/my-daughters-projects/feb22" element={<ProjectsPostFeb22 />} />

        {/* Sister posts ENG */}
        <Route path="/blog/my-sisters-advice/jan22" element={<SisPostJan22 />} />
        <Route path="/blog/my-sisters-advice/feb22" element={<SisPostFeb22 />} />
        
        {/* Mom posts ENG */}
        <Route path="/blog/my-moms-recommendations/jan22" element={<MomPostJan22 />} />
        <Route path="/blog/my-moms-recommendations/feb22" element={<MomPostFeb22 />} />

        {/* MOTM posts ENG */}
        <Route path="/blog/moment-of-the-month/dec21" element={<MOTMPostDec21 />} />
        <Route path="/blog/moment-of-the-month/jan22" element={<MOTMPostJan22 />} />

        {/* WIISY posts ENG */}
        <Route path="/blog/person-of-the-month/jan22" element={<POTMJan22 />} />
        <Route path="/blog/person-of-the-month/feb22" element={<POTMFeb22 />} />





        {/* Photography posts ESP */}
        <Route path="/blog/my-photography/jan22/es" element={<PhPostJan22Es />} />
        

        {/* Podcast posts ESP */}
        <Route path="/blog/my-podcast/jan22/es" element={<PodPostJan22Es />} />

        {/* Book posts ESP */}
        <Route path="/blog/my-book/jan22/es" element={<BookPostJan22Es />} />
        
        {/* Projects posts ESP */}
        <Route path="/blog/my-daughters-projects/jan22/es" element={<ProjectsPostJan22Es />} />
        <Route path="/blog/my-daughters-projects/feb22/es" element={<ProjectsPostFeb22Es />} />

        {/* Sister posts ESP */}
        <Route path="/blog/my-sisters-advice/jan22/es" element={<SisPostJan22Es />} />
        <Route path="/blog/my-sisters-advice/feb22/es" element={<SisPostFeb22Es />} />
        
        {/* Mom posts ESP */}
        <Route path="/blog/my-moms-recommendations/jan22/es" element={<MomPostJan22Es />} />
        <Route path="/blog/my-moms-recommendations/feb22/es" element={<MomPostFeb22Es />} />


        {/* MOTM posts ESP */}
        <Route path="/blog/moment-of-the-month/dec21/es" element={<MOTMPostDec21Es />} />
        <Route path="/blog/moment-of-the-month/jan22/es" element={<MOTMPostJan22Es />} />        


        {/* WIISY posts ESP */}
        <Route path="/blog/person-of-the-month/jan22/es" element={<POTMJan22Es />} />
        <Route path="/blog/person-of-the-month/feb22/es" element={<POTMFeb22Es />} />



      </Routes>
    </Router>
  );
};


export default RouteSwitch;