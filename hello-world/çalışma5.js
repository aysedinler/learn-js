// çoklu if kullanmak
let ad = prompt("isminizi giriniz : ")
let tc = prompt("tc'nizi giriniz : ")


function kontrolEt(ad, tc) {
    if (ad != "") {
        if (tc.length == 11) {
            console.log("isim ve tc hatasız girildi")
        }
        else {
            console.log("lütfen tcnizi 11 karakter olarak girin.")
        }

    }
    else {
        console.log("Lütfen isim alanını boşbırakmayın!!!")
    }
}


// let isim =""
// console.log(isim)
// consolu boş bıraktı.
