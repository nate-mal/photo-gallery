const gallery = document.querySelector('.gallery');
let tmp;
for(let i = 1; i <= 12; i++) {
let ref;
if(i<10) ref = `0${i}`;
else ref = i;

tmp +=`<a href="img/${ref}.jpg" data-caption="Image caption">
<img src="img/thumbnails/${ref}.jpg" alt="${ref} image">
</a> 
       `;
}

gallery.innerHTML = tmp;