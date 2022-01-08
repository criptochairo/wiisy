import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Board from './Components/Board';
import Contact from './Components/Contact';
import Photograpy from "./Components/BlogSections/Photography";
import Podcast from "./Components/BlogSections/Podcast";
import Book from './Components/BlogSections/Book';
import Proyects from './Components/BlogSections/Proyects';
import Sister from './Components/BlogSections/Sister';
import Mom from './Components/BlogSections/Mom';
import MomentOTW from './Components/BlogSections/MomentOTW';
import WIISYPerson from './Components/BlogSections/WIISYPerson';
import Hector from './Components/BlogSections/Hector';
import ScrollToTop from './Components/ScrollToTop';
import Jan22 from "./Components/BlogSections/POTM/Jan22";

const RouteSwitch = () => {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community-board" element={<Board />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/blog/my-photography" element={<Photograpy />} />
        <Route path="/blog/my-podcast" element={<Podcast />} />
        <Route path="/blog/my-book" element={<Book />} />
        <Route path="/blog/my-daughters-projects" element={<Proyects />} />
        <Route path="/blog/my-sisters-advice" element={<Sister />} />
        <Route path="/blog/my-moms-recommendations" element={<Mom />} />
        <Route path="/blog/moment-of-the-week" element={<MomentOTW />} />
        <Route path="/blog/person-of-the-month" element={<WIISYPerson />} />
        <Route path="/blog/what-if-i-say-yes" element={<Hector />} />
        <Route path="/blog/person-of-the-month/jan22" element={<Jan22 />} />
      </Routes>
    </Router>
  );
};


export default RouteSwitch;