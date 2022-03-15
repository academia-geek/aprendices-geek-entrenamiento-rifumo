## Estructuras Cíclicas

Sirven para ejecutar un mismo código un número determinado de veces. Haz esto x veces.

### Bucle for - Hacer para
Tiene la siguiente estructura:
podemos identificarlo por usar al comienzo la palabra for
después irá la configuración del bucle entre paréntesis ( ) que tiene 3 partes, separadas por punto y coma ;:
inicialización será una declaración y asignación de variable (ej: let i = 1)
condición será la condición que debe cumplirse para que se ejecute el bloque de código (ej: i < 20)
actualización será la operación que se realizará al final de cada iteración del bucle (ej: i++, que es la abreviación de i = i + 1)
al final definimos un bloque de código entre llaves { } que se va a ejecutar si se cumple la condición


        for (let i = 0; i < 20; i++) {
              console.log('Me encantan los bucles');
        }

En este ejemplo de código, hacemos aparecer 20 veces en la consola el texto Me encantan los bucles. Funciona de la siguiente forma:
Se ejecuta el código de inicialización (let i = 0)
Se comprueba que la condición se cumple (i < 20), en este caso el resultado es true
Como la condición se cumple, se ejecuta el código que hay dentro del bloque entre las llaves ({}), es decir el console.log
Se ejecuta la actualización del bucle (i++) y la variable i pasa a valer 1
Vuelta al paso 2
Cuando la variable i llega al valor de 20, la condición ya no se cumple (20 no es menor que 20), por lo tanto el bloque que contiene el console log no se ejecuta y el bucle acaba


Otro aspecto interesante de los bucles for es que dentro del bloque de código que se repite (el que va entre llaves { }) podemos usar la variable i. Por ejemplo:

        for (let i = 0; i < 20; i++) {
                console.log('Voy por la vuelta ' + i);
         }
  
          Este ejemplo hará aparecer 20 veces, en la consola, el texto:
          Voy por la vuelta 0
          Voy por la vuelta 1
          Voy por la vuelta 2
          ...
          Voy por la vuelta 19

### Bucle while - Hacer mientras
Es una estructura que repetirá un proceso durante "N" veces, donde "N" puede ser fijo o variable. Para esto, la instrucción se vale de una condición que es la que debe cumplirse para que se siga ejecutando. Cuando la condición ya no se cumple, entonces ya no se ejecuta el proceso. La forma de esta estructura es la siguiente:

    Hacer mientras <condición>
        Acción 1
        Acción 2
        .
        .
        Acción N
      
### Bucle do while - Repetir hasta
Esta es una estructura similar en algunas características al "Hacer mientras". Repite un proceso una cantidad de veces, pero a diferencia del "Hacer mientras", el "Repetir hasta" lo hace hasta que la condición se cumple y no mientras, como en el "Hacer mientras". Por otra parte, esta estructura permite realizar un proceso cuando mnos una vez, ya que la condición se evalúa al final del proceso, mientras que en el "Hacer mientras" puede ser que nunca llegue a entrar si la condición no se cumple desde un principio. La forma de la estructura es la siguiente:

     Repetir
          Acción 1
          Acción 2
          .
          .
          Acción N
     Hasta <condición>
