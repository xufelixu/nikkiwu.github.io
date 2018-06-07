$("#toggle").click(function () {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});


//Image sorter

// Show all
$('.filter-all').on('click', function() {
    var $this = $(this);
    $('.filter').removeClass('active');
    $this.addClass('active');
    $('.all').removeClass('hide');
});

// Show landscape
$('.filter-landscape').on('click', function() {
    var $this = $(this);
    $('.filter').removeClass('active');
    $this.addClass('active');
    $('.landscape').removeClass('hide');
    $('.urban, .portrait').addClass('hide');
});

// Show urban
$('.filter-urban').on('click', function() {
    var $this = $(this);
    $('.filter').removeClass('active');
    $this.addClass('active');
    $('.urban').removeClass('hide');
    $('.portrait, .landscape').addClass('hide');
});

// Show portrait
$('.filter-portrait').on('click', function() {
    var $this = $(this);
    $('.filter').removeClass('active');
    $this.addClass('active');
    $('.portrait').removeClass('hide');
    $('.landscape, .urban').addClass('hide');
});
