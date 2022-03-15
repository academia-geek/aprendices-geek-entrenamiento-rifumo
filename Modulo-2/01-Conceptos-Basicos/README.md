
# Conceptos básicos de programación

## ¿Qué es un algoritmo?
>Un algoritmo es una secuencia de pasos lógicos y ordenados con las cuales le damos solución a un problema determinado.

***Las características de los algoritmos***
>1. Un algoritmo debe ser preciso e indicar el orden de realización de cada paso.
 2. Un algoritmo debe estar definido. Si se sigue el algoritmo dos veces, se debe obtener el mismo resultado cada vez.
 3. Un algoritmo debe ser finito. Si se sigue el algoritmo. Se debe terminar en algún momento, o sea debe tener un número finito de pasos.

~~~
Ejemplo de algoritmos 
Un cliente llaga a una entidad bancaria para realizar una consignación, el cajero le pide el número de
la cuenta y el dinero a consignar,verifica que la cuenta si existe, si la cuenta es valida se hace la consignación
(al saldo le aumenta el dinero recibido) de lo contrario devuelve el dinero.
1. Inicio
2. pedir numero de la cuenta y el dinero
3. si la cuenta es valida realice el paso 4 de lo contrario siga en el paso 6
4. saldo = saldo +dinero
5.  ir a 7
6. devolver el dinero
7. terminar`
~~~

## Declaración de variables
Los datos son una parte muy importante en un algoritmo, pues son ellos el punto de partida y son ellos quienes sufren las transformaciones que darán los resultados deseados. Por esta razón el algoritmo debe guardar los datos en un sitio donde los pueda  leer  y modificar cada vez que lo requiera. los sitios donde el algoritmo guarda los datos los llamaremos ESPACIOS DE MEMORIA.

***Variables***
>En programación, las variables son espacios reservados en la memoria que, como su nombre indica, pueden cambiar de contenido a lo largo de la ejecución de un programa. En ellas almacenamos algún tipo de dato

***Constantes***
>Una constante es un valor que no puede ser alterado/modificado durante la ejecución de un programa, únicamente puede ser leído

## Operadores lógicos

***Operadores lógicos***
>Los operadores lógicos nos proporcionan un resultado a partir de que se cumpla o no una cierta condición, producen un resultado booleano, y sus operandos son también valores lógicos o asimilables a ellos (los valores numéricos son asimilados a verdadero o falso según su valor sea cero o distinto de cero).

| Aritméticos      | Relacionales     | Lógicos | De asignación                  |
| ---------------- | -------------    | ------- | ------------------------------ |
| + Suma           | > Mayor que      | && Y    |  = Asignación                  |
| - Resta          | < Menor que      | ! No    | -= Asignación y Resta          |
| * Multiplicación | >= Mayor o igual |         | += Asignación y Suma           |
| / División       | <= Menir o igual |         | *= Asignación y Multiplicación |
| % Modulo         | != Diferente     |         | /= Asignación y División       |
| ++ Incremento    | == Igual         |         | %= Asignación y Modulo         |
| -- Decremento    |                  |         |                                |

### Ejemplos
EJERCICIO
Dadas las variables de tipo int con valores A = 5, B = 3, C = -12 indicar si la evaluación de estas expresiones daría como resultado verdadero o falso:
a) A > 3 verdadero     b) A > C  verdadero          c) A < C Falso

## ¿Qué es JavaScript?
JavaScript, a diferencia de HTML y CSS, sí que es un lenguaje de programación. Este lenguaje nos permite dar instrucciones al ordenador, en este caso al navegador web, para explicarle cómo debe mostrar nuestra página y que debe hacer en qué situación (si se pulsa un botón, si se rellena un campo, si pulsamos un enlace, etc.)

JavaScript en su día fue creado para realizar validaciones sobre datos en un formulario, pero ese tiempo quedó ya muy atrás. Hoy en día es uno de los lenguajes más populares y gran parte de ese mérito se debe a que es el lenguaje de la web, es decir, es el único lenguaje de programación que entienden los navegadores (debemos recordar que HTML y CSS no son lenguajes de programación). Desde su inicio se ha expandido y sus fronteras han ido más allá de la web hasta llegar al punto en el que se utiliza JavaScript para programar aplicaciones para ordenador, servidores, robots e incluso proyectos espaciales llevados a cabo por la NASA.

## Comando básicos a usar en JavaScript
- Let : Variable 
- const : Constante
- Number() : Convierte texto a número
- prompt() : Ventana emergente para ingresar datos.
- document.write(): Muestra información en el archivo index.html
- alert() :Ventana emergente en el navegador
- console.log() : Imprime en consola
- parseFloat(): convierte texto a número flotante
- parseInt() : convierte texto a número entero

***Tipos de consolas***
- console.log(): el más usado por excelencia
Para mensajes generales de registro de información. Es posible imprimir varios valores separados por comas.
- console.warn(): Muestra un mensaje de advertencia.
- console.info(): Muestra un mensaje de información.
- console.error(): Muestra un mensaje de error.

***scopes***

Se refiere al alcance de una variable

***Diferencia entre let y const***

*let* permite actualizar el valor de una variable y *const* no lo permite
