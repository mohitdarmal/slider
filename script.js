var img, num, i, l;
i = 1;
num = [1, 2, 3, 4]
img = document.querySelectorAll('.img');

document.querySelector('.rhtAr').addEventListener('click', rhtArrwClick)

function rhtArrwClick(){

    document.querySelector('.img' + num[i]).classList.add('active')
    // document.querySelector('.img' + num[i]).classList.add('ani')
    i++

if(i===4){
    i = 0;
    if(i === 0){
        document.querySelector('.img' + 1).classList.remove('active') 
    }
}

if(i === 1){
    for(var j = 0; j < num.length; j++){
        document.querySelector('.img' + num[j]).classList.remove('active')
        document.querySelector('.img' + i).classList.add('active')
    }
}
l = i
console.log(i)
}




document.querySelector('.lftAr').addEventListener('click', lftArrwClick)

function lftArrwClick(){
    i--
  
    if( i === -1 || i === 0){
        i = 3;
    }

    console.log(i)    
    for(var k = 0; k < num.length; k++){
        document.querySelector('.img' + num[k]).classList.remove('active')
    }
    document.querySelector('.img' + num[i]).classList.add('active')

}


setInterval(rhtArrwClick, 4000)




/* 

document.querySelector('.lftAr').addEventListener('click', lftArrwClick)

function lftArrwClick(){
    i--

    if( i === -1){
        i = 3;
    }
    console.log(i)    
    for(var k = 0; k < num.length; k++){
        document.querySelector('.img' + num[k]).classList.remove('active')
    }
    document.querySelector('.img' + num[i]).classList.add('active')

}
} */