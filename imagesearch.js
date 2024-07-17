const acesskey="p06CcIuFssA-AyFikIxgFC1EQtci8twKb6vpeUbco9I";
const formE1=document.querySelector("form");
const inputE1=document.querySelector("#search-input");
const searchResult=document.querySelector(".Search-result");
const btn=document.querySelector("#showmore");
let inputData="";
let page=1;

async function searchImages(){
    inputData=inputE1.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${acesskey}`
    console.log(url);
    const response=await fetch(url);
    const data=await response.json();
    if(page===1){
        searchResult.innerHTML="";
    }
    const results=data.results;
    results.map((result)=>{
        const imageWrapper=document.createElement("div");
        imageWrapper.classList.add("image");
        const image=document.createElement("img");
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const anchor=document.createElement("a");
        anchor.href=result.links.html;
        anchor.target="_blank";
        anchor.textContent=result.alt_description;
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(anchor);
        searchResult.appendChild(imageWrapper);
        
    });
    page++;
    if(page>1){
        btn.style.display = 'block';
    }

}
formE1.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();
})
showmore.addEventListener('click',()=>{
    searchImages();
})