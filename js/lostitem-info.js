
fetch('./json/lostItem.json')
.then(res => { return res.json() })
.then(data => {

    data.items.forEach(function (obj, k) {

        const lostBox = document.querySelector('.nnn');

        lostBox.innerHTML += `
        <li class="sspace">
        <a href="#">
            <img src="${obj.img}">
            <div class="ab">
                <p class="name">${obj.name}</p><br>
                <p>${obj.place}</p>
            </div>
        </a>
    </li>
        `
    })


    const itemClick = document.querySelectorAll('.nnn > li > a');

    itemClick.forEach(function(v,k){
        v.onclick = function(e){
            const txt = v.querySelector('.name').innerText;
            for(let k2 in data.items){
                if(txt == data.items[k2].name){
                    sessionStorage.setItem("click", k2);
                    location.href = 'lostitem-detail.html';
                    break;
                }else{
                    e.preventDefault();
                }

            }
        }
    })


})