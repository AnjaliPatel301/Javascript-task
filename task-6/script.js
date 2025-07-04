// Task 6: Number Guessing Game


     let y = Math.floor(Math.random() * 10 + 1);

        let guess = 1;

         function s() {
   
            let x =prompt("enter a value of x");

            if (x == y) {
                alert("CONGRATULATIONS!!!🎊");
            }

            else if (x > y) {
                guess++;
                alert("Too high!!😏");
                s()
            }
            else {
                guess++;
                alert("Too low!!😒")
                s()
            }
        }
        s()
////******************❤️ creat by me 😂
