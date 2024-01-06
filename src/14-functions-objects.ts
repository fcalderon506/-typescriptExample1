(() =>{

  const login = (data: {email: string, password: number}) =>{
    console.log(data.email, data.password);
  }

  // login('a@a.com', 123465);
  login({
    email: 'a@a.com',
    password: 1325
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Prod1',
    createdAt: new Date(1993,1,15),
    stock: 12
  });
  console.log(products);

  addProduct({
    title: 'Prod1',
    createdAt: new Date(1993,1,15),
    stock: 12,
    size: 'L'
  });
  console.log(products);

})();
