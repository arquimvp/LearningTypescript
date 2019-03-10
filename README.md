# LearningTypescript
    Aprende tipos de datos, funciones y objetos en typescript.

# Instrucciones:

1. Debes clonar el proyecto en tu equipo, dentro de cualquier ruta:

    git clone https://github.com/arquimvp/LearningTypescript.git

2. Navegas al proyecto con:

    cd LearningTypescript

3. Ejecutas el siguiente comando para iniciar la traspilacion de codigo, recuerda que lo unico que hace ese comando es convertir     el codigo de typescript a javascript ES5 en un archivo "app.js" dentro del mismo dorectorio, dicho archivo es al que se           hace referencia en el archivo index.html:

    tsc *.ts -w

4. Comando para abrir el index.html

    open index.html

    Comando para abrir el index.html desde windows

    start index.html

5. Recuerda que este repo fue desarrollado agregando codigo typescript por cada commit.
   El mensaje por cada commit hace referencia a lo trabajado en ese commit exclusivamente.

6. Puedes ver los commits con:

    git log --oneline

    el resultado del comando anterior es:

    18c8ead master - challenge(app): solucion de codigo en typescript
    de11580 master - challenge(app): codigo Js redefinir a typescript
    d9f0e4d master - feature(app): Declaracion de tipo funcion con constraint
    c0f6df3 master - feature(app): Declaracion de funciones con parametros rest
    8582f65 master - feature(app): Declaracion de funciones con parametros por defecto
    e7847ea master - feature(app): Declaracion de funciones con parametros opcionales
    d269025 master - feature(app): Declaracion de funciones con parametros obligatorios
    0cf6f4d master - feature(app): 2 formas de declaracion de funciones
    f4c88fe master - challenge(app): solucion en typescript
    606b08f master - challenge(app): Codigo JS, redefinir a typescript
    52027b6 master - feature(app): Uso y diferencias de null y undefined
    98d27dd master - feature(app): Uso de Aserciones de tipo. (castear o parsear)
    448d892 master - feature(app): Uso de never para excepciones y puntos criticos en nuestro programa
    b5a269d master - feature(app): Uso de void en funciones
    aa2d729 master - feature(app): Uso de enum
    a020f0e master - feature(app): Uso de tuplas
    6c41843 master - feature(app): Uso de arreglos
    1a23671 master - feature(app): Uso del tipo any
    d4dbf24 master - feature(app): Uso de Strings y el poder del backtick
    a9324c4 master - feature(app): declaracion, uso de numericos y decimales
    8cbab3a master - feature(app): uso de let, declaracion de booleanos y uso de estos
    d562fca master - feature(app): Declaracion de variables con let vs var
    14f22d2 master - feature(app): Se agrega tsconfig.json con watcher para archivos ts
    56f7546 master - feat(app): Se hace primer traspilacion sencilla

7. Con los "sha1", puedes navegar en la historia del proyecto, por ejemplo, si quieres ver como se usan 
   los enum en typescript, debes ejecutar:

    git checkout aa2d729

    Para regresar al commit mas reciente solo debes ejecutar:

    git checkout master

8. Un saludo!