//imports
import React from "react";
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

class Header extends React.Component {

    render() {
        return (
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="head.css" />
                <title>Document</title>
            </head>
            <body>
                <div>
                    <h1>E-Store</h1>
                        <Row>
                            <Col>Início</Col>
                            <Col>Sobre</Col>
                            <Col>Fale Conosco</Col>
                        </Row>
                </div>
            </body>
            </html>
        )
    }
}

class Footer extends React.Component {
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Header;
export  {Footer};