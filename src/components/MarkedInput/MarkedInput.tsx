import "./MarkedInput.css";
import { useMarkdownContext } from "../../provider/EditorContext";
import { ChangeEvent } from "react";

const MarkedInput: React.FC = () => {
  const { setMarkdown } = useMarkdownContext();
  const onInputChangeHandler = async (
    e: ChangeEvent<HTMLTextAreaElement>
  ): Promise<void> => {
    const enteredText = e.target.value;
    setMarkdown(enteredText);
  };

  return (
    <div className="container">
      <div className="title">Input</div>
      <textarea
        className="textarea-container"
        placeholder="Write Input Here..."
        onChange={onInputChangeHandler}
      ></textarea>
    </div>
  );
};

export default MarkedInput;
