import {Bullet} from "./Bullet.js"

export class Spaceship {

    constructor( args, input, field, bullet)  {
        this.myInput = input;
        this.Field = field;
        this.myBullets = bullet;
        
        
        args = args || {};
      
        this.Position = { X: 0, Y: 0, W: 49.5, H: 37.5 };
        if( typeof args.Position !== "undefined" ) 
        {
            if( typeof args.Position.X !== "undefined" )
            {
                this.Position.X = args.Position.X;
            }
            if( typeof args.Position.Y !== "undefined" )
            {
                this.Position.Y = args.Position.Y;
            }
            if( typeof args.Position.W !== "undefined" )
            {
                this.Position.W = args.Position.W;
            }
            if( typeof args.Position.H !== "undefined" )
            {
                this.Position.H = args.Position.H;
            }
            
        }
        this.shootTimer=0;
        this.DirectionH = 0;
        
        // Die folgenden Variablen werden in kommenden Beiträgen näher erläutert
        if( typeof args.Life !== "undefined" )
            this.Life = args.Life; 
        else this.Life = 5;
        
        if( typeof args.Speed !== "undefined" )
            this.Speed = args.Speed;
        else this.Speed = 1;
        
        if( typeof args.Damage !== "undefined" )
            this.Damage = args.Damage;
        else this.Damage = 1;
    }
    
    update() {
      //  Die Update-Funktion wird verwendet, um die Funktionen move() und shoot() auszuführen. Die Abfrage, ob die jeweilige Taste getätigt wurde wird von der Funktion selbst ausgeführt. Diese Funktion wird in der Main-Loop des Spiels aufgerufen, da diese Funktion kontinuierlich ausgeführt werden soll
        if(typeof this.myInput !== "undefined"){
            this.move();
            this.shoot();
        }
        // this.move();
        if( this.shootTimer > 0 ) this.shootTimer--;
    }
    move() {

        //console.log("init left da?" + this.myInput.Arrows.Left);
       // Überprüfe, ob das Raumschiff durch einen Fehler außerhalb des Spielfelds liegt
        if( this.Position.X < 0 )
        {
            this.Position.X != 0;
        }
        else if( this.Position.X + this.Position.W > this.Field.width )
        {
            this.Position.X = this.Field.width - this.Position.W;
        }
        if( this.Position.Y < 0 )
        {
            this.Position.Y = 0;
        }
        else if( this.Position.Y + this.Position.H > this.Field.height )
        {
            this.Position.Y = this.Field.height - this.Position.H;
        }
           
        if( this.myInput.Arrows.Left ) 
        {
            this.Position.X -= 1;
            this.DirectionH = -1;
        }
        else if( this.myInput.Arrows.Right ) 
        {
            this.Position.X += 1;
            this.DirectionH = 1;
        }
        else 
        {
            //console.log("msg: H");
            this.DirectionH = 0;
        }
        
        if( this.myInput.Arrows.Up ) 
        {
            this.Position.Y -= 1;
        }
        else if( this.myInput.Arrows.Down ) 
        {
            this.Position.Y += 1;
        }
        // Hier werden wir die notwendigen Algorithmen zum steuern des Schiffs eintragen
        if(this.myInput.Arrows.Left){/*Fliege nach links*/}
        if(this.myInput.Arrows.Right){/*Fliege nach rechts*/}
        if(this.myInput.Arrows.Up){/*Beschleunige das Raumschiff*/}
        if(this.myInput.Arrows.Down){/*Verlangsame das Raumschiff*/}
    }
    shoot() {
        
        // Hier werden wir die Algorithmen hinterlegen um ein Projektil zu erstellen
       
        if(this.myInput.Space) 
        {
            //Sobald der Timer "0" erreicht hat und die Leertaste betätigt wurde
            //beginnt der Algorithmus, um ein neues Projektil zu erstellen
            if(this.shootTimer <=0)
            {
                //Initiale Position des Projektils
                var bulletPosition=
                {
                    X: this.Position.X + this.Position.W/2,
                    Y: this.Position.Y
                };

                //Abfrage ob ein Projektil außerhalb des Spielfeldes liegt.
                //Wenn ja wird es ersetzt
                var bullet_on_negative=false;
                for(var i=0;i<this.myBullets.length;i++)
                {
                    if(this.myBullets[i].Position.Y<-20)
                    {
                        $('#bullet_ '+this.myBullets[i].ID).remove();
                        this.myBullets[i] = new Bullet({ID: i, Position: bulletPosition});
                        bullet_on_negative=true;
                        break;
                    }
                }

                //Falls mehr Projektile nötig sind, werden diese hier hinzugefügt
                if(!bullet_on_negative)
                {
                    
                    this.myBullets.push(new Bullet({ID: this.myBullets.length, Position: bulletPosition}));

                    
                }
                //Nun wird der resettet. Je >Timer, desto länger benötigt das Schiff zum schießen
                this.shootTimer=80;
            }
        
        }    
    }
}
