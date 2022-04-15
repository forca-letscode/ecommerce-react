import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";



class Footer extends React.Component{

    render() {
        return (
            <div>
                <div>
                    <h1>E-Store</h1>
                        <Row>
                            <Col>Início</Col>
                            <Col>Sobre</Col>
                            <Col>Fale Conosco</Col>
                        </Row>
                </div>
            </div>
        )
    }
}

export default Footer;