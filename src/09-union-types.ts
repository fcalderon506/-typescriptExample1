(() => {
  let userId: string | number;
  userId = 1212;
  userId = 'asss';

  function greeting(myText: string | number){
    if(typeof myText === "string"){
      console.log(`string ${myText.toLocaleLowerCase()}`);
    }else{
      console.log(`number ${myText.toFixed(2)}`);
    }
  }

  greeting('Hola');
  greeting(1);
})();
