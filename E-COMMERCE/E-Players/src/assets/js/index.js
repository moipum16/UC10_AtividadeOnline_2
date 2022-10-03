  var menu3 = document.getElementById( "menu3" );
  var menu = document.getElementById( "menu" );
  var menu1 = document.getElementById( "menu1" );
  var inicio = document.getElementById( "inicio" );
  var menuID = "menu";

  function menu33()
  {

    if ( menuID == "menu" )
    {
      document.getElementById( "menu" ).id = "menu1";
      menuID = "menu1";


    } else
    {
      document.getElementById( "menu1" ).id = "menu";
      menuID = "menu";
    }
  }

  var myInterval = setInterval( function ()
  {
    if ( width = window.innerWidth > 1199 || document.documentElement.clientWidth > 1199 || document.body.clientWidth > 1199 )
    {
      menuID = "menu";
      document.getElementById( "menu1" ).id = "menu";


    }
  }, 500 );


