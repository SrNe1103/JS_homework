function upDate(preview){
    pic_frame = document.querySelector('#image');
    pic_frame.style.backgroundImage = "url('" + preview.src + "')";
    pic_frame.innerHTML = preview.alt;
    pic_frame.style.height = preview.height * 500 / preview.widt + "px";
}
   
function unDo(){
    pic_frame = document.querySelector('#image');
    pic_frame.style.backgroundImage = "";
    pic_frame.innerHTML = "Hover over or select an image below to display here."; 
    pic_frame.style.height = "620px";
}

let images = document.querySelectorAll('.preview');

for (let image of images) {
    image.addEventListener('mouseover', () => upDate(image));
    image.addEventListener('mouseout', unDo);
    image.addEventListener('focus', () => upDate(image));
    image.addEventListener('blur', unDo);
    image.setAttribute('tabindex', 0);
    console.log(image);
};
