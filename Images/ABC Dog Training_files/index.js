// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded.
$(document).ready(function(){
    //alert("It is working!");

    // Prevent a page reload with the event.preventDefault() function.
    $('a').click(function(event){
        event.preventDefault();
    });

    // If user clicks "Read More" hide button and show addtl text section
    $('p.readmore').click(function() {
        $('p.hide').slideDown();
        $('.readmore').hide();
    });
    
    // If user clicks "Read Less" hide addtl text section and show "Read More" button
    $('p.readless').click(function() {
        $('p.hide').slideUp();
        $('.readless').hide();
        $('.readmore').show();
    });
    
    
    // Change Facebook Logo on Hover
    $('footer #facebookLogo img').hover(function() {
        $(this).attr('id','fbookHover');
        $(this).attr('src','images/facebookLogo_hover.png');
    }, function() {
        $(this).attr('id','fbookGray');
        $(this).attr('src','images/facebookLogo.png');
    });

    // Change Email Logo on Hover
    $('footer #emailLogo img').hover(function() {
        $(this).attr('id','emailHover');
        $(this).attr('src','images/emailLogo_hover.png');
    }, function() {
        $(this).attr('id','emailGray');
        $(this).attr('src','images/emailLogo.png');
    });

    //gallerySpotlight
    var slideIndex = 0;
    carousel();
    
    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1} 
        x[slideIndex-1].style.display = "block"; 
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }
});