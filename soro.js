 const share = document.getElementById("share");
let sticky = document.getElementById("sticky")
const close = document.getElementById("close")
const share2 =document.getElementById("share2")

share.addEventListener("click", function(e){
  sticky.style.display="block";
})
close.addEventListener("click", function(e){
  sticky.style.display="none";
})
share2.addEventListener("click", function(e){
  sticky.style.display="block";
})

