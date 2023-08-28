

function playAudio(url) {
  new Audio(url).play();
}

  //sequence is DYJU

  //SOLUTION
  
  sequence = {
    
   check : function(e){
    sequence.value += this.textContent;
   
     if (sequence.value == sequence.sequence)
       {
        
         sequence.value = "";
       
         document.getElementById('myVideo').play();
        document.getElementById('song').play();
        document.getElementById("content").style.animation = "mymove 5s, cssAnimation 5s forwards";
        document.getElementById("background").style.animation = "fade-out 3s";
        document.getElementById("myVideo").style.zIndex = "0";
        document.getElementById("pop").style.display = "none";
        document.getElementById("arrow").style.display = "none";
        document.getElementById("numpad").style.display = "none";

        setTimeout(() => {
          document.getElementById("content").style.display = "none";
        }, "1000")
        setTimeout(() => {
          document.getElementById("background").style.display = "none";
        }, "1000")
      

        setTimeout(() => {
          document.getElementById("album-container").style.display = "block";
        }, "1000")

        setTimeout(() => {
          document.getElementById("album-play").style.display = "block";
        }, "2000")


       }


     else 
     {
       if (sequence.timer)
       {
          clearTimeout(sequence.timer);
       }
       sequence.timer = setTimeout("sequence.value=''", 1000);
     }
  }, 
   
  
  
  }
  
  //THIS CODE ATTACHES CLICK HANDLERS TO THE BUTTON, NOT PART OF THE SOLUTION
  
  Array.prototype.map.call(document.querySelectorAll("button"), function(element){
    element.addEventListener("click", sequence.check, false);
  });
  
  
  //end




  function playAudio(url) {
    new Audio(url).play();
    
  }









