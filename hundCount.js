function howManyHundreds (number){
  var counter = 0;

  while(number % 100 === 0){
    counter += 1;
    number - 100; 
  } 

  return counter; 
}

console.log(howManyHundreds(1000), "=?", 10);
