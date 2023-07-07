// benzin istasyonu
/**
 * 
 *   1- Dizel : 24.53
 *   2- Benzin: 22.25
 *   3- Lpg   : 11.1
 * 
 *   GELEN MÜŞTERİDEN ALINACAK BİLGİLER
 *   1- Yakıt tipi
 *   2- Yüklenecek yakıt litresi
 * 
 */
 let dizel = 24.53 , benzin = 22.25 , lpg =11.1
 const yeniSatır = "\r\n"
 const yakıtMetni = "1- dizel"+yeniSatır
 "2- benzin"+yeniSatır
 "3- lpg"+yeniSatır
 "yakıt türünüzü seçiniz"

 let yakıtTipi = prompt( yakıtMetni)
 let yakitLitresi = Number(prompt ("yakıt litresini girirniz"))
 let bakiye =Number(prompt("bakiyeniziz giriniz."))
 if (yakıtTipi=="1"){
    // dizel
             let odenecekTutar = dizel*yakıtLitresi
             if(odenecekTutar<bakiye){
                //  bakiyeniz yeterlidir.
                bakiye = bakiye-odenecekTutar
                alert("yakıt alma işlemi başarılı" + yeniSatır
               + "kalan bakiye : " + (bakiye)
               )
             } else{
                //  bakiyeniz yeterli değil
               
                alert(" Bakiyeniz yeterli değil."+yeniSatır
                "ödenecek tutar : " +yeniSatır+
                "bakiye : " +bakiye+yeniSatır
                "eksik tutar : " + (odenecek odenecekTutar - bakiye)
                )
             }
 }
 else if (yakıtTipi=="2"){
    // benzin
 }
 else if (yakıtTipi=="3"){
    // lpg
 }
 else {
     alert ("lütfen geçerli bir yakıt türü seçiniz!!!")
 }
