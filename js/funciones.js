//Variables globales:
let op1;
let op2;
let signo;

//Función vaciar: limpia el visor de resultados
const vaciar = () => {
  document.getElementById("pantalla").value = "";
};

//Funcion que aporta información acerca del resultado obtenido
const mostrarInfo = () => {
  let msg = document.getElementById("info");
  let rdo = document.getElementById("pantalla");
  if (rdo.value < 100) {
    msg.innerHTML = "Info: El resultado es menor que 100.";
  } else if (rdo.value > 200) {
    msg.innerHTML = "Info: El resultado es mayor que 200.";
  } else {
    msg.innerHTML = "Info: El resultado está entre 100 y 200.";
  }
};

//Funcion para comprobar que los datos introducidos son números
const valida = () => {
  valor = document.getElementById("pantalla").value;
  isNum = true;
  if (!isNaN(valor)) {
    isNum = true;
  } else {
    isNum = false;
    alert("Debe introducir un número");
    document.getElementById("pantalla").value = "";
  }
  return isNum;
};

/*OPERACIONES UNITARIAS*/
//Función para calcular el cuadrado de un número
const cuadrado = () => {
  if (valida()) {
    op1 = document.getElementById("pantalla");
    op1.value = op1.value ** 2;
    mostrarInfo();
  }
};

//Función para calcular el valor absoluto de un número
const absoluto = () => {
  if (valida()) {
    op1 = document.getElementById("pantalla");
    op1.value = Math.abs(op1.value);
    mostrarInfo();
  }
};

//Función para calcular el factorial de un número
const factorial = () => {
  if (valida()) {
    op1 = document.getElementById("pantalla");
    let factorial = 1;
    for (let i = 1; i <= op1.value; i++) {
      factorial *= i;
    }
    op1.value = factorial;
    mostrarInfo();
  }
};

/*OPERACIONES BINARIAS*/
//Función para guardar el primer operador y elegir la operacion
const is_signo = (signo) => {
  if (valida()) {
    //Guardamos operador
    op1 = document.getElementById("pantalla").value;
    //Vaciamos el visor
    document.getElementById("pantalla").value = "";
    //Le indicamos que la variable global obtiene el valor de la variable local
    this.signo = signo;
  }
};
//Función para operar
const operacion = () => {
  if (valida()) {
    //Guardamos el valor del segundo operador
    op2 = document.getElementById("pantalla").value;
    //Variable local para guardar el resultado
    let rdo;
    //En función del signo elegido realizará la operación indicada
    switch (this.signo) {
      case "+":
        rdo = parseFloat(op1) + parseFloat(op2);
        break;
      case "*":
        rdo = parseFloat(op1) * parseFloat(op2);
        break;
    }
    //Mostramos el resultado en pantalla
    document.getElementById("pantalla").value = rdo;
    //Y llamamos a mostrar info del número
    mostrarInfo();
  }
};

/*COMMA SEPARATED VALUES - ARRAYS*/
//Función para sumar los elementos del array
const sumatorio = () => {
  //Extraemos el valor del visor
  op1 = document.getElementById("pantalla");
  //Lo convertimos a un array
  let arr = op1.value.split(",");
  //Comprobamos que no hay letras
  let isNum = true;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      isNum = true;
    } else {
      isNum = false;
      break;
    }
  }
  if (isNum) {
    //Creamos una variable que guarde el total de la suma
    let total = 0;
    //Con un for lo recorremos para que sume todos los elementos
    for (let i = 0; i < arr.length; i++) {
      total += parseFloat(arr[i]);
    }
    //Mostramos el resultado
    document.getElementById("pantalla").value = total;
    //Llamamos al función de mostrar info
    mostrarInfo();
  } else {
    alert("Debe introducir un número");
    document.getElementById("pantalla").value = "";
  }
};

//Función para ordenar el array
const ordenar = () => {
  //Extraemos el valor del visor
  op1 = document.getElementById("pantalla");
  //Lo convertimos a un array
  let arr = op1.value.split(",");
  //Comprobamos que no hay letras
  let isNum = true;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      isNum = true;
    } else {
      isNum = false;
      break;
    }
  }
  if (isNum) {
    //Y lo ordenamos
    document.getElementById("pantalla").value = arr.sort((a, b) => a - b);
  } else {
    alert("Debe introducir un número");
    document.getElementById("pantalla").value = "";
  }
};

//Función para revertir el orden del array
const revertir = () => {
  //Extraemos el valor del visor
  op1 = document.getElementById("pantalla");
  //Lo convertimos a un array
  let arr = op1.value.split(",");
  //Comprobamos que no hay letras
  let isNum = true;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      isNum = true;
    } else {
      isNum = false;
      break;
    }
  }
  if (isNum) {
    //Comprobamos el orden que tiene
    if (arr[0] < arr[1]) {
      //El orden es ascendente - debemos hacerlo descendente
      document.getElementById("pantalla").value = arr
        .sort((a, b) => a - b)
        .reverse();
    } else {
      document.getElementById("pantalla").value = arr.sort((a, b) => a - b);
    }
  } else {
    alert("Debe introducir un número");
    document.getElementById("pantalla").value = "";
  }
};

//Función para quitar el último elemento del array
const quitar = () => {
  //Extraemos el valor del visor
  op1 = document.getElementById("pantalla");
  //Lo convertimos a un array
  let arr = op1.value.split(",");
  //Comprobamos que no hay letras
  let isNum = true;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      isNum = true;
    } else {
      isNum = false;
      break;
    }
  }
  if (isNum) {
  //Eliminamos el ultimo elemento
  arr.pop();
  //Y mostramos el resultado por pantalla
  document.getElementById("pantalla").value = arr;
  } else {
    alert("Debe introducir un número");
    document.getElementById("pantalla").value = "";
  }
};
