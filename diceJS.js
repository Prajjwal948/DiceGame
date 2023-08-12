var rand=Math.floor(Math.random()*6)+1;
var image="images/dice"+rand+".png";
document.querySelector(".img1").setAttribute("src",image);

var rand2=Math.floor(Math.random()*6)+1;
var image2="images/dice"+rand2+".png";
document.querySelector(".img2").setAttribute("src",image2);

var player1="Player1 wins";
var player2="Player2 wins";
if(rand>rand2)
document.querySelector("#decision").innerHTML="Player 1";
else if(rand<rand2)
document.querySelector("#decision").innerHTML="PLayer 2";
else
documnet.querySelector("#decision").innerHTML="Draw";