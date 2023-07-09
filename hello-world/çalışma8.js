// switch case çok kullanılmaz. yol ayrımında kullanılır if else gibi. if elseler daha çok kullanılır .

// let sayı = prompt(" Lütfen 1 ile 5 arasında bir sayı giriniz.")

// switch(sayı){

// case "1": 
// console.log(" girilen sayı 1'dir. ")
// break



// case "2":
//     console.log("girilen sayı 2'dir. ")
// break



// case "3":
//  console.log(" girilen sayı 3'üdr.")
// break



//  case"4":
//  console.log("girilen sayı 4'dür")
// break



// case"5":
//  console.log("girilen sayı 5'dir")
// break

// default:
//     console.log("girilen sayı 1 ile 5 arasında olmalıdır.")
// break

// }
//  break koymazsam diğerlerine seker. bazen işe yarayabilir ama kullanmak tavsiye edilir.

let yenisatir = "\r\n"
let metin = "1- pazartesi" + yenisatir
    + "2-salı" + yenisatir
    + "3- çarşamba" + yenisatir
    + "4- perşembe" + yenisatir
    + "5- cuma" + yenisatir
    + "6 - cumartesi" + yenisatir
    + "7- pazar"+yenisatir
    +"lütfen bir seçim yapınız."

let değer = prompt("metin")
switch (değer) {
    case "1": {
        console.log(" pazartesi")
        break
    }

    case "2": {
        console.log(" salı")
        break
    }
    case "3": {
        console.log("çarşamba")
        break

    }
    case "4": {
        console.log("perşembe")
        break
    }
    case "5": {
        console.log("cuma")
        break
    }

    case "6": {
        console.log("cumartesi")
        break
    }

    case "7": {
        console.log("pazar")
        break
    }

    default:
        
        console.log("lütfen geçerli bir sayı seçiniz")
        break
        // alt+shıft+f = kodları düzenler.

}