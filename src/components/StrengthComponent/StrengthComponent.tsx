import React from "react";
import styles from "./StrengthComponent .module.css";
import getPasswordStrength from "@/app/utils/getPasswordStrength";

type Props = {
  generatedPassword: string;

};
const StrengthComponent = (props: Props) => {
  const {
    generatedPassword
   
  } = props;
  const strength = getPasswordStrength(
    generatedPassword
    
  );
  const colors = StrengthColor(strength);

  return (
    <div className={styles.main}>
      <span className={styles.strength}>STRENGTH</span>
      <div className={styles.strengthContainer}>
        <span>{strength.toUpperCase()}</span>
        <div className={styles.colorContainer}>
          {colors.map((color, index) => (
            <div
              key={index}
              className={styles.strengthColor}
              style={{
                backgroundColor: color,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrengthComponent;

const StrengthColor = (strength: string): string[] => {
  switch (strength) {
    case "too weak":
      return ["#F64A4A", "#18171F", "#18171F", "#18171F"];
    case "weak":
      return ["#FB7C58", "#FB7C58", "#18171F", "#18171F"];
    case "medium":
      return ["#F8CD65", "#F8CD65", "#F8CD65", "#18171F"];
    case "strong":
      return ["#A4FFAF", "#A4FFAF", "#A4FFAF", "#A4FFAF"];
    default:
      return ["dark", "dark", "dark", "dark"];
  }
};
