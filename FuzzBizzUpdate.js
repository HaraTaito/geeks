//JS ふぁずびず問題（JS）

const myfunc = function fizzbuzz(){
for (let i = 1; i <= 100; i++) {
　 if(i % 15 === 0){
       document.write("FizzBuzz");
   } else if (i % 5 === 0){
        document.write("Buzz");
   } else if(i % 3 === 0){
        document.write("Fizz");
   } else {
      document.write(i);
   }document.write("</br>");
 }
}
