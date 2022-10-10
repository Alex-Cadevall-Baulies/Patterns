## Pattern - Observer
Escriu una aplicació que creï diferents objectes Usuari/ària. L'aplicació podrà crear diferents Temes i subscriure els usuaris/es a ells. Quan un Usuari/ària afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema. També ho mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran el missatge). Crea un Tema amb un Usuari/ària i un altre amb dos i mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul events.

(https://www.youtube.com/watch?v=45TeJEmcqk8)

## Components:
- app.js:
    - crea objecte Usuari
    - crea temes
    - subscriu usuaris als temes (topics)
- usuaris.js:
    - conté classe usuaris
- temes.js:
    - conté classe temes (topics)

Si [usuari] envia missatge al [tema] consola rep una [alerta]
Els [usuaris] subscrits al mateix [tema] també rebrán [alerta]

* 2 temes: Tema 1 [1_usuari], Tema 2 [2_usuaris]
* Utilitza módul events (https://www.w3schools.com/nodejs/nodejs_events.asp)
 
## Funcions:
- funció creació d'usuari [X]
    - usuari x registrat!
- funció creació tema [X]
    - Tema x iniciat
- funció subscripció []
    - Felicitats x, t'has subscrit a x tema
- funció enviar missatge []
    - Missatge x enviat correctament!
- funció alerta missatge al tema []
    - Nou missatge rebur al tema x
- funció rebre missatge si estas subscrit []
    - Hey x, x persona ha enviat x missatge a x tema