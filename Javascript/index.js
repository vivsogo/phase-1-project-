
//the carousel allows the users to "swipe" through images 
$(document).ready(function(){
   $('.slider').slider();
});

const CreateParkEvent=()=>document.getElementById('create-park');


// i need to create a node here 
const attachCreateParkEvent=()=> {
    CreateParkEvent().addEventListener('click',loadcreatePark);


}






document.addEventListener('DOMContentLoaded',function(){
    attachCreateParkEvent();
 
 })