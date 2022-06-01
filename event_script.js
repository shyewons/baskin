$(".search-icon").click(function() {
    $(".search-area").toggleClass("on");
    $(".search-background").toggleClass("on");
    $(".search-icon").toggleClass("close");

    let allHeight = $(".body-container").height() - 200;
    $(".search-background").css({height:allHeight});

});

$(".family-site").click(function() {
    $(".ab").toggleClass("on");
    $(".fa-angle-up").toggleClass("fa-angle-down");
});

$(".fam-td").click(function() {
    $(".fa-solid").toggleClass("fa-angle-down")
});



// 탭메뉴

$(".event-btn").click(function(e) {
    e.preventDefault();
    $(".event-list").css({"display":"none"});

    if($(this).text() == "all") {
        $(".event-list").css({"display":"block"});
    }

    for(let i=0; i < $(".event-btn").length; i++) {
        $(".event-btn")[i].classList.remove("on");
        $(".event-btn")[i].firstChild.classList.remove("on");
    }
    
    this.classList.toggle("on");
    this.firstChild.classList.toggle("on");

    let name = $(this).text();
    $("."+name).css({"display":"block"});
});
