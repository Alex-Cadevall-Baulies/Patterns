## Construeix una aplicació que creï diversos Jugadors/es:
 - Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador.
 - L'aplicació ha de poder afegir o treure punts a cada jugador/a perquè el marcador canviï. 
 - La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable.


## app.js crida a les classes creades:
- Registra jugadors
- Sap quins jugadors estan jugant
- Guarda punts al marcador

## marcador.js conté el singleton

## joc.js:
- guarda info dels jugadors i marcador. 
- marcador es una clase que conté:
    - Patró singleton
    - marcador del joc actual
    - marcador general:
        - guarda la info de tots els jocs i jugadors.

## jugadors.js conté informació dels jugadors

# Singleton: 
- https://www.youtube.com/watch?v=C2NxMWQn85c
- https://www.freecodecamp.org/news/singleton-design-pattern-with-javascript/
- https://www.youtube.com/watch?v=7BExOvUgOwA
