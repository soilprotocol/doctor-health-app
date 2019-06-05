import React from "react";
import styles from "./RequestScreen.module.css"
import InputField from "../InputField/InputField";

const RequestScreen = () => {
    const inputMap = ["Name", "Geburtsdatum", "Addresse", "Email"]
    return (
        <div>
            <div className="header">What do you need from your patient?</div>
            <ul className={styles.text}>
                {inputMap.map((input) => {
                    return <InputField inputType={input}></InputField>
                })}
            </ul>
        </div>
    )
};

export default RequestScreen