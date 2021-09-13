Vježba 4.XY

Trajanje: cca 45min (do 21:00)


NE PREBACIVATI build/ U src/, ta mapa nam je rezultat build procesa i nema veze s izvornim kodom aplikacije.


1. U vaš example project dodajte mapu "src/". U mapu stavite sve skripte koje se uključuju u index.js. File index.js ostaje gdje je (u rootu projektne mape). Popravite i putanje za require().


2. Kreirajte još jedan modul koji će povući sve žute Pokemone sa PokeAPI i ispisati ih u listu. Modul treba exportati funkciju printYellowPokemon. index.js treba pozvati tu funkciju da bi se pokemoni prikazali. (možete koristiti kod iz prethodnih vježbi).


https://pokeapi.co/api/v2/pokemon-color/yellow


3. Deployjajte na Netlify tako što pushate na master branch.


BONUS:

Umjesto pushanja na master branch, prije početka vježbe kreirajte novi branch (npr. pokemon). Razvijte rješenje u novom branchu i pushajte ga na repozitorij. Mergeajte ga u master preko pull requesta.


SAVJET:

Napravite si watch skriptu "webpack --config webpack.config.js --watch"

Pokrenite skriptu dok radite

Kada završite s radom i spremni ste commitat, morate izaći van iz skripte u terminalu sa CTRL+C


Tko riješi neka zaljepi u chat link na svoju stranicu :)

# DZ: (dodati scss i compilati s gulpom)

- koristiti gulp da bi buildali sass; dodati scriptu za buildanje sassa
u package.json dodati task gulp sass (srcipts pozovi webpack i gulp-sass)
- proučiti kako pozvati webpack kroz gulp tako da gulp i dalje bude task runner, a webpack posluži kao jedan od alata koje gulp koristi u svom build procesu; proučiti načine na koje nam gulp može pomoći buildati skripte sa webpackom i asseste sa sassom s time da ćemo možda morati pristupati malo drugačije kod watcha fileova kad je u pitanju gulp

- podići druge repositorije na Netlify; parcijalni ispit iz JS-a podići na Netlify, ili to do aplikaciju itd.
