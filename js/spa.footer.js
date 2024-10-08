/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $, spa */

spa.footer = (function () {
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {
      main_html : String()
      + '<div class="container">'
      + '<footer>'
      +   '<p><a href="https://github.com/faif"><img src="graphics/github.png" height="64" width="64"/></a>&nbsp;&nbsp;'
      +       '<a href="https://x.com/SKasampalis"><img src="graphics/x-logo-black.png" height="64" width="64"/></a>&nbsp;&nbsp;'
      +       '<a href="https://www.linkedin.com/in/sakiskasampalis"><img src="graphics/linkedin.png" height="64" width="64"/></a>'      
      +       '<div class="col-md-12 col-md-offset-4">&copy; ' + new Date().getFullYear() + ' Sakis Kasampalis'
      +       '</div>'
      +       '<br />'
      +       '<div class="col-md-12 col-md-offset-2">This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">'
      +       'Creative Commons Attribution-ShareAlike 4.0 International License</a>'
      +       '</div>'
      +   '</p>'
      + '</footer>'
      + '</div>'      ,
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
