/*
draw是绘图函数，
update是动态改变函数，
onclick是点击事件函数

*/


(function(window){//沙箱模式
    var bird=null;
   function Bird(option){
     if(bird){
       return bird;
     }else{
       bird=this
     }
    //  前四个是必须传的参数，后面的值有默认值
     this.context=option.context;//绘图上下文
     this.img=option.img;//图片
     this.h=option.h;//要裁剪的高，也就是每只小鸟的高     
     this.w=option.w;//鸟的宽高让用户自己传进来，因为我们不知鸟有几张
     this.x=option.x||100; //图片要放置的位置
     this.y=option.y||0;//图片要放置的位置
     this.sheep=option.sheep||2;//速度
     this.sheepA=option.sheepA||0.5;//加速度
     this.onclick();//让我们一加载完图片，就拥有了这个事件，不然用户还得自己手动调用这个方法；
     this.index=0;//每调用一猜update，index就会+1，以此来改变图片绘制时截取图片的x坐标,这个起始为0，表示
   }
   Bird.prototype={
     draw:function(){
        this.context.save();
        this.context.translate(this.x+this.w/2,this.y+this.h/2);
        this.context.rotate(Math.PI/60*this.sheep);
        this.context.drawImage(this.img,this.w*this.index,0,this.w,this.h,-this.w/2,-this.h/2,this.w,this.h)
        this.context.restore();
     },
     update:function(){
       this.index++;
       this.index%=3//当index=3的时候，让它变为0，因为图片只有三张的大小，最多只能裁剪两张图片的宽；
       this.y+=this.sheep;//速度的原理是改变图片放置的位置
       this.sheep+=this.sheepA;//每次速度都会加上加速度
     },
     onclick:function(){
       var that=this;
       this.context.canvas.onclick=function(){
           that.sheep=-6//每点击一下，速度变为-7.可以让小鸟向上走一下，因为我们有给sheep设置了加速度，所以很快sheep就又变成正的了,这里的that就是上面保留下来的this
       }
     }
   }


  window.Bird=Bird;
})(window)