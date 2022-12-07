//navbar
$('.shortcodes').mouseover(()=>{
    $('.drop_box').addClass('drop_box_show');
})
$('.shortcodes').mouseout(()=>{
    $('.drop_box').removeClass('drop_box_show');
})
$('.drop_box').mouseover(()=>{
    $('.drop_box').addClass('drop_box_show');
})
$('.drop_box').mouseout(()=>{
    $('.drop_box').removeClass('drop_box_show');
})

//scroll-nav
let prevPosition = 0;

$(window).scroll(()=>{
    let scrolled = this.scrollY;

    if(scrolled < 200){
        $('.navbar').removeClass('nav_middle')
    } else {
        if(scrolled < prevPosition){
            $('.navbar').addClass('nav_middle');
            $('.nav_menu_mobile').removeClass('nav_menu_mobile_active');
            prevPosition = scrolled;
        } else {
            $('.navbar').removeClass('nav_middle');
            $('.nav_menu_mobile').removeClass('nav_menu_mobile_active');
            prevPosition = scrolled;
        }
    }
})

//menu
$('.hamburger').click(()=>{
    $('.nav_menu_mobile').toggleClass('nav_menu_mobile_active');
})


//slider
$('.swiper_screenshots').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerMode: true,
    centerPadding: '0px',
    zIndex: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

$('.brand_slider').slick({
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 1000,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  draggable: false,
});

//increment

$(window).scroll(()=>{
  if(this.scrollY>2510){
    const number = document.querySelectorAll('.inc_number');
    const speed = 100;

    number.forEach(element => {
      incNumber(element);
    })

    function incNumber(elm){
      let text = + elm.innerText;
      const value = + elm.getAttribute("data-target");
      const inc = Math.floor(value/speed);
      if(text<value){
        elm.innerText= inc+text;
        setTimeout(()=>{
          incNumber(elm);
        }, 20);
      }else{
        elm.innerText=value;
      }
    }
  } else if(this.scrollY < 2000) {
    const number = document.querySelectorAll('.inc_number');
    number.forEach(element => {
      element.innerText = 0;
    })
  }
})

//modal
$(".preview").click(function () {
  var modal = $(this).val();
  console.log(`#${modal}`);
  $(`#${modal}`).removeAttr("class").addClass('modal_container one');
  $("body").addClass("modal-active");
});

$(".modal_container").click(function () {
  $(this).addClass("out");
  $("body").removeClass("modal-active");
});


//AOS

AOS.init({
  once: true,
})


//loader
let loader = document.getElementById('loader');

window.addEventListener("load", function (){
    loader.style.display = "none";
})
