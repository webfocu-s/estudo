import React, { Component } from 'react';

import api from '../../services/api';

export default class Main extends Component{
    componentDidMount(){
     this.loadProdutos();
    }

    loadProdutos = async () => {
        const dados = await api.get('/products');
        console.log(dados)
    }
   render(){
       return <h1>Novo componente</h1>
   }
}