(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logo {\r\nheight: 30px;\r\nwidth: 30px;\r\n}\r\n\r\n#drop,#central,#barranavegacion {\r\nbackground-color: rgb(14, 20, 87);\r\ncolor: white;\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link {\r\n    color:white;\r\n}\r\n\r\n#imagen {\r\ntop: 100px;\r\nheight: 300px;\r\n}\r\n\r\n.my-6{\r\nmargin-top:90px;\r\nmargin-bottom:90px;\r\n}\r\n\r\n/*\r\nSuperheros data\r\n*/\r\n\r\n.superheroData{\r\ndisplay:none;\r\n}\r\n\r\n.superhero {\r\ntext-align: center;\r\nborder: 2px solid #000000;\r\npadding-bottom: 30px; \r\nbackground-color:#666666;\r\n}\r\n\r\n.superhero:hover{\r\n /*background-color:#484848;*/\r\n border: 50px;\r\n\r\n}\r\n\r\n.superheroData{\r\nbackground-color:#666666;\r\n}\r\n\r\n/*\r\nFooter\r\n*/\r\n\r\n.footer{\r\n    position: relative;\r\n    background-color: rgb(14, 20, 87);\r\n    color: white;\r\n    font-size: 20px;\r\n    text-align: center;\r\n   \r\n}\r\n\r\n.titleHero{\r\n    height: 100px;\r\n}\r\n\r\ndiv li{\r\ndisplay: inline-block; \r\n}\r\n\r\ndiv ul{\r\ntop: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxhQUFhO0FBQ2IsWUFBWTtDQUNYOztBQUVEO0FBQ0Esa0NBQWtDO0FBQ2xDLGFBQWE7Q0FDWjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtBQUNBLFdBQVc7QUFDWCxjQUFjO0NBQ2I7O0FBRUQ7QUFDQSxnQkFBZ0I7QUFDaEIsbUJBQW1CO0NBQ2xCOztBQUdEOztFQUVFOztBQUNGO0FBQ0EsYUFBYTtDQUNaOztBQUVEO0FBQ0EsbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQixxQkFBcUI7QUFDckIseUJBQXlCO0NBQ3hCOztBQUVEO0NBQ0MsNkJBQTZCO0NBQzdCLGFBQWE7O0NBRWI7O0FBRUQ7QUFDQSx5QkFBeUI7Q0FDeEI7O0FBRUQ7O0VBRUU7O0FBRUY7SUFDSSxtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1COztDQUV0Qjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7QUFDQSxzQkFBc0I7Q0FDckI7O0FBRUQ7QUFDQSxVQUFVO0NBQ1QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dvIHtcclxuaGVpZ2h0OiAzMHB4O1xyXG53aWR0aDogMzBweDtcclxufVxyXG5cclxuI2Ryb3AsI2NlbnRyYWwsI2JhcnJhbmF2ZWdhY2lvbiB7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMjAsIDg3KTtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuI2ltYWdlbiB7XHJcbnRvcDogMTAwcHg7XHJcbmhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5teS02e1xyXG5tYXJnaW4tdG9wOjkwcHg7XHJcbm1hcmdpbi1ib3R0b206OTBweDtcclxufVxyXG5cclxuXHJcbi8qXHJcblN1cGVyaGVyb3MgZGF0YVxyXG4qL1xyXG4uc3VwZXJoZXJvRGF0YXtcclxuZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4uc3VwZXJoZXJvIHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xyXG5wYWRkaW5nLWJvdHRvbTogMzBweDsgXHJcbmJhY2tncm91bmQtY29sb3I6IzY2NjY2NjtcclxufVxyXG5cclxuLnN1cGVyaGVybzpob3ZlcntcclxuIC8qYmFja2dyb3VuZC1jb2xvcjojNDg0ODQ4OyovXHJcbiBib3JkZXI6IDUwcHg7XHJcblxyXG59XHJcblxyXG4uc3VwZXJoZXJvRGF0YXtcclxuYmFja2dyb3VuZC1jb2xvcjojNjY2NjY2O1xyXG59XHJcblxyXG4vKlxyXG5Gb290ZXJcclxuKi9cclxuXHJcbi5mb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsIDIwLCA4Nyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG59XHJcblxyXG4udGl0bGVIZXJve1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuZGl2IGxpe1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG59XHJcblxyXG5kaXYgdWx7XHJcbnRvcDogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n        <!--Barra de navegacion-->\n        <header class=\"navbar navbar-expand-md navbar-light fixed-top\" id=\"barranavegacion\">\n            <a class=\"nav-link active\" href=\"index.html\"><img src=\"../assets/img/fantasticfour.ico\" alt=\"Logo\" class=\"d-inline-block align-top\" id=\"logo\"></a>\n            <ul class=\"navbar-nav\">\n                <!--link historia-->\n                <li class=\"nav-item font-weight-bold\">\n                    <a class=\"nav-link\" href=\"#historia\">Historia de Marvel<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <!--link personajes-->\n                <li class=\"nav-item font-weight-bold\">\n                        <a class=\"nav-link\" href=\"#personajes\">Personajes<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <!--link social-->\n                <li class=\"nav-item font-weight-bold\">\n                    <a class=\"nav-link\" href=\"#media\">Contacto</a>\n                </li>\n                <!--link web marvel-->\n                <li class=\"nav-item font-weight-bold\">\n                    <a class=\"nav-link\" href=\"https://www.marvel.com\">Marvel.com</a>\n                </li> \n            </ul>   \n        </header>\t\n        <!--Ventana central-->\n        <div class=\"container col-8 my-6 px-5 py-5 text-justify align-items-center rounded border border-dark\" id=\"central\">\n            <!--Historia-->\n            <div class=\"row text-justify px-5\" id=\"historia\"><h1 class=\"font-weight-bold\">Historia</h1>\n                <div class=\"row text-justify px-3\"><h2 class=\"font-weight-bold\">Inicios</h2>\n                    <p>Marvel Comics fue fundada por Martin Goodman en 1939, con un número constante de cambios de nombre y fracasos de lanzamiento. \n                        Originalmente fue conocida como Red Circle Comics y Atlas Comics, aunque el nombre más popular fue Timely Comics, y su primera \n                        publicación importante fue el Marvel Comics #1 (octubre de 1939), por el cual recibe su nombre actual, en el que aparecía por \n                        primera vez un superhéroe en Marvel: la primera Antorcha Humana y el villano Namor, el hombre submarino. \n                        Ambos personajes se convirtieron en grandes éxitos para la compañía protagonizando casi instantáneamente sus propias series. \n                        Otro superhéroe popular creado en esas fechas era el personaje patriótico Capitán América.<br>\n                        Durante los años 50, la compañía, como toda la industria del cómic americana, decayó fuertemente a consecuencia del final de la \n                        Segunda Guerra Mundial. En 1957 Marvel casi cerró sus puertas debido a la bancarrota de su distribuidora. Durante este tiempo la \n                        compañía se llamaba Atlas Comics y publicaba historias de monstruos con una ligera ambientación de ciencia ficción.</p>\n                </div>\n                <div class=\"row text-justify px-3\"><h2 class=\"font-weight-bold\">1960</h2>\n                    <p>A principios de los 60 la compañía intentó retornar al género de superhéroes que había sido revitalizado con gran éxito por su \n                        rival DC Comics unos años antes. Stan Lee y Jack Kirby crearon entonces Los 4 Fantásticos inspirándose en los éxitos de DC Comics y \n                        en las historias de monstruos que Atlas publicaba. Este cómic fue un éxito absoluto revitalizando la compañía que comenzó una larga \n                        lista de títulos, el más popular de ellos fue sin duda \"The Amazing Spider-Man\" (El Increible Hombre Araña) creado por Lee y Steve \n                        Ditko.</p>\n                </div>\n                <div class=\"row text-justify px-3\"><h2 class=\"font-weight-bold\">1970</h2>\n                    <p>En esta década el mercado del cómic volvió a entrar en recesión. La compañía se adaptó publicando nuevos títulos en géneros como \n                        el horror o la brujería. Marvel intentó adquirir DC pero la compra no fructificó debido a que DC quería conservar los derechos de \n                        sus personajes más populares Superman y Batman. A finales de los 70 el equipo creativo formado por el guionista Chris Claremont y \n                        el artista John Byrne relanzó uno de los antiguos títulos de Marvel, X-Men constituyendo el mayor éxito de la compañía durante esta \n                        época. A finales de los 70 los cómics empezaron a venderse en tiendas especializadas.</p>\n                </div>\n                <div class=\"row text-justify px-3\"><h2 class=\"font-weight-bold\">1980</h2>\n                    <p>En los años 80 el editor jefe de Marvel era Jim Shooter. A pesar de su controvertida personalidad, Shooter supo manejar y \"curar\" \n                        muchos de los errores en los procedimientos que sucedían en Marvel (incluyendo finales perdidos repetidamente) y dando una visión\n                        de renacimiento creativo en la empresa. Este renacimiento incluyó institucionalizar los derechos de los creadores, comenzando con \n                        la imprenta Epic para los materiales dueño - creador del año 1982, y lanzando una nueva línea de marcas (aunque infructuosas) nombradas \n                        Nuevo Universo, para conmemorar el 25º aniversario de Marvel, en 1986. Shooter fue responsable de la introducción de la compañía en \n                        nuevos y amplios crossover (Contest of Champions, Secret Wars). En 1981 Marvel adquirió el estudio de animación: DePatie-Freleng \n                        Enterprises que había creado a los famosos Looney Tunes bajo la dirección del animador Friz Freleng y su socio David H. DePatie. \n                        La compañía fue renombrada como Marvel Productions Ltd. y comenzó a producir series de animación para la televisión como G.I. Joe, \n                        Transformers e incluso los Muppet Babies de Jim Henson. En 1986 Marvel fue vendida a New World Entertainment, que en tan sólo tres \n                        años, en 1988, la volvió a vender a MacAndrews and Forbes, cuyo dueño era el ejecutivo de Revlon, Ronald Perelman. Perelman colocó a \n                        la compañía en el mercado de valores de New York y propició un gran incremento del número de títulos de la compañía. Como parte del \n                        proceso, Marvel Productions vendió su catálogo televisivo a Saban Entertainment (adquirido en el año 2001 por Disney).</p>\n                </div>\n                <div class=\"row text-justify px-3\"><h2 class=\"font-weight-bold\">1990</h2>\n                    <p>La empresa obtuvo importantes beneficios en los comienzos de la década de los 90 y todo el género del cómic se encontraba en auge \n                        tanto en Estados Unidos como en Europa. Sin embargo Perelman fue acusado de malversación y durante mucho tiempo la compañía estuvo en \n                        diferentes litígios con varios cambios de propietarios y luchas internas. Finalmente Isaac Pellmutter y Avi Arad se hicieron con el \n                        control de la compañía. Las licencias concedidas por Marvel a diferentes estudios de cine permitieron revitalizar la compañía con éxitos \n                        como Spider-Man o X-Men. Artísticamente esta época estuvo caracterizada por las numerosas series y crossovers, líneas argumentales \n                        alternativas y lanzamientos de miniseries con éxito diverso.</p>\n                </div>\n                <div class=\"row text-justify px-3\"><h2 class=\"font-weight-bold\">2000</h2>\n                    <p>Con el nuevo milenio, Marvel Comics escapó de la bancarrota y de nuevo comenzó a diversificar sus ofertas. En el 2001, Marvel dejó el \n                        Código de Autorización de los Comics y estableció su propio Sistema de Escalas Marvel para cómics. El primer título de esta nueva era fue \n                        X-Force #119 (Oct. 2001). Esto trajo consigo nuevos formatos de impresión, tales como MAX, una línea dedicada para los lectores maduros, \n                        y Marvel Age, desarrollada para audiencias más jóvenes. Además de esto, está el altamente exitoso formato de Ultimate Marvel, el cual \n                        permitió a Marvel revitalizar a sus títulos con más ventas mediante la renovación de sus mayores héroes y villanos para que fueran \n                        accesibles a una nueva generación de lectores. Esta nueva versión se desarrolla en un universo que es paralelo al universo donde se \n                        desarrolla la \"continuidad normal\" de Marvel, permitiendo a los guionistas y dibujantes libertad para redefinir historias y caracteres de \n                        los personajes, de manera que todos estos cambios no afecten a la continuidad establecida. De esta manera ha podido captar una gran \n                        afluencia de nuevos lectores que no habán leído comics anteriormente pero si estaban familiarizados con los personajes a través de las \n                        películas y las series de televisión. Marvel también ha mejorado su departamento de novela gráfica, estableciendo una gran presencia en \n                        las librerías. Stan Lee, que actualmente no ocupa ningún cargo directivo excepto el de \"Presidente Emérito\", permanece como la cara \n                        pública de Marvel. En 2002, Stan Lee demandó una parte de los beneficios proporcionados por las películas y la comercialización, \n                        basándose en un contrato entre él y Marvel que data de finales de los 90; de acuerdo con los documentos del juicio, Marvel ha usado \n                        \"Hollywood accounting\" para declarar que esos proyectos no generaron beneficios. Marvel Comics Entertainment (División Filmográfica \n                        de Marvel) continúa en la bolsa de Nueva York como MVL. Algunos personajes e historias se han convertido en películas de franquicia, \n                        el gran exponente viene siendo las películas de los X-Men, empezada en 2000, y la serie de Spiderman, comenzada en 2002. En 2006, \n                        Marvel creó un crossover llamado \"Civil War\" estableciendo en el universo Marvel un registro de superhéroes, provocando un cisma político \n                        y ético entre los superhéroes. Además ese año, Marvel creó su propia wiki. La compañía lanzó una iniciativa online a finales de \n                        2007 llamada \"Marvel Digital Comics Unlimited\", un archivo digital de 2500 comics editados disponibles para su visualización, a través \n                        de una subscripcion anual o mensual. Marvel permanece como una de las editoriales fundamentales del cómic mundial a pesar de la reducción \n                        del mercado norteamericano de cómics. La compañía adquiere enorme fuerza fuera de los círculos de historietas mediante las adaptaciones \n                        al cine de personajes populares, como X-Men, Spider-Man, Blade, Hulk, The Punisher, Ghost Rider, Daredevil, Elektra, Iron-Man o \n                        Los 4 Fantásticos entre otros personajes. El 31 de agosto del 2009, la compañía Disney (también dueña de la cadena estadounidense ABC) \n                        compró por 4.000 millones de dólares la editorial Marvel, y sus más de 5.000 personajes creados a lo largo de la editorial. El maximo \n                        responsable ejecutivo de Disney, Robert Iger, anunció \"que dará lugar a expansiones de Marvel\" y que \"veían una gran oportunidad para \n                        crecimiento de la franquicia a largo plazo\".</p>\n                </div>\n            </div>\n            <!--Personajes-->\n            <div class=\"row text-justify px-5\" id=\"personajes\"><h1 class=\"font-weight-bold\">Personajes</h1>\n                <div class=\"container\">\n                    <!-- Contenedor con imagenes -->\n                    <div class=\"row\">\n                        <div class=\"col-3 superhero \" id=\"fantastic\" >\n                            <div class=\"container titleHero\"><h2 class=\"text-center\">Mr Fantastico</h2></div>\n                            <img src=\"../assets/img/fantastic.jpg\" class=\"container\" alt=\"fantastic\">\n                        </div>\n                        <div class=\"col-3 superhero \" id=\"invisible\" >\n                            <div class=\"container titleHero\"><h2 class=\"text-center\">Mujer invisible</h2></div>\n                            <img src=\"../assets/img/invisible.jpg\" class=\"container\" alt=\"invisible\">\n                        </div>\n                        <div class=\"col-3  superhero\" id=\"torch\" >\n                            <div class=\"container titleHero\"><h2 class=\"text-center\">Antorcha humana</h2></div>\n                            <img src=\"../assets/img/torch.jpg\" class=\"container\" alt=\"torch\">\n                        </div>\n                        <div class=\"col-3  superhero\" id=\"thing\" >\n                            <div class=\"container titleHero\"><h2 class=\"text-center\">La cosa</h2></div>\n                            <img src=\"../assets/img/thing.jpg\" class=\"container\" alt=\"thing\">\n                        </div>\n                    </div>\n                    <div class=\"row\"> <!--Parte desplegable-->\n                        <div class=\"col-12 superheroData \" id=\"thingData\" >\n                            <h2 id=\"thingName\">Nombre: </h2>\n                            <p id=\"thingPowers\">Poderes: </p>\n                            <p id=\"thingHistory\">Historia: </p>\n                        </div>\n                        <div class=\"col-12 superheroData \" id=\"torchData\" >\n                            <h2 id=\"torchName\">Nombre: </h2>\n                            <p id=\"torchPowers\">Poderes: </p>\n                            <p id=\"torchHistory\">Historia: </p>\n                        </div>\n                        <div class=\"col-12 superheroData \" id=\"invisibleData\" >\n                            <h2 id=\"invisibleName\">Nombre: </h2>\n                            <p id=\"invisiblePowers\">Poderes: </p>\n                            <p id=\"invisibleHistory\">Historia: </p>\n                        </div>\n                        <div class=\"col-12 superheroData\" id=\"fantasticData\" >\n                            <h2 id=\"fantasticName\">Nombre: </h2>\n                            <p id=\"fantasticPowers\">Poderes: </p>\n                            <p id=\"fantasticHistory\">Historia: </p>\n                        </div>   \n                    </div>\n                </div>\n            </div>\n        </div>\n    <!-- Pie de página -->\n    \n\t<div class=\"footer\" id=\"media\">\n        <ul class=\"menu-social\">\n            <li class=\"social-item\">Síguenos en:</li>\n            <li class=\"social-item\"><a href=\"https://twitter.com/marvel\" target=\"_blank\"><span class=\"screen-reader-text\"><img src=\"../assets/img/twitter.png\" id=\"logo\" alt=\"Logo\"></span></a></li>\n            <li class=\"social-item\"><a href=\"https://facebook.com/Marvel/\" target=\"_blank\"><span class=\"screen-reader-text\"><img src=\"../assets/img/facebook.jpg\" id=\"logo\" alt=\"Logo\"></span></a></li>\n            <li class=\"social-item\"><a href=\"https://www.youtube.com/user/marveles/sharer.php?u=http://localhost:8383/Proyecto%20Marvel/index.html\" target=\"_blank\"><span class=\"screen-reader-text\"><img src=\"../assets/img/youtube.png\" id=\"logo\" alt=\"Logo\"></span></a></li>\n            <li class=\"social-item\"><a href=\"https://www.instagram.com/marvel/\" target=\"_blank\"><span class=\"screen-reader-text\"><img src=\"../assets/img/instagram.jpg\" id=\"logo\" alt=\"Logo\"></span></a></li>\n            <li class=\"social-item\">© Copyright Marvel</li>\n        </ul>\n    </div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-marvel';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Usuario\Desktop\angular-marvel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map