import React from "react";
import styles from "./RequestScreen.module.css"
import InputField from "../InputField/InputField";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MedDataDropdown from "../MedDataDropdown/MedDataDropdown";

const RequestScreen = () => {
    const inputMap = ["Name", "Geburtsdatum", "Addresse", "Email"]
    return (
        <Row className={styles.requestPage}>
            <Col className={styles.requestOptions}>
                <div className={styles.header}>What do you need from your patient?</div>
                <MedDataDropdown></MedDataDropdown>
                <div className={styles.header}>What do you need from your patient?</div>
                <InputField inputType="text" inputName="Description"></InputField>
            </Col>
            <Col className={styles.qrField}>
                <img src="https://qrcodegeneratorfree.online/img/qrcode1559750990.png"/>
            </Col>
        </Row>
    )
};

export default RequestScreen