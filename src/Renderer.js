

export class Renderer {
    
    constructor(spaceship, myBullets)  
    {
        this.myBullets = myBullets;
        this.mySpaceship = spaceship;
        this.Spaceship = $( '#main_wrapper #spaceship' );
    }
    
    update() {
        if( typeof this.Spaceship !== "undefined" ) this.updateSpaceship();
        if( typeof this.myBullets !== "undefined" && this.myBullets.length > 0 ) this.updateBullets();
        console.log(this.myBullets);
    }
    
    updateSpaceship() {
        
 

        this.Spaceship.css({left: this.mySpaceship.Position.X+'px'});
        this.Spaceship.css({top: this.mySpaceship.Position.Y+'px'});

        
        // Mit folendendem Code schwenkt das Raumschiff entweder nach links oder nach rechts. Die CSS-Formatierung haben wir bereits vorbereitet
        if( this.mySpaceship.DirectionH == 1 ){
            this.Spaceship.attr( 'data-direction', 'right' );
        } else if( this.mySpaceship.DirectionH == -1 ){
            this.Spaceship.attr( 'data-direction', 'left' );
        } else if( this.mySpaceship.DirectionH == 0 ){
            this.Spaceship.attr( 'data-direction', '' );
        }
    }
    updateBullets() {
        
        for( var i=0; i < this.myBullets.length; i++ ) {
            var $Bullet = $( '#bullet_'+this.myBullets[ i ].ID );
            if( $Bullet.length ) {
                if( this.myBullets[ i ].Position.Y >= -200 ) {
                    $Bullet.css({ 
                        'top' : this.myBullets[ i ].Position.Y+'px',
                        'left' : this.myBullets[ i ].Position.X+'px'
                    });
                }
            }
            else {
                $( '#main_wrapper' ).append( '<div id="bullet_'+this.myBullets[ i ].ID+
                    '" class="bullet" data-type="'+this.myBullets[ i ].Type.toLowerCase()+
                    '" style="left: '+( this.myBullets[ i ].Position.X - 1 )+'px; top: '+
                    (this.myBullets[ i ].Position.Y - 18 )+'px;"></div>'
                );
            }
        }
        
    }
}


