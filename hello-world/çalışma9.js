/**
 * ? sorular
 * 1. türkçe 40 soru
 * 2. matematik 40 soru
 * 3. sosyal bilimler 20 soru
 * 4. fen bilimleri 20 soru
 * 
 * ------- 100 puani ösym veriyor
 * ------- okul puani max 60 veriyor
 * 
 */

// let turkceDogru, turkceYanlis = 0
// let matematikDogru, matematikYanlis = 0
// let sosyalDogru, sosyalYanlis = 0
// let fenDogru, fenYanlis = 0
// let puan = 0

// let yenisatir = "\r\n"
// let mesaj = " Tyt puan hesaplama uygulamasina hoşgeldiniz!" + yenisatir
//     + "1 puan hesapla" + yenisatir
//     + "2- çikiş yap"

// // alert(mesaj);

// let secim = prompt(mesaj)

// console.log('secim -->', secim)
// console.log('mesaj -->', mesaj)

// switch (secim) {
//     case "1":
//         let okulPUani = Number(prompt("okul puaninizi giriniz"))
//         turkceDogru = Number(prompt("türkçe doğru sayisi"))
//         turkceYanlis = Number(prompt("türkçe yanlis sayisi"))

//         console.log('Türkçe yanlış --->', turkceYanlis)

//         matematikDogru = Number(prompt("matematik dogru sayisi"))
//         matematikYanlis = Number(prompt("matematik yanlis sayisi"))

//         sosyalDogru = Number(prompt("sosyal doğru sayisi"))
//         sosyalYanlis = Number(prompt("sosyal  yanlis sayisi"))

//         fenDogru = Number(prompt("fen doğru sayisi"))
//         fenYanlis = Number(prompt("fen yanliş sayisi"))

//         let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru
//         let yanlisSayisi = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis
//         let kalanDogruSayisi = dogruSayisi - (yanlisSayisi / 4)
//         puan = (kalanDogruSayisi * 4) + 100 + okulPUani
//         alert("tyt puaniniz : " + puan);
//         break

//     case "2":
//         alert("uygulamadan çikiş yapildi....")
//         break
//     default:
//         alert("lütfen geçerli aralikta bir değer giriniz")
//         break

// }