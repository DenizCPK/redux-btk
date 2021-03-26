import React, { Component } from 'react';
import {Row,Col} from "reactstrap"
import CategortList from "../categories/CategoryList"
import ProductList from "../products/ProductList"

class Dashboard extends Component {
    render() {
        return (
            <div>
            <Row>   
            <Col xs="3">
                <CategortList/>
            </Col>
            <Col xs="9">
                <ProductList/>
            </Col>
            </Row>
            </div>
        );
    }
}

export default Dashboard;