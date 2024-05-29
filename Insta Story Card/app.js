let arr = [
  {
    dp: "https://cdn.pixabay.com/photo/2015/11/11/21/43/man-1039302_1280.jpg",
    story:
      "https://cdn.pixabay.com/photo/2018/02/01/06/45/travel-3122702_1280.jpg",
  },
  {
    dp: "https://cdn.pixabay.com/photo/2021/10/26/16/47/man-6744539_1280.jpg",
    story:
      "https://cdn.pixabay.com/photo/2017/03/27/13/52/person-2178868_1280.jpg",
  },
  {
    dp: "https://cdn.pixabay.com/photo/2021/06/05/13/10/kid-6312635_1280.jpg",
    story:
      "https://cdn.pixabay.com/photo/2021/06/05/13/10/kid-6312635_1280.jpg",
  },
  {
    dp: "https://cdn.pixabay.com/photo/2021/11/22/20/32/nature-6817376_1280.jpg",
    story:
      "https://cdn.pixabay.com/photo/2021/11/22/20/32/nature-6817376_1280.jpg",
  },
];
 

var clutter =""

// this code is for the prodile Pictures ...

arr.forEach(function(elem,idx){
    clutter+= `<div class="story">
    <img id = ${idx} src="${elem.dp}" alt="">
</div>`
})

document.querySelector('.story-container').innerHTML = clutter;  


// Code For the mamking The Story Visible ...

document.querySelector('.story-container').addEventListener('click',(e)=>{
   document.querySelector('.fullscreen').style.display = "block"; //  making The Story Full Screen 
   document.querySelector('.fullscreen').style.backgroundImage = `url(${  (arr[e.target.id].story)})`

   setTimeout(function(){
    document.querySelector('.fullscreen').style.display = "none"; // This Will Closes The Story After 2 Seconds 
   },2000)
})