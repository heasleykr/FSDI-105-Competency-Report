// Function on load
function initService(){

    // Cache DOM
    var $cat5 = $('#cat5');
    var $cat7 = $('#cat7');
    var $dog1 = $('#dog1');
    var $dogD = $('#dogDress');

    var $shower = $('#shower');
    var $hair = $('#hairCut');
    var $toe = $('#toeNail');
    var $full = $('#fullService');

    var $showerB = $('#shower-btn');
    var $hairB = $('#hair-btn');
    var $toeB = $('#toe-btn');
    var $fullB = $('#fullservice-btn');

    var $showerI = $('#showerInfo');
    var $hairI = $('#hairInfo');
    var $toeI = $('#toeInfo');
    var $fullI = $('#fullInfo');
    
    //Hide photos and service description until hover
    $cat5.hide();
    $cat7.hide();
    $dog1.hide();
    $dogD.hide();

    $showerI.hide();
    $hairI.hide();
    $toeI.hide();
    $fullI.hide();


    /****************Shower*******************/
    //Hide other serivices on hover & display photo
    //Mouse Hover Event
    $shower.on('mouseenter', function(){
    
        // Expand and display photo & text
        $cat5.show();
        $showerB.css({'color': 'black'});
    
    });
    // Mouse LEAVES after a hover
    $shower.on('mouseleave', function(){

        $cat5.hide();
        $showerB.css({'color': 'white'});

    });
    $showerB.on('click', function(){

        //show details on click!
        $showerI.show(); 
        $showerB.css({'color': 'black'});

        $hairI.hide();
        $toeI.hide();
        $fullI.hide();
    });

    /****************Hair Cut*******************/
    //Hide other serivices on hover & display photo
    //Mouse Hover Event
    $hair.on('mouseenter', function(){

        // Expand and display photo
        $cat7.show();
        $hairB.css({'color': 'black'});

    });
    // Mouse LEAVES after a hover
    $hair.on('mouseleave', function(){
        
        $cat7.hide();
        $hairB.css({'color': 'white'});

    });
    $hairB.on('click', function(){

        //show details on click!
        $hairI.show(); //show details on click!
        $hairB.css({'color': 'black'});

        $showerI.hide();
        $toeI.hide();
        $fullI.hide();

    });

    /****************Toe Nail*******************/
    //Hide other serivices on hover & display photo
    //Mouse Hover Event
    $toe.on('mouseenter', function(){

        // Expand and display photo
        $dog1.show();
        $toeB.css({'color': 'black'});

    });
    // Mouse LEAVES after a hover
    $toe.on('mouseleave', function(){
      
        $dog1.hide();
        $toeB.css({'color': 'white'});

    });
    $toeB.on('click', function(){

        //show details on click!
        $toeI.show(); 
        $toeB.css({'color': 'black'});

        $showerI.hide();
        $hairI.hide();
        $fullI.hide();
    });

    /****************Full Service*******************/
    //Hide other serivices on hover & display photo
    //Mouse Hover Event
    $full.on('mouseenter', function(){
    
        // Expand and display photo
        $dogD.show();
        $fullB.css({'color': 'black'});

    });
    // Mouse LEAVES after a hover
    $full.on('mouseleave', function(){
        
        $dogD.hide(); //hide nav on click!
        $fullB.css({'color': 'white'});

    });
    $fullB.on('click', function(){

        //show details on click!
        $fullI.show(); 
        $fulB.css({'color': 'black'});

        $showerI.hide();
        $hairI.hide();
        $toeI.hide();
    });
}

window.onload=initService;