"use client";
import { useState } from "react";
import styles from "./page.module.css";
import InputComponent from "@/components/InputComponent/InputComponent";
import Data from "./Data";
import { DataItem } from "./Types/Types";
import StrengthComponent from "@/components/StrengthComponent/StrengthComponent";
import Button from "@/components/ButtonComponent/Button";
import Slider from "@/components/SliderComponent/Slider";
import OutputComponent from "@/components/OutputComponent/OutputComponent";

export default function Home() {
  const [clicked, setCklicked] = useState<boolean>(false);
  const [generatedPassword, setGeneratedPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(6);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handlePasswordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordLength(parseInt(e.target.value, 10));
  };

 

  return (
    <main className={styles.main}>
      <span className={styles.header}>Password generator</span>
      <OutputComponent
        generatedPassword={generatedPassword}
        cklicked={clicked}
        setCklicked={setCklicked}
      />

      <div className={styles.generatePassword}>
        <Slider
          passwordLength={passwordLength}
          handlePasswordLength={handlePasswordLength}
        />

        <div className={styles.inputsContainer}>
          {Data.map((item: DataItem, key: number) => {
            return (
              <InputComponent
                content={item.content}
                setIncludeUppercase={setIncludeUppercase}
                setIncludeLowercase={setIncludeLowercase}
                setIncludeNumbers={setIncludeNumbers}
                setIncludeSymbols={setIncludeSymbols}
                includeUppercase={includeUppercase}
                includeLowercase={includeLowercase}
                includeNumbers={includeNumbers}
                includeSymbols={includeSymbols}
                key={key}
              />
            );
          })}
        </div>

        <StrengthComponent
          generatedPassword={generatedPassword}
          
        />

        <Button
          setGeneratedPassword={setGeneratedPassword}
          includeUppercase={includeUppercase}
          includeLowercase={includeLowercase}
          includeNumbers={includeNumbers}
          includeSymbols={includeSymbols}
          passwordLength={passwordLength}
          setCklicked={setCklicked}
          />
      </div>
    </main>
  );
}

