// çoklu if
// let isim2= ""
// console.log(isim2)
// let ad = prompt("isminizi giriniz:")
// let tckn= prompt("tckn giriniz:")
// // kontrolEt(ad,tckn)
// kontrolEt2(ad,tckn)

// function kontrolEt(ad , tckn){

//     if (ad!=""){
//     if (tckn.length ==11 ){
//     console.log("isim ve tckn problemsiz girildi")
//     }
//     else{
//         console.log("lütfen tc'nizi 11 karakter olarak giriniz.")

//     }
//     // length karakter sayısını alır. 11 haneli vs.
//     }
// else {
//     console.log("lütfen isim alanını boş bırakmayın")
// }

// }

// function kontrolEt2(ad,tckn){
// if(ad==""){
//     console.log("lütfen isim alanını boş bırakmayın")
//     return
//     //  returnun anlamı eğer yukarıdaki çalışırsa sonlandırır aşşağıya hiç bakmaz.
// }
// if(tckn.length!=11)
// {
// console.log("lütfen tc'nizi 11 karakter olarak giriniz.")
// return
// }
// console.log("isim ve tcniz problemsiz girildi.")
// eğerki ikiside sağlıyorsa yukarısı 
// }
// beden kitle endeksi
// kiloyu boyun karesine bölerek buluruz

let kilo =Number(prompt("kilonuzu giriniz."))
let boy = Number(prompt("boyunuzu metrecinsinden yazınız:"))

let sonuc = kilo/(boy*2)
if (sonuc<18.5){
console.log(" ideal kilonun altında (ZAYIF)" + sonuc)
}
else if(sonuc>= 18.5 && sonuc<=24.9){
    console.log(" ideal kilo (NORMAL)"+ sonuc)
}
else if(sonuc>=25 && sonuc<= 29.9){
    console.log(" ideal kilonun üstünde"+ sonuc)
}
else if(sonuc>=30 && sonuc<=39.9){
    console.log(" ideal kilonun çok üstünde(OBEZ)"+ sonuc)
}
else if (sonuc>=40){
    console.log(" ideal kilonun çok üstünde (MORBİD OBEZ)" + sonuc)
}
//  çalıştııııııııı zayıf grubundanmışım bu arada 