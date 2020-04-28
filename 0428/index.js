(function(){
   let box = document.querySelector('.box') 
   console.log(1)
   let clientX,
       clientY,
       x,
       y,
       flag;
   box.onmousedown=function(e){
      let clientX=e.clientX;
      let clientY=e.clientY;
      x=clientX-box.offsetLeft
      y=clientY-box.offsetTop
      console.log(x,y)
      flag=true
   }
   window.onmousemove=function(e){
       if(flag){
       let ex = e.clientX
       let ey = e.clientY
       let moveX = ex-x
       let moveY = ey-y
       box.style.left=moveX+'px'
       box.style.top=moveY+'px'
   }}
   box.onmouseup=function(){
       flag=false
   }
})()
