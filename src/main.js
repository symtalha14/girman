window.addEventListener("load", (e)=>{

    var links = document.querySelectorAll("[data-link]");
    console.log(links);
    links[0].classList.add("active");
    links[4].classList.add("active");
    
    links.forEach(link=>{
        link.addEventListener("click", e=>{
            Array.prototype.slice.call(links).map(l=>l.classList.remove("active"));
            link.classList.add("active");
        })
    })

    
    // document.querySelector("input").addEventListener("keyup", (e)=>{
    //     if(e.key == "Enter"){
    //         console.log(e.target.value);
    //         if(e.target.value.length == 0) return;

    //         window.location.href="/#/search/results";
    //     }
    // })


})

function linksConfig(){
    
    var links = document.querySelectorAll("[data-link]");
    console.log(links);
    links[0].classList.add("active");
    links[4].classList.add("active");
    
    links.forEach(link=>{
        link.addEventListener("click", e=>{
            Array.prototype.slice.call(links).map(l=>l.classList.remove("active"));
            link.classList.add("active");
        })
    })
}