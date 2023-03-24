const img1 = document.getElementById("picture-stack-1");
const img2 = document.getElementById("picture-stack-2");
const img3 = document.getElementById("picture-stack-3");
const img4 = document.getElementById("picture-stack-4");

setInterval(loopingImageStack, 2000);

function loopingImageStack(){
    if(img1.classList.contains('img-order-1')){
        loopingImageStack1();
    }else if(img1.classList.contains('img-order-3')){
        loopingImageStack2();
    }else if(img1.classList.contains('img-order-2')){
        loopingImageStack3();
    }else if(img1.classList.contains('img-order-4')){
        loopingImageStack3();
    }else{
        console.log("A problem with loopingImageStack function detected.")
    }
}

function loopingImageStack1(){
    img1.classList.remove('img-order-1');
    img1.classList.add('img-order-3');
    
    img2.classList.remove('img-order-2');
    img2.classList.add('img-order-1');

    img3.classList.add('img-order-2');
    img3.classList.remove('img-order-3');
}

function loopingImageStack2(){
    img1.classList.remove('img-order-3');
    img1.classList.add('img-order-2');
    
    img2.classList.remove('img-order-1');
    img2.classList.add('img-order-3');

    img3.classList.remove('img-order-2');
    img3.classList.add('img-order-1');
}

function loopingImageStack3(){
    img1.classList.remove('img-order-2');
    img1.classList.add('img-order-1');

    img2.classList.remove('img-order-3');
    img2.classList.add('img-order-2');
    
    img3.classList.remove('img-order-1');
    img3.classList.add('img-order-3');
}
