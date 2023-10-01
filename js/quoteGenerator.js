// membuat variabel dengan menggunakn queryselector ke documetn html

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

// buat objek quote dan person
const quotes = [
  { quote: "how are you", person: "John" },
  { quote: "Still good", person: "Doe" },
  { quote: "Baik-baik saja", person: "Mario" },
//   bisa ditambah sesuai kebutuhan
];


// buat event btn untuk menganti quote dan nilai diambil dari objek diatas yang dibungkus dengan array dan akses data menggunakan method random()
btn.addEventListener('click', function(){

    // buat variabel random untuk mengambil nilai pada objek diatas
    let random = Math.floor(Math.random() * quotes.length); 

    // innerText berguna untuk mengubah isi konten
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    // nilai quote dan person diambil dari nilai objek dimana
    // objek berisikan Key dan Value 
})