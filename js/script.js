$(document).ready(function() {

  function itemActive() {
    $(this).addClass("feature__list__item--active").siblings().removeClass("feature__list__item--active");
  };
  
  function toggleThatNav() {
    if (menu.hasClass("show-nav")) {
      if (!Modernizr.csstransforms) {
        menu.removeClass("show-nav");
        toggle.removeClass("show-nav");
        menu.animate({
          right: "-=300"
        }, 500);
        toggle.animate({
          right: "-=300"
        }, 500);
      } else {
        menu.removeClass("show-nav");
        toggle.removeClass("show-nav");
      }
      
    } else {
      if (!Modernizr.csstransforms) {
        menu.addClass("show-nav");
        toggle.addClass("show-nav");
        menu.css("right", "0px");
        toggle.css("right", "330px");
      } else {
        menu.addClass("show-nav");
        toggle.addClass("show-nav");
      } 
    }
  }

  function changeToggleClass() {
    toggleIcon.toggleClass("fa-times");
    toggleIcon.toggleClass("fa-bars");
  }

  var feature_li = $(".feature__list > li");
  var nav_icon = $(".nav-icon");
  
  /*
  $(window).scroll(function(){
    nav_icon.css({"color":"#000"});
  })
  */
  var email_submit = $("#submit");

  email_submit.click(function() {
    var name = $("#name");
    var email =$("email_form");
    var message = $("#message");
    var email_submit = $("#submit");
    var data = "Name: " + name.val() + " Email: " + email.val()+ " Message: " + message.val();

    $.ajax({
      type: "POST",
      url: "php.php",
      data: data,
      success: function() {
        alert("Everything fine");
      }
    })
  })

  feature_li.click(itemActive);

  $('li[id^="list__item"]').click(function() {
    $('[id^="list__content"]').hide(); 
      $('#list__content'+this.id.slice(10)).show().addClass("pulse");
  });

  var words = [
      'informatyki',
      'robotyki    ',
      'automatyki ',
      ], i = 0;

  setInterval(function(){
    $('.header__block__word').fadeOut(function() {
        $(this).html(words[i=(i+1)%words.length]).fadeIn();
    });
  }, 4000);

  var wrapper    = $("#site-wrapper"),
    menu       = $(".menu"),
    menuLinks  = $(".menu ul li a"),
    toggle     = $(".nav-toggle"),
    toggleIcon = $(".nav-toggle span");

  $(function() {
    toggle.on("click", function(e) {
      e.stopPropagation();
      e.preventDefault();
      toggleThatNav();
      changeToggleClass();
    });
      // Keyboard Esc event support
    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        if (menu.hasClass("show-nav")) {
          if (!Modernizr.csstransforms) {
            menu.removeClass("show-nav");
            toggle.removeClass("show-nav");
            menu.css("right", "-300px");
            toggle.css("right", "30px");
            changeToggleClass();
          } else {
            menu.removeClass("show-nav");
            toggle.removeClass("show-nav");
            changeToggleClass();
          }
        }
      } 
    });
  });

    $('a[class*=smooth__scroll]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  
});

/* 
Thanks for sharing to Riccardo Zanutta
*/