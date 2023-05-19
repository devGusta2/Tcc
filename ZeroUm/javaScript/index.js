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
      if(rolagem>40){
        document.getElementById("scroll-progresso3").style.animationName='line1';
        document.getElementById("icon-team").style.opacity='1'; 
    }else{
        document.getElementById("scroll-progresso3").style.animationName='line2';
        document.getElementById("icon-team").style.opacity='0'; 
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


//teste idiomas

