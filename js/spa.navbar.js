/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $, spa */

spa.navbar = (function () {
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {
      main_html : String()
     + '<div class="navbar-wrapper">'
      + '<div class="container">'

       + '<nav class="navbar navbar-default navbar-static-top">'
         + '<div class="container">'
           + '<div class="navbar-header">'
             + '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">'
               + '<span class="sr-only">Toggle navigation</span>'
               + '<span class="icon-bar"></span>'
               + '<span class="icon-bar"></span>'
               + '<span class="icon-bar"></span>'
             + '</button>'
             + '<span class="navbar-brand"><img alt="Home" src="graphics/logo.png"/></span>'
           + '</div>'
           + '<div id="navbar" class="navbar-collapse collapse">'
             + '<ul class="nav navbar-nav">'
               + '<li><a href="files/cv.pdf">CV</a></li>'
               + '<li><a href="https://sakiskasampalis.blogspot.nl">Blog</a></li>'
               + '<li><a href="#portfolio">Portfolio</a></li>'
               + '<li><a href="#contact">Contact</a></li>'
             + '</ul>'
           + '</div>'
         + '</div>'
       + '</nav>'

     + '</div>'
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
  initModule = function ( $container) {
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
