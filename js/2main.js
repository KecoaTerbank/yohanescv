(function ($) {
	"use strict";
	
	/*----------------------------
    Responsive menu Active
    ------------------------------ */
	$(".mainmenu ul#primary-menu").slicknav({
		allowParentLinks: true,
		prependTo: '.responsive-menu',
	});
	
	/*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
	jQuery(window).on('scroll', function() {
		if ($(this).scrollTop() > 10) {
			$('.header').addClass("sticky");
		} else {
			$('.header').removeClass("sticky");
		}
	});
	
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
	$('.mainmenu li a, .logo a,.slicknav_nav li a').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 2000);
		   return false;
		  }
		}
	});
	
	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 600) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
	
	/*----------------------------
    START - Slider activation
    ------------------------------ */
	$('.screenshot-wrap').slick({
		autoplay: true,
		dots: true,
		autoplaySpeed: 1000,
		slidesToShow: 3,
		centerPadding: '20%',
		centerMode: true,
		prevArrow: '',
		nextArrow: '',
		responsive: [{

		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			centerPadding: '33.3%'
		  }

		},{

		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			centerPadding: '0'
		  }

		}]
	});
	
		var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
	
	
	var heroSlider = $('.hero-area-slider');
	heroSlider.owlCarousel({
		loop:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: true,
		navText: ["<i class='icofont icofont-long-arrow-left'></i>", "<i class='icofont icofont-long-arrow-right'></i>"],
		items: 1,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		mouseDrag: true,
		touchDrag: true,
		responsive:{
			768:{
				mouseDrag: false,
				touchDrag: false,
			}
		}
	});

	/*----------------------------
    START - Counterup
    ------------------------------ */
	$('.counter').counterUp({
		delay: 20,
		time: 3000
	});
	
	/*----------------------------
    START - Video
    ------------------------------ */
	if($.fn.YTPlayer){
		$(".player").YTPlayer();
	}
	
	/*----------------------------
    START - Switcher animation
    ------------------------------ */
	$('#toggle-switcher').on('click', function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('#switch-style').animate({'right':'-300px'});
		}else{
			$(this).addClass('open');
			$('#switch-style').animate({'right':'0'});
		}
	});
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	
	
	/*----------------------------
    START - WOW JS animation
    ------------------------------ */
	new WOW().init();

}(jQuery));
jQuery('document').ready(function($){
  $('.dropdown__top').click(function(){
    if ($(this).parent(".dropdown").hasClass("open")) {
      $(this).parent(".dropdown").removeClass("open");
      $(this).siblings(".dropdown__btm").slideUp(500);
    } else {
      $(".dropdown").removeClass("open");
      $(".dropdown .dropdown__btm").slideUp(500);
      $(this).parent(".dropdown").addClass("open");
      $(this).siblings(".dropdown__btm").slideDown(500);
    }
  })
});
		    	function huruf(a) { 
		  	cekhuruf = /^[a-zA-Z ]+$/; 
		  	return cekhuruf.test(a); 
		  	}		  
		  	function emailc(a) { 
		  	cekemail = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
		  	return cekemail.test(a); 
		  	}		  	
		  	function norekc(a) { 
		  	ceknorek = /^[0-9]*$/;
		  	return ceknorek.test(a); 
		  	}		  	
		  $('#b1').on('click', function() {
		  	var nama=$("#nama").val();
		  	var email=$("#email").val();		 
		  	if(nama == '') {
		  		$(".na").html("Nama Harus Di Isi").show().fadeOut(4000);
		  	} else if(nama.length <= 4) {
		  		$(".na").html("Nama Minimal 5 Karakter").show().fadeOut(4000);
		  	} else if(!huruf(nama)) {
		  		$(".na").html("Hanya Boleh Di Isi Dengan Huruf").show().fadeOut(4000);
		  	} else if(email == '') {
		  		$(".em").html("Email Harus Di Isi").show().fadeOut(4000);
		  	} else if(!emailc(email)) {
		  		$(".em").html("Email Tidak Valid").show().fadeOut(4000);
		  	} else {
	$('#f1').hide();
	$('#f2').fadeIn(1000);
		  	}
});
$('#b2').on('click', function() {
	var provider=$("#provider").val();
	var nominal=$("#nominal").val();
	var nomerpengirim=$("#nomerpengirim").val();
	
	if(provider == '') {
		  		$(".pr").html("Provider Harus Di Isi").show().fadeOut(4000);
		  	} else if(nominal == '') {
		  		$(".nm").html("Nominal Harus Di Isi").show().fadeOut(4000);
		  	} else if(nomerpengirim == '') {
		  		$(".nmp").html("Nomer Pengirim Pulsa Harus Di Isi").show().fadeOut(4000);
		  	} else if(nomerpengirim.length <= 9) {
		  		$(".nmp").html("Nomer Minimal 10 Angka").show().fadeOut(4000);
		  	}
	else {
	$('#f1').hide();
	$('#f2').hide();
	$('#f3').fadeIn(1000);
	}
});



function validasi()
    {
  var bank=$("#bank").val();
	var pemilik=$("#pemilik").val();
	var norek=$("#norek").val();
        
        if (bank==null || bank==""){
         $(".ba").html("Nama Bank Harus Di Isi").show().fadeOut(4000);
          return false;
          };
          if(pemilik == '') {
		  		$(".pm").html("Nama Pemilik Rekening Harus Di Isi").show().fadeOut(4000);
		  return false;
          };
           if(!huruf(pemilik)) {
		  		$(".pm").html("Hanya Boleh Di Isi Dengan Huruf").show().fadeOut(4000);
		  	return false;
          };
           if(pemilik.length <= 4) {
		  		$(".pm").html("Nama Pemilik Rekening Minimal 5 Karakter").show().fadeOut(4000);
		  	return false;
          };
		  	if(norek == '') {
		  		$(".no").html("Nomer Rekening Harus Di Isi").show().fadeOut(4000);
		  	return false;
          }; if(!norekc(norek)) {
		  		$(".no").html("Nomer Rekening Hanya Boleh Di Isi Dengan Angka").show().fadeOut(4000);
		  	return false;
          }; if(norek.length <= 7) {
		  		$(".no").html("Nomer Rekening Minimal 8 Angka").show().fadeOut(4000);
		  	return false;
          };		  	
     }
