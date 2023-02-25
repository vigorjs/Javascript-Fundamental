var databarang = ["Mouse Gaming", "Keyboard Gaming", "Ngakak Gaming"]

function showBarang(){
    var listbarang = document.getElementById("listbarang")
    listbarang.innerHTML = ""
    
    for(let i = 0; i<databarang.length; i++){
        var btnEdit = "<button onclick='editBarang("+i+")'>Edit Barang</button>"
        var btnDelete = "<button onclick='hapusBarang("+i+")'>Hapus Barang</button>"
        
        listbarang.innerHTML += "<li>" + databarang[i] + " " + btnEdit + " | " + btnDelete + "  </li>"
    }
}

function addBarang(){
    var input = document.getElementById("inputBarang")
    databarang.push(input.value)

    showBarang()
}

function editBarang(id){
    var newBarang = prompt("Nama Barang Baru = ", databarang[id])
    databarang[id] = newBarang

    showBarang()
}

function hapusBarang(id) {
    databarang.splice(id, 1)
    
    showBarang()
}

showBarang()