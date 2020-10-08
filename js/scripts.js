$(document).ready(function() {
    let endpoint = 'https://api.themoviedb.org/3/movie/now_playing'
    let apiKey = '3e4d90cc981994d2cf858de33c365791'
    let poster_path = 'https://image.tmdb.org/t/p/w500' // + poster_path
    let background_path = 'https://image.tmdb.org/t/p/w500' // + backdrop_path
    var referencia_actual = ""


    $(document).on("click","#cajacookies",
    function(e){
      cajacookies.style.display = 'none';
    }
  )




    $(document).on("click", ".alternar-panel-oculto" ,

      function(e){
          $('#panel-oculto').slideDown();

          $('#panel-oculto').append("<p>"+pelicula_actual.overview+"</p>");
          $(this).text('Cerrar el panel');
          e.preventDefault();
      }
    )

    $.ajax({
        url: endpoint + "?api_key=" + apiKey + '&language=es-ES',
        contentType: "application/json",
        dataType: 'json',
        success: function(result){

           var lista_peliculas = result.results

           for(var item=0; item<lista_peliculas.length; item++){
                var pelicula_actual = lista_peliculas[item]

                // https://getbootstrap.com/docs/4.5/components/card/
                $( "#listado_peliculas" ).append(
                    '<div class="col-12 col-sm-6 col-md-4 col-xl-3">' +
                        '<div class="card mt-3" style:"  background-image: url(https://www.xtrafondos.com/descargar.php?id=3593&resolucion=3840x2160);">' +
                          '<img src="' + poster_path + pelicula_actual.poster_path + '" class="card-img-top img_card" alt="...">' +
                          '<div class="card-body">' +
                            '<h5 class="card-title">' + pelicula_actual.title +'</h5>' +
                            '<p class="card-text pelicula_card_overview">' + pelicula_actual.overview +'</p>' +


                            '<a href="#" class="btn btn-primary boton_info alternar-panel-oculto" referencia_oculta="peli'+item+'">Mostrar el panel oculto</a>' +

                            //<!--  Panel oculto (DIV)-->

                            //<!--Botón que cambia -->
                            //'<a href="#" id="alternar-panel-oculto">' + 'Mostrar el panel oculto' + '</a>' +
                            //<!--  ***************************************************************** -->

                          '</div>' +
                        '</div>' +
                    '</div>');






           }

        }
    })

});
