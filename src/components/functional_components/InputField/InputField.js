import React from "react";
import styles from "./InputField.module.css"

const InputField = (props) => {
    return (
        <div>
            <label className={styles.listItem}>
                <input type={props.inputType ? props.inputType : "radio"}></input>
                <span className={styles.inputLabel}>{props.inputName}</span>
            </label>
        </div>
    )
};

export default InputField