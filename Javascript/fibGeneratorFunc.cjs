/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let x = 0 ;
    let y = 1 ;

    yield x
    yield y

    while (true)
    {
        z = x + y
        yield z

        x = y
        y = z
    }


};


  const gen = fibGenerator();
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3
  console.log(gen.next().value); // 5
 