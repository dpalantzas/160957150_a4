document.body.addEventListener('click', function (evt) {
    if (evt.target.className.includes('imageclick')) {
       document.getElementById('targetImage').src = event.target.src;
       show(popup);
    }
}, false);

document.addEventListener('DOMContentLoaded', function(){
  var popup = document.querySelector('#popup');
  var popupBg = document.querySelector('#popup-bg');
  popupBg.addEventListener('click', function(){
    hide(popup);
  });
});
function show(el){
  el.style.display = 'block';
}
function hide(el){
  el.style.display = 'none';
}