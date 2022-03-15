# Funciones

También llamados objetos de primera clase. Una función es un bloque de código que definimos una vez y lo reutilizamos las veces que queramos; un conjunto de instrucciones a las que podemos pasar diferentes datos para que nos devuelva resultados distintos.

Las funciones son muy útiles a la hora de crear un código único para usarlo en distintas partes de nuestro programa. El beneficio de esto es que si en el futuro queremos modificar algo de ese código lo haremos en un único sitio aunque se utilice en decenas de sitios diferentes. Las funciones se ejecutan en distintos momentos y con distintas características gracias a los parámetros.

Otra de las ventajas de las funciones es que devuelven un valor, es decir, realizan una operación y pueden devolver un dato. Ese dato podemos asignárselo a una variable o usarlo dentro de otra operación. O incluso podemos prescindir de él si no nos interesa para nada.

Las funciones son una forma de agrupar código que vamos a usar varias veces permitiéndonos además, pasar diferentes valores para obtener diferentes resultados.

### ¿En qué casos se utiliza?

Por ejemplo, en los siguientes casos:

      * Si tenemos un código que convierte la primera letra de un texto a mayúsculas y vamos a usar 
      ese código en varias partes de nuestro programa, creamos una función y ejecutamos la función en cada uno 
      de los sitios necesarios
      * Si queremos añadir varias clases a diferentes elementos HTML en función de la medida de la página web 
      podemos crear una función y utilizarla en cada uno de ellos
      * Si queremos enviar datos a un servidor, la mayoría de las veces es muy parecido y sólo cambian unos datos. 
      Podríamos hacer una función y reutilizarla y usar distintos datos en cada una mediante los parámetros de 
      la función (que veremos durante esta sesión).
      
 ## Tipos de funciones
  ### Función sin retorno
  
 <img src="https://storage.googleapis.com/academia-geek-general-bucket/modulo-2/modulo_2_img_2.png" alt="" width="450" height="180"/>
 
  ### Función con retorno
     
 <img src="https://storage.googleapis.com/academia-geek-general-bucket/modulo-2/modulo_2_img_3.png" alt="" width="450" height="180"/>
   
  ### Asignar la función a una variable
  
<img src="https://storage.googleapis.com/academia-geek-general-bucket/modulo-2/modulo_2_img_4.png" alt="" width="250" height="100"/>
   
  ### Función Anónima

<img src="https://storage.googleapis.com/academia-geek-general-bucket/modulo-2/modulo_2_img_5.png" alt="" width="500" height="150"/>
   
  ### Función flecha o arrow functions
  
<img src="https://storage.googleapis.com/academia-geek-general-bucket/modulo-2/modulo_2_img_6.png" alt="" width="500" height="150"/>


# Seleccionar un elemento

En Javascript podemos seleccionar un elemento de varias formas:

     1. Por su Id:
        Accedemos directamente al elemento deseado por su id única
         
        let elem = document.getElementById('id_del_elemento');
     
     2. Por su clase:
        Obtenermos un array de elementos con esa misma clase
        
        let elem = document.getElementsByClassName('clase_del_elemento');
     
     3. Por su etiqueta:
        Obtenemos un array de elementos con esa misma etiqueta
        
        let elem = document.getElementsByTagName('etiqueta_del_elemento');

## document.getElementById()

Permite obtener la referencia a un elemento de la página mediante el id del dicho elemento.

### Propiedades
 1. innerHTML: Cambiar contenido
 2. style.fontSize: Cambiar fuente
 3. Style.display: Ocultar elementos

## document-querySelector()

Esta función devuelve el primer elemento que coincide con un selector o selectores css especificados en el documento

       let elem = document.querySelector('.miClase');
       let elem1 = document.querySelector('#miId');
       
## document-querySelectorAll()

Esta función evuelve todos los elementos del documento que coinciden con un selector o selectores css especificados  
 
      let elem = document.querySelectorAll('.miClase');

