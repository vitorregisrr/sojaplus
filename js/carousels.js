(function () {
    'use strict';

    // Home Carousel //
    const cursosCarousel = $(".owl-carousel.cursos-carousel__carousel");
    cursosCarousel.owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        center: true,
        dots: true,
        nav: true,
        navText: [
            "<i class='owl-nav chevron-left'>", "<i class='owl-nav chevron-right'>"
        ],
        slideBy: "page",
        dragEndSpeed: 700,
        smartSpeed: 1e3,
        startPosition: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
    
     // noticias Carousel //
     const noticiasCarousel = $(".owl-carousel.noticias-carousel__carousel");
     noticiasCarousel.owlCarousel({
         loop: false,
         margin: 0,
         center: true,
         dots: false,
         nav: true,
         navText: [
             "<i class='owl-nav chevron-left'>", "<i class='owl-nav chevron-right'>"
         ],
         slideBy: "page",
         dragEndSpeed: 700,
         smartSpeed: 1e3,
         startPosition: 1,
         responsive: {
             0: {
                 items: 1,
                 margin: 0
             },

             500: {
                 items: 2,
                 margin: 20
             },

             768: {
                 items: 3,
                 margin: 50
             }
         }
    });
     
      // agenda Carousel //
      const agendaCarousel = $(".owl-carousel.agenda-carousel__carousel");
      agendaCarousel.owlCarousel({
          loop: false,
          margin: 0,
          dots: false,
          nav: true,
          navText: [
              "<i class='owl-nav chevron-left'>", "<i class='owl-nav chevron-right'>"
          ],
          slideBy: "page",
          dragEndSpeed: 700,
          smartSpeed: 1e3,
          startPosition: 0,
          responsive: {
              0: {
                  items: 1,
                  margin: 0
              },
 
              500: {
                  items: 2,
                  margin: 20
              },
 
              768: {
                  items: 3,
                  margin: 30
              },

              1000: {
                  items: 4,
                  margin: 30
              }
          }
     });

      // ultimoseventos Carousel //
      const ultimoseventosCarousel = $(".owl-carousel.ultimoseventos-carousel__carousel");
      ultimoseventosCarousel.owlCarousel({
          loop: false,
          margin: 0,
          dots: true,
          nav: true,
          navText: [
              "<i class='owl-nav chevron-left'>", "<i class='owl-nav chevron-right'>"
          ],
          slideBy: "page",
          dragEndSpeed: 700,
          smartSpeed: 1e3,
          startPosition: 0,
          responsive: {
              0: {
                  items: 1,
                  margin: 0
              },
 
              500: {
                  items: 2,
                  margin: 20
              },
 
              768: {
                  items: 3,
                  margin: 30
              },

              1000: {
                  items: 4,
                  margin: 30
              }
          }
     });
      

     // Documentos Carousel //
     const documentosCarousel = $(".owl-carousel.documentos-ref__carousel");
     documentosCarousel.owlCarousel({
         loop: false,
         margin: 0,
         dots: true,
         nav: true,
         navText: [
             "<i class='owl-nav chevron-left'>", "<i class='owl-nav chevron-right'>"
         ],
         slideBy: "page",
         dragEndSpeed: 700,
         smartSpeed: 1e3,
         startPosition: 0,
         responsive: {
             0: {
                 items: 1,
                 margin: 0
             },

             500: {
                 items: 2,
                 margin: 20
             },

             768: {
                 items: 4,
                 margin: 30
             },

             1000: {
                 items: 5,
                 margin: 30
             }
         }
    });
     
     // Notas e Releases Carousel //
     const notasreleasesCarousel = $(".owl-carousel.notasreleases__carousel");
     notasreleasesCarousel.owlCarousel({
         loop: false,
         margin: 0,
         dots: false,
         nav: true,
         navText: [
             "<i class='owl-nav chevron-left'>", "<i class='owl-nav chevron-right'>"
         ],
         slideBy: "page",
         dragEndSpeed: 700,
         smartSpeed: 1e3,
         startPosition: 0,
         responsive: {
             0: {
                 items: 1,
                 margin: 0
             },

             500: {
                 items: 2,
                 margin: 10
             },

             768: {
                 items: 4,
                 margin: 10
             },

             1000: {
                 items: 5,
                 margin: 20
             }
         }
    });

    window.dispatchEvent(new Event('resize'));
})();