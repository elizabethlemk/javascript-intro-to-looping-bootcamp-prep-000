function forLoop(array){
  for (let i = 0; i < 25; i++){
<<<<<<< HEAD
    if (i === 1) {array.push(`I am 1 strange loop.`)
  } else { array.push(`I am ` +i+ ` strange loops.`)}
=======
    if (i === 1) {console.log("I am 1 strange loop.")
    } else { console.log(" I am ${i} strange loops.")}
>>>>>>> 7abd593b2f26e7ca0e934ae8ce678b25661efc1e
  }
  return array
}

function whileLoop(n){
  let countdown = n;
  while (countdown > 0){
    console.log(--countdown);
  }
  return `done`
}

function doWhileLoop(array){
  let i = 0;
  function incrementVariable(){
    i = i + 1 }
  do { array.pop()
  } while (array.length > 0 && incrementVariable())
  return array
}

console.log(doWhileLoop())
