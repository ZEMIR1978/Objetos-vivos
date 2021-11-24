class Box
  {
    constructor()
    {
      this.x =100;
      this.y = 200
      this.w = 50;
      this.h = 50;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    //escribir la función para establecer ancho de box (caja)
   with(l){
     this.w = l
     
   }
   speed(s){
     this.y = this.y + s;

   }
   
  }

  
