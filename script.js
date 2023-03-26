const img1 = document.getElementById("picture-stack-1");
const img2 = document.getElementById("picture-stack-2");
const img3 = document.getElementById("picture-stack-3");
const img4 = document.getElementById("picture-stack-4");

//intersection observer
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('logo-show');
        }else{
            entry.target.classList.remove('logo-show');
        }
    })
});

const hiddenElements1 = document.querySelectorAll('.logo-hidden');
hiddenElements1.forEach((el) => observer1.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('project-show');
        }else{
            entry.target.classList.remove('project-show');
        }
    })
});

const hiddenElements2 = document.querySelectorAll('.project-hidden-left', '.project-hidden-right');
hiddenElements2.forEach((el) => observer2.observe(el));

const hiddenElements3 = document.querySelectorAll('.project-hidden-right');
hiddenElements3.forEach((el) => observer2.observe(el));


//Looping image stack
setInterval(loopingImageStack, 2000);

function loopingImageStack(){
    if(img4.classList.contains('img-order-4')){
        loopingImageStack1();
    }else if(img4.classList.contains('img-order-3')){
        loopingImageStack2();
    }else if(img4.classList.contains('img-order-2')){
        loopingImageStack3();
    }else if(img4.classList.contains('img-order-1')){
        loopingImageStack4();
    }else{
        console.log("A problem with loopingImageStack function detected.")
    }
}

function loopingImageStack1(){
    img4.classList.remove('img-order-4');
    img4.classList.add('img-order-3');

    img3.classList.remove('img-order-3');
    img3.classList.add('img-order-2');

    img2.classList.remove('img-order-2');
    img2.classList.add('img-order-1');

    img1.classList.remove('img-order-1');
    img1.classList.add('img-order-4'); 
}

function loopingImageStack2(){
    img4.classList.remove('img-order-3');
    img4.classList.add('img-order-2');

    img3.classList.remove('img-order-2');
    img3.classList.add('img-order-1');

    img2.classList.remove('img-order-1');
    img2.classList.add('img-order-4');

    img1.classList.remove('img-order-4');
    img1.classList.add('img-order-3'); 
}

function loopingImageStack3(){
    img4.classList.remove('img-order-2');
    img4.classList.add('img-order-1');

    img3.classList.remove('img-order-1');
    img3.classList.add('img-order-4');

    img2.classList.remove('img-order-4');
    img2.classList.add('img-order-3');

    img1.classList.remove('img-order-3');
    img1.classList.add('img-order-2'); 
}

function loopingImageStack4(){
    img4.classList.remove('img-order-1');
    img4.classList.add('img-order-4');

    img3.classList.remove('img-order-4');
    img3.classList.add('img-order-3');

    img2.classList.remove('img-order-3');
    img2.classList.add('img-order-2');

    img1.classList.remove('img-order-2');
    img1.classList.add('img-order-1'); 
}
