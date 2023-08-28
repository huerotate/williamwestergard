$(document).ready(function(){


    var playlist = [{
        title:"Wild Strawberry",
        mp3:"https://audio.jukehost.co.uk/SywR865wgfNbjopssV3IRAsMN4VT78bK",
      },{
        title:"Night Train",
        mp3:"https://audio.jukehost.co.uk/1KmPSvFDgE6tELhxrb3pld7kM7UKBYrx",
      },{
        title:"Winter Morning",
        mp3:"https://audio.jukehost.co.uk/RwZbmbTrHJ8ol2uXZfGeWXmUxNVmjCsF",
    }];
    
    var cssSelector = {
      jPlayer: "#jquery_jplayer",
      cssSelectorAncestor: "#music-player"
    };
    
    var options = {
      swfPath: "https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
      supplied: "ogv, m4v, oga, mp3",
      volumechange: function(event) {
        $( ".volume-level" ).slider("value", event.jPlayer.options.volume);
      },
      timeupdate: function(event) {
        $( ".progress" ).slider("value", event.jPlayer.status.currentPercentAbsolute);
      }
    };
    
    var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
    var PlayerData = $(cssSelector.jPlayer).data("jPlayer");
    
    
    
  
    // Create the progress slider control
    $( ".progress" ).slider({
          animate: "fast",
          max: 100,
          range: "min",
          step: 0.1,
          value : 0,
          slide: function(event, ui) {
              var sp = PlayerData.status.seekPercent;
              if(sp > 0) {
                  // Move the play-head to the value and factor in the seek percent.
                  $(cssSelector.jPlayer).jPlayer("playHead", ui.value * (100 / sp));
              } else {
                  // Create a timeout to reset this slider to zero.
                  setTimeout(function() {
                       $( ".progress" ).slider("value", 0);
                  }, 0);
              }
          }
      });
  
    
  });
  
  
  
  
  
  
  
  $('#gif-click').hide();
  $('#click').click(function() {
    $('#click').hide();
    $('#gif-click').show();
    $('#pic-click').hide();
  });
  
  if ($('#click').data("clicked", true)) {
    $('#gif-click').click(function() {
      $('#click').show();
      $('#gif-click').hide();
      $('#pic-click').show();
    });
  }
  
  ;
  
  
  
  
  
  
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
         
          document.getElementById('song').play();
          document.getElementById("content").style.animation = "mymove 5s, cssAnimation 1s forwards";
          document.getElementById("background").style.animation = "fade-out 3s";
          document.getElementById("content-two").style.display = "block";
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
     
      value : "",
      sequence : "DYJU"
    
    }
    
    //THIS CODE ATTACHES CLICK HANDLERS TO THE BUTTON, NOT PART OF THE SOLUTION
    
    Array.prototype.map.call(document.querySelectorAll("button"), function(element){
      element.addEventListener("click", sequence.check, false);
    });
    
    //end
  
  
  
  
    function playAudio(url) {
      new Audio(url).play();
    }
  
  
  
  
  
  
  
  
  