// date kullanımı
// let tarih = new Date(1999,08,07,10,40,50);
// console.log(typeof tarih);

// let tarih = new Date();
// console.log(tarih.toString());
// console.log(typeof tarih.toString());
// console.log(tarih);

// console.log(tarih.getFullYear());
// console.log(tarih.getDate());
// console.log(tarih.getDay());
// console.log(tarih.getHours());
// console.log(tarih.getMilliseconds());
// console.log(tarih.getMinutes());
// console.log(tarih.getMonth()+1);
// console.log(tarih.getSeconds());
// console.log(tarih.toLocaleDateString());
// console.log(tarih.toLocaleTimeString());
// console.log(tarih.toLocaleString());

//  get değer almak için kullandığımız metottur

//SET METOTLARI
// console.log(tarih);
// tarih.setHours(15);
// tarih.setDate(24);
// tarih.setMonth(11);
// tarih.setMinutes(50);

// tarih.setHours(tarih.getHours()+2);
// console.log(tarih);

//  set değer almak için kullanılır
// 62
 
//  let UserName = prompt("kullanıcı adını giriniz")
//  if (UserName.length){
//     console.log('kullanıcı bilginiz ${UserName}')
//  }else {
//     console.log("bilgi yok");
//  }

// function hello(){
//     console.log("merhaba");
//     helloWorld()
// }

// function helloWorld(){
//     console.log("hello world");
// }
// hello()

// window.location.href ="https://ayşedinler.com"


// let val;

// val =window.document;
// val =document.all
// val = document.all.length
// val = document.all[2]
// val = document.head
// val= document.domain
// console.log(val);

// let = val
// val= document.getElementById("header")
// val= document.getElementById("header").id
// val= document.getElementById("header").className

// val= document.getElementById("header")


// *********************************************************************

// let = val
// val = document.getElementsByClassName
// ("list-group-item")
// console.log(val);

// function Person(name, yearOfBirrth, job){
//     this.name = name
//     this.yearOfBirrth = yearOfBirrth
//     this.job = job
//     this.calculateAge = function(){
//         return 2023-this.yearOfBirrth
//     }
//     console.log(this);

// }

// let ayşedinler = new Person("ayşedinler" , 2003 , "student")

// let pınardinler = new Person( "pınardinler" , 1975 , "chef")

// console.log(ayşedinler.name);
// console.log(ayşedinler.yearOfBirrth);
// console.log(ayşedinler.job);
// console.log(ayşedinler.calculateAge());

// *****************************************************
//  object.create

// let personProto = {
//     calculateAge : function (){
//         return 2018 - this.yearOfBirth
//     }
// }

// let ozan = Object.create(personProto)
// ozan.name = "ayşe"
// ozan.yearOfBirth="2003"
// ozan.job = "student"
// ozan.hobby="to do ride a bike :)))))"
// console.log(ayşe);