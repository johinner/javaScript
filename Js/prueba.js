/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */



/*============================================================================================================================================================================================================*/
/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

const recortarCdena = (
  cadena = undefined,
  indice = undefined,
  final = undefined
) => console.info(cadena.slice(indice - 1, final));

//recortarCdena('hola mundo', 1, 4)
/*============================================================================================================================================================================================================*/
/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
     miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

const separarTexto = (string = "", divicion = undefined) =>
  console.info(string.split(divicion));

//separarTexto('hola/que/mas', '/')

/*============================================================================================================================================================================================================*/
/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

const duplicarCadena = (cadena = "", duplicacion = 0) => {
  let cadenaDuplicada = "";
  for (let i = 0; i < duplicacion; i++) cadenaDuplicada += `${cadena}\n`;

  return console.info(cadenaDuplicada);
};
//duplicarCadena('hola mundo', 3)

/*============================================================================================================================================================================================================*/
/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */
const invertirCadena = (cadena = "") => {
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : console.info(cadena.split("").reverse().join(""));
};
// invertirCadena('hola mundo')

/*============================================================================================================================================================================================================*/
/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("No ingresaste un parrafo");

  if (!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i = 0,
    contador = 0;
  // Si esta condición se evalúa como verdadera se ejecuta el siclo
  while (i !== -1) {
    //indexOf encuentra el indice de la considencia, si arraja -1 no exite
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
};
// textoEnCadena()
// textoEnCadena('lorem lorem ok m la gloria lorem', "lorem")

/*============================================================================================================================================================================================================*/
/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */

const palindromo = (palabra) => {
  if (!palabra) return console.warn("No ingresaste una palabra");

  // transformar a minuscula
  palabra = palabra.toLowerCase();
  // split('') dividi un texto a un arreglo => Metodo del String
  // reverse() revierte un arreglo => Metodo del Array
  // join('') une un arreglo => Metodo del Array
  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(
        `Si es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`
      )
    : console.info(
        `NO es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`
      );
};
 // palindromo('semaforo')
 // palindromo('salas')

/*============================================================================================================================================================================================================*/
/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */

const eliminaCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.warn("No ingresaste un texto")
    : !patron
    ? console.warn("No ingresaste un patron de caracteres")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));
// replace("") remplaza las coincidencias en una cadena
// El objeto RegExp se utiliza para hacer coincidir texto con un patrón. => Expresion Regular

//eliminaCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", '[a-z]')

/*============================================================================================================================================================================================================*/
/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */

const numeroAleatorio = () =>
  console.info(Math.round(Math.random() * 100 + 500));

//numeroAleatorio();

/*============================================================================================================================================================================================================*/
/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */

const capicuaNumero = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un numero");

  if (typeof numero !== "number")
    return console.error("No ingresaste un numero");

  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");

  return parseInt(numero) === parseInt(alReves)
    ? console.info(
        `Si es capicúa, numero original ${numero}, numero al reves ${alReves}`
      )
    : console.info(
        `NO es capicúa, numero original ${numero}, numero al reves ${alReves}`
      );
};

//capicuaNumero(123.123)

/*============================================================================================================================================================================================================*/
/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */

const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero");

  if (typeof numero !== "number")
    return console.error("El valor ingrado no es un numero");

  if (numero === 0) return console.error("El numero no puede ser negativo");

  // Math.sing si es negativo devulve -1
  if (Math.sign(numero) === -1)
    return console.error("El numero ingresado no puede ser negativo");

  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return console.info(`El factorial de ${numero} es ${factorial}`);
};

// factorial();
// factorial('cinco');
// factorial(-5);
// factorial(5)

/*============================================================================================================================================================================================================*/
/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

const numeroPrimo = (numero) => {
  let divisible = false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break; // rompe el siclo
    }
  }

  return divisible
    ? console.info(`El numero ${numero}, No es primo`)
    : console.info(`El numero ${numero}, Si es primo`);
};

//numeroPrimo(7)

/*============================================================================================================================================================================================================*/
/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */

const numeroParImpar = (numero) =>
  numero % 2 === 1 ? console.info(`Impar`) : console.info("Par");

