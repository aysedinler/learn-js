// decimal to binary conversion
//  kalanları sağdan sola doğru yazarız. ikiye bölünür.
// dönüştür(6);
// function dönüştür(number){
//     let binary="";
//     while(true){
        
//         binary += (number % 2).toString();
//         number = Math.floor(number / 2);

//         if (number == 1){
            //  artık bölmeyip döngüden çıkıyoruz.
//             binary += 1;
//             break;
//         }
//     }
//     let result = reverse(binary);
//     console.log=("sonuc : " + result)
// }

// function reverse(binary){
//     let reverseBinary = "";
//     for( let i = binary.length-1; i >= 0; i--){
//         reverseBinary += binary.charAt(i);
//     }
//     return reverseBinary;
// }

// math.floor aşşağıya yuvarlar
// math.ceil yukarıya yuvarlar
// math.round yakına yuvarlar