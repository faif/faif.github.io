/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $, spa */

spa.marketing = (function () {
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {
      main_html : String()
      + '<div class="container marketing">'
     + '<div class="row">'
       + '<div class="col-lg-4">'
         + '<img class="img-circle" src="graphics/reading.png" alt="Creative reading" width="140" height="140"/>'
         + '<h2>A Feast for Crows</h2>'
         + '<p>After centuries of bitter strife, the seven powers dividing the land have beaten one another into an uneasy truce. But it\'s not long before the survivors, outlaws, renegades, and carrion eaters of the Seven Kingdoms gather.</p>'
         + '<p><a class="btn btn-default" href="https://www.goodreads.com/book/show/13497.A_Feast_for_Crows" role="button">View details &raquo;</a></p>'
       + '</div>'
       + '<div class="col-lg-4">'
         + '<img class="img-circle" src="graphics/rtfm.png" alt="Technical reading" width="140" height="140">'
         + '<h2>iOS 9 SDK Development</h2>'
         + '<p>iOS 9 gives developers new tools for creating apps for iPhone and iPad, and our new edition of the classic iOS guide is updated to match. By writing clean, expressive, and maintainable Swift code, you’ll be able to pull in the'
         + ' iOS 9 SDK\'s enormous feature set to deliver mobile applications.</p>'
         + '<p><a class="btn btn-default" href="https://www.goodreads.com/book/show/26780375-ios-9-sdk-development" role="button">View details &raquo;</a></p>'
       + '</div>'
       + '<div class="col-lg-4">'
         + '<img class="img-circle" src="graphics/github.png" alt="Generic placeholder image" width="140" height="140"/>'
         + '<h2>python-patterns</h2>'
         + '<p>My most popular (and currently most active) GitHub repository is a collection of design patterns and idioms in Python. It includes many Pythonic implementation of well-known patterns such as factory, decorator, state, strategy, and so forth.</p>'
         + '<p><a class="btn btn-default" href="https://github.com/faif/python-patterns" role="button">View details &raquo;</a></p>'
       + '</div>'
     + '</div>'
     + '<hr class="featurette-divider">'
     + '<div class="row featurette">'
       + '<div class="col-md-10">'
         + '<a name="about"/>'
         + '<h2 class="featurette-heading">About me</h2>'
         + '<p class="lead">The present: I am a Software Engineer with ~ 7 years of professional experience, specializing in developing portable applications. I am passionate about programming and'
         + ' have professional expertise in C++, Python, Scala, Ruby/Rails, SQL, PHP, and Java. My main qualities are the ability to work independently, critical thinking, and fitting well into a team. My current interest is functional programming.</p>'
         + '<p class="lead">The past: Like many other computer fans, my first contact with computers was purely for entertaining reasons. I remember myself playing games like Titus the Fox and Prince of Persia on the 486 of my friend. I'
         + ' also remember my friend trying to show me how to move a turtle using simple commands (Logo).'
         + '<p class="lead">Years later, my brother brought at home our first computer. An AMD Athlon Thunderbird 1 GHZ. Another friend of mine passionate with computers (who was lucky enough to own a computer a couple of years before me)' 
         + ' started to teach me the basics of HTML. At the same time we were also learning about computer hardware (basically we were assembling and disassembling our own computers to find out what\'s inside), the CLI of MS-DOS, and Windows'
         + ' programming (AFAIR Visual Basic). Apart from the hardware and the CLI parts, I don\'t remember myself being extremely fascinated by the rest stuff. And then...'
         + '<p class="lead">One day I saw my brother playing with an unfamiliar to me user interface (GNOME). I asked him to give me some details. The system was called Red Hat Linux 7.1. It was something different and I really liked the idea.' 
         + 'I found myself reading my brother\'s Red Hat book and trying to learn more and more about it. When my brother removed Red Hat because he wasn\'t patient enough to learn how to use it in practice, I was extremely annoyed. I bought my'
         + ' own SuSE box and installed it on the computer. That was it. From that day, I said goodbye to the Windows world. Nothing could be compared with the CLI of GNU/Linux, shell scripting, configuring and compiling my own kernels, etc.'
         + ' During 2005-2015 I was using Debian GNU/Linux as my primary system. In 2015, I decided to try something different and switched to OSX.'
         + '<p class="lead">In the meanwhile, after studying the fundamentals of Electronics in a Technical High-School, I decided to switch directions and follow an Computer Engineering related BSc education. After the BSc, the MSc followed.'
         + ' I believe that through the years, some of the things that I have been taught or chose to study were (and still are) very useful and some were (and of course still are) a bad choice. But as W. W. Sawyer once said "If you start by trying'
         + ' to be perfect, you will get nowhere. The road to perfection is by way of making mistakes".</p>'
         + '<p class="pull-right"><a href="#top"><img src="graphics/top.png" alt="Back to top" width="32" height=32"/></a></p>'         
       + '</div>'
     + '</div>'
     + '<hr class="featurette-divider">'
     + '<div class="row featurette">'
       + '<div class="col-md-10">'
         + '<a name="portfolio"/>'
         + '<h2 class="featurette-heading">Portfolio</h2>'
         + '<p class="lead">Working full-time leaves little space on doing technical stuff outside work. I also find it important to enjoy life and participate in sports activities. With that said, I spend a good amount of time reading technical'
         + ' books and magazines, as well as listening to podcasts. Check my book <a href="https://www.goodreads.com/review/list/27581741-sakis?shelf=%23ALL%23">collection</a> on goodreads to find out which books I have read and which books'
         + ' I\'m planning to read. Regarding magazines, <a href="http://hackermonthly.com">Hacker Monthly</a> was great but it\'s not published any longer. Fortunately, there\' s still <a href="http://theprosegarden.com">PragPub</a>.'
         + ' My favorite podcasts are <a href="https://www.grc.com/securitynow.htm">Security Now!</a> and <a href="https://twit.tv/shows/this-week-in-tech">This Week In Tech</a>.</p>'
         + ' <p class="lead">In 2015 I wrote the book <a href="https://www.packtpub.com/application-development/mastering-python-design-patterns">Mastering Python Design Patterns</a>. Before that, I was the technical reviewer of the books'
         + ' <a href="https://www.packtpub.com/application-development/learning-python-design-patterns">Learning Python Design Patterns</a> and <a href="https://www.packtpub.com/application-development/mastering-object-oriented-python">Mastering'
         + ' Object-Oriented Python</a>. As a side project I created the GitHub repository <a href="https://github.com/faif/python-patterns">python-patterns</a> which has been welcomed by the Python community.</p>'
         + ' <p class="lead">You probably already know Stack Overflow, since all people who write code are at least passive users of it. I try to be a bit more active by upvoting and reviewing questions/answers. Sometimes I ask questions and'
         + ' if I have anything useful to say I reply to questions. But building reputation is not my ultimate goal. I feel that I learn a lot by simply going through my favorite questions/answers. Check my '
         + ' <a href="http://stackexchange.com/users/283698/ierax?tab=accounts">StackExchange profile</a>. I\'m mostly active on <a href="http://programmers.stackexchange.com">Programmers</a> and '
         + ' <a href="http://unix.stackexchange.com">Unix & Linux</a>.</p>'
         + '<p class="lead">I am the proud owner of an <a href="https://developer.mbed.org/platforms/mbed-LPC1768/">ARM mbed LPC1768</a> microcontroller. I have not done much with it so far, but it is a weekend hobby that I enjoy. Check my'
         + ' <a href="https://vimeo.com/user32695250/videos">prototyping</a> videos on vimeo. Follows a list of my present and past projects.</p>'
         + '<div class="panel panel-primary">'
         + ' <div class="panel-heading">Active projects</div>'
         + ' <table class="table table-condensed table-hover">'
         + '   <th>Name</th><th>Summary</th><th>Keywords</th>'
         + '   <tr><td><a href="https://github.com/faif/python-patterns">python-patterns</a></td><td>A collection of design patterns/idioms in Python</td><td>Python, design patterns</td></tr>'
         + '   <tr><td><a href="https://developer.mbed.org/users/faif/">mbed prototypes</a></td><td>Several microcontroller prototypes</td><td>C++, mbed, LPC1768</td></tr>'
         + '   <tr><td><a href="https://github.com/faif/shell-utils">shell-utils</a></td><td>Useful functions for POSIX shells (bash, ksh, tcsh, etc.)</td><td>shell, scripting, POSIX</td></tr>'
         + '   <tr><td><a href="https://github.com/faif/algo">algo</a></td><td>Implementation of common algorithms</td><td>programming, algorithms</td></tr>'
         + ' </table>'         
         + '</div>'
         + '<div class="panel panel-success">'
         + ' <div class="panel-heading">Finished projects</div>'
         + ' <table class="table table-condensed table-hover">'
         + '   <th>Name</th><th>Summary</th><th>Keywords</th>'
         + '   <tr><td><a href="https://www.packtpub.com/application-development/mastering-python-design-patterns">Mastering Python Design Patterns</a></td><td>Improve your Python skills by implementing idiomatic design patterns</td><td>Python 3, design patterns<td></tr>'         
         + '   <tr><td><a href="https://www.packtpub.com/application-development/mastering-object-oriented-python">Mastering Object-Oriented Python</a></td><td>Grasp the intricacies of object-oriented programming in Python</td><td>Python, object-oriented<td></tr>'                           
         + '   <tr><td><a href="https://www.packtpub.com/application-development/learning-python-design-patterns">Learning Python Design Patterns</a></td><td>Introduction to design patterns using Python</td><td>Python, design patterns<td></tr>'                  
         + '   <tr><td><a href="https://github.com/faif/Prodoku">Prodoku</a></td><td>A Sudoku solver</td><td>SWI-Prolog, CLP</td></tr>'                           
         + '   <tr><td><a href="https://github.com/faif/EuroCitizen">EuroCitizen</a></td><td>A Web Ontology intended to describe European citizens</td><td>OWL, semantic web, protégé, pellet</td></tr>'                  
         + '   <tr><td><a href="https://github.com/faif/montecarlo">montecarlo</a></td><td>Using the Monte Carlo methods in problem solving</td><td>Python, monte carlo, probabilities</td></tr>'                           
         + '   <tr><td><a href="http://www.creakyoldmemory.dadiugames.dk">Creaky Old Memory</a></td><td>A 3D puzzle game involving picture gathering and organ playing</td><td>Unity, C#</td></tr>'         
         + '   <tr><td><a href="https://www.youtube.com/watch?v=osMFB-_Zmyk">Trail of the Collector</a></td><td>A 3D puzzle crime game</td><td>Unity, C#</td></tr>'                  
         + '   <tr><td><a href="https://github.com/faif/expr-calc">expr-calc</a></td><td>A simple expression calculator</td><td>C++</td></tr>'
         + '   <tr><td><a href="https://github.com/faif/quote">quote</a></td><td>Print a random quote from an input file</td><td>Python, motd, fortune</td></tr>'         
         + '   <tr><td><a href="https://github.com/faif/GraphNetwork">GraphNetwork</a></td><td>An applet for visualizing graph algorithms</td><td>Java, Swing, graphs, algorithms</td></tr>'                                    
         + '   <tr><td><a href="https://github.com/faif/nfiles-ndisks">nfiles-ndisks</a></td><td>Calculate the optimum number and size of files that can fit into the hard disk(s)</td><td>GAlib, C++</td></tr>'                           
         + '   <tr><td><a href="files/copy-on-write-based-file-systems.pdf">Copy On Write Based Filesystems</a></td><td>The report of my MSc thesis</td><td>ZFS, Btrfs, copy on write</td></tr>'                                               
         + '   <tr><td><a href="http://savannah.gnu.org/projects/www-el/">www-el</a></td><td>Translating all the important gnu.org articles to the Greek language</td><td>GNU, Greek</td></tr>'                                             
         + ' </table>'         
         + '</div>'         
         + '<div class="panel panel-danger">'
         + ' <div class="panel-heading">Frozen projects</div>'
         + ' <table class="table table-condensed table-hover">'
         + '   <th>Name</th><th>Summary</th><th>Keywords</th>'
         + '   <tr><td><a href="https://github.com/faif/ctci">Cracking the Coding Interview</a></td><td>Python solutions of the book using TDD</td><td>Python 3, TDD, problem solving<td></tr>'                  
         + '   <tr><td><a href="https://github.com/faif/myicpc">myicpc</a></td><td>Solving the ACM ICPC problems</td><td>ACM, ICPC, problem solving<td></tr>'                           
         + '   <tr><td><a href="https://github.com/faif/system-code">system-code</a></td><td>Code related with system programming</td><td>operating system, admin<td></tr>'                                    
         + '   <tr><td><a href="https://github.com/faif/The-Crime-Tracer">The Crime Tracer</a></td><td>A 2D adventure crime game</td><td>Pygame, 2D, adventure<td></tr>'         
         + ' </table>'
         + '</div>'   
         + '<p class="pull-right"><a href="#top"><img src="graphics/top.png" alt="Back to top" width="32" height=32"></a></p>'         
         + '<hr class="featurette-divider">'
     + '<div class="row featurette">'
       + '<div class="col-md-10">'
         + '<a name="contact"/>'
         + '<h2 class="featurette-heading">Wanna contact me? Easy!</h2>'
         + '<p class="lead">One way to reach me is through <a href="https://nl.linkedin.com/in/sakiskasampalis">LinkedIn</a>. In'
         + ' general I prefer receiving personal messages instead of connection requests on LinkedIn, so please consider just sending a'
         + ' message before sending any connection invitations.</p>'
         + '<p class="lead">I am also a fairly active <a href="https://twitter.com/SKasampalis">Twitter</a> user. Feel free to send'
         + ' me a private Twitter message or just a tweet, but always take into account that nothing is really private on Twitter...</p>'
         + '<p class="lead">Sending an e-mail is naturally also an option. Although there is always a small chance that your mail ends up'
         + ' in the spam folder, I check that folder regularly to see if there are any false positives. You can find my e-mail address in'
         + ' my <a href="files/cv.pdf">CV</a>.</p>'
         + '<p class="lead">Calling me is yet another possibility. Although I admit that I belong to the generation that prefers texting over'
         + ' talking on the phone. So please prefer all the alternative options before calling me. My phone number is also in my <a href="files/cv.pdf">CV</a>.'
         + '<p class="pull-right"><a href="#top"><img src="graphics/top.png" alt="Back to top" width="32" height=32"></a></p>'         
       + '</div>'
     + '</div>'
     + '<hr class="featurette-divider">'
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
