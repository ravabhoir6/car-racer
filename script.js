// script.js

$("#go").click(function(){

    //creating a function to check which car has won 
   function checkIfComplete() {
    if(isComplete == false){
        isComplete = true;
    }else{
        place  = "second" ;
    }
   }


    // taking carWidth
    var carWidth = $("#car1").width();

    // getting width of Car track
    var raceTrackWidth = $(window).width() - carWidth;

    // assingining random numbers to cars
   var raceTime1 = Math.floor((Math.random() * 5000) + 1);
    var raceTime2 = Math.floor((Math.random() * 5000) + 1);

    //making variable for completing the race and keeping it false
    var isComplete = false;

    //making variable place and keeping default first
    var place = "first";
    
    // making a function to move the car1
    $("#car1").animate({

        left:raceTrackWidth

    }, raceTime1 , function(){
        // animate function for car is done 
        checkIfComplete();
        // adding some text
        $("#raceInfo1 span").text("Finished at" + place +"and clocked in at time" + raceTime2 + "milliseconds")
    });
    $("#car2").animate({

        left:raceTrackWidth

    },raceTime2, function(){
        // animate function for car is done 
        checkIfComplete();
        // adding some text
        $("#raceInfo2 span").text("Finished at" + place +"and clocked in at time" + raceTime2 + "milliseconds")
    });

    //reset the cars
    $("#reset").click(function(){
        $(".car").css("left", "0");
        $(".raceInfo").text("");
    }) 
});
    








