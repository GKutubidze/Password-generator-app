import React, { Dispatch, SetStateAction } from "react";
import generatePassword from "@/app/utils/generatePassword";
import styles from "./Button.module.css";
type Props = {
  setGeneratedPassword: Dispatch<SetStateAction<string>>;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  passwordLength: number;
  setCklicked:Dispatch<SetStateAction<boolean>>;
 };
const Button = (props: Props) => {
  const {
   
    setGeneratedPassword,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    passwordLength,
    setCklicked
  } = props;

  const handleGenerate = () => {
    const PASSWORD = generatePassword(
      passwordLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols
    );
    setCklicked(false);
    setGeneratedPassword(PASSWORD);
  };


  return (
    <div className={styles.main}>
      <button onClick={handleGenerate} className={styles.butt}>GENERATE &rarr;</button>
    </div>
  );
};

export default Button;
