const elS2 = document.querySelectorAll('.line div');
const elS2Content = document.querySelectorAll('.flex');

            let num = 0;
            elS2[num].classList.add('on');
            elS2Content[num].classList.add('on');

            elS2.forEach(function(ele,key){
                ele.onclick = function(){
                    elS2[num].classList.remove('on');
                    this.classList.add('on');

                    elS2Content[num].classList.remove('on');
                    elS2Content[key].classList.add('on');

                    num = key;
                }
            });

            


 fetch('./json/notice.json')
 .then(res => { return res.json() })
 .then(data => {
      
    let num = data.items.length+1;
    

     data.items.forEach(function (obj, k) {       

         const careBox = document.querySelector('.flex'),
         aareBox = document.querySelector('.flex:nth-of-type(2)'),
         bareBox = document.querySelector('.flex:nth-of-type(3)'),
         dareBox = document.querySelector('.flex:nth-of-type(4)'),
         eareBox = document.querySelector('.flex:nth-of-type(5)'),
         fareBox = document.querySelector('.flex:nth-of-type(6)');

        num--

         careBox.innerHTML += `
        
        <li>
            <a href="./notice-detail.html">
                <div>
                    <p>${num}</p>
                </div>
                <div class="nth2">
                    <span class="state 
                    ${obj.state == "교육" ? "d" : ""}
                    ${obj.state == "행사" ? "c" : ""}
                    ${obj.state == "채용" ? "a" : ""}
                    ${obj.state == "입찰" ? "b" : ""}
                    ">
                    <p>${obj.state}</p>
                    </span>
                    <p>${obj.text}</p>
                </div>
                <div>
                    <p>${obj.date}</p>
                </div>
                <div>
                    <p>${obj.see}</p>
                </div>
            </a>
        </li>

         `
         if (obj.state == "공지") {
            var seedOfMonth = "공지";
        } else if (obj.state == "교육") {
            var seedOfMonth = "교육";
        } else if (obj.state == "행사") {
            var seedOfMonth = "행사";
        } else if(obj.state == "채용") {
            var seedOfMonth = "채용";
        } else{
            var seedOfMonth = "입찰";
        }

        switch (seedOfMonth) {
            
            case "공지":

                aareBox.innerHTML += `
                <li>
                <a href="./notice-detail.html">
                    <div>
                        <p>${num}</p>
                    </div>
                    <div class="nth2">
                        <span class="state 
                        ${obj.state == "교육" ? "d" : ""}
                        ${obj.state == "행사" ? "c" : ""}
                        ${obj.state == "채용" ? "a" : ""}
                        ${obj.state == "입찰" ? "b" : ""}
                        ">
                        <p>${obj.state}</p>
                        </span>
                        <p>${obj.text}</p>
                    </div>
                    <div>
                        <p>${obj.date}</p>
                    </div>
                    <div>
                        <p>${obj.see}</p>
                    </div>
                </a>
            </li>
                
                
                `
                break;
                case "교육":
                bareBox.innerHTML += `
                
                <li>
                <a href="./notice-detail.html">
                    <div>
                        <p>${num}</p>
                    </div>
                    <div class="nth2">
                        <span class="state 
                        ${obj.state == "교육" ? "d" : ""}
                        ${obj.state == "행사" ? "c" : ""}
                        ${obj.state == "채용" ? "a" : ""}
                        ${obj.state == "입찰" ? "b" : ""}
                        ">
                        <p>${obj.state}</p>
                        </span>
                        <p>${obj.text}</p>
                    </div>
                    <div>
                        <p>${obj.date}</p>
                    </div>
                    <div>
                        <p>${obj.see}</p>
                    </div>
                </a>
            </li>
                
                
                `
                break;
                case "행사":
                dareBox.innerHTML += `
                <li>
                <a href="./notice-detail.html">
                    <div>
                        <p>${num}</p>
                    </div>
                    <div class="nth2">
                        <span class="state 
                        ${obj.state == "교육" ? "d" : ""}
                        ${obj.state == "행사" ? "c" : ""}
                        ${obj.state == "채용" ? "a" : ""}
                        ${obj.state == "입찰" ? "b" : ""}
                        ">
                        <p>${obj.state}</p>
                        </span>
                        <p>${obj.text}</p>
                    </div>
                    <div>
                        <p>${obj.date}</p>
                    </div>
                    <div>
                        <p>${obj.see}</p>
                    </div>
                </a>
            </li>
                
                
                `
                break;
                case "채용":
                eareBox.innerHTML += `
                <li>
                <a href="./notice-detail.html">
                    <div>
                        <p>${num}</p>
                    </div>
                    <div class="nth2">
                        <span class="state 
                        ${obj.state == "교육" ? "d" : ""}
                        ${obj.state == "행사" ? "c" : ""}
                        ${obj.state == "채용" ? "a" : ""}
                        ${obj.state == "입찰" ? "b" : ""}
                        ">
                        <p>${obj.state}</p>
                        </span>
                        <p>${obj.text}</p>
                    </div>
                    <div>
                        <p>${obj.date}</p>
                    </div>
                    <div>
                        <p>${obj.see}</p>
                    </div>
                </a>
            </li>
                
                
                `
                break;
                case "입찰":
                fareBox.innerHTML += `
                <li>
                <a href="./notice-detail.html">
                    <div>
                        <p>${num}</p>
                    </div>
                    <div class="nth2">
                        <span class="state 
                        ${obj.state == "교육" ? "d" : ""}
                        ${obj.state == "행사" ? "c" : ""}
                        ${obj.state == "채용" ? "a" : ""}
                        ${obj.state == "입찰" ? "b" : ""}
                        ">
                        <p>${obj.state}</p>
                        </span>
                        <p>${obj.text}</p>
                    </div>
                    <div>
                        <p>${obj.date}</p>
                    </div>
                    <div>
                        <p>${obj.see}</p>
                    </div>
                </a>
            </li>
                
                
                `
                break;
        }

     })



 })
