// buttonSet1
$( function() {
	
  $( '#buttonHeader' ).click( function() {
    $( 'h1' ).text( 'こんにちは！' );
  });


  $( '#buttonArticle' ).click( function() {
    $( 'article' ).css({
      'color': 'black',
      'background-color': 'yellow'
    });
  });

  $( '#buttonFooter' ).click( function() {
    $( 'footer' ).html('<p><a href="https://www.kyusan-u.ac.jp">九州産業大学造形短期大学部</a></p>' );
    $( 'footer a' ).css( 'color','red' );
  });

});

// buttonSet2
$( function() {
	
  $( '#buttonNormal' ).click( function() {
    $('main').css( 'flex-direction','row' );
  });

  $( '#buttonReverse' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
  });

  $( '#buttonVertical' ).click( function() {
    $('main').css( 'flex-direction','column' );
  });

  $( '#buttonAside' ).click( function() {
    $('main').css( 'flex-direction','column-reverse' );
  });

});