import Footer from "../../components/Footer/Footer";
import MarkedInput from "../../components/MarkedInput/MarkedInput";
import Result from "../../components/Result/Result";
import styles from "./MarkdownEditor.module.css";

const MarkdownEditor = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}>MarkDown Editor</h1>
        <h1 className={styles.para}>
          🌟 A markdown-editor built using React.js 🌟
        </h1>
      </div>
      <div className={styles.editorContainer}>
        <MarkedInput />
        <Result />
      </div>
      <Footer />
    </div>
  );
};

export default MarkdownEditor;
