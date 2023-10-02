/*
konsep project mengenai :
1. document.getElementByClassName()
2. addEventListener
3. for loop
5. this
6. classList.toggle()
*/

// variabel

const askQuestion = document.getElementsByClassName("content-container");

for (i = 0; i < askQuestion.length; i++) {
    // fungsi yang referens ke objek
    askQuestion[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });
}

