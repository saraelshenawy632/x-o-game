let turn='o';
let title= document.getElementById('title')
let square=Array.from(document.getElementsByClassName('square')); 
function functio(id){
    let element=document.getElementById(id);
    if(turn == 'o' && element.innerHTML ==""){
        turn='x';
        element.innerHTML='o';
        title.innerHTML='x';
        

    }
    else if(turn == 'x' && element.innerHTML ==""){
        turn='o';
        element.innerHTML='x';
        title.innerHTML='o';
        

    }
    winTurn();

   


}    resetGame()
function winTurn(){
   
for(let i=0;i<square.length;i++){

if(square[0].innerHTML=='o' && square[1].innerHTML=='o' && square[2].innerHTML=='o'){
    Swal.fire({
        title: "'o'is winner.",
        width: 600,
        padding: "3em",
        color: " rgb(97, 84, 10)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
           rgb(97, 84, 10)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
   
        
    } if(square[0].innerHTML=='x' && square[1].innerHTML=='x' && square[2].innerHTML=='x'){
        alert('x wins');
    }
     if(square[3].innerHTML=='o' && square[4].innerHTML=='o' && square[5].innerHTML=='o'){
        Swal.fire({
            title: "'o'is winner.",
            width: 600,
            padding: "3em",
            color: " rgb(97, 84, 10)",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgb(97, 84, 10)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });

}
 if(square[3].innerHTML=='x' && square[4].innerHTML=='x' && square[5].innerHTML=='x'){
    alert('x wins');

} if(square[6].innerHTML=='o' && square[7].innerHTML=='o' && square[8].innerHTML=='o'){
    Swal.fire({
        title: "'o'is winner.",
        width: 600,
        padding: "3em",
        color: " rgb(97, 84, 10)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
           rgb(97, 84, 10)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });

}
if(square[6].innerHTML=='x' && square[7].innerHTML=='x' && square[8].innerHTML=='x'){
    Swal.fire({
        title: "'X'is winner.",
        width: 600,
        padding: "3em",
        color: " rgb(97, 84, 10)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgb(97, 84, 10)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });

}
 if(square[0].innerHTML=='o' && square[3].innerHTML=='o' && square[6].innerHTML=='o'){
    Swal.fire({
        title: "'o'is winner.",
        width: 600,
        padding: "3em",
        color: " rgb(97, 84, 10)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgb(97, 84, 10)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });

}   
 if(square[0].innerHTML=='x' && square[3].innerHTML=='x' && square[6].innerHTML=='x'){    
    Swal.fire({
        title: "'X'is winner.",
        width: 600,
        padding: "3em",
        color: " rgb(97, 84, 10)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
         rgb(97, 84, 10)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
}

 if(square[1].innerHTML=='o' && square[4].innerHTML=='o' && square[7].innerHTML=='o'){
    Swal.fire({
        title: "'o'is winner.",
        width: 600,
        padding: "3em",
        color: " rgb(97, 84, 10)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgb(97, 84, 10)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });

}if(square[1].innerHTML=='x' && square[4].innerHTML=='x' && square[7].innerHTML=='x'){
    Swal.fire({
        title: "'X'is winner.",
        width: 600,
        padding: "3em",
        color: " rgb(97, 84, 10)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgb(97, 84, 10)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });

}
 if(square[2].innerHTML=='o' && square[5].innerHTML=='o' && square[8].innerHTML=='o'){
    Swal.fire({
        title: "'o'is winner.",
        width: 600,
        padding: "3em",
        color: " rgb(97, 84, 10)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgb(97, 84, 10)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });;

}
 if(square[2].innerHTML=='x' && square[5].innerHTML=='x' && square[8].innerHTML=='x'){
    Swal.fire({
        title: "'X'is winner.",
        width: 600,
        padding: "3em",
        color: " rgb(97, 84, 10)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
         rgb(97, 84, 10)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });

}
if(square[0].innerHTML=='o' && square[4].innerHTML=='o' && square[8].innerHTML=='o'){
    Swal.fire({
        title: "'o'is winner.",
        width: 600,
        padding: "3em",
        color: " rgb(97, 84, 10)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgb(97, 84, 10)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
}
 if (square[0].innerHTML=='x' && square[4].innerHTML=='x' && square[8].innerHTML=='x'){
    Swal.fire({
        title: "'X'is winner.",
        width: 600,
        padding: "3em",
        color: " rgb(97, 84, 10)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgb(97, 84, 10)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
}
 if(square[2].innerHTML=='o' && square[4].innerHTML=='o' && square[6].innerHTML=='o'){
    Swal.fire({
        title: "'o'is winner.",
        width: 600,
        padding: "3em",
        color: " rgb(97, 84, 10)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
         rgb(97, 84, 10)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });

}
 if(square[2].innerHTML=='x' && square[4].innerHTML=='x' && square[6].innerHTML=='x'){
    Swal.fire({
        title: "'X'is winner.",
        width: 600,
        padding: "3em",
        color: " rgb(97, 84, 10)",
        background: "#fff url(/images/trees.png)",
        backdrop: `
           rgb(97, 84, 10)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });

    }if(square[0].innerHTML!='' && square[1].innerHTML!='' && square[2].innerHTML!='' && square[3].innerHTML!='' && square[4].innerHTML!='' && square[5].innerHTML!='' && square[6].innerHTML!='' && square[7].innerHTML!='' && square[8].innerHTML!=''){   
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Try Again!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });}
    }

}




function resetGame(){
    for(let i=0;i<square.length;i++){
        square[i].innerHTML='';
        title.innerHTML=' PLAY...';
    }
}




document.getElementById('reset').addEventListener('click',resetGame);