//numeroParImpar(5)

/*============================================================================================================================================================================================================*/
/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */

const grados = (escala = undefined, grado = 0) =>
  escala === "c"
    ? console.info(` ^${grado * 1.8 + 32} Fahrenheit`)
    : escala === "f"
    ? console.info(`^${((grado - 32) * 5) / 9} Celsius`)
    : console.error("ingresa una escala valida");

//grados("f",40);

/*============================================================================================================================================================================================================*/
/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */

const convertirBinarioDecimal = (numero = undefined, base = undefined) =>
  base === 2
    ? console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
    : base === 10
    ? console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`)
    : console.error("El tipo de vase a convertir no es valido");

// convertirBinarioDecimal(100,6)
/*============================================================================================================================================================================================================*/
/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */

const descuento = (monto = undefined, descuento = undefined) =>
  monto === undefined && descuento === undefined
    ? console.error("Ingresa los datos")
    : console.info(`${monto - monto * (descuento / 100)}`);

//descuento(1000,25)
/*============================================================================================================================================================================================================*/
/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha");

  // no sea la instancia del prototipo date
  if (!(fecha instanceof Date))
    return console.error("El valor que ingresaste no es una fecha valida");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMs = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs);

  // evaluar si es numero negativo
  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} anios para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} anios, desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el anios actual ${fecha.getFullYear()}`);
};

// calcularAnios(new Date(2084,4,23))
/*============================================================================================================================================================================================================*/
/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

const contarLetras = (cadena = "") => {
  let vocales = 0,
    consonantes = 0;
  cadena = cadena.toLocaleLowerCase();

  for (let letra of cadena) {
    if (/[aeiou]/.test(letra)) vocales++;

    if (/[bcdfghjklmnpqrstvwxyz]/.test(letra)) consonantes++;
  }
  return console.info({
    cadena,
    consonantes,
    vocales,
  });
};

//contarLetras('hola mundo')
/*============================================================================================================================================================================================================*/
/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */

const validarNombre = (nombre = "") =>
  /^[A-Za-z\s]+$/g.test(nombre)
    ? console.info(`"${nombre}", es un nombre valido`)
    : console.warn(`"${nombre}", No es un nombre valido`);

//validarNombre('Johinner Madariaga')
/*============================================================================================================================================================================================================*/
/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */

const validarEmail = (email = "") =>
  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
    email
  )
    ? console.info(`"${email}", es un email valido`)
    : console.warn(`"${email}", No es un email valido`);

//validarEmail('Johinner@live.co')

/*============================================================================================================================================================================================================*/
/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

const devolverCuadrados = (arr = undefined) => {
  if (!(arr instanceof Array))
    return console.error("el valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("el arreglo esta vacio");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, No es un numero`);
  }

  const newArr = arr.map((el) => el * el);
  return console.info(
    `Arreglo original: ${arr}, \nArreglo elevado al cuadrado: ${newArr}`
  );
};

//devolverCuadrados([1,5,6])

/*============================================================================================================================================================================================================*/
/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */

const numeroMenorMayor = (arrayNumero = undefined) =>
  console.info(
    `Numero Mayor: ${Math.max(...arrayNumero)}\nNumero Menor: ${Math.min(
      ...arrayNumero
    )}`
  );

//numeroMenorMayor([3,5,63,5,42,54,2,5])
/*============================================================================================================================================================================================================*/
/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

const numerosParImpar = (arrayNumero = undefined) =>
  console.info({
    pares: arrayNumero.filter((num) => num % 2 === 0),
    impares: arrayNumero.filter((num) => num % 2 === 1),
  });

//numerosParImpar([1,2,3,4,5,6,7,8,9,0])

/*============================================================================================================================================================================================================*/
/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

const ordenNumeros = (arrayNumero = undefined) =>
  console.info({
    arrayNumero,
    ascendente: [...arrayNumero].sort((a, b) => a - b),
    descendiente: [...arrayNumero].sort((a, b) => b - a),
  });

//ordenNumeros([8,4,3,2,6,8,59,3])

/*============================================================================================================================================================================================================*/
/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */

