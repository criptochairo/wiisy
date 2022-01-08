import { BsFillArrowUpCircleFill } from 'react-icons/bs';

export default function GoTop() {
  
    const scrollToTop = () => {
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    }

    return (
    <button><BsFillArrowUpCircleFill className="gotop" onClick={scrollToTop} /></button>
    )
}