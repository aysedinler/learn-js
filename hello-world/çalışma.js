// 1. çıktı verme metodumuz.
// document write ile çıktı verme
// document.writeln("hello world<br>"); 
// document.write("umay dinler");
// writteln araya boşluk koymaya yarıyor line satır
// document.write("merhaba dünya<br>");    
// <br> sırayla yazmayı sağlar


// 2. çıktı verme metodumuz console log metodudur. 
// console.log("bugün bayram");
console.log("erken kalkın çocuklar");
// console.log("11");
// console.clear yaptığımda consolu temizlemiş olurum

// let a=5;
// let b=10;

// console.log(a+b);
// bu şekilde toplama da yapılabiliyor. 
// let c= 20;
// let d= 30;

// console.log("iki sayının toplamı :",c+d);
//  bu şekilde de açıklamalı yapabilirim.

// alert (uyarı) popup ile çıktı verme

// console.log(window);

// alert("merhabalar");

// yukarıdan bildirim geliyor. kullanıcı hata yaptığında hatasını önlemeyi sağlayabilirim.0

// console.log("window");
console.log(window);
localStorage
console.error("hata oluştu");
// hata vermek için kullanılır.
/* yorum satırlarının arasına bu şekilde yıldız koyarsam paragrafın hepsini yorum satırı yapar.

*/ 

/*
BETTER COMMENTS
? bu bir bilgilendirme yorumudur.
! bu çok önemli bilgilendirme yorumudur.
todo : yapılması gereken vb.
*test mesaj : info vermek için kullanılır.



*/ 

//  var let ve const yazma

var değişken = 10;

console.log(değişken);

function selamlar(){
 var selam = "herkese selam"; //function scope oldu
console.log(selamlar);


}
selamlar();
// var ile tanımladığımız her şey function scop oluyor.
//  var çok fazla yer kaplar
// let ve const block scope özelliğine sahiptir.
//  varı tekrar tanımlayabilirim ama let beni patlatır.
//  const değişmez.

//                                  VERİ TİPLERİ
// 1. string (harf içeren yerlerde kullanılır)tırnaklı
// 2.Number(sayılarımız içindir.)
// 3.boolean (true veya false)
// 4.null( boş anlamına gelir. değeri sonradan atayabilirim.)
// 5. undefinder ( tanımlanmamış)
// 6.object let değişken atama operatör ve kıvırcık parantez
// 7. function

// typeof bana veri tipini gösterir.
! eğer ki tırnak içinde sayı yazarsam String onblur.apply. 
// iki tane stringi toplama işlemi ile toplayamam. birleştirir.
// yaşınız :19
 
let stringdegisken = "yaşınız :";
let yaş 19;

console.log(stringdegisken + yaş);

console.log(5>2);

let insan = {
isim :"umay",
soyisim : "dinler",
yas : 19





}
console.log(insan);
