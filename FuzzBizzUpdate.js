//JS ふぁずびず問題（JS）

const myfunc = document.getElementById("myfunc");
myfunc.addEventListener("click", function() {
let num = document.getElementById("myfuncNum").value;
  for (let i = 1; i <= num; i++) {
     if(num >= 1001){
          break;
    }else if(i % 15 === 0){
         document.write("FizzBuzz");
     } else if (i % 5 === 0){
          document.write("Buzz");
     } else if(i % 3 === 0){
          document.write("Fizz");
     }else {
        document.write(i);
     } document.write("</br>");
   }
});
