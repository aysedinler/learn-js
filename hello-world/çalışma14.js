// faktöriyel hesaplama
// let sayi = Number(prompt(" Bir sayı giriniz."))
// let carpım=1; 0 yutan eleman olduğu için yazmadık
// for(let i = 1 ; i<=sayi ; i++){
//     carpım=carpım*i;
// }
// alert("sonuc:"+ carpım)

// ------------------------------------------------------------

// armstrong sayısı 
// Numbera çevirseydim bir çok metodumu kullanamam.

// let sayi= prompt(" sayınızı giriniz.")
// let toplam =0
// for(let i = 0; i<sayi.length; i++){
//     let rakam = sayi.charAt(i)
// toplam+= rakam*rakam*rakam;
// }

// if (sayi== toplam){
//     alert("armstrong sayısıdır.")
// }
// else{
//     alert(" armstorng sayısı değildir.")
// }

// ------------------------------------------------------------------

/***
 * function yazdir (){
 * KODLAR YAZILIR
 * }
 * 
 */
// function yazdir (){
//     debugger
//     console.log("umay")

// }
// yazdir()
// yazdir()
// debugger
// yazdir()
// yazdir()
// yazdir()

// ------------------------------------------------------------------
//  parametreli metot tanımlama
 
// function yazdir(isim, soyisim){
//     debugger
//     console.log(isim + " "+ soyisim)
// }
// debugger
// yazdir("umay" , "dinler")
// yazdir("pınar", "dinler")

// function cube(sayi){
//     console.log(sayi*sayi*sayi)
// }
// cube(5+2+120)

let yas = Number(prompt("yaşınızı giriniz."))
kontrolEt(yas)
function kontrolEt(yas){
    if(yas>18) {
        console.log(" ehliyetinizi alabilirsiniz.")
    }
    else (yas<18) ;{
        console.log("ehliyet almaya uygun değilsiniz.")
    }
}
