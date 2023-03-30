import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-left">
        <span className="purple-text">
          ✋Hi, I'm Anjali Pandey{" "}
          <span className="purple-smoke-text">- Introduction</span>{" "}
        </span>
        <p className="gray-text">
        Committed and goal-oriented computer science graduate looking to pursue a career in the software engineering domain. Possess excellent knowledge in Machine Learnig,C++, Web Technology(HTML, CSS, Javascript, Reactjs). Ability to learn things quickly and capable of working in a fast-paced and team-driven environment.{" "}
        </p>
        <span className="white-text">
          <a href="">Portfolio</a>
        </span>
        <ul className="tech-stack">
          <li>Machine Learning Developer</li>
          <li>Ui/Ux Designer</li>
          <li>Web Developer</li>
        </ul>
        <a className="about-see" href="https://drive.google.com/file/d/1DI5M9t-OzU1gu7FBDBEGvxOnBvVhC6xe/view?usp=sharing" target='_blank'>see more {"->"} </a>
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
