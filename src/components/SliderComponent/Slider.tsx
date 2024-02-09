import React from 'react'
import styles from "./Slider.module.css"
type Props={
    passwordLength:number;
    handlePasswordLength:(e: React.ChangeEvent<HTMLInputElement>) => void
}
const Slider = (props:Props) => {
    const {passwordLength, handlePasswordLength}=props;
  return (
   <>
        <div className={styles.length}>
          <p>Character Length</p>
          <p className={styles.passLength}>{passwordLength}</p>
        </div>
        <input
          min="6"
          max="23"
          step="1"
          type="range"
          name="length"
          value={passwordLength}
          onChange={handlePasswordLength}
          className={styles.slider}
        />
   </>
  )
}


export default Slider