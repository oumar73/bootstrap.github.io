const btn_navbarre=document.querySelector(".btn_nav");
const nav=document.querySelector(".nav");
const btn_retouner_haut=document.querySelector(".retourner_haut");
const tete=document.querySelector(".tete");
console.log(tete);

// foncton pour verifier la largeur de la fénétre (window)
function verifier_largeur(params) {
    if(window.innerWidth<541){
        btn_navbarre.classList.remove("hidden");
        nav.style.display="none";
    }
    else{
        btn_navbarre.classList.add("hidden");
        nav.style.display="flex";
    }
}
document.addEventListener("DOMContentLoaded",verifier_largeur());
window.addEventListener("resize",verifier_largeur);
// bouton pour afficher ou cacher la navebarre au click du bouton de la navbarre
btn_navbarre.addEventListener("click",(e)=>{
    e.stopPropagation();
    if(nav.style.display==="none"){
        nav.style.display="flex";
    }
    else{
        nav.style.transition="1s";
        nav.style.opacity="0";
        nav.style.width="10%";
        setTimeout(()=>{
            nav.style.display="none";
            nav.style.width="50%";
            nav.style.opacity="1";
        },1000)
    }
})
// programme pour afficher ou caher l'entete (header de la page au scroll)
let derinier_scroll=0;
window.addEventListener("scroll",()=>{
    if (window.scrollY>derinier_scroll){
        tete.style.transition="1s";
        tete.style.top="-100px";
    }
    else{ 
        tete.style.transition="1s"
        tete.style.top="0";
    }
    derinier_scroll=window.scrollY;
    if(window.scrollY>200){
        btn_retouner_haut.classList.remove("hidden");
    }
    else {
        btn_retouner_haut.classList.add("hidden");
    }

})
window.addEventListener("click",()=>{
    if(window.innerWidth<540){
        nav.style.transition="1s";
        nav.style.opacity="0";
        nav.style.width="10%";
        setTimeout(()=>{
            nav.style.display="none";
            nav.style.width="50%";
            nav.style.opacity="1";
        },1000)
    }
})
// bouton pour remonter rapidement en haut.
btn_retouner_haut.addEventListener("click",()=>{

   window.scrollTo({
    top:0,
    behavior:"smooth"
   })

})
console.log(window.innerWidth);


// fonction d'animation au scroll pour les elements quittant de la gauche vers la droite
const observateur1= new IntersectionObserver(entrys =>{
    entrys.forEach(entry=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show1");
            console.log(entry.target);
        }
        else{
            entry.target.classList.remove("show1");
        }
    })
})
const el_gauche=document.querySelectorAll(".gauche");
console.log(el_gauche);

el_gauche.forEach(el => observateur1.observe(el));
// fonction d'animation au scroll pour les elements quittant de la droite vers la gauche.
const obseravateur2 = new IntersectionObserver(entrys =>{
    entrys.forEach(entry=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show2");
        }
        else{
            entry.target.classList.remove("show2");
        }
    })
})
const el_droite=document.querySelectorAll(".droite");
console.log(el_droite);

el_droite.forEach(el => obseravateur2.observe(el));
// fontion pour l'apparition des elements au scroll de façon progressive
const observateur3 = new IntersectionObserver(entrys =>{
    entrys.forEach(entry=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show3");
        }
        else{
            entry.target.classList.remove("show3");
        }
    })
})
const el_apparition=document.querySelectorAll(".apparition");
el_apparition.forEach(el => observateur3.observe(el));