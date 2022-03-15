# Arreglos

Los arrays, también llamados arreglos o listas, nos permiten guardar una lista ordenada de datos en JavaScript. Algunos ejemplos: una lista de espera de un hospital, los objetos de una cesta de la compra, los usuarios que han dado like a nuestra foto, etc.

Array con la lista de espera de los pacientes de un hospital

                    [
                      'Manuela Eufemia',
                      'Benigna Imelda',
                      'Isaías Paquito',
                      'Ximena Adán',
                      'Nicolás Emiliana'
                    ];
        
## ¿En qué casos se utilizan?
Si pensamos en una web, la mayoría de los datos vienen en una lista (solo hace falta recordar la de uls y lis que hemos puesto hasta ahora). Algunas de las aplicaciones más típicas de los arrays son:

                  - los resultados de búsqueda
                  - la lista de coordenadas de un mapa
                  - los artículos de un carrito de la compra
                  - las tareas de una lista de tareas
                  - los contactos de una lista de contactos.
                
Todos estos ejemplos anteriores se suelen almacenar en arrays para poderlos modificar (por ejemplo ordenar por orden alfabético o añadir un nuevo elemento), trabajar con ellos de forma sencilla y mostrarlos en nuestra web.

Un array es la estructura que utilizamos en JavaScript para almacenar listas de datos ordenados.

Un array puede contener cualquier tipo de dato (string, number, boolean, object incluso otros arrays). De hecho, un mismo array puede contener datos de distinto tipo mezclados, aunque es algo poco recomendable.

Cada elemento dentro de un array irá asociado a un índice, ese índice nos permitirá obtener el dato de una determinada posición del array o modificarlo. Un dato importante a tener en cuenta es que el índice de los arrays empieza por el número 0, por lo que el primer elemento tendrá índice 0, el segundo tendrá 1, el tercero 2 y así sucesivamente.

Array donde el orden es importante

                const weekdays = [
                  'Lunes',
                  'Martes',
                  'Miércoles',
                  'Jueves',
                  'Viernes',
                  'Sábado',
                  'Domingo'
                ];
                
En este ejemplo, 'Lunes' está en la posición 0 del array, y 'Domingo' en la posición 6.

NOTA: Por lo general es poco recomendable mezclar varios datos diferentes en un array, en esos casos es mejor usar un objeto.

[Documentación técnica Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Operaciones habituales con los array

 ### Crear un array
 
              let animal = ["Perro", "Gato"]
              console.log(animal.length)
              //2

 ### Acceder a un elemento mediante su índice
       
              let primero = animal[0]
              // Perro

              let ultimo = animal[frutas.length - 1]
              // Gato
 
  ### Recorrer un Array
              
              animal.forEach(function(elemento, indice, array) {
              console.log(elemento, indice);
              })
              // Perro 0
              // Gato 1
              
  ### Añadir un elemento al final de un Array
   
             let nuevaLongitud = animal.push('Caballo') // Añade "Caballo" al final
             // ["Perro", "Gato", "Caballo"]   
  
 ### Eliminar el último elemento de un Array
 
             let ultimo = animal.pop() // Elimina "Caballo" del final
            // ["Perro", "Gato"]
          
 ### Añadir un elemento al principio de un Array

             let nuevaLongitud = animal.unshift('Conejo') // Añade "Conejo" al inicio
            // ["Conejo" ,"Perro", "Gato"]
          
 ### Eliminar el primer elemento de un Array
 
             let primero = animal.shift() // Elimina "Conejo" del inicio
            // ["Perro", "Gato"]
  
 ### Encontrar el índice de un elemento del Array
 
               animal.push('Conejo')
              // ["Perro", "Gato", "Conejo"]

              let pos = animal.indexOf('Gato') // (pos) es la posición
              // 1
              
   ### Eliminar un único elemento mediante su posición
   
               let elementoEliminado = animal.splice(pos, 1)
                // ["Perro", "Conejo"]
                
  ## Función foreach()
  
    Ejecuta la función indicada una vez por cada elemento del array.

                  const animal = ['Perro', 'Gato', 'Conejo'];

                  animal.forEach(element => console.log(element));

                  // Perro
                  // Gato
                  // Conejo
                  
   ## Función map()
   
   Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
   
                 
                  let array = [1, 2, 3, 4, 5];
                  let arrayCuadrado = array.map(function(a){
                      return a*a;
                  });
                  console.log(arrayCuadrado);
                  //[1, 4, 9, 16, 25]

# Arreglos JSON

              [
                {
                  "Nombre": "Carla",
                  "Apellido": "Gómez",
                  "Edad": 29
                },
                  {
                  "Nombre": "Pedro",
                  "Apellido": "Pérez",
                  "Edad": 22
                }
              ]
              
[Documentación técnica](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON)

# Desestructuración

Es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables

### Arreglos
                  let nombreCompleto = ['Carla','Gómez'];

                  let [nombre,apellido] = nombreCompleto;

                  console.log(nombre); 
                  console.log(apellido);

                  //Carla
                  //Gómez


### Objetos 

                  let producto = {
                    id: '3001CF47',
                    nombre: 'Café',
                    precio: 8500
                  };

                  let { id, nombre, precio } = producto;

                  console.log(id);  
                  console.log(nombre); 
                  console.log(precio); 

                  //3001CF47
                  //Café
                  //8500  
                  
- [Documentación técnica](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

# spread and Rest operators

- [spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [rest](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters)

Permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos o elementos son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave son esperados.

### Arreglos

                 const numeros = [1,2,3,4,5,6,7];

                 const masNumeros = [...numeros,8,9,10];

                 console.log(masNumeros);

                 //[1,2,3,4,5,6,7,8,9,10]
                 
### Objetos 


                  const perro = {
                      nombre: 'Nerón',
                      edad: 7,
                   }

                   const duenioPerro = {...perro, duenio: 'Carlos'};

                   console.log(duenioPerro);
                   
                   //  {nombre: "Nerón", edad: 7, duenio: "Carlos"}

- [Documentación técnica](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax) 
