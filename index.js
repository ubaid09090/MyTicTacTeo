console.log("welcome to tic tac teo");
let music =new Audio('music.mp3');
let ting = new Audio('ting.mp3');
let gameover=new Audio('gameover.mp3');
let turn ="X";
let isgameovers = false;
// let reset = document.querySelector('reset');

// music.play();

let chengTurn =()=>{
    return turn === "X" ? "0" :"X";
}
let checkWin = () =>{
    let  boxTexts = document.getElementsByClassName('boxText');
    let wins = [
        
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach( e=>{
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText =boxTexts[e[0]].innerText + ' Won';
            isgameovers = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width='200px';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "20vw";
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            // document.querySelector(".line").style.width = "20vw";
            
            
        }
    })
}

let boxes =document.getElementsByClassName('box'); 
Array.from(boxes) .forEach(element =>{
    let boxeText = element.querySelector(".boxText");
    element.addEventListener('click' , ()=>{
        if (boxeText.innerText == ''){
            boxeText.innerText = turn;
            turn = chengTurn();
            ting.play();
            checkWin();
            if(!isgameovers){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})

reset.addEventListener('click' , ()=>{
    let boxeTexts = document.querySelectorAll(".boxText");
    Array.from(boxeTexts).forEach(element =>{
        element.innerText = '';
    });
    turn = 'X';
    isgameovers =false
        document.querySelector('.line').style.width = "0vw";
        document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width='0px';
    
});