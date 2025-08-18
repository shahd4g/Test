document.addEventListener("DOMContentLoaded", function(){
  let d = new Date();
  let target = document.querySelector(".min div"); 
  target.insertAdjacentHTML(
    "beforeend", 
    `<p style="margin-top:15px; color:black; font-size:18px;">
       Today is: ${d.toDateString()}
     </p>`
  );
});