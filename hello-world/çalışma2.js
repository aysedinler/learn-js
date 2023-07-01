// ARİTMETİK OPERATÖRLER
// = matematikteki anlamı ile kullanılmaz. değer atamak için kullanılır.
// let a = 5; dersek a'nın değerini 5 olarak atar.
// + (artı operatörü. matematikteki anlamı ile kullanılır.)
// console.log(5+7); 
// % kalanı vermek için kullanılır.
// console.log(10%3);
    // kalanı 1 olarak göstermelidir.ARİTMETİK
// ++ bir arttırmak -- bir azaltmak için kullanılır

// let a =5;
// a++;
// console.log(a);
//  ** operatörü üssü almak için kullanılır.
// 5==5 matematikteki anlamıdır.değerlere bakar string ya da number olması 
//  örneğin; 5=="5"
// === hep tip hem de değere bakar. 
// let sayi = 4;

// sayi = sayi+3;
// sayi+=2;
// sayi-=3
// console.log(sayi);

// ---------------------------MANTIKSAL OPERATÖRLER-----------------------------------
/**
    && : ve 
     
    || : veya

    !  : değil
 */
//  let yas =18
//  let para =10000
//  let saglıklıMı=false
//  console.log(yas>17 && para>8000 && saglıklıMı==true)
//   bu olay matematikte ki mantık gibidir. ve bağlacındaki her şey doğru olmalıdır.
//  veya operatörü biri false olsa bile sonuç doğru olur.
// ünlem bir ifadenin tersini alır.örn:
// console.log(! 5>4)
//  consola yanlış yazdırdı.
// != : eşit değil MimeTypeArra
// > : büyük mü
// < : küçük mü
// >= büyük eşit mi 
// <= küçük eşit mi 
console.log(5!=3)
// cevap true çünkü eşit olmadığını ben söylüyorum

/**
 *----------------------------------DİYALOG KUTULARI----------------------------------------
 - alert
 -prompt
 -confirm 
 
 */
//  function
alert("bugün mis gibi limonata yaptım")
alert("lütfen şifreyi doğru girin")

// prompt() ile kullanıcıdan değer alınır.

prompt("yaşınızı girin")
let isim = prompt("isminizi giriniz:")
let yaş = prompt("yaşınızı girirniz :")
console.log("isminiz :" +isim)
console.log("yaşınız :" +yaş)
// kullanıcıdan alınan değerler string tipindedir


let sonuc = confirm("silmek istediğinize emin misiniz?")
console.log(sonuc)

// tamama basarsa true iptale basarsa false (boolean)
