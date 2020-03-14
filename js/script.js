   $(".dust").slick({    
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $(".photos_block .inner").slick({    
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1207,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3          
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 662,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });


  $('.world_right_main_img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.world_right_other'
  });
  $('.world_right_other').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.world_right_main_img',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });
  