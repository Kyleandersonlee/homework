/* let container = document.querySelector('.container'),
    wrapper = container.querySelector('.wrapper'),
    sliderList = container.querySelectorAll('.slider')
    pagination = container.querySelector('.pagination'),
    paginationList=pagination.querySelectorAll('li'),
    changeLeft=container.querySelector('.changeLeft'),
    changeRight=container.querySelector('.changeRight') 
   
   let step = 0,
       interval=1000,
       autoTimer=null
       len = sliderList.length
    function autoMove(){
        
        if(step===(len-1)){
            step=0
            wrapper.style.transitionDuration='0s';
            wrapper.style.left='0px';
            wrapper.clientHeight;
        }
        step++;
        wrapper.style.transitionDuration='0.3s'
        wrapper.style.left=-step*800+'px';
        paginationFocus()
    }
   

    function paginationFocus(){
        [].forEach.call(paginationList,(item,index)=>{
              let tempStep = step;
              tempStep === (len-1)?tempStep=0:null;
              if(index===tempStep){
                  item.className='active'
                  return 
              }
              item.className=''
        })
    }
    autoTimer = setInterval(autoMove,interval)
    container.onmouseenter=function(){clearInterval(autoTimer)}
    container.onmouseleave=function(){autoTimer=setInterval(autoMove,interval)};

    [].forEach.call(paginationList,(item,index)=>{
        item.onclick=function(){
            if(index===step||(index===0)&&(step===(len-1))){
               return 
            }
            step=index;
            wrapper.style.transitionDuration='0.3s'
            wrapper.style.left=-step*800+'px'; 
            paginationFocus()
        }
    })
    changeRight.onclick=autoMove

    changeLeft.onclick=function(){
        
        if(step===0){
        step=len-1;
         wrapper.style.transitionDuration='0s'
        wrapper.style.left=-step*800+'px';
        wrapper.clientWidth
        }
        step--;
        wrapper.style.transitionDuration='0.3s'
        wrapper.style.left=-step*800+'px';
        paginationFocus()
    } */


    let container = $('.container'),
    wrapper = $('.wrapper'),
    sliderList = container.find('.slider'),
    pagination = $('.pagination'),
    paginationList=pagination.find('li'),
    changeLeft=$('.changeLeft'),
    changeRight=$('.changeRight') 
   
   let step = 0,
       interval=1000,
       autoTimer=null,
       len = sliderList.length
       console.log(len)
    function autoMove(){
        if(step===(len-1)){
            step=0
            wrapper.css('transitionDuration','0s')
            wrapper.css('left','0px');
            wrapper.outerHeight();
            
        }
        step++;
        wrapper.css('transitionDuration','0.3s')
        wrapper.css('left',`${-step*800}px`);
         paginationFocus() 
    }
   
   
    function paginationFocus(){
        [].forEach.call(paginationList,(item,index)=>{
              let tempStep = step;
              tempStep === (len-1)?tempStep=0:null;
              if(index===tempStep){
                  item.className='active'
                  return 
              }
              item.className=''
        })
    }
    autoTimer = setInterval(autoMove,interval)
    container.mouseenter(function(){clearInterval(autoTimer)})
    container.mouseleave(function(){autoTimer=setInterval(autoMove,interval)});

    paginationList.each(function(index,item){
       
        item.onclick=function(){
            if(index===step||(index===0)&&(step===(len-1))){
               return 
            }
            step=index;
            wrapper.css('transitionDuration','0.3s')
        wrapper.css('left',`${-step*800}px`);
            paginationFocus()
        }
    }) 
    /* [].forEach.call(paginationList,(item,index)=>{
        item.onclick=function(){
            if(index===step||(index===0)&&(step===(len-1))){
               return 
            }
            step=index;
            wrapper.style.transitionDuration='0.3s'
            wrapper.style.left=-step*800+'px'; 
            paginationFocus()
        }
    })
     */
  

    changeRight.click=autoMove

    changeLeft.click(function(){
        
        if(step===0){
        step=len-1;
        wrapper.css('transitionDuration','0s')
        wrapper.css('left','0px');
        wrapper.outerHeight()
        }
        step--;
        wrapper.css('transitionDuration','0.3s')
        wrapper.css('left',`${-step*800}px`);
        paginationFocus()
    })