export class Bullet {
    constructor( args ) {
        args = args || {};
        
        this.Destroyed = false;
        
        // Die ID des Projektils, um gleich die Bewegung des HTML-Tags zu steuern
        if( typeof args.ID !== "undefined" )
            this.ID = args.ID;
        else
            this.ID = myBullets.length;
        
        // Der Schaden, der verursacht wird, wenn das Projektil auf einen Gegner oder einen Meteoriten trifft
        if( typeof args.Damage !== "undefined" ) this.Damage = args.Damage;
        else this.Damage = 1;
        
        // Die Geschwindigkeit in Pixel
        if( typeof args.Speed !== "undefined" ) this.Speed = args.Speed;
        else this.Speed = 2.5;
        
        // Wird später wichtig, sobald die Alien-Schiffe implementiert werden
        if( typeof args.Type !== "undefined" ) this.Type = args.Type;
        else this.Type = 'Player';
        
        // Die Position des Projektils
        this.Position = { X: -100, Y: -100, W: 4.5, H: 16.5 };
        if( typeof args.Position !== "undefined" ) {
            if( typeof args.Position.X !== "undefined" )
                this.Position.X = args.Position.X;
            if( typeof args.Position.Y !== "undefined" )
                this.Position.Y = args.Position.Y;
            if( typeof args.Position.W !== "undefined" )
                this.Position.W = args.Position.W;
            if( typeof args.Position.H !== "undefined" )
                this.Position.H = args.Position.H;
        }
        
        // Hier wird das Projektil zum Main-Wrapper hinzugefügt. Zudem wird eine initiale Animation gesetzt, die nach einer Sekunde entfernt wird. Den Fading-Effekt haben wir bereits in der CSS-Formatierung gesetzt, dadurch bekommen wir eine bessere Performance, als z.B. durch eine jQuery-Animation
        if( this.Position.X != -100 && this.Position.Y != -100 ) {
            $( '#main_wrapper' ).append( '<div class="bullet_shot" data-type="'+this.Type.toLowerCase()+'" style="left: '+( this.Position.X - 13 )+'px; top: '+( this.Position.Y - 13 )+'px;"></div>' );
            $( '#main_wrapper .bullet_shot:last-of-type' ).delay( 1000 ).queue( function() { $(this).remove(); } );
        }
        
    }
    
    update() {
        this.move();
    }
    move() {
        
        // Hier wird die Bewegungsgeschwindigkeit zur Position abgezogen, da das Projektil nach oben geschossen wird
        this.Position.Y -= this.Speed;
        
    }
    
}