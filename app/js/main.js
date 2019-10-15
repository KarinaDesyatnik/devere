$(function(){
  // ------start scroll menu---
$("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
 // ------end scroll menu---
  // ------ start mobil menu---
$('.btn_menu').click(function(){
		$('.menu ul').toggleClass('active');
		$('.btn_menu').toggleClass('active');
	})
});
  // ------end mobil menu---
  // ------ start popup init---
 $('.popup-with-video').magnificPopup({
  type: 'inline',
  preloader: false,
  focus: '#name',
  callbacks: {
   beforeOpen: function() {
    if($(window).width() < 700) {
     this.st.focus = false;
   } else {
     this.st.focus = '#name';
   }
 }
}
});
 // ------ end popup init---
 // ------ start input width calendar---
$( function() {
    $( "#datepicker, #datepicker2" ).datepicker({
      showOn: "button",
      buttonImage: "img/calend.svg",
      buttonImageOnly: true,
      buttonText: "Select date"
    });
  } );
// ------ end input width calendar---

$(".menu").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();



        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),



        //узнаем высоту от начала страницы до блока на который ссылается якорь

        top = $(id).offset().top;



        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({scrollTop: top}, 1500);

    });