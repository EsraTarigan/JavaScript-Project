// konsep pada project 2
/*
+ document.getElementById()
+ addEventListener()
+ e.target
+ css pada JavaCript
+ css animation
*/

// buat variabel dari id html

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// buat event listener dari variabel tersebut
// apabila btn diklik maka display awal none akan diubah menjadi block
openBtn.addEventListener('click', function(){

    modalContainer.style.display = 'block';
});

// close btn untuk menghilangkan modal-container
closeBtn.addEventListener('click', function(){

    modalContainer.style.display = 'none';
});

// membuat seluruh window apabila di klik modal akan menghilang
window.addEventListener('click', function(e){

    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})