import React from 'react'; 
import Container from 'react-bootstrap/Container'; 
import Col from 'react-bootstrap/Col'; 
import Row from "react-bootstrap/Row"; 
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button"; 
import styles from "./PatientDetails.module.css"; 
import Table from "react-bootstrap/Table"; 
import Form from "react-bootstrap/Form"; 



const PatientDetails = props => {
    return (
        <Container style={{width: "100%", paddingTop: "5%", paddingBottom: "10%"}}>
            <Row className={styles.text}>
                <Col>
                    <Image className={styles.image}src={require("./olli.jpg")} rounded/>
                    <Row className={styles.rowimagemargin}>
                        <div className={styles.h1}>Name: </div>
                        <div className={styles.a}>Oliver Kollmer</div>
                    </Row>
                    <Row className={styles.row}> 
                        <div className={styles.h1}>Geb: </div>
                        <div className={styles.a}>02.03.1990</div>
                    </Row>
                    <Row className={styles.row}> 
                        <div className={styles.h1}>Anschrift: </div>
                        <div className={styles.a}>Große Bleiche 25 <br></br>
                                                  55116 Mainz
                        </div>
                    </Row>
                    <Row className={styles.row}> 
                        <div className={styles.h1}>Versicherungsstatus: </div>
                        <div className={styles.a}>GV</div>
                    </Row>
                    <Row className={styles.row}> 
                        <div className={styles.h1}>Krankenkasse: </div>
                        <div className={styles.anomargin}>Techniker Krankenkasse</div>
                    </Row>
                    <Row className={styles.row}> 
                        <div className={styles.h1}>Versichertennummer: </div>
                        <div className={styles.anomargin}>Y8192139123</div>
                    </Row>
                    <Row className={styles.rowbigmargin}> 
                        <div className={styles.h1}>Gewicht: </div>
                        <div className={styles.a}>80kg</div>
                    </Row>
                    <Row className={styles.row}> 
                        <div className={styles.h1}>Größe: </div>
                        <div className={styles.a}>1,80m</div>
                    </Row>
                    <Row className={styles.row}> 
                        <div className={styles.h1}>Raucher: </div>
                        <div className={styles.a}>nein</div>
                    </Row>
                    <Row className={styles.row}> 
                        <Button variant="primary" className={styles.button}>Session Beenden</Button>
                    </Row>
                </Col>
                <Col xs={7}>
                    <Row>
                        <div className={styles.h1} style={{paddingLeft: "3%", marginBottom: "3%"}}>Patientendaten > Fall 2 </div>
                        <div style={{paddingLeft: "25%"}}> 
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Suche..." />
                                </Form.Group>
                            </Form>
                        </div>
                    </Row>
                    <Table striped hover className={styles.table}>
                        <thead>
                            <tr>
                            <th>Dateiname</th>
                            <th>Hinzugefügt von</th>
                            <th>Datum</th>
                            <th>Datei-Typ</th>
                            <th>Datei-Größe</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>MRT_Rechte_Schulter</td>
                            <td>Dr. Fischer</td>
                            <td>01.01.2018</td>
                            <td>MRT-Datei</td>
                            <td>10mb</td>
                            </tr>
                            <tr>
                            <td>Röntgen_Rechte_Schulter</td>
                            <td>Dr. Fischer</td>
                            <td>01.01.2018</td>
                            <td>MRT-Datei</td>
                            <td>3mb</td>
                            </tr>
                            <tr>
                            <td>Befund_Rechte_Schulter</td>
                            <td>Dr. Martens</td>
                            <td>01.01.2018</td>
                            <td>MRT-Datei</td>
                            <td>500kb</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <label htmlFor="profilePictureUpload">
                            {/* <img src={props.picture} width="100%" height="100%" alt="This is the ProfilePicture"></img> */}
                            {/* <Button variant="primary">Upload Patient Data</Button> */}
                            <div className={styles.dottedborder}>Dokument Hochladen</div>
                        <input
                        id="profilePictureUpload"
                        name="profilePictureUpload"
                        type="file"
                        style={{display: "none"}}
                        onChange={props.onChange}
                        accept="image/*"
                        />
                    </label>
                    <Form>
                         <Form.Group controlId="formGridState">
                            <Form.Label style={{fontSize: "22px", fontWeight :"bold", marginTop: "7%", }}>Medizinische Fachrichtung:</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>Anatomie</option>
                                <option>Anästhesiologie</option>
                                <option>Allgemeinmedizin</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGridState">
                        <Form.Label style={{fontSize: "22px", fontWeight :"bold", marginTop: "7%", }}>Hinzugefügt von:</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>Dr. Martens</option>
                            <option>Dr. House</option>
                            <option>Dr. Fischer</option>
                        </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{fontSize: "22px", fontWeight :"bold", marginTop: "5%"}}>Anmerkung:</Form.Label>
                            <Form.Control as="textarea" rows="7" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}


export default PatientDetails; 