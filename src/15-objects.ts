(()=>{

    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Product = {
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
    }
    const products: Product[] = [];

    const addProduct = (data: Product) => {
      products.push(data);
    }

    addProduct({
      title: 'Prod1',
      createdAt: new Date(1993,1,15),
      stock: 12
    });
    console.log(products);

    addProduct({
      title: 'Prod2',
      createdAt: new Date(1993,1,15),
      stock: 12,
      size: 'L'
    });
    console.log(products);

    products.push({
      title: 'Prod3',
      createdAt: new Date(1993,1,15),
      stock: 12
    });

})();
