import React from "react";
import styles from "./InputField.module.css"

const InputField = (props) => {
    return (
        <div className={styles.listItem}>
        <label>
            <input type={props.inputType ? props.inputType : "radio"}></input>
            {props.inputName}
        </label>
        </div>
    )
};

export default InputField