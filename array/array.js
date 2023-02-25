// var product1 = "Belajar Javascript dari 0"
// var product2 = "Cara cepat Membangun Aplikasi Web Dengan PHP"
// var product3 = "Mudah Belajar Java"

var products = ["product1", "product2", "product3", "product4"]
// products.splice(0, 1) splice data array
// products.shift() menghapus data dari depan
// products[1]="produk2 sudah di edit" edit data di array
// delete products[2] Hapus value data di array
// products.pop() menghapus data array dari belakang beserta indexnya
// products.push("product5") menambah data dibelakang array

for(let i=0; i < products.length; i++){
    console.log(products[i]);
}

//FILTER : Menyaring data
//Sort : Mengecek (Mengurutkan Data)
//Inculudes : Mengecek data apakah ada didalam array