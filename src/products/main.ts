import {addProduct, calcStock, products} from './product.service';

addProduct({
  title: 'Prod1',
  createdAt: new Date(1993,1,15),
  stock: 0,
  size: 'L'
});
addProduct({
  title: 'Prod2',
  createdAt: new Date(1993,1,15),
  stock: 12,
  size: 'L'
});
console.log(products);

const total = calcStock();
console.log(total);
