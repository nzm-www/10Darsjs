// class Person {
//   constructor(name, age, country) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }

//   showDetails() {
//     console.log(
//       `Ism: ${this.name}, Yosh: ${this.age}, Mamlakat: ${this.country}`
//     );
//   }
// }

// const person1 = new Person("Maxmudov,Shoxrux", 22, "Fargona");
// person1.showDetails();

// const person2 = new Person("Murod,Ibragimov", 20, " Fargona");
// person2.showDetails();
// ========================================================================
// 2

// 4
// class Vehicle {
//   constructor(marka, model, yil) {
//     this.marka = marka;
//     this.model = model;
//     this.yil = yil;
//   }
//   Biyagrafiyasi() {
//     return `Marka: ${this.marka}, Model: ${this.model}, Yil: ${this.yil}`;
//   }
// }
// class Avtomobil extends Vehicle {
//   constructor(marka, model, yil, eshiklarSoni) {
//     super(marka, model, yil);
//     this.eshiklarSoni = eshiklarSoni;
//   }
// }
// let avto = new Avtomobil("Mersades Bens", "SLC Banan", 2023, 4);
// console.log(avto.Biyagrafiyasi());

// ========================================================================
// 5
// class BankAccount {
//   constructor(hisobRaqami, balans) {
//     this.hisobRaqami = hisobRaqami;
//     this.balans = balans;
//   }

//   pulQoyish(miqdor) {
//     if (miqdor > 0) {
//       this.balans += miqdor;
//       console.log(
//         `${miqdor} sum pul hisobingizga qoyildi. Yangi balans: ${this.balans} sum.`
//       );
//     } else {
//       console.log("Notogri miqdor! bunaqa summa yoq.");
//     }
//   }

//   yechibOlish(miqdor) {
//     if (miqdor > 0 && miqdor <= this.balans) {
//       this.balans -= miqdor;
//       console.log(
//         `${miqdor} sum pul hisobingizdan yechib olindi. Yangi balans: ${this.balans} sum.`
//       );
//     } else {
//       console.log("Jon aka puliz ham ishlash kere");
//     }
//   }
// }

// let hisob = new BankAccount("1234567890", 500000);

// hisob.pulQoyish(100000);
// hisob.yechibOlish(300000);
// hisob.pulQoyish(-20000);
// hisob.yechibOlish(400000);
