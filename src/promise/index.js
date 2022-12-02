//Utilizamos la palabra reservada new seguida de la palabra Promise que es el constructor de la promesa. Este constructor recibe un único parámetro que es una función, la cuál a su vez, recibe otros dos parámetros: resolve y reject.
const promise = new Promise(function (resolve, reject) {
  console.log("Hey");
});
//El parámetro resolve se utiliza para cuando la promesa devuelve el valor correctamente.
//El parámetro reject, se usa en el que caso de que no funcione.
const cows = 15;
//La promesa recibe una function con parametros resolve & reject, que dentro ejecutará un bloque de codigo segun sea el caso
const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows`);
  } else {
    reject(`There isn't enough cows`);
  }
});
//Con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
//Con .catch podemos obtener más información de un futuro error que se presente
//Con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa
countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Finally"));
