// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded.
$(document).ready(function(){
    //alert("It is working!");

    // Prevent a page reload with the event.preventDefault() function.
    $('.readless a, .readmore a, .readmore-sidebar a, .readless-sidebar a, .line, .closebtn').click(function(event){
        event.preventDefault();
    });

    // Side Navigation Menu
    $('div .line').click(function(){
        $('#mySidenav').css("width","190px");
    })
    $('#mySidenav .closebtn').click(function(){
        $('#mySidenav').css("width","0");
    })

    // If user clicks "Read More" hide button and show addtl text section
    $('#article1 p.readmore').click(function() {
        $('#article1 p.hide').slideDown();
        $('#article1 .readmore').hide();
    })
    $('#sidebar p.readmore-sidebar').click(function(){
        $('#sidebar p.hide').slideDown();
        $('#sidebar .readmore-sidebar').hide();
    })

    // If user clicks "Read Less" hide addtl text section and show "Read More" button
    $('#article1 p.readless').click(function() {
        $('#article1 p.hide').slideUp();
        $('#article1 .readless').hide();
        $('#article1 .readmore').show();
    })
    $('#sidebar p.readless-sidebar').click(function() {
        $('#sidebar p.hide').slideUp();
        $('#sidebar .readless-sidebar').hide();
        $('#sidebar .readmore-sidebar').show();
    })

    // Show Pop-up alert if user clicks external links
    $('.externalLink').click(function(){
        var extURL = $('.externalLink').attr("href");
        console.log(extURL);
        alert("You will now be redirected to an external link. URL: " + extURL)
    })
    
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

    // Copyright - Current Year
    var currentYear = (new Date).getFullYear();
    $('#copyrightCurYr').html(currentYear);

});