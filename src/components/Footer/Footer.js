import "./Footer.css";
import {BsGithub,BsLinkedin,BsTwitter} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
export const Footer = ({setMode}) => {
  return (
    <footer className="container-footer">
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
      <p>
       Made with <span className="white-text"></span>{setMode ? '🖤':'🤍'}{" "}
        <span className="white-text">Anjali</span>
      </p>
    </footer>
  );
};
