#  Instrucciones básicas MarkDown
~~~
## Título
### Subtítulo
Este es un ejemplo de texto que da entrada a una lista genérica de elementos:

- Elemento 1
- Elemento 2
- Elemento 3

Este es un ejemplo de texto que da entrada a una lista numerada:

1. Elemento 1
2. Elemento 2
3. Elemento 3

Al texto en Markdown puedes añadirle formato como **negrita** o *cursiva* de una manera muy sencilla. 
~~~

## Encabezados

># H1
>## H2
>### H3
>#### H4
>##### H5
>###### H6

***Cursiva***

|   MarkDown   | Resultado    |
| ----------   | ----------   |
| `*cursiva*`  | *cursiva*    |
| `_cursiva_`  | _cursiva_    |
| `**negrita**`| **negrita**  |
| `__negrita__`| __negrita__  |
 
***Videos***

Las etiquetas de imagen que se vinculan a archivos con una extensión de video se convierten automáticamente en un reproductor de video. Las extensiones de vídeo válidas son .mp4, .m4v, .mov, .webm, y .ogv:
![Sample Video](img/markdown_video.mp4)

***Listas de tareas***

Para crear una lista de tareas, introduce los elementos de la lista con un caracter de espacio regular, seguido de [ ]. Para marcar una tarea como completada, utiliza [x].
- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull reques


***Resaltar sintaxis de código***
Puedes agregar un identificador opcional de idioma para habilitar el resaltado de la sintaxis en tu bloque de código cercado.

Por ejemplo, para resaltar la sintaxis del código Ruby:

| ` ```lenguaje <codigo>   ``` `|  ```codigo  ```  |

Ejemplo;

|` ```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
puts markdown.to_html``` `|

 ```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
puts markdown.to_html
```
