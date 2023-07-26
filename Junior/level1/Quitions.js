// -=-=-=-=-=- Junior strong Livel

// // No 1
// // object keylarini toping
// let obj={
//   id:1,
//   name:"WebBrain"
// }

// // chiqish
// // value: id,name

// -=-=-=-=-= answer No 1

// ###############

// // No2
// // object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     name:"WebBrain",
//     age:18,
//     hight:1.60,
// }

// // Chiqish:
// // id,age,hight

// -=-=-=-=-= answer No 2

// ###############

// No3

// // Object valuelarining boolean tipidagi malumotlrini qaytaring keylari blan biriga
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// // chiqish:
// // {   offline:true,
// //     online:true,
// //     individual:false
// // }

// -=-=-=-=-= answer No 3

// ###############

// No4

// // fnc ga object va string berilgan. agar object keylari ichida str ingga teng bolgan key bolsa shu key va valueni chiqazing
// // code function ichida yozilishi kerak
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }

// // chiqish
// // name:"WebBrain"

// -=-=-=-=-= answer No 4

// ###############

// No5

// // object va string berilgan.  string bor bolgan object valuelarining chiqaring
// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$"
// }

// -=-=-=-=-= answer No 5

// ###############

// // No6
// // // object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
// let person = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age:20
//         }
//     }
// }

// chiqish
// value: 146

// -=-=-=-=-= answer No 6

// ###############

// No7
// // array ichida object berilgan. job berilgan objectlarni qaytaring
// let arr=[
//     {id:1,name:'Usmon',job:'developer'},
//     {id:2,name:'Usmon',job:'developer'},
//     {id:3,name:'Usmon'},
//     {id:4,name:'Usmon',job:'developer'},
//     {id:5,name:'Usmon'}
// ]

// -=-=-=-=-= answer No 7

// ###############

// No8
// // objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
// let obj={
//   id:1,name:'Usmon',job:'developer'
// }

// -=-=-=-=-= answer No 8

// ###############

// // No9
// // objectga yangi qiymat qo'shuvchi funksiya yozing

// add(obj,key,value)
// add(obj,'address','toshkent')

// -=-=-=-=-= answer No 9

// ###############

// No10
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.' deb chiqsin
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:2
// }
// // chiqish
// // qabul qilindi

// -=-=-=-=-= answer No 10

// ###############

// No11

// // Agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin
// // aks holsa {kiridit:olinmadi} qoshilsin

// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true
// }

// chiqish
// obj ga {kiridit:true} qushilsin

// -=-=-=-=-= answer No 11

// ###############

// No12
// /* object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan.
//    agar tug'ilgan yil(year) hozirgi yoshiga tug'ri kelmasa 'xato malumot kiritilgan disin' */

// let obj = {
//     id: 1,
//     name: 'Usmon',
//     age:34,
//     year:1990
// }

// // chiqish
// // 'xato malumot kiritdingiz'

// -=-=-=-=-= answer No 12

// ###############

// No13

/* Talaba o'z malumotlarini toldirmoqda. sizga massiv berilgan. 
massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi bor viloyatlarni
tanlasa 'Ruyhatdan muvoffaqqiyatli uttingiz' aks holda
'bizning filallarimiz faqat shu viloyatlarda bor' degan natija chiqsin. */

// arr = ['Samarqand','Andijon','Namangan','Qarshi','Toshkent']

// -=-=-=-=-= answer No 13

// ###############

// No14

// /* talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan.
//  objectda login parol keltirilgan.funksiyaga login va parol jonatiladi.
//  agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing' */

// let arr=[
//     {id:3,name:'Usmon',parol:'1231'},
//     {id:1,name:'Umar',parol:'1241'},
//     {id:5,name:'Jasur',parol:'3452'},
//     {id:2,name:'Asmo',parol:'2312'},
//     {id:4,name:'Salohiddin',parol:'3421'},
// ]

// // chiqish
// // logIn('Umar','2113') => xato
// // logIn('Salohiddin','3421') => hush kelibsiz

// -=-=-=-=-= answer No 14

// ###############

