// Function on load
function initService(){

    //Variable Configuration 
    var width = 820;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $leftArrow = $('#leftArrow');
    var $rightArrow = $('#rightArrow');

    // Create a "class" attribute
    var $slide = document.getElementsByTagName('li');

    function startSlider(){
        
        // Left Arrow
        $leftArrow.on('click', function(){
            if(currentSlide === $slide.length){
                currentSlide = 1;
                $slideContainer.animate({'margin-left': 0}, animationSpeed);
            }
            else{
                $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
                    currentSlide++;
                });
            };
        });

        // Right Arrow
        $rightArrow.on('click', function(){
            if(currentSlide === 1){
                currentSlide = $slide.length;
                $slideContainer.animate({'margin-left': '-' + (($slide.length -1) * width)}, animationSpeed);
            }
            else{
                $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function(){
                    currentSlide--;
                });
            }
        });
    }
    startSlider();
}

window.onload=initService;