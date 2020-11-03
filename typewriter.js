const sentence = "hello there from lighthouse labs";
let delay = 500;
for (let i = 0; i < sentence.length; i ++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === (sentence.length -1)) {
      console.log('\n');
    }
  }, (1000 + delay) ); 
  delay += 500;
}