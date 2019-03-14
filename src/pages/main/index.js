import React, { Component } from 'react';

import api from '../../services/api';
import './style.css';

export default class Main extends Component{

    state = {
        products : []
    }

    
    componentDidMount(){
     this.loadProdutos();
    }

    loadProdutos = async () => {

        const dados = await api.get('/products');
        const { docs, ...productInfo } = dados.data;

        this.setState( { products: docs, productInfo} );
      
       console.log('====================================');
       console.log(this.state.products);
       console.log('====================================');
        
    }

    nextPage = () => {
      const {page, pageInfo} = this.state.products;

     // if(page === pageInfo.pages) return;
      console.log('====================================');
      console.log(page);
      console.log('====================================');
    }
    prevPage = () => {
       
    }

  

   render(){
    const { products } = this.state;
       return (
       <div>
       
       { products.map( product => (


            <a key={product._id} href={product.url} target="" id="article">
            <div id="img_product"> 
                <img alt="Culrs" src="https://ph-files.imgix.net/2980900f-ddbe-406b-a188-ed1f7fcc1d52?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"/> 
            </div>           

            <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            </div>
            
            </a>


       ))}

       <div id="actionButton">
           <button onClick={this.prevPage}>Anterior</button>
           <button onClick={this.nextPage}>Próximo</button>
       </div>

       </div>
       
       )
   }

}



   