
// Volume Slider

var line = document.getElementsByTagName('input')[0];
        line.addEventListener('mousemove',function(){
            var pervalue = document.getElementById('pervalue');
            var sp = document.getElementsByTagName('span')[0];
            if(line.value == 0)
            {
                pervalue.innerHTML = "";
                var sound = document.getElementsByClassName('sound');
                for(var i=0; i<sound.length; i++)
                {
                    sound[i].style.display = "none";
                }
                document.getElementById('mute').style.display = "block";
            }
            if(line.value > 0)
            {
                pervalue.innerHTML = line.value + "%";
                var sound = document.getElementsByClassName('sound');
                for(var i=0; i<sound.length; i++)
                {
                    sound[i].style.display = "block";
                }
                document.getElementById('mute').style.display = "none";
            }

        })

// key Sounds

document.addEventListener('keydown',function(event){
    const letter = event.key;
      if(letter === 'f'){
        const play = document.getElementById('f-nat');
        play.play();

          style.background = "#50C878"
   
      }
    else if(letter === 'g'){
      const play = document.getElementById('g-nat');
      play.play();
    }
    else if(letter === 'a'){
      const play = document.getElementById('a-nat');
      play.play();
    }
    else if(letter === 'b'){
      const play = document.getElementById('b-nat');
      play.play();
    }
    else if(letter === 'c'){
      const play = document.getElementById('c-nat');
      play.play();
    }
    else if(letter === 'd'){
      const play = document.getElementById('d-nat');
      play.play();
    }
    else if(letter === 'e'){
      const play = document.getElementById('e-nat');
      play.play();
    }
    else if(letter === 'f'){
      const play = document.getElementById('f-nat');
      play.play();
    }
      else{
        console.log("Byee!");
      }
    });

    // recorder and play sounds

    let array = [];

let button = document.getElementById('recordButton');

let savebutton = document.getElementById('save');
          
savebutton.addEventListener('keydown',function(event){

  
const letter = event.key;

  if(letter === 'f'){

    const play = document.getElementById('f-nat');

  array.push(play)
 
console.log({array});
  }


else if (letter === 'g'){

    const play = document.getElementById('g-nat');

array.push(play)

}

else if (letter === 'a'){

const play = document.getElementById('g-nat');

array.push(play)

}

else if (letter === 'b'){

const play = document.getElementById('g-nat');

array.push(play)

}

else if (letter === 'c'){

const play = document.getElementById('g-nat');

array.push(play)

}

else if (letter === 'd'){

const play = document.getElementById('g-nat');

array.push(play)

}

else if (letter === 'e'){

const play = document.getElementById('g-nat');

array.push(play)

}

  else{

    console.log(" ");
  }





});




button.addEventListener('click',function(){

for (let song = 0; song < array.length;song++){


array[song].play();

}


});


