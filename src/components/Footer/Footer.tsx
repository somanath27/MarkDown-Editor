import styles from "./Footer.module.css";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Copyright © 2025. Designed By{" "}
          <a href="https://www.linkedin.com/in/somanath07/">Somanath Barik</a>
        </p>
      </div>
      <div className={styles.handles}>
        <a href="www.instagram.com">
          <Instagram color="black" size={30} />
        </a>
        <a href="https://github.com/somanath27">
          <Github color="black" size={30} />
        </a>
        <a href="https://www.linkedin.com/in/somanath07/">
          <Linkedin color="black" size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
