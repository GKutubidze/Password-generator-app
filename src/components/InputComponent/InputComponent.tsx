import React, { Dispatch, SetStateAction } from "react";
import styles from "./InputComponent.module.css";
import Data from "../../app/Data";
interface InputComponentProps {
  content: string;
  setIncludeUppercase: Dispatch<SetStateAction<boolean>>;
  setIncludeLowercase: Dispatch<SetStateAction<boolean>>;
  setIncludeNumbers: Dispatch<SetStateAction<boolean>>;
  setIncludeSymbols: Dispatch<SetStateAction<boolean>>;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}
const InputComponent = (props: InputComponentProps) => {
  const {
    content,
    setIncludeLowercase,
    setIncludeNumbers,
    setIncludeSymbols,
    setIncludeUppercase,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  } = props;

  const handleCheckboxClick = () => {
    switch (content) {
      case Data[0].content:
        setIncludeUppercase(!includeUppercase);
        break;
      case Data[1].content:
        setIncludeLowercase(!includeLowercase);
        break;
      case Data[2].content:
        setIncludeNumbers(!includeNumbers);
        break;
      case Data[3].content:
        setIncludeSymbols(!includeSymbols);
        break;
    }
   
   
  };

  return (
    <div className={styles.inputGroup}>
      <span>
        <input
          type="checkbox"
          name="includeNumbers"
          onClick={handleCheckboxClick}
        />
      </span>
      <span>
        <label>{content}</label>
      </span>

    
    </div>
  );
};

export default InputComponent;
