// event pada saat di klik
$('.page-scroll').on('click', function (e) {
    //ambil isi href
    var href= $(this).attr('href');
    //tangkap elemen ybs
    var elemenHref=$(href);;
    //pindahkan scroll
    $('body').animate({ scrollTop:elemenHref.offset.top -50
    }, 1000, 'swing');
})