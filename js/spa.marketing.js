/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $, spa */

function toTop () {
  return '<p class="pull-right"><a href="#top"><img src="graphics/top.png" alt="Back to top" width="32" height=32"/></a></p>';
};

spa.marketing = (function () {
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {
      main_html : String()
      + '<div class="container marketing">'
     + '<div class="row">'
       + '<div class="col-lg-4">'
         + '<img class="img-circle" src="graphics/reading.png" alt="Creative reading" width="140" height="140"/>'
         + '<h2>A Dance with Dragons</h2>'
         + '<p>In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance — beset by newly emerging threats from every direction. In the east, Daenerys Targaryen, the last scion of House Targaryen, rules with her three'
         + ' dragons as queen of a city built on dust and death.</p>'
         + '<p><a class="btn btn-default" href="https://www.goodreads.com/book/show/10664113-a-dance-with-dragons" role="button">View details &raquo;</a></p>'
       + '</div>'
       + '<div class="col-lg-4">'
         + '<img class="img-circle" src="graphics/rtfm.png" alt="Technical reading" width="140" height="140">'
         + '<h2>Seven Concurrency Models in Seven Weeks</h2>'
         + '<p>Your software needs to leverage multiple cores, handle thousands of users and terabytes of data, and continue working in the face of both hardware and software failure. Concurrency and parallelism are the keys, and Seven Concurrency Models'
         + ' in Seven Weeks equips you for this new world.</p>'
         + '<p><a class="btn btn-default" href="https://www.goodreads.com/book/show/18467564-seven-concurrency-models-in-seven-weeks" role="button">View details &raquo;</a></p>'
       + '</div>'
       + '<div class="col-lg-4">'
         + '<img class="img-circle" src="graphics/github.png" alt="Generic placeholder image" width="140" height="140"/>'
         + '<h2>python-patterns</h2>'
         + '<p>My most popular (and currently most active) GitHub repository is a collection of design patterns and idioms in Python. It includes many Pythonic implementations of well-known patterns such as factory, decorator, state, strategy, and so forth.</p>'
         + '<p><a class="btn btn-default" href="https://github.com/faif/python-patterns" role="button">View details &raquo;</a></p>'
       + '</div>'
     + '</div>'
     + '<hr class="featurette-divider">'
     + '<div class="row featurette">'
       + '<div class="col-md-12">'
         + '<a name="about"/>'
         + '<h2 class="featurette-heading">About me</h2>'
         + '<p class="lead">The present: I am a Software Engineer with ~ 8 years of professional experience. I am passionate about programming and'
         + ' have professional expertise in C++, Python, SQL, JavaScript, Scala, and Ruby/Rails. My main qualities are the ability to work independently, critical thinking, and fitting well into a team. My current interest is functional programming.</p>'
         + '<p class="lead">The past: Like many other computer fans, my first contact with computers was purely for entertaining reasons. I remember myself playing games like Titus the Fox and Prince of Persia on the 486 of my friend. I'
         + ' also remember my friend trying to show me how to move a turtle using simple commands (Logo).'
         + '<p class="lead">Years later, my brother brought at home our first computer. An AMD Athlon Thunderbird 1 GHZ. Another friend of mine passionate with computers (who was lucky enough to own a computer a couple of years before me)'
         + ' started to teach me the basics of HTML. At the same time we were also learning about computer hardware (basically we were assembling and disassembling our own computers to find out what\'s inside), the CLI of MS-DOS, and Windows'
         + ' programming (AFAIR Visual Basic). Apart from the hardware and the CLI parts, I don\'t remember myself being extremely fascinated by the rest stuff. And then...'
         + '<p class="lead">One day I saw my brother playing with an unfamiliar to me user interface (GNOME). I asked him to give me some details. The system was called Red Hat Linux 7.1. It was something different and I really liked the idea.'
         + 'I found myself reading my brother\'s Red Hat book and trying to learn more and more about it. When my brother removed Red Hat because he wasn\'t patient enough to learn how to use it in practice, I was extremely annoyed. I bought my'
         + ' own SuSE box and installed it on the computer. That was it. From that day, I said goodbye to the Windows world. Nothing could be compared with the CLI of GNU/Linux, shell scripting, configuring and compiling my own kernels, etc.'
         + ' During 2005-2015 I was using Debian GNU/Linux as my primary system. In 2015, I decided to try something different and switched to macOS.'
         + '<p class="lead">In the meantime, after studying the fundamentals of Electronics in a Technical High-School, I decided to switch directions and follow an Computer Engineering related BSc education. After the BSc, the MSc followed.'
         + ' I believe that through the years, some of the things that I have been taught or chose to study were (and still are) very useful and some were (and of course still are) a bad choice. But as W. W. Sawyer once said "If you start by trying'
         + ' to be perfect, you will get nowhere. The road to perfection is by way of making mistakes".</p>'
         + toTop()
       + '</div>'
     + '</div>'
     + '<hr class="featurette-divider">'
     + '<div class="row featurette">'
       + '<div class="col-md-12">'
         + '<a id="portfolio"/>'
         + '<h2 class="featurette-heading">Portfolio</h2>'
         + '<p class="lead">Working full-time leaves little space on doing technical stuff outside work. I also find it important to enjoy life and participate in sports activities. With that said, I spend a good amount of time reading technical'
         + ' books and magazines, as well as listening to podcasts. Check my book <a href="https://www.goodreads.com/review/list/27581741-sakis?shelf=%23ALL%23">collection</a> on goodreads to find out which books I have read and which books'
         + ' I\'m planning to read. Regarding magazines, <a href="http://hackermonthly.com">Hacker Monthly</a> was great but it\'s not published any longer. Fortunately, there\'s still <a href="http://theprosegarden.com">PragPub</a>.'
         + ' My favorite podcast is <a href="https://www.grc.com/securitynow.htm">Security Now!</a></p>'
         + ' <p class="lead">In 2015 I wrote the book <a href="https://www.packtpub.com/application-development/mastering-python-design-patterns">Mastering Python Design Patterns</a>. Before that, I was the technical reviewer of the books'
         + ' <a href="https://www.packtpub.com/application-development/learning-python-design-patterns">Learning Python Design Patterns</a> and <a href="https://www.packtpub.com/application-development/mastering-object-oriented-python">Mastering'
         + ' Object-Oriented Python</a>. As a side project I created the GitHub repository <a href="https://github.com/faif/python-patterns">python-patterns</a> which has been welcomed by the Python community.</p>'
         + ' <p class="lead">You probably already know Stack Overflow, since all people who write code are at least passive users of it. I try to be a bit more active by upvoting and reviewing questions/answers. Sometimes I ask questions and'
         + ' if I have anything useful to say I reply to questions. But building reputation is not my ultimate goal. I feel that I learn a lot by simply going through my favorite questions/answers. Check my '
         + ' <a href="http://stackexchange.com/users/283698/ierax?tab=accounts">StackExchange profile</a>. I\'m mostly active on <a href="http://softwareengineering.stackexchange.com">Software Engineering</a> and '
         + ' <a href="http://unix.stackexchange.com">Unix & Linux</a>.</p>'
         + '<p class="lead">Playing with hardware (for example microcontrollers) is a weekend hobby that I enjoy. Check my'
         + ' <a href="https://vimeo.com/user32695250/videos">prototyping</a> videos on vimeo. Follows a list of my present and past projects.</p>'
         + '<div class="panel panel-primary">'
         + ' <div class="panel-heading">Active projects</div>'
         + ' <table id="active-projects" class="table table-condensed table-hover">'
         + '   <thead>'
         + '    <tr><th class="text-center">Name</th><th class="text-center">Summary</th><th class="text-center">Keywords</th></tr>'
         + '   </thead>'
         + '   <tbody>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/python-patterns">python-patterns</a></td><td class="text-center">A collection of design patterns/idioms in Python</td><td class="text-center">Python, design patterns, programmer, maintainer</td></tr>'
         + '    <tr><td class="text-center"><a href="https://developer.mbed.org/users/faif/">mbed prototypes</a></td><td class="text-center">Several microcontroller prototypes</td><td class="text-center">C++, mbed, LPC1768, programmer</td></tr>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/shell-utils">shell-utils</a></td><td class="text-center">Useful functions for POSIX shells (bash, ksh, tcsh, etc.)</td><td class="text-center">shell, scripting, POSIX, programmer</td></tr>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/algo">algo</a></td><td class="text-center">Implementation of common algorithms</td><td class="text-center">programming, algorithms, programmer</td></tr>'
         + '   </tbody>'
         + ' </table>'
         + '</div>'
         + '<div class="panel panel-success">'
         + ' <div class="panel-heading">Finished projects</div>'
         + ' <table id="finished-projects" class="table table-condensed table-hover">'
         + '   <thead>'
         + '    <tr><th class="text-center">Name</th><th class="text-center">Summary</th><th class="text-center">Keywords</th></tr>'
         + '   </thead>'
         + '   <tbody>'
         + '    <tr><td class="text-center"><a href="https://www.packtpub.com/application-development/mastering-python-design-patterns">Mastering Python Design Patterns</a></td><td class="text-center">Improve your Python skills by implementing idiomatic design patterns</td><td class="text-center">Python 3, design patterns, author</td></tr>'
         + '    <tr><td class="text-center"><a href="https://www.packtpub.com/application-development/mastering-object-oriented-python">Mastering Object-Oriented Python</a></td><td class="text-center">Grasp the intricacies of object-oriented programming in Python</td><td class="text-center">Python, object-oriented, reviewer</td></tr>'
         + '    <tr><td class="text-center"><a href="https://www.packtpub.com/application-development/learning-python-design-patterns">Learning Python Design Patterns</a></td><td class="text-center">Introduction to design patterns using Python</td><td class="text-center">Python, design patterns, reviewer</td></tr>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/Prodoku">Prodoku</a></td><td class="text-center">A Sudoku solver</td><td class="text-center">SWI-Prolog, CLP</td></tr>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/EuroCitizen">EuroCitizen</a></td><td class="text-center">A Web Ontology intended to describe European citizens</td><td class="text-center">OWL, semantic web, protégé, pellet, author</td></tr>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/montecarlo">montecarlo</a></td><td class="text-center">Using the Monte Carlo methods in problem solving</td><td class="text-center">Python, monte carlo, probabilities, programmer</td></tr>'
         + '    <tr><td class="text-center"><a href="http://www.creakyoldmemory.dadiugames.dk">Creaky Old Memory</a></td><td class="text-center">A 3D puzzle game involving picture gathering and organ playing</td><td class="text-center">Unity, C#, programmer</td></tr>'
         + '    <tr><td class="text-center"><a href="https://www.youtube.com/watch?v=osMFB-_Zmyk">Trail of the Collector</a></td><td class="text-center">A 3D puzzle crime game</td><td class="text-center">Unity, C#, programmer</td></tr>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/expr-calc">expr-calc</a></td><td class="text-center">A simple expression calculator</td><td class="text-center">C++, programmer</td></tr>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/quote">quote</a></td><td class="text-center">Print a random quote from an input file</td><td class="text-center">Python, motd, fortune, programmer</td></tr>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/GraphNetwork">GraphNetwork</a></td><td class="text-center">An applet for visualizing graph algorithms</td><td class="text-center">Java, Swing, graphs, algorithms, programmer</td></tr>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/nfiles-ndisks">nfiles-ndisks</a></td><td class="text-center">Calculate the optimum number and size of files that can fit into the hard disk(s)</td><td class="text-center">GAlib, C++, programmer</td></tr>'
         + '    <tr><td class="text-center"><a href="files/copy-on-write-based-file-systems.pdf">Copy On Write Based Filesystems</a></td><td class="text-center">The report of my MSc thesis</td><td class="text-center">ZFS, Btrfs, copy on write, author</td></tr>'
         + '    <tr><td class="text-center"><a href="http://savannah.gnu.org/projects/www-el/">www-el</a></td><td class="text-center">Translating all the important gnu.org articles to the Greek language</td><td class="text-center">GNU, Greek, moderator</td></tr>'
         + '   </tbody>'
         + ' </table>'
         + '</div>'
         + '<div class="panel panel-danger">'
         + ' <div class="panel-heading">Frozen projects</div>'
         + ' <table id="frozen-projects" class="table table-condensed table-hover">'
         + '   <thead>'
         + '    <tr><th class="text-center">Name</th><th class="text-center">Summary</th><th class="text-center">Keywords</th></tr>'
         + '   </thead>'
         + '   <tbody>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/ctci">Cracking the Coding Interview</a></td><td class="text-center">Python solutions of the book using TDD</td><td class="text-center">Python 3, TDD, problem solving, programmer</td></tr>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/myicpc">myicpc</a></td><td class="text-center">Solving the ACM ICPC problems</td><td class="text-center">ACM, ICPC, problem solving, programmer</td></tr>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/system-code">system-code</a></td><td class="text-center">Code related with system programming</td><td class="text-center">operating system, admin, programmer</td></tr>'
         + '    <tr><td class="text-center"><a href="https://github.com/faif/The-Crime-Tracer">The Crime Tracer</a></td><td class="text-center">A 2D adventure crime game</td><td class="text-center">Pygame, 2D, adventure, programmer</td></tr>'
         + '   </tbody>'
         + ' </table>'
         + '</div>'
         + toTop()
         + '<hr class="featurette-divider">'
     + '<div class="row featurette">'
       + '<div class="col-md-12">'
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
         + toTop()
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
