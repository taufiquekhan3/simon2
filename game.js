//$(document).ready(function(){
  //  var audio = new Audio("sounds/entry.mp3");
    //audio.play();
    //var audio = new Audio("sounds/voicegreet.mp3");
    //audio.play();
//});


var userClickedPattern=[];
var level = 0;
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern=[];

$(".btn").click(function() {

    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
    
  });

  function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){

        console.log("success");
        if(gamePattern.length===userClickedPattern.length){

            playSound("notifi");
            
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("wrong");
        var audio=new Audio("sounds/wrongsych.mp3");
        audio.play();

        $("body").addClass("game-over");
           setTimeout(function(){
            $("body").removeClass("game-over");  
        },200);
         
       
         $(".click-me").text("Game Over,restarting the game...");
    
       
        setTimeout(function(){
            startOver();
        },3000)
        
        
        

    }
  }



function nextSequence() {

   userClickedPattern=[];
   
   
   $(".click-me").text("Level"+" "+level);
   level++;

   var randomnumber = Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomnumber];
   gamePattern.push(randomChosenColour);

//selecting to animate thee selected button.

//selecting to play the sound.
$("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);
  
}

  
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");  
    },100);
}

    //$(document).on("keydown",function(event) {
      //  if (event.which === 83){
        //    playSound("entry");
          //  playSound("voicegreet");
            //setTimeout(function(){
            //nextSequence();
        //},22000);
            
        //}
   //})

  
    function startOver(){
        level=0;
        gamePattern=[];
        userClickedPattern=[];
        nextSequence();

    }
    
    $(document).ready(function(){
        var butt=$(".click-me");
        butt.click(function(){
            butt.hide();
            setTimeout(function(){
                butt.show();
            },22000);
            playSound("entry");
            playSound("voicegreet");

            
            setTimeout(function(){
            nextSequence();
        },22000);

        });
    })



    


        //started=true;
    


   // var started=true;

    //$(document).keypress(function(){
       // if(started){
        //  nextSequence();
         // started=false;
        //}
    //});