let shop = (function () {
    let data = null;
    let navList = document.querySelectorAll('.navbar-nav .nav-item')
    let productBox = document.querySelector('.productBox')
    function getData() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', './json/product.json', false)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                data = JSON.parse(xhr.responseText)
                
            }
        }
        xhr.send(null)
    }
    let fn = function () {
        let str = ``;
        data.forEach(function (item) {
            let {
                id,
                title,
                price,
                time,
                hot,
                img 
            } = item;
            str += `<div class="card" data-price="${price}" data-time="${time}" data-hot="${hot}">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${hot}</p>
            <p class="card-text">${price.toFixed(2)}</p>
            <p class="card-text">${time}</p>
           <a href="#" class="btn btn-primary">立即购买</a>
           </div>
           </div>`
        })
        productBox.innerHTML = str
    }

    let clickBtn = function () {
        navList = Array.from(navList)
        navList.forEach(function (item) {
            item.flag = -1
            item.onclick = function () {
                this.flag *= -1
                pai = this.getAttribute('data-pai')
                console.log(pai)
                data.sort((a, b)=> {
                    a = a[pai]
                    b = b[pai]
                    if (pai === 'time') {
                        a = a.replace(/-/g,'')
                        b = b.replace(/-/g,'')
                    }
                   return (a-b)*this.flag
                    
                })
                fn()
            }
        })
    }
    return {
        init() {
            getData();
                fn();
                clickBtn();
        }
    }

})()
shop.init()