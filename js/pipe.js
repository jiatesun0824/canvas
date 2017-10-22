(function(window){
  var count=0;//计算图片的张数，用来计算图片放置位置
    function pipe(option){
      this.context=option.context;
      this.imgDown=option.imgDown;
      this.imgUp=option.imgUp;
      this.x=option.x||300;
      this.imgDowny=option.imgDowny||0;
      this.imgUpy=option.imgUpy||0;
      this.sheep=option.sheep||4;
      this.sheepA=option.sheepA||0.01;
      this.imgWidth=100;
      this.imgKg=150;
      this.maxHeight=200;
      this.minHeight=50;
      this.getRandom();
      count++
      // console.log(count);
    }
    pipe.prototype={
      getRandom:function(){
        var random=Math.random()*(this.maxHeight-this.minHeight)+this.minHeight;
        this.imgDowny=random-this.imgDown.height;
        this.imgUpy=random+this.imgKg;
      },
      draw:function(){
        this.context.drawImage(this.imgDown,this.x,this.imgDowny);
        this.context.drawImage(this.imgUp,this.x,this.imgUpy);
        this.context.rect(this.x,this.imgDowny,this.imgDown.width,this.imgDown.height)
        this.context.rect(this.x,this.imgUpy,this.imgUp.width,this.imgUp.height)
        // this.context.strokeStyle='red';
        // this.context.stroke()//为何加了之后会有问题
      },
      update:function(){
        this.x-=this.sheep;
        this.sheep+=this.sheepA;
        if(this.x<=-this.imgDown.width-100){
          this.x+=(this.imgDown.width+100)*count;
         this.getRandom();
         
        }
      },
    }

  window.pipe=pipe
})(window)