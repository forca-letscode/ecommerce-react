import React from "react";
import Row from "react-bootstrap/esm/Row";



class Footer extends React.Component{

    render() {
        return (
            <div>
                <div>
                    <Row>
                        <li>All Rights Reserved</li>
                        <li>mais alguma outra informação que dê pra por no rodapé</li>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Footer;
