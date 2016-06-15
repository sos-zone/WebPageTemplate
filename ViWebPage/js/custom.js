$(document).ready(function(){
    new GMaps({
      div: '#gmap',
      lat: -12.043333,
      lng: -77.028333
    });
    
    
    
    
    //owl carosal 
    $("#owl-demo").owlCarousel({
        navigation: true,
        navigationText: [
          "<i class='fa fa-chevron-left icon-white'></i>",
          "<i class='fa fa-chevron-right icon-white'></i>"
          ],
        pagination : false,
        items : 3,
        autoPlay : true,
    });
});