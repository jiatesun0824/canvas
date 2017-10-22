 function util(imgSrc,callback){
        var imgObj={};
         var count=0;
          var index=0;
        for(var key in imgSrc){
          index++;
          imgObj[key]=new Image();
          imgObj[key].src=imgSrc[key];       
          imgObj[key].onload=function(){
            count++;
            if(count>=index){
              callback(imgObj)
            }
          }
        }
 }