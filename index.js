import{a as C,i as l,S as L}from"./assets/vendor-BzajH6aU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const w="46849389-2041d53e6d8b95dbaa186e245",v="https://pixabay.com/api";let f=1,p="";const b=async t=>{p===t?f++:(f=1,p=t);const s=new URLSearchParams({key:w,q:`${t}`,page:f,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0});try{const o=await C.get(`${v}/?${s}`);return o.data.hits.length===0?null:{hits:o.data.hits,totalHits:o.data.totalHits}}catch(o){throw o}},x=t=>t.map(({webformatURL:s,largeImageURL:o,tags:i,likes:e,views:r,comments:a,downloads:y})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}"><img src="${s}" alt="${i}" /></a>
      <div class="gallery-counters">
        <p>Likes<span>${e}</span></p>
        <p>Views<span>${r}</span></p>
        <p>Comments<span>${a}</span></p>
        <p>Downloads<span>${y}</span></p>
      </div>
    </li>
  `).join(""),k="data:image/svg+xml,%3csvg%20width='24.000000'%20height='24.000000'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs/%3e%3cpath%20id='Vector'%20d='M6.81%200.21C6.95%200.07%207.14%206.1e-5%207.33%200L16.66%200C16.85%206.1e-5%2017.04%200.07%2017.18%200.21L23.78%206.81C23.92%206.95%2024%207.14%2024%207.33L24%2016.66C24%2016.85%2023.92%2017.04%2023.78%2017.19L17.18%2023.78C17.04%2023.92%2016.85%2023.99%2016.66%2024L7.33%2024C7.14%2023.99%206.95%2023.92%206.81%2023.78L0.21%2017.19C0.07%2017.04%200%2016.85%200%2016.66L0%207.33C0%207.14%200.07%206.95%200.21%206.81L6.81%200.21ZM7.65%201.5L1.5%207.65L1.5%2016.35L7.65%2022.5L16.35%2022.5L22.5%2016.35L22.5%207.65L16.35%201.5L7.65%201.5Z'%20fill='%23FAFAFB'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3cpath%20id='Vector'%20d='M6.96%206.96C7.03%206.89%207.12%206.84%207.21%206.8C7.3%206.76%207.4%206.74%207.5%206.74C7.59%206.74%207.69%206.76%207.78%206.8C7.87%206.84%207.96%206.89%208.03%206.96L12%2010.93L15.96%206.96C16.03%206.89%2016.12%206.84%2016.21%206.8C16.3%206.76%2016.4%206.74%2016.5%206.74C16.59%206.74%2016.69%206.76%2016.78%206.8C16.87%206.84%2016.96%206.89%2017.03%206.96C17.1%207.03%2017.15%207.12%2017.19%207.21C17.23%207.3%2017.25%207.4%2017.25%207.5C17.25%207.59%2017.23%207.69%2017.19%207.78C17.15%207.87%2017.1%207.96%2017.03%208.03L13.06%2012L17.03%2015.96C17.1%2016.03%2017.15%2016.12%2017.19%2016.21C17.23%2016.3%2017.25%2016.4%2017.25%2016.5C17.25%2016.59%2017.23%2016.69%2017.19%2016.78C17.15%2016.87%2017.1%2016.96%2017.03%2017.03C16.96%2017.1%2016.87%2017.15%2016.78%2017.19C16.69%2017.23%2016.59%2017.25%2016.5%2017.25C16.4%2017.25%2016.3%2017.23%2016.21%2017.19C16.12%2017.15%2016.03%2017.1%2015.96%2017.03L12%2013.06L8.03%2017.03C7.96%2017.1%207.87%2017.15%207.78%2017.19C7.69%2017.23%207.59%2017.25%207.5%2017.25C7.4%2017.25%207.3%2017.23%207.21%2017.19C7.12%2017.15%207.03%2017.1%206.96%2017.03C6.89%2016.96%206.84%2016.87%206.8%2016.78C6.76%2016.69%206.74%2016.59%206.74%2016.5C6.74%2016.4%206.76%2016.3%206.8%2016.21C6.84%2016.12%206.89%2016.03%206.96%2015.96L10.93%2012L6.96%208.03C6.89%207.96%206.84%207.87%206.8%207.78C6.76%207.69%206.74%207.59%206.74%207.5C6.74%207.4%206.76%207.3%206.8%207.21C6.84%207.12%206.89%207.03%206.96%206.96Z'%20fill='%23FAFAFB'%20fill-opacity='1.000000'%20fill-rule='nonzero'/%3e%3c/svg%3e",S="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='96px'%20height='96px'%20fill-rule='nonzero'%3e%3cg%20fill='%23ffffff'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.33333,5.33333)'%3e%3cpath%20d='M24,4c-11.02793,0%20-20,8.97207%20-20,20c0,11.02793%208.97207,20%2020,20c11.02793,0%2020,-8.97207%2020,-20c0,-11.02793%20-8.97207,-20%20-20,-20zM24,7c9.40662,0%2017,7.59339%2017,17c0,9.40661%20-7.59338,17%20-17,17c-9.40661,0%20-17,-7.59339%20-17,-17c0,-9.40661%207.59339,-17%2017,-17zM24,14c-1.10457,0%20-2,0.89543%20-2,2c0,1.10457%200.89543,2%202,2c1.10457,0%202,-0.89543%202,-2c0,-1.10457%20-0.89543,-2%20-2,-2zM23.97656,20.97852c-0.82766,0.01293%20-1.48843,0.69381%20-1.47656,1.52148v11c-0.00765,0.54095%200.27656,1.04412%200.74381,1.31683c0.46725,0.27271%201.04514,0.27271%201.51238,0c0.46725,-0.27271%200.75146,-0.77588%200.74381,-1.31683v-11c0.00582,-0.40562%20-0.15288,-0.7963%20-0.43991,-1.08296c-0.28703,-0.28666%20-0.67792,-0.44486%20-1.08353,-0.43852z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",m=document.querySelector(".form"),M=m.querySelector('input[name="search"]'),u=document.querySelector(".gallery"),n=document.querySelector(".more"),d=document.querySelector(".loader");d.style.display="none";l.settings({messageSize:15,messageColor:"#fff",messageLineHeight:20,iconUrl:`${k}`,position:"topRight",timeout:7e3,closeOnClick:!0,maxWidth:350,backgroundColor:"rgb(239, 64, 64)"});let $=new L(".gallery .gallery-link"),h="",c=0;m.addEventListener("submit",z);n.addEventListener("click",A);async function z(t){if(t.preventDefault(),h=M.value.trim(),n.classList.add("hide"),!h){l.error({message:"Search field cannot be empty. Please enter a keyword to search."});return}u.innerHTML="",d.style.display="block",await g(),c>15&&n.classList.remove("hide"),m.reset()}async function g(){try{const t=await b(h);if(!t){l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),d.style.display="none",n.classList.add("hide"),c=0;return}const{hits:s,totalHits:o}=t;c=o;const i=x(s);u.insertAdjacentHTML("beforeend",i),$.refresh();const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),u.children.length>=c&&(n.classList.add("hide"),l.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#9ddeff",iconUrl:`${S}`}))}catch(t){l.error({message:`As error occured: ${t.message}`}),n.classList.add("hide")}finally{d.style.display="none"}}function A(){n.setAttribute("disabled",!0),g().finally(()=>{n.removeAttribute("disabled")})}
//# sourceMappingURL=index.js.map