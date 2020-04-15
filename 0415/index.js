let flow=(function(){
    let data=null
    let coloums= Array.from(document.querySelectorAll('.coloum'))
    let getData = function () {
        let xhr = new XMLHttpRequest;
        xhr.open('get', './json/data.json', false)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                data = JSON.parse(xhr.responseText)
            }
        }
        xhr.send(null)
    }
    let bindData=function(){
        data=data.map(function(item){
          let width = item.width;
          let height = item.height;
          item.width=230
          height = height/(width/230)
          item.height=height     
         return item
        })
        for(let i=0;i<data.length;i+=3){
            coloums.sort(function(a,b){
                return b.offsetHeight-a.offsetHeight
            })
            group = data.slice(i,i+3)
            group.sort(function(a,b){
                return a.height-b.height
            })
           
            group.forEach(function(item,index){
                let{
                 pic,
                link,
                title,
                height
                }=item
                let card = document.createElement('div');
                card.className='card';
                card.innerHTML=` <a href="${link}">
                <div class="lazyImageBox" style='height:${height}px'>
                  <img src=" alt="" data-image='${pic}'>
                </div>
                <p>${title}
                </p>
              </a>
           
                `
              coloums[index].appendChild(card)
            })
        }
        lazyFunc()
    }
    let lazyFunc = function () {
        let lazyImageBox = document.querySelectorAll('.lazyImageBox');
        [].forEach.call(lazyImageBox, item => {
            let isLoad = item.getAttribute('isLoad')
            if (isLoad) {
                return
            }
            let B = utils.offset(item).top + item.offsetHeight / 2

            let A = document.documentElement.scrollTop + document.documentElement.clientHeight
            if (A >= B) {
                lazyImg(item)
            }

        })
    }
    let lazyImg = function (img) {
        let img1 = img.querySelector('img')
        let dataImage = img1.getAttribute('data-image')
        let tempImage = new Image;
        tempImage.src = dataImage
        tempImage.onload = () => {
            img1.src = dataImage;
            //utils.setCss(img1,'opacity',1)
            utils.css(img1, 'opacity', 1)
        }
        img1.removeAttribute('data-image')
        dataImg = null
        img.setAttribute('isLoad', 'true')
    }
    
    let flag 
    let showMore = function(){
       let html = document.documentElement
       if(html.scrollTop+html.clientHeight*1.5>=html.offsetHeight){
           if(flag){
               return
           }
           flag=true
           getData()
           bindData()
           lazyFunc()
           flag=false
       }
    }
 
    return {
        init(){
      getData()
      bindData()
      lazyFunc()
      window.onscroll=function(){
        lazyFunc()
        showMore()
      }
        }
    }
})()
flow.init()