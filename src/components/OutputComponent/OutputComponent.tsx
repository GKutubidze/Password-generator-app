import React, { Dispatch, SetStateAction } from "react";
import styles from "./OutputComponent.module.css";
import Image from "next/image";
import copy from "../../../public/images/icon-copy.svg"
type Props = {
  generatedPassword: string;
  cklicked:boolean;
  setCklicked: Dispatch<SetStateAction<boolean>>;
};
const OutputComponent = (props: Props) => {
  const { generatedPassword, cklicked,setCklicked } = props;

  function handleCopyToClipboard() {
    if (generatedPassword) {
      navigator.clipboard
        .writeText(generatedPassword)
        .then(() => {
          // Password successfully copied
          setCklicked(true);
        })
        .catch((error) => {
          console.error("Error copying password to clipboard:", error);
        });
    }
  }
  return (
    <div className={styles.output}>
      <input
        type="text"
        value={generatedPassword}
        readOnly
        placeholder="P4$5W0rD!"
        className={styles.passwordOutput}
      />
       {cklicked&&<p className={styles.copied}>COPIED</p>}
      <Image
        src={copy}
        alt=""
        className={styles.copy}
        onClick={handleCopyToClipboard}
      />
      
    </div>
  );
};

export default OutputComponent;
