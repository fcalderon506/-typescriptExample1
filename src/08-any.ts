(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  const rat = (myDynamicVar as string).toLocaleLowerCase();
  console.log(rat);

  myDynamicVar = 1212;
  const rat2 = (<number>myDynamicVar).toFixed();
  console.log(rat2);

})();
