$(document).ready(function() {
    $(window).scroll(function() {
    if($(document).scrollTop() > 180) {
        $('.header').addClass('nav-xl');
    }
    else {
    $('.header').removeClass('nav-xl');
    }
  });
});


 $(document).ready(function() {
    $(".member-btn").click(function() {
        $(".member").toggleClass("member-open", 500)

    })
})
  $(document).ready(function() {
    $(".alumni-btn").click(function() {
        $(".alumni").toggleClass("alumni-open", 500)

    })
})