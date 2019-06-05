import React from 'react'; 
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const LoggedOut = () => {
    return(
        <Container>
            <Row style={{marginTop: "50px"}}>
                    <h3>You are not logged in, pls login</h3>
            </Row>
        </Container>
    )
}


export default LoggedOut; 


{/* <label htmlFor="profilePictureUpload">
                            <Button variant="primary">Upload Patient Data</Button>
                        <input
                        id="profilePictureUpload"
                        name="profilePictureUpload"
                        type="file"
                        style={{display: "none"}}
                        onChange={props.onChange}
                        accept="image/*"
                        />
                    </label> */}