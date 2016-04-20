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
      main_html : String()
        + '<div id="myCarousel" class="carousel slide" data-ride="carousel">'
     + '<ol class="carousel-indicators">'
       + '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
       + '<li data-target="#myCarousel" data-slide-to="1"></li>'
       + '<li data-target="#myCarousel" data-slide-to="2"></li>'
     + '</ol>'
     + '<div class="carousel-inner" role="listbox">'
       + '<div class="item active">'
         + '<img class="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide">'
         + '<div class="container">'
           + '<div class="carousel-caption">'
             + '<h1>Mastering Python Design Patterns</h1>'
             + '<p>Do you like Python 3? Are you interested in learning about how to implement your favorite Design Patterns using idiomatic Python? Give my book a try!</p>'
             + '<p><a class="btn btn-lg btn-primary" href="#" role="button">I am interested</a></p>'
           + '</div>'
         + '</div>'
       + '</div>'
       + '<div class="item">'
         + '<img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide">'
         + '<div class="container">'
           + '<div class="carousel-caption">'
             + '<h1>Another example headline.</h1>'
             + '<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>'
             + '<p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>'
           + '</div>'
         + '</div>'
       + '</div>'
       + '<div class="item">'
         + '<img class="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide">'
         + '<div class="container">'
           + '<div class="carousel-caption">'
             + '<h1>One more for good measure.</h1>'
             + '<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>'
             + '<p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>'
           + '</div>'
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
