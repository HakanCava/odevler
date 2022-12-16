//! PRACTICE1: 4 islem hesap makinesini yaziniz (2 adet sayi icin)

const s1 = Number(prompt("1.sayiyi giriniz"));
const islem = prompt("isleminizi seciniz: '+,-,*,/' ")
const s2 = Number(prompt("2.sayiyi giriniz"));

if (islem === "+") {
  console.log(`Isleminizin sonucu: ${s1 + s2}`);
} else if (islem === "-") {
  console.log(`Isleminizin sonucu: ${s1 - s2}`);
} else if (islem === "*") {
  console.log(`Isleminizin sonucu: ${s1 * s2}`);
} else if (islem === "/") {
  console.log(`Isleminizin sonucu: ${s1 / s2}`);
} else {
  console.log("Hatali islem secimi yapildi");
}

//!====================================================================

//? PRACTICE2: Clarusway'deki haftalik ders ve etkinlik programinizi,console'dan girilen gun degerine gore cikti veren kodu swithc-case ile yaziniz. Program:
//? Pazartesi,Sali,Carsamba,Persembe->InClass
//? Cuma->Teamwork
//? Cumartesi->InClass+Workshop
//? Cumartesi->Self-Study
//? Aksi takdirde->Yanlis gun girildi

const gun = prompt("bir gun giriniz");

switch (gun) {
  case "pazartesi" : case "sali" : case "carsamba" : case "persembe": 
    console.log("Secilen gunde programiniz: InClass");
    break;
  case "cuma":
    console.log("Secilen gunde programiniz: Teamwork");
    break;
  case "cumartesi":
    console.log("Secilen gunde programiniz: InClass+Workshop");
    break;
  case "pazar":
    console.log("Secilen gunde programiniz: Self-Study");
    break;

  default:
    console.log("Yanlis gun girildi");
    break;
}

//!=====================================================================

//? PRACTICE3: Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.

const minimumWage = 5500;

let salary = Number(prompt("Enter your salary"));

salary < minimumWage ? (salary *= 1.5) : (salary *= 1.1);

console.log(`Your new salary is ${salary} dolor`);

//!=====================================================================

//? PRACTICE4: Kredi Risk Programı:

//? ## Console’dan kişinin gelir ve gider miktarını alan
//? ## eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//? ## değilse Kredi Verilemez 🥺
//? ## şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

const gelir = Number(prompt("Lutfen aylik gelirinizi giriniz"));
const gider = Number(prompt("Lutfen aylik giderinizi giriniz"));

minimumWage <= gelir - gider
  ? console.log("Kredi verilebilir 🤑")
  : console.log("Kredi verilemez 🥺")
