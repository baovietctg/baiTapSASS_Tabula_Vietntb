$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    
    if (scroll > 150) {
        $("#tabulaHeader").addClass("navbar-fixed");  //khi scroll thì add thêm class navbar-fixed vào thẻ header
        $("#tabulaHeader").removeClass("fixed-top");
        $(".nav-item").addClass("navbar-mini");
        document.querySelector("#logo-vietntb").style.display = "none";

    } else {
        $("#tabulaHeader").addClass("fixed-top");
        $("#tabulaHeader").removeClass("navbar-fixed");
        $(".nav-item").removeClass("navbar-mini");
        document.querySelector("#logo-vietntb").style.display = "inline";
    }
});