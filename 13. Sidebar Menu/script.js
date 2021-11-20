//add active class in selected
//1
let list = document.querySelectorAll(".list");
//2
let menuToggle = document.querySelector('.toggle');
//3
let navigation = document.querySelector('.navigation');


//1
for(let i=0; i<list.length; i++){
    list[i].onclick = function(){
        let j =0;
        while(j < list.length){
            list[j++].className = '.list';
        }
        list[i].className = 'list active';
    }
}

//2
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    //3
    navigation.classList.toggle('active');
}


