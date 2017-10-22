(function(window){
function timer(option){
  this.context=option.context;
  this.x=option.x||option.context.canvas.width;
  this.y=option.y||0;
  this.textAlign=option.textAlign||'right';
  this.textBaseline=option.textBaseline||'top';
  this.font=option.font||'20px 微软雅黑';
  this.fontColor=option.fontColor||'green';
  this.start=Date.now();
  this.text='恭喜你，你坚持了0时0分0秒!'
}
timer.prototype={
  draw:function(){
    this.context.textAlign=this.textAlign
    this.context.textBaseline=this.textBaseline
    this.context.font=this.font;
    this.context.fillStyle=this.fontColor;
    this.context.fillText(this.text,this.x,this.y)
  },
  update:function(){
      this.end=Date.now()-this.start;
      var hours=Math.floor(this.end/(60*60*1000));
      var minutes=Math.floor(this.end%(60*60*1000)/(60*1000));
      var seconds=this.end%(60*1000)/1000;
      this.text='恭喜你，你坚持了'+hours+'时'+minutes+'分'+seconds+'秒！'
  }
}

  window.timer=timer
})(window)