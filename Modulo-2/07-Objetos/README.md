# Objetos

## Introducción
Los objetos son un tipo de dato en JavaScript, como lo son number, string, boolean, undefined... Los objetos son en cierta forma diferentes a estos porque permiten agrupar varios datos de forma estructurada. En esta sesión, veremos tanto los aspectos que los diferencian como aquellos que los asemejan.

La idea de los objetos viene del mundo real. En nuestro mundo un objeto tiene una serie de características (propiedades) y puede realizar una serie de acciones (métodos). Si pensamos en algo tan sencillo como un lápiz podremos ver que algunas de sus propiedades podrían son color de la mina, nivel de afilado, cantidad de mina restante, etc. Por otro lado sus acciones serían muy reducidas y básicamente se resumiría en una, pintar.

# Objetos Literales
Los objetos son abstracciones inspiradas en el mundo real que permiten estructurar objetos ficticios en JavaScript de forma simple usando grupos de pares de clave/valor. Podemos crear propiedades, que representan las características, y métodos, que representan las acciones que podrán llevar a cabo esos objetos.

Usamos objetos en JavaScript para crear estructuras que agrupen datos y a las que se pueda acceder de forma sencilla sin necesidad de comprender la complejidad que albergan.

          -indicamos el nombre de la variable donde guardamos el objeto, por ejemplo, geekGirl
          -el contenido del objeto irá entre llaves { }
          -dentro de las llaves ponemos parejas clave: valor, donde la clave será el nombre de la propiedad 
          y el valor puede ser de cualquier tipo de datos (cadena, número, booleano...), por ejemplo, name: 'María'
          -separamos cada pareja clave: valor con una coma ,
      
                       const geekGirl = {
                       name: 'María',
                       age: 31,
                       isMarried: false,
                      };

Como los objetos también son tipos de datos, una propiedad de un objeto podría ser también un objeto. Por ejemplo:
                       const geekGirl = {
                       name: 'María',
                       age: 31,
                       isMarried: false,
                       address: {
                       street: 'Colegiata',
                       number: 9,
                      }
                    };

Para acceder (leer) al valor de una propiedad de un objeto, podemos hacerlo de 2 formas:
              -al nombre de la variable (el nombre del objeto) le ponemos detrás un punto . y luego el nombre de la propiedad
              -al nombre de la variable (el nombre del objeto) le ponemos detrás unos corchetes [ ] y dentro el nombre 
              de la propiedad como una cadena (entre comillas)
              
                    // Muestra en la consola 'María'
                    console.log(geekGirl.name);

                    // Muestra en la consola 'María'
                    console.log(geekGirl['name']);

## Creando objetos a partir de objetos vacíos

Otra forma de crear objetos equivalente a la anterior es crear primero un objeto vacío y luego ir añadiendo las propiedades en las siguientes instrucciones.  Vamos a ver un ejemplo:

                      const geekGirl = {};
                      geekGirl.name = 'María';
                      geekGirl.age = 31;
                      geekGirl.isMarried = false;

                      // Muestra en la consola 31
                      console.log(geekGirl.age);
                      
 # Objetos JSON
 
 JSON es una sintaxis para serializar objetos, arreglos, números, cadenas, booleanos y nulos.
 
                       
                       {
                          "Nombre": "Carla",
                          "Apellido": "Gómez",
                          "Edad": 29
                      }
                      
  Documentación técnica https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON
                      
 # Localstorage
 
 Permite que los datos persistan almacenados entre las diferentes sesiones de navegación.
 
 Los datos almacenados en el localstorage no tienen fecha de expiración.
 
 En pocas palabras el localstorage es un lugar en el cual podemos guardar información. 
 
 ## El siguiente código accede al objeto localstorage actual.
 
                       localStorage.setItem('Nombre', 'Pedro');
                       
 ## La sintaxis para leer el ítem almacenado en localStorage.
 
                       let nom = localStorage.getItem('Nombre');
                       
  ## La sintaxis para eliminar el ítem almacenado en localStorage.
  
                        localStorage.removeItem('Nombre');
                        
   ## La sintaxis para eliminar todos los ítems almacenados en localStorage.
   
                        localStorage.clear();
