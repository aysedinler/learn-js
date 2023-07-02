// if (koşul){kodlarını yaz}
// else{kodlarını yaz.}
//  if false ise else çalışır if true ise else çalışmaz.
 let yas = Number(prompt("yaşınız :"))
//  console.log(typeof yas)
 let para = Number(prompt("bütçeniz : "))
  
 if(yas>=18 && para>= 3000){
    alert("ehliyet sınavına katılabilirsiniz.")
 }
 else{
    alert("ehliyet sınavına katılamazsınız.")
 }
  