// No15
// // object ichida objectlar berilgan. ichki objectlar bor yoqligini tekshiring
// obj={
//   id:1,
//   title:'the best',
//   address:{street:"Farobiy",number:'34'}
// }

// -=-=-=-=-= answer No 15

// ###############

// No16

// let person = {
//   id: 1,
//   name: "Umar",
//   surname: "Ismoilov",
//   ielts: 5.5,
// };

// 1 - shart
// // agar ielts 5.5 yoki katta bolsa console da qabul qilindi,aks holda qayta topshirish kerak db chiqsin
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }
// // chiqish
// // qabul qilindi

// -=-=-=-=-= answer No 16. 1-shart

// -=-=-=-=-=-

// 2 - shart
// // agar ielts 5.5 yoki katta bolsa objectga student:true qoshilsin qiymati bn birga
// person = {
//   id: 1,
//   name: "Umar",
//   surname: "Ismoilov",
//   ielts: 5.5,
// };
// // chiqish
// // person = {
// //     id: 1,
// //     name: 'Umar',
// //     surname: 'Ismoilov',
// //     ielts: 5.5,
// //     student: true
// // }

// -=-=-=-=-= answer No 16. 2-shart

// -=-=-=-=-

// 3 - shart
// // agar student true bolsa unga maxsus key berilsin(math.random+id orqali berilsin)
// // chiqish
// // person = { parol: 101 // qushiladi }

// -=-=-=-=-= answer No 16. 2-shart

// -=-=-=-=-=-

// 4 - shart
// // talaba bazaga kirishi kk shunday funksiya yarating u parol va name ni jonatsin. agar parol bn name bazadagi
// // parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name xato chiqsin
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }

// Kirish(101,'Umar') //=> hush kelibsiz
// Kirish(10,'Umar')  // => parol yoki name xato
// Kirish(101,'Ali')   // => parol yoki name xato





// 1. check(str1, srt2)  - function yozilsin. berilgan parametrlar bir biriga mos yoki
// umumey tug'ri kelmasligi va qismon to'g'ri ekanligini ifodalavchi natijani qaytarsin.
// ex: str1 = 'Jahongir Doniyarov' , str2 = 'gir' qisman ichida bulsa ichida bor deb chiqsin tuliq bir biriga mos kelsa tuliq mos keldi desin

// let str1 = 'Jahongir Doniyarov';
// let str2 = 'gir';
// function check(str1, str2){
// if(str1.localeCompare(str2) === 0){
//   console.log('To\'liq mos keldi')
// }else if(str1.localeCompare(str2) === 1){
//   console.log('qisman bor')
// }else{
//   console.log('mos kelmadi')
// }
// }

// check(str1,str2)

// SUCCES

// 2. getCount(str) - function yozilsin. functiondagi harflar sanog'ini chiqarib bersin
// ex: str = {'webbrain'}; {w:1,e:1,b:2,r:1,a:1,i:1,n:1 }
let str = 'Jahongir'
function getCount(str){
  let char = {}
  for(i of str){
    if(char[i]){
      char[i]++
    }else{
      char[i] = 1
    }
  }
  return char
}
console.log(getCount(str))


// 3. truncate(str, n) - funtion yozilsin. Berilgan stringdan 'n' ta harf ajiratib berilsin
// es: str = 'webbrain' , n=5
// res: 'webbr'
let n = 2
function del(str,n){
  return str.slice(0,n)
}
console.log(del(str,n))

// -=-=-=- SUCCES


// 4. getCurrency(str) - berilgan string yoke pul birligini faqat raqamlarini ajiratib chiqarsin
// ex: '$1200' - 1200
let str1 = '$120'
function getCount(str1){
  let count = ''
  for(i of str1){
    // console.log(i)
    if( i !== '$'){
     console.log(count.concat(i))
    }
  }
  console.log(count)
}
getCount(str1)
// 5. berilgan string raqam, string va characterlarni alohida sano'gi blan chiqaring.
// ex: 'John@!n_2004', res:{letter:6, char:3, number:4}

// 6. copitalize(str) - berilgan stringdagi barcha so'zlarni faqat bosh harifini katta harfga o'zgartirib chiqish kerak
// ex: str = jahongir doniyarov // Jahongir Doniyarov
