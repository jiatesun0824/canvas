(function (window){
  var count=0;
function land(option){
   this.context=option.context;
   this.x=option.x||0;
   this.y=option.y||0;
   this.img=option.img;
   this.sheep=option.sheep||2;
   this.sheepA=option.sheepA||0.01
   count++//记录创建图片的张数，进行计算位置；
}
 land.prototype={
     draw:function(){
       this.context.drawImage(this.img, this.x, this.y);
     },
     update:function(){
       this.x-=this.sheep;
       this.sheep+=this.sheepA
       if(this.x<=-this.img.width){
         this.x+=this.img.width*count;
        // this.x=this.context.canvas.width
         console.log(1)
       }
     }
   }
window.land=land
})(window)