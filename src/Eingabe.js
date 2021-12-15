 export class Input {
    constructor(args)
    {
        args=args ||{};
        
        this.Arrows ={};
        this.Arrows.Left=false;
        this.Arrows.Right=false;
        this.Arrows.Up=false;
        this.Arrows.Down=false;
        this.Space=false;
        this.init();
      
    }

    init()
    {
        
        this.trackInputs()
    }

    trackInputs(){
        var _this=this;
        

        $(document).on('keydown',function(e){
            if(e.which == 37) _this.Arrows.Left=true;
            if(e.which == 39) _this.Arrows.Right=true;
            if(e.which == 38) _this.Arrows.Up=true;
            if(e.which == 40) _this.Arrows.Down=true;
            if(e.which == 32) _this.Space=true;
            if($.inArray(e.which, [32,37,38,39,40]) !==-1)
                e.preventDefault()
        });

        $(document).on('keyup',function(e){
            if(e.which == 37) _this.Arrows.Left=false;
            if(e.which == 39) _this.Arrows.Right=false;
            if(e.which == 38) _this.Arrows.Up=false;
            if(e.which == 40) _this.Arrows.Down=false;
            if(e.which == 32) _this.Space=false;
            if($.inArray(e.which, [32,37,38,39,40]) !==-1)
                e.preventDefault()
    })
    }
}