const quitarDuplicados = (arr = undefined) =>
  console.info({
    orinal: arr,
    sinDuplicado: [...new Set(arr)],
    //sinDuplicado: arr.filter((value,index,self) => self.indexOf(value) === index)
  });

//quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true])

/*============================================================================================================================================================================================================*/
/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */

const promedio = (arr = undefined) =>
  console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      return index === arr.length - 1
        ? `El promedio de ${arr.join("+ ")} es ${total / arr.length}`
        : total;
    })
  );

//promedio([1,2,3,4,5,6,7,8,9,0]);

/*============================================================================================================================================================================================================*/
/* 27) Programa una clase llamada Pelicula.
        La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
          - Todos los datos del objeto son obligatorios.
          - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
          - Valida que el título no rebase los 100 caracteres.
          - Valida que el director no rebase los 50 caracteres.
          - Valida que el año de estreno sea un número entero de 4 dígitos.
          - Valida que el país o paises sea introducidos en forma de arreglo.
          - Valida que los géneros sean introducidos en forma de arreglo.
          - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
          - Crea un método estático que devuelva los géneros aceptados*.
          - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
          - Crea un método que devuelva toda la ficha técnica de la película.
          - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
        * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
        */
class Pelicula {
  constructor({ id, titulo, director, estreno, pais, genero, calificacion }){
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.genero = genero;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(genero);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short, Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    console.info("Los generos aceptados son los siguientes:");
    return console.table(Pelicula.listaGeneros);
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`NO has ingresado un "${propiedad}"`);

    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado, No es una cadena de texto`
      );
    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" exede el numero de caracteres permitido (${longitud})`
      );
    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`NO has ingresado un "${propiedad}"`);

    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingresado, No es un numero`
      );
    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`NO has ingresado un "${propiedad}"`);

    if (!(valor instanceof Array))
      return console.error("el valor que ingresaste no es un arreglo");

    if (valor.length === 0) return console.error("el arreglo esta vacio");

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor "${cadena}" ingresado, No es una cadena de texto`
        );
    }
    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(
          `IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minuscular, los 7 restantes numeros`
        );
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo)) {
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Anio de estreno", estreno))
      if (!/^([0-9]){4}$/.test(estreno))
        return console.error(
          `Anio de estreno ${estreno} no es valido, debe tener 4 digitos`
        );
  }

  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Genero", generos)) {
      for (let genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`${genero} No esta incluido entre la lista de generos`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("calificacion", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error(
            `La calificacion tiene que estar en un rango entre 0 y 10`
          )
        : (this.calificacion = calificacion.toFixed(1));
  }

  fichaTecnica() {
    console.info(
      `Ficha tecnica:\nTitulo:"${this.titulo}"\nDirector:"${
        this.director
      }"\nAnio:"${this.estreno}\nPais:"${this.pais.join(
        "-"
      )}"\nGenero:"${this.genero.join(",")}\nCalificacion:"${
        this.calificacion
      }"\n`
    );
  }
}

//Pelicula.generosAceptados()
const datos = []

const misPelis = [
  {
    id: "ty6213954",
    titulo: "UN MUNDO GRANDIOSO",
    director: "johinner",
    estreno: 2017,
    pais: ["colombia", "canada"],
    genero: ["War", "Western"],
    calificacion: 7.56
   },
   {
     id: "ty6213964",
     titulo: "WAOOO",
     director: "johinner",
     estreno: 2017,
     pais: ["colombia", "Brasil"],
     genero: ["Romance", "Western"],
     calificacion: 'yh'
   }
  // {
  //   id: "ty6215400",
  //   titulo: "UN MUNDO GRANDIOSO 2",
  //   director: "johinner",
  //   estreno: 2017,
  //   pais: ["colombia", "canada"],
  //   genero: ["War", "Western"],
  //   calificacion: 'iuj'
  // },
];
//misPelis.forEach(el => new Pelicula(el).fichaTecnica())
datos.unshift(new Pelicula(misPelis[0]))
datos.unshift(new Pelicula(misPelis[1]))
console.table(datos)
console.log(datos[0].calificacion)