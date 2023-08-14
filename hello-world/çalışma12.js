// let sayac =1
// do {
//     console.log(sayac)
//     sayac++
// } while (sayac<=10);

// let yas = 19
// do {console.log("ehliyetinizi alabilirsiniz.")
    
// } while (yas>=25);
//  koşul sağlamadı fakat döngü çalıştı

// --------------------------------------
// 1 den 20 ye kadar olan tek sayıların toplamını bulalım
// let sayac = 1
// let toplam = 0
// do {
//     if(sayac%2==1){
//         toplam+=sayac;
//     }
//     toplam++
// } while (sayac<=20);
// console.log("toplam :" ,toplam)
// -----------------------------------------------------------------

// break - continue
// let sayac=1
// while(sayac<=10){
//     console.log(sayac);
//     if(sayac==8){
//         break;
//     }
//     sayac++
// }
// ------------------------------------------------------------------

// ? continue
// 1 2 3 4 5 6 7 8
let sayac= 0

while(sayac<=10){
    sayac++
    if(sayac>10){
        break
    }
    if(sayac==8){
        continue;
    }
    console.log(sayac);
}