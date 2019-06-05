import React from "react";
import styles from "./RequestScreen.module.css"
import InputField from "../InputField/InputField";

const RequestScreen = () => {
    const inputMap = ["Name", "Geburtsdatum", "Addresse", "Email"]
    return (
        <div>
            <div className={styles.header}>What do you need from your patient?</div>
            <ul className={styles.text}>
                {inputMap.map((input) => {
                    return <InputField inputName={input}></InputField>
                })}
            </ul>
            <div className={styles.header}>What do you need from your patient?</div>
            <InputField inputType="text" inputName="Description"></InputField>
        </div>
    )
};

export default RequestScreen