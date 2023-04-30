var header=document.getElementById('header');
var navHeader=document.getElementById('nav_header');
var btn_menu_header=document.getElementById('btnMenuHeader');
var content=document.getElementById('content');

var showSidebar=false;


function toggleSidebar(){   
    showSidebar=true;

    if(showSidebar==true){
        navHeader.style.marginLeft='-10vw';
        navHeader.style.animationName='showSidebar';
        btn_menu_header.style.marginLeft='10em';
        navHeader.style.animationName='showSidebar';
      
    }else{
        navHeader.style.marginLeft='-100vw';
        navHeader.style.animationName='showSidebar'
    }
    
}

function disbleSidebar(){
    showSidebar=false;
    if(showSidebar!=true){
        navHeader.style.marginLeft='-100vw';
        navHeader.style.animationName=''
    }
}
function closeSidebar(){
    
    if(showSidebar){
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 768 && showSidebar){
        disbleSidebar();
    }
});


//teste//teste
var linhaColorida=document.getElementById('frufru2');
var textServicos=document.getElementById('servicosText');

//efeito observerIntersection

const observer= new IntersectionObserver(entries=>{
    console.log(entries);
    Array.from(entries).forEach(entry=>{
        if(entry.intersectionRatio>=1){
            entry.target.classList.add('init-hidden-off');

            linhaColorida.style.animationName='pfv';
            textServicos.style.position='absolute';
            
            // linhaColorida.style.height='30em';
        }
    
    })
},{
    threshold:[0,0.5,1]
})
    
Array.from(document.querySelectorAll('.init-hidden')).forEach(element=>{
    observer.observe(element);  
}
    )
    

    

//indicador de progresso frufru do Renan
function indicaProgresso() {
    const scroll =document.documentElement.scrollTop;
    var altura = document.documentElement.scrollHeight-
    document.documentElement.clientHeight;

    var rolagem=(scroll/altura)*100;
    
    
    if(rolagem>10){
        document.getElementById("scroll-progresso").style.animationName='line1';
        document.getElementById("icon-mala").style.opacity='1';
    }else{
        document.getElementById("scroll-progresso").style.animationName='line2';
        document.getElementById("icon-mala").style.opacity='0'; 
    }
    if(rolagem>20){
        document.getElementById("scroll-progresso1").style.animationName='line1';
        document.getElementById("icon-tool").style.opacity='1'; 
    }else{
        document.getElementById("scroll-progresso1").style.animationName='line2';
        document.getElementById("icon-tool").style.opacity='0'; 
    }
    if(rolagem>30){
        document.getElementById("scroll-progresso2").style.animationName='line1';
        document.getElementById("icon-video").style.opacity='1'; 
    }else{
        document.getElementById("scroll-progresso2").style.animationName='line2';
        document.getElementById("icon-video").style.opacity='0'; 
    }
    console.log(10*rolagem+"%");

     // if(rolagem>50){
    //     document.getElementById("scroll-progresso").style.width=50+"%";
    // }else{
    //     document.getElementById("scroll-progresso").style.width=40+"%";
    // }
}

window.onscroll=function(){
    indicaProgresso();
}







let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}



//efeito código binário.

var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

canvas.height= window.innerHeight;
canvas.widht= window.innerWidth;

var texts='123456789'.split('');
var fontSize=16;
var coluna=canvas.widht/fontSize;
var drops=[];

for(varx=0;x<coluna;x+=1){
    drops[x]=1;

}
var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        var texts = '1'.split('');
        var fontSize =20;
        var columns = canvas.width/fontSize;
        var drops = [];
        for(var x =0; x < columns; x++){
            drops[x] = 1;
        }
        function draw(){
            ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle = '#000000';
            ctx.font = fontSize+ 'px arial';
            for(var i =0; i < drops.length; i+=2){
                var text = texts[Math.floor(Math.random()*texts.length)];
                ctx.fillText(text,i*fontSize,drops[i]*fontSize);

                if(drops[i]*fontSize > canvas.height || Math.random() > 0.60){
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

setInterval(draw,200);