function validateForm(form){if(!form.install.checked)
    {$(".ins").html("Harap Di Centang Apabila Sudah Menginstall Whatsapp !").show();return false;}if(!form.setuju.checked)
    {$(".set").html("Apabila Sudah Setuju Dengan Syarat & Ketentuan, Silahkan Centang Box Di Samping").show();return false;}else{return true;}}
$(document).ready(function() { 
$( "#bank" ).select2({ 
theme: "bootstrap", 
width: '100%',
language: { noResults: function (params) { return "Nama Bank Tidak Di Temukan"; } }
 });
});
function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp ' + rupiah : '');
}

$(document).on('keyup', '.nominal', function(e) {
	let nominal = formatRupiah($(this).val(), 'Rp ');
    $(this).val(nominal);
})
$(function() {

$('.tselkal').on('submit', function(e) {
    e.preventDefault();
    		$('.tsel').hide();
	$('.load1').show();
    setTimeout(function() {
       $('.load1').hide();
       $('.tsel').show();
   }, 1100);
    $.ajax({
        type: "POST",
       url: "kalkulator.php",
       data: $(this).serialize(),
        success: function(data) {
                $('.tsel').html(data);
            },
        error: function() {
            alert('Error');
        }
    });
    return false;
});
$('.razerkal').on('submit', function(e) {
    e.preventDefault();
    		$('.razer').hide();
	$('.load1').show();
    setTimeout(function() {
       $('.load1').hide();
       $('.razer').show();
   }, 1100);
    $.ajax({
        type: "POST",
       url: "kalkulator.php",
       data: $(this).serialize(),
        success: function(data) {
                $('.razer').html(data);
            },
        error: function() {
            alert('Error');
        }
    });
    return false;
});
$('.trikal').on('submit', function(e) {
    e.preventDefault();
    		$('.tri').hide();
	$('.load1').show();
    setTimeout(function() {
       $('.load1').hide();
       $('.tri').show();
   }, 1100);
    $.ajax({
        type: "POST",
       url: "kalkulator.php",
       data: $(this).serialize(),
        success: function(data) {
                $('.tri').html(data);
            },
        error: function() {
            alert('Error');
        }
    });
    return false;
});
$('.xlkal').on('submit', function(e) {
    e.preventDefault();
    		$('.xl').hide();
	$('.load1').show();
    setTimeout(function() {
       $('.load1').hide();
       $('.xl').show();
   }, 1100);
    $.ajax({
        type: "POST",
       url: "kalkulator.php",
       data: $(this).serialize(),
        success: function(data) {
                $('.xl').html(data);
            },
        error: function() {
            alert('Error');
        }
    });
    return false;
});
$('.isatkal').on('submit', function(e) {
    e.preventDefault();
    		$('.isat').hide();
	$('.load1').show();
    setTimeout(function() {
       $('.load1').hide();
       $('.isat').show();
   }, 1100);
    $.ajax({
        type: "POST",
       url: "kalkulator.php",
       data: $(this).serialize(),
        success: function(data) {
                $('.isat').html(data);
            },
        error: function() {
            alert('Error');
        }
    });
    return false;
});
});
$('.kecoaterbank').on('click', function() {
	$('#result').hide();
	$('#load').show();
    setTimeout(function() {
       $('#load').hide();
       $('#result').show();
   }, 1100);
});
$('#rate').submit(function() {
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function(data) {
                $('#result').html(data);
            }
        })
        return false;
    });
$(document).ready(function() {
  $('select').niceSelect();
});
$('#sk').modal('show');
$(document).on('keyup', '.paypal', function(e) {
	let nominal = format($(this).val());
    $(this).val(nominal);
})
    var format = function(num){
      var str = num.toString().replace("", ""), parts = false, output = [], i = 2, formatted = null;
      if(str.indexOf(".") > 0) {
        parts = str.split(".");
        str = parts[0];
      }
      str = str.split("").reverse();
      for(var j = 0, len = str.length; j < len; j++) {
        if(str[j] != ",") {
          output.push(str[j]);
          if(i%3 == 0 && j < (len - 2)) {
            output.push(",");
          }
          i++;
        }
      }
      formatted = output.reverse().join("");
      return(formatted + (parts ? "." + parts[1].substr(0, 2) : ""));
    };
    setTimeout(function(){ 
 $('.fixed').addClass('show');
 },2000);
 !function(){var t,e;t=function(){!function(){for(var t=document.querySelectorAll("img.lazyestload"),e=t.length;e--;){var r=window.innerHeight,n=t[e].getBoundingClientRect(),a=n.top-r,i=n.bottom;if(a<=100&&-100<=i){if(t[e].getAttribute("data-src")&&(t[e].src=t[e].getAttribute("data-src")),t[e].getAttribute("data-srcset")&&(t[e].srcset=t[e].getAttribute("data-srcset")),"PICTURE"===t[e].parentElement.tagName)for(var o=t[e].parentElement.querySelectorAll("source"),s=o.length;s--;)o[s].srcset=o[s].getAttribute("data-srcset");t[e].addEventListener("load",function(){this.classList.remove("lazyestload")})}}}()},window.addEventListener("scroll",function(){clearTimeout(e),e=setTimeout(t,200)}),t()}();