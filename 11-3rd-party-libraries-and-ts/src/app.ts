// import _ from 'lodash';

// declare var GLOBAL: any;

// console.log(_.shuffle([1, 2, 3]));

// console.log(GLOBAL);



import { Product } from './product.model';

const products = [
    { title: 'A Carpet', price: 18.45 },
    { title: 'A Book', price: 9.11 }
    ];
// const p1 = new Product('A Book', 13.96);
const loadedProducts = products.map(prod =>{ return new Product(prod.title, prod.price)});

for (const prod of loadedProducts){
    console.log(prod.getInformation);
}


