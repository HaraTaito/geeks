//JS ふぁずびず問題（JS）
let num = "myfuncNum"
const myfunc = document.getElementById("myfunc");
myfunc.addEventListener("click", function() {
  for (let i = 1; i <= num; i++) {
  　 if(i % 15 === 0){
         document.write("FizzBuzz");
     } else if (i % 5 === 0){
          document.write("Buzz");
     } else if(i % 3 === 0){
          document.write("Fizz");
     } else {
        document.write(i);
     } document.write("</br>");
   }
});
