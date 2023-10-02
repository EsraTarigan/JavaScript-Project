/*
di project ini menggunakan konsep sebagai berikut :
1. document.querySelector()
2. document.getElementById()
3. addEventListener()
4. if-statement
5. toString()
6. setInterval()
7. innerHTML
*/

// buat variabel
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// variabel untuk timer
let detik = 0;
let menit = 0;
let jam = 0;

// buat variabel untuk angka puluhan tetap berada di display
let puluhanDetik = 0;
let puluhanMenit = 0;
let puluhanJam = 0;

// variabel untuk status dari stopwatch
let timerInterval = null;
let timerStatus = "stopped";


// function stop-watch
function stopWatch() {
  detik++

  if (detik / 60 === 1) {
    detik = 0;
    menit++;

    if (menit / 60 === 1) {
      menit = 0;
      jam++;
    }
  }

  // menampilkan angka puluhan dengan mengambil variabel puluhanX diaatas dengan if-statement
  if (detik < 10) {
    puluhanDetik = "0" + detik.toString();
  } else {
    puluhanDetik = detik;
  }
  if (menit < 10) {
    puluhanMenit = "0" + menit.toString();
  } else {
    puluhanMenit = menit;
  }
  if (jam < 10) {
    puluhanJam = "0" + jam.toString();
  } else {
    puluhanJam = jam;
  }

  let displayTimer = (document.getElementById("timer").innerText =
    puluhanJam + " " + puluhanMenit + " " + puluhanDetik);

}

// tambah event untuk tombol play dan pause
startStopBtn.addEventListener('click', function(){

    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus = "started";
    }else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus = "stopped";
    } 
});

// tomvol reset
resetBtn.addEventListener('click', function() {

    window.clearInterval(timerInterval);
    detik = 0;
    menit = 0;
    jam = 0;

    document.getElementById('timer').innerHTML = '00:00:00';
});
