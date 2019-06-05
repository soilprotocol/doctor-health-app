import React from "react";
import styles from "./InputField.module.css"

const InputField = (props) => {
    return (
        <div className={styles.listItem}>
        <label>
            <input type="radio"></input>
            {props.inputType}
        </label>
        </div>
    )
};

export default InputField