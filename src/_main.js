import {Input} from "./Eingabe.js"
import {Spaceship} from "./Spaceship.js"
import {Renderer} from "./Renderer.js"
import {Bullet} from "./Bullet.js";




var myInput;
var mySpaceship;
var myRenderer;
var Field={
    width: 600,
    height: 600
};
var myBullets;


(function($)
{
    $(document).ready(function()

    {  
      
       myBullets=[];
    var $spaceship = $('#spaceship');
    var spaceshipArguments ={
        Position: 
        {
            X: $spaceship.position().left,
            Y: $spaceship.position().top
        }
        
    };
        myInput = new Input();
        mySpaceship = new Spaceship(spaceshipArguments,myInput,Field, myBullets);
        myRenderer = new Renderer(mySpaceship, myBullets);
        
        

        $( '#main_wrapper' ).css({ 'width' : Field.width+
        'px', 'height' : Field.height+'px' });

        
        
        window.requestAnimationFrame( mainLoop );    
    
    });
    var lastRender = 0.0;
    function mainLoop(timestamp)
    {
        
        var progress = timestamp - lastRender;
        lastRender = timestamp;
        mySpaceship.update();
        console.log(progress);
        $( "#test_output" ).html( progress );
        
        //Die for-Schleife ruft die update-Funktionen der Projektile auf
        for(var i=0; i<myBullets.length;i++)
        {
            myBullets[i].update();
        }

        if(typeof myRenderer !== "undefined") 
        {   
            //console.log("Rendering");
            myRenderer.update();
        }
        if(typeof mySpaceship !== "undefined")
        {
        //console.log("Spaceship_update");
         mySpaceship.update();
        }

       

        window.requestAnimationFrame(mainLoop);
    }
     
     
    
})(jQuery);

