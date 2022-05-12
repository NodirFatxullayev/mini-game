window.addEventListener("load", function() {
    let qiymat1 = document.querySelector(".number2");
    qiymat1.innerHTML = Math.floor(Math.random()*100);

    let qiymat2 = document.querySelector(".number1");
    let summa = document.querySelector(".many");



    let btn1 = document.querySelector(".v1"),
        btn2 = document.querySelector(".v"),
        btn3 = document.querySelector(".v2");

    let yutuq = document.querySelector(".yutuq");

    if(qiymat1.innerHTML > 1 && qiymat1.innerHTML <= 10){
        btn1.innerHTML = 1.2;
        btn2.innerHTML = 5;
        btn3.innerHTML = 3;
    }
    if(qiymat1.innerHTML > 10 && qiymat1.innerHTML <= 20){
        btn1.innerHTML = 1.4;
        btn2.innerHTML = 5;
        btn3.innerHTML = 2.8;
    }
    if(qiymat1.innerHTML > 20 && qiymat1.innerHTML <= 30){
        btn1.innerHTML = 1.6;
        btn2.innerHTML = 5;
        btn3.innerHTML = 2.6;
    }
    if(qiymat1.innerHTML > 30 && qiymat1.innerHTML <= 40){
        btn1.innerHTML = 1.7;
        btn2.innerHTML = 5;
        btn3.innerHTML = 2;
    }
    if(qiymat1.innerHTML > 40 && qiymat1.innerHTML < 50){
        btn1.innerHTML = 1.85;
        btn2.innerHTML = 5;
        btn3.innerHTML = 1.9;
    }
    if(qiymat1.innerHTML === 50){
        btn1.innerHTML = 1.5;
        btn2.innerHTML = 5;
        btn3.innerHTML = 1.5;
    }

    if(qiymat1.innerHTML > 50 && qiymat1.innerHTML <= 60){
        btn1.innerHTML = 1.9;
        btn2.innerHTML = 5;
        btn3.innerHTML = 1.8;
    }
    if(qiymat1.innerHTML > 60 && qiymat1.innerHTML <= 70){
        btn1.innerHTML = 2.1;
        btn2.innerHTML = 5;
        btn3.innerHTML = 1.5;
    }
    if(qiymat1.innerHTML > 70 && qiymat1.innerHTML <= 80){
        btn1.innerHTML = 2.4;
        btn2.innerHTML = 5;
        btn3.innerHTML = 1.4;
    }
    if(qiymat1.innerHTML > 80 && qiymat1.innerHTML <= 90){
        btn1.innerHTML = 2.6;
        btn2.innerHTML = 5;
        btn3.innerHTML = 1.25;
    }
    if(qiymat1.innerHTML > 90 && qiymat1.innerHTML <= 100){
        btn1.innerHTML = 3;
        btn2.innerHTML = 5;
        btn3.innerHTML = 1.2;
    }
    

    
    btn1.addEventListener("click", function() {
        qiymat2.innerHTML = Math.floor(Math.random() * 100);
        if(qiymat2.innerHTML > qiymat1.innerHTML){
            qiymat2.classList.add("god");
            yutuq.innerHTML = ("Siz yutug'ingiz " + btn1.innerHTML * Number(summa.value));
        }
        if(qiymat2.innerHTML <= qiymat1.innerHTML){
            qiymat2.classList.add("noGod");
            yutuq.innerHTML = ("Afsuskiy siz yutuqqaega bola olmadiz");
        }
    });

    btn2.addEventListener("click", function() {
        qiymat2.innerHTML = Math.floor(Math.random() * 100);
        if(qiymat2.innerHTML == qiymat1.innerHTML){
            qiymat2.classList.add("god");
            yutuq.innerHTML = ("Siz yutug'ingiz " + btn2.innerHTML * Number(summa.value));
        }
        if(qiymat2.innerHTML != qiymat1.innerHTML){
            qiymat2.classList.add("noGod");
            yutuq.innerHTML = ("Afsuskiy siz yutuqqaega bola olmadiz");
        }
    });

    btn3.addEventListener("click", function() {
        qiymat2.innerHTML = Math.floor(Math.random() * 100);
        if(qiymat2.innerHTML < qiymat1.innerHTML){
            qiymat2.classList.add("god");
            yutuq.innerHTML = ("Siz yutug'ingiz " + btn3.innerHTML * Number(summa.value));
        }
        if(qiymat2.innerHTML >= qiymat1.innerHTML){
            qiymat2.classList.add("noGod");
            yutuq.innerHTML = ("Afsuskiy siz yutuqqaega bola olmadiz");
        }
    });

    
}); 