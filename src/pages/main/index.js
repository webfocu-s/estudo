import React, { Component } from 'react';

import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';


export default class Main extends Component{

    state = {
        products : [],
        productInfo: [],
        page : 1
    }

    
    componentDidMount(){
     this.loadProdutos();
    }

    loadProdutos = async (page = 1) => {

        const dados = await api.get(`/products?page=${page}`);
        const { docs, ...productInfo } = dados.data;

        this.setState( { products: docs, productInfo: productInfo, page } );
       // console.log(this.state.productInfo);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

       if( page === productInfo.pages ) return;
         
       let pagina =  page + 1;

        this.loadProdutos(pagina);
        // console.log(pagina);
       // console.log(productInfo);

    }
    prevPage = () => {

        const {page} = this.state;
        if(page === 1) return

        let pagina = page - 1
        // this.loadProdutos(pagina);
        this.loadProdutos(pagina);
       
    }

  

   render(){
    const { products ,page, productInfo } = this.state;
       return (
       <div>
       
       { products.map( product => (


           <div>

        
            <div key={product._id} id="img_product" id="article"> 
                <img alt="Culrs" src="https://ph-files.imgix.net/2980900f-ddbe-406b-a188-ed1f7fcc1d52?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"/> 
            </div>           
            <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <Link to ={`/products/${product._id}`}>acessar</Link>
            </div>
            
           </div>
            


       ))}

       <div id="actionButton">
           <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
           <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
       </div>

       </div>
       
       )
   }

}



   