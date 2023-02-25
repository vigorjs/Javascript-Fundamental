var angka1 = 500
var angka2 = 499

var samadengan = angka1 == angka2
var lebihdari = angka1 > angka2
var kurangdari = angka1 < angka2
var lebihdarisamadengan = angka1 >= angka2
var kurangdarisamadengan = angka1 <= angka2

console.log("Apakah "+ angka1 + " sama dengan "+ angka2 +"? " + samadengan)
console.log("Apakah 500 lebih dari 200? "+ lebihdari)
console.log("Apakah 500 kurang dari 200? " + kurangdari)
console.log("Apakah 500 lebih dari samadengan 200? " + lebihdarisamadengan)
console.log("Apakah 500 kurang dari sama dengan 200? " + kurangdarisamadengan)