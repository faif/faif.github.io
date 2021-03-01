/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $, spa */

spa.carousel = (function () {
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {
      speed_interval : 12000,
      main_html : String()
        + '<div id="myCarousel" class="carousel slide" data-ride="carousel">'
     + '<ol class="carousel-indicators">'
       + '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
       + '<li data-target="#myCarousel" data-slide-to="1"></li>'
     + '</ol>'
     + '<div class="carousel-inner" role="listbox">'
       + '<div class="item active">'
         + '<img class="first-slide">'
         + '<div class="container">'
           + '<div class="carousel-caption">'           
             + '<h1>Hello <code>world</code> :)</h1>'
             + '<p>I am Sakis, a Software Engineer living in The Netherlands. I like functional programming (Scala, Clojure, Swift) and high-level'
             + ' languages (Python, Prolog, JavaScript) but if a project requires it I can also write code in more verbose languages (C++, Java)</p>'
             + '<p><a class="btn btn-lg btn-primary" href="#about" role="button">More about me</a></p>'
           + '</div>'
         + '</div>'
       + '</div>'
       + '<div class="item">'
         + '<img class="second-slide">'
         + '<div class="container">'
           + '<div class="carousel-caption">'
             + '<h1>Mastering Python Design Patterns</h1>'
             + '<p>Do you like Python 3? Are you interested in learning about how to implement your favorite Design Patterns using idiomatic Python? Give my book a try!</p>'
             + '<p><a class="btn btn-lg btn-primary" href="https://www.packtpub.com/application-development/mastering-python-design-patterns" role="button">I am interested</a></p>'
           + '</div>'
         + '</div>'
       + '</div>'
       + '<div class="item">'
         + '<img class="second-slide">'
         + '<div class="container">'
           + '<div class="carousel-caption">'
             + '<h1>A wise man once said...</h1>'
             + '<p>γνῶθι σαυτόν (know thyself) -- Thales of Miletus (624 - 546 BC)</p>'
             + '<p><a class="btn btn-lg btn-primary" href="https://en.wikipedia.org/wiki/Know_thyself">About this quote</a></p>'
           + '</div>'
         + '</div>'
       + '</div>'       

     + '<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">'
       + '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'
       + '<span class="sr-only">Previous</span>'
     + '</a>'
     + '<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">'
       + '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'
       + '<span class="sr-only">Next</span>'
     + '</a>'
   + '</div>',
      settable_map : {}
    },
    stateMap  = { $container : null },
 
    configModule, initModule
    ;
  //----------------- END MODULE SCOPE VARIABLES ---------------

  //------------------- BEGIN UTILITY METHODS ------------------
  //-------------------- END UTILITY METHODS -------------------

  //--------------------- BEGIN DOM METHODS --------------------
  //---------------------- END DOM METHODS ---------------------

  //------------------- BEGIN EVENT HANDLERS -------------------
  //-------------------- END EVENT HANDLERS --------------------

  //------------------- BEGIN PUBLIC METHODS -------------------
  // Begin public method /configModule/
  // Purpose    : Adjust configuration of allowed keys
  // Arguments  : A map of settable keys and values
  // Settings   :
  //   * configMap.settable_map declares allowed keys
  // Returns    : true
  // Throws     : none
  //
  configModule = function ( input_map ) {
    return true;
  };
  // End public method /configModule/

  // Begin public method /initModule/
  // Purpose    : Initializes module
  // Arguments  :
  //  * $container the jquery element used by this feature
  // Returns    : true
  // Throws     : none
  //
  initModule = function ( $container ) {
    $container.html( configMap.main_html );
    stateMap.$container = $container;
    $('.carousel').carousel({ interval: configMap.speed_interval });
    return true;
  };
  // End public method /initModule/

  // return public methods
  return {
    configModule : configModule,
    initModule   : initModule
  };
  //------------------- END PUBLIC METHODS ---------------------
}());
