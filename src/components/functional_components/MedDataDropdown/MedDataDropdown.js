import React from "react";
import styles from "./MedDataDropdown.module.css";

const MedDataDropdown = (props) => {
    const optionArray = [
        "Allgemeinmedizin",
        "Anästhesiologie",
        "Anatomie",
        "Arbeitsmedizin",
        "Augenheilkunde",
        "Biochemie",
        "Chirurgie",
        "Frauenheilkunde und Geburtshilfe",
        "Hals-Nasen-Ohrenheilkunde",
        "Haut- und Geschlechtskrankheiten",
        "Humangenetik",
        "Hygiene und Umweltmedizin",
        "Innere und Allgemeinmedizin (Hausarzt)",
        "Kinder- und Jugendmedizin",
        "Kinder- und Jugendpsychiatrie und -psychotherapie",
        "Laboratoriumsmedizin",
        "Mikrobiologie, Virologie und Infektionsepidemiologie",
        "Mund-Kiefer-Gesichtschirurgie",
        "Neurochirurgie",
        "Neurologie",
        "Nuklearmedizin",
        "Öffentliches Gesundheitswesen",
        "Pathologie",
        "Pharmakologie",
        "Physikalische und Rehabilitative Medizin",
        "Physiologie",
        "Psychiatrie und Psychotherapie",
        "Psychosomatische Medizin und Psychotherapie",
        "Radiologie",
        "Rechtsmedizin",
        "Strahlentherapie",
        "Transfusionsmedizin",
        "Urologie",
    ]

    return (
        <select>
            {optionArray.map((option) => {
                return <option value={option}>{option}</option>
            })}
        </select>
    )
};

export default MedDataDropdown