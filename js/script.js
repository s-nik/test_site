(function(){
$('.slider-2').slick({
	arrows: false,
  centerMode: true,
  centerPadding: '-20px',
  slidesToShow: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
$('#slider').on('init reInit',function(event,slick){
  var amount = slick.slideCount;
  $('#range').attr('max',amount);
})

$('#slider').on('afterChange',function(e,slick,currentSlide){
  $('#range').val(currentSlide+1);
})

$('#range').on('input change',function(){
  $('#slider').slick('slickGoTo',this.value-1);
});

$('#slider').slick({
	centerMode: true,
  slidesToShow:3,
  arrows:false,
  dots:false,
  centerPadding: '-20px',
})
})()