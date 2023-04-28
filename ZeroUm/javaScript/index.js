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
    
document.querySelectorAll()





document.querySelector('a[href="#secao"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#secao').scrollIntoView({ behavior: "smooth" });
  });
