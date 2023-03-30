import "./Mode.css";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import {BsGithub,BsLinkedin,BsTwitter} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

export default function Mode({ handleModeChange, setMode }) {
  return (
    <div className="mode__main">
      <section className=" container-mode">
      <button onClick={handleModeChange} className="container-icon">
        {setMode ? (
          <RiMoonFill className="mode-icon" />
        ) : (
          <RiSunFill className="mode-icon" />
        )}
      </button>
      <div className="mode-left white-text">
        <ul>
          <li>
            <a href="#projects" >Works</a>
            
          </li>
          <li>
            <a href="#about">Me</a>
          </li>
        </ul>
      </div>

    </section>
    <section className="mode__social">
      <ul className="mode__icons">
        <li>
          <a href="https://github.com/pandey331" target="_blank">
           <BsGithub/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anjaliipandey" target="_blank">
           <BsLinkedin/>
          </a>
        </li>
        <li>
          <a>
           <BsTwitter/>
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/Anjali331/" target="_blank">
           <SiLeetcode/>
          </a>
        </li>
      </ul>
    </section>

    </div>
    
  );
}
