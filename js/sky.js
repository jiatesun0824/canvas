(function (window) {
  var count = 0;

  function sky(option) {
    this.context = option.context;
    this.img = option.img;
    this.x = option.x||0;
    this.y = option.y||0;
    this.sheep= option.sheep||2
    this.sheepA=option.sheepA||0.01
    count++ //进来几次表明声明了几张照片；
  }
   sky.prototype = {
      draw: function () {
        this.context.drawImage(this.img, this.x, this.y)
      },
      update: function () {
        this.x -= this.sheep;
        this.sheep+=this.sheepA;
        if (this.x <= -this.img.width) {
          this.x += this.img.width * count
        }
      }
    }
  window.sky = sky;
})(window)