//  çarpım tablosu yapalımm
// for( let i=1 ; i<=10; i++){
// for (let j = 1 ; j<=10; j++){
//         console.log(i+"x"+j+"="+ (i*j))
// }
// console.log("---------------------------------------")
// }






// -----------------------------------------------------------

//  asal sayı bulma uygulaması
// let a = Math.floor(1.5)
// console.log(a)
// 1.5 konsolumuza 1 olarak yazıldı ve küsüratımız silindi.

let sayi= Number(prompt(" Lütfen bir sayı giriniz :"))
let sonuc =true
for(let i =2 ; i<= Math.floor(sayi/2); i++ ){
    if(sayi%i==0){
        //  asal değildir
        sonuc= false
        break;
    }
}
if(sonuc){
    alert(sayi+"asaldır.")
}else{
    alert(sayi + " asal değildir !")
}
