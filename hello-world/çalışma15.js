// geriye değer döndürmek--------return= geriye döndür

// returnden sonra yazdılan kodlar erişilmez. Yani bir metodu bitiren anahtar kelimedir.
// bir değeri metodun dışarısına çıkartmak , taşımak için kullanılır.

//  void : geriye değer döndürmeyen metoddur.

// let metin = " şuanda istanbul'da Javascript eğitimi çekmekteyim."
// bul("a")
// bul("b")
// bul("ğ")
// bul("q")

// function bul (harf){
//     let toplam = 0 
//     for(let i = 0; i<metin.length; i++){
//         if(metin.charAt(i).toLowerCase()==harf.toLowerCase()){
//             toplam+=1

//         }
//     }
// console.log("harf sayısı :" + toplam)
// }

// harika çalışıyorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// --------------------------------------------------------------

// mükemmel sayı bulma
//  tam bölenleri toplamı sayının iki katına eşit ise bu sayı mükemmel sayıdır.
mükemmelSayı()
function mükemmelSayı(number){
let toplam = 0 
for(let i = 2; i<=number/2; i++){
    if(number%i==0){
        toplam+=i
    }

}
toplam+=1+number;
if(toplam==number*2){
    console.log("mükemmel sayıdır.")
}
else{
    console.log("mükemmel sayı değildir..")
}

}