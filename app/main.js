const slider = new A11YSlider(document.querySelector(".slider"), {
    arrows: true, // arrows enabled 767px and down
    dots: false,
    slidesToShow: 1,
    centerMode: true,
    responsive: {
        650: {
            slidesToShow: 2
        },
        1200: {
          disable: false,
          slidesToShow: 3,
        }
      }
  });