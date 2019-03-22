import React, { Component } from 'react';
import api from '../../services/api';
import { from } from 'rxjs';

export default class Products extends Component {

    state = {
        product: {}
    };

    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/products/${id}`);

        this.setState({ product : response.data});
    }
    render(){
        const { product } = this.state;
        return (
            <div>
                 <h1>{product.title}</h1>
                 <p>{product.description}</p>
            </div>
        )
    }
}