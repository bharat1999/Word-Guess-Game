var correctGuessStr,correctGuessWord,guess=11,win=0,loss=0,names=["THEWINTERSOLDIER","THOR","CAPTAINAMERICA","GUARDIANSOFTHEGALAXY","DOCTORSTRANGE","TONYSTARK","BRUCEBANNER","LOKI","PEGGYCARTER","THANOS"],guessed=[],correctGuess=[],randomWord=names[Math.floor(Math.random()*names.length)],start="Press Any Key To Start The Game",img="";updateDisplay(),document.getElementById("img").src=img,document.getElementById("start").innerHTML=start;for(var i=0;i<randomWord.length;i++)correctGuess[i]="..";function gameStart(){randomWord=names[Math.floor(Math.random()*names.length)];for(var e=0;e<randomWord.length;e++)correctGuess[e]=".."}function gameReset(){guess=11,correctGuess=[],guessed=[],document.getElementById("img").className="none",document.getElementById("start").innerHTML=start,document.getElementById("correctWord").innerHTML="",gameStart(),updateDisplay()}function checkKey(e){if(document.getElementById("start").innerHTML="",-1!=randomWord.indexOf(e)){var t=randomWord.indexOf(e);for(-1==guessed.indexOf(e)&&guessed.push(e),correctGuess[t]=e;-1!=randomWord.indexOf(e,t+1);)correctGuess[randomWord.indexOf(e,t+1)]=e,t=randomWord.indexOf(e,t+1);updateDisplay()}else guess<=0?gameReset():-1==guessed.indexOf(e)&&(guess--,guessed.push(e)),updateDisplay();checkWin(),checkLoss()}function updateDisplay(){document.getElementById("wins").innerHTML=win,document.getElementById("loss").innerHTML=loss,document.getElementById("guess").innerHTML=guess,correctGuessStr=correctGuess.toString(),correctGuessWord=correctGuessStr.replace(/,/g," "),document.getElementById("guessedName").innerHTML=correctGuessWord,document.getElementById("guessed").innerHTML=guessed}function checkWin(){1==strCmp(randomWord,correctGuess)&&(win++,document.getElementById("correctWord").innerHTML="You Win",img="./assests/images/"+randomWord+".jpg",document.getElementById("img").className="show animate__animated animate__slower animate__bounceIn  animate__infinite",document.getElementById("img").src=img,setTimeout(gameReset,3e3))}function checkLoss(){0==guess&&(loss++,document.getElementById("correctWord").innerHTML="You Lose Secret Word was  "+randomWord,img="./assests/images/captain america.jpg",document.getElementById("img").className="show animate__animated animate__slower animate__bounceIn  animate__infinite",document.getElementById("img").src=img,setTimeout(gameReset,3e3))}function strCmp(e,t){for(var n=1,s=0;s<randomWord.length;s++)e[s]!=t[s]&&(n=0);return n}document.addEventListener("keydown",function(e){(e.which>=97&&e.which<=122||e.which>=65&&e.which<=90)&&checkKey(e.key.toUpperCase())});
