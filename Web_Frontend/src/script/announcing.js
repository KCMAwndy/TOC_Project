@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&family=Kanit:wght@200;400;500;600&display=swap');


:root {
    --origin-gray: #00000096;
    --white: #ffffff;
  }

body {
    margin: 0;
    padding: 0;
    font-family: 'Kanit';
}

h1 {
    font-weight: 700;
}

h2 {
    font-weight: 400;
    font-size: 1.6vw;
}

h3 {
    font-weight: 400;
    font-size: 1.2vw;
}

.home-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 90vw;
    padding: 5vh 6vw;
    position: relative;
}
.code-container {
    display: flex;
    justify-self: flex-end;
    
}
.announcing-container {
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 88vw;
    padding: 5vh 6vw;
    position: relative;
}
.announcing-container button {
    position: absolute;
    bottom: 3%;
    right: 3%;
    border: none;
    cursor: pointer;
    appearance: none;
    background-color: inherit;
    width: 100px;
    height: 80px;
}
.announcing-container .playing-button button {
    position: relative;
    bottom: 3%;
    right: 3%;
    border: none;
    cursor: pointer;
    appearance: none;
    background-color: inherit;
    width: 60px;
    height: 60px;
    stroke: #dbdbdb;
    stroke-width: ;
}
.announcing-container button img {
    width: 100%;
    position: relative;
}
.announcing-container button img::after {
    position: absolute;
    content: "Back";
}

/* ----------------------------------------------- score board -----------------------------------------------*/
.board-container {
    display: grid;
    grid-template-columns: 20% 78%;
    column-gap: 2%;
    height: 22vw;
}

.winner-container {
    position: relative;
    background-color: #F5F5F5;
    border: 2px solid gold;
    border-radius: 16px 16px 0 16px;
    padding: 2% 4%;
    display: flex;
    justify-content: center;
}
.winner-container div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}

.winner-container img {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}
.winner-container::after {
    position: absolute;
    content: "Winner!!!";
    bottom: -7%;
    right: -3%;
    color: var(--origin-gray);
    font-size: 2.4vw;
    font-weight: 400;
    transform: rotate(-15deg);
}

.score-container {
    display: grid;
    grid-template-rows: 20% 80%;
    color: var(--origin-gray);
    background-color: #F5F5F5;
    border: 2px solid var(--origin-gray);
    border-radius: 16px 16px 0 16px;
}
.score-container .score-header{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 30%;
    border-bottom: 2px solid var(--origin-gray);
    text-align: center;
}
.score-container .score-contents{
    width: 100%;
    height: 300px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    margin-top: .1vw;
}
.score-container .score-contents::-webkit-scrollbar {
    width: 10px;
}
.score-container .score-contents::-webkit-scrollbar-track {
    background-color: #dbdbdb;
}
.score-container .score-contents::-webkit-scrollbar-thumb {
    background: var(--origin-gray);
}

.score-contents .score-player {
    display: grid;
    grid-template-columns: 15% 55% 30%;
    overflow: hidden;
    padding: .2vw 0;
}
.score-contents .score-player img{
    margin-left: auto;
    margin-right: auto;
    width: 80px;
    height: 80px;
}
.score-contents .score-player > :nth-child(2){
    padding-left: 6vw;
}
.score-contents .score-player > :nth-child(3){
    text-align: center;
    padding-left: 2vw;
}

/* ----------------------------------------------- special -----------------------------------------------*/
.special-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    color: var(--origin-gray);
}
.special-header {
    padding-top: 2%;
}

.special-content {
    display: flex;
    justify-content: space-around;
    gap: 1%;
    width: 100%;
    height: 8.2vw;
    padding-bottom: 5%;
}
.special-content > * {
    width: 15%;
    height: 100%;
    background-color: #D9D9D9;
    border-radius: 12px 12px 0 12px;
    padding: 2px;
    position: relative;
}
.special-content > *::after {
    position: absolute;
    bottom: -20%;
    right: -8%;
    color: var(--origin-gray);
    font-size: 1.2vw;
    font-weight: 400;
    transform: rotate(-15deg);
}
.special-content > :nth-child(1)::after {
    content: "Backward Master!!!";
}
.special-content > :nth-child(2)::after {
    content: "Event Loser!!!";
}
.special-content > :nth-child(3)::after {
    content: "Event Master!!!";
}
.special-content > :nth-child(4)::after {
    content: "Stated King!!!";
}
.special-content > :nth-child(5)::after {
    content: "Identical Rolling!!!";
}
.special-content > :nth-child(6)::after {
    content: "Stepping Master!!!";
}

.special-content > :nth-child(1) {
    border: 2px solid #FF0101;
}
.special-content > :nth-child(2) {
    border: 2px solid black;
}
.special-content > :nth-child(3) {
    border: 2px solid #02FF49;
}
.special-content > :nth-child(4) {
    border: 2px solid #00FFC2;
}
.special-content > :nth-child(5) {
    border: 2px solid #FF00C7;
}
.special-content > :nth-child(6) {
    border: 2px solid #9E00FF;
}

.special-color {
    border: 2px solid var(--origin-gray);
    padding: 1vh 1vw;
    border-radius: 13px;
    display: grid;
    grid-template-columns: 50% 50%;
    position: relative;
    background-color: white;
}
.special-color .color-header {
    position: absolute;
    top: -3%;
    left: -1%;
    border: 2px solid var(--origin-gray);
    padding: .6vh 2vw;
    border-radius: 12px;
}
.special-color  .color-header {
    position: absolute;
    top: -3%;
    left: -1%;
    border: 2px solid var(--origin-gray);
    padding: .6vh 2vw;
    border-radius: 12px;
}
.special-color input {
    border: none;
    outline: none;
    color: var(--origin-gray);
    text-align: center;
    font-size: 14px;
}
/* James's code */
.sticky-left{
    display: flex;
    justify-self: flex-end;


}

.fullscreen{
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    position: absolute;
    min-height: 100vh;
    width: 100%;
    background-color: #121624;

}
.flex{
    display: flex;
    height: 100%;
    justify-content: flex-end;
    background-color: aqua;
}

.vertical-center{
    position: absolute;
    height: 100%;
}

.logo{
    font-family: "just another hand";
    color:#000000;
    font-size: 9vh;
    padding-top: 0.7%;
}
.top-bar{
    position:absolute;
    z-index:1;
    display: flex;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 12vh;

}
.status-bar{
    position:relative;
    display: flex;
    background-color:transparent;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    top:10%;
    z-index:1;
    height: 6vh;
    padding-top: 2%;
    padding-left: 5%;
    padding-right: 5%;
    font-family: 'Kanit', sans-serif;
    color: #FFFFFF;
    font-size: 2.5vh;
}
.total-post{

    display: flex;
    justify-content:flex-end;
    align-items: flex-start;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 20%;

    padding-top: 7%;
    padding-bottom: 10%;
 




}

.bottom-navbar{
    position: sticky;
    align-content: flex-end;
    justify-content: flex-start;
}




.row{
    color: #FFFFFF;
}
.container{
    display: flex;
    position: relative;

    max-width: 55%; 
    height: 35rem;

    border:3px;
    background: rgba(255, 255, 255, 0.07);
border: 2px solid rgba(255, 255, 255, 0.25);
border-radius: 15px;

}


.row{
    grid-area: 100px;
}
.playing-button{
    max-width: 60dvh; 
    height: 74vh;
    position:absolute;
    display: flex;
    flex-direction: row;
    
    align-items: flex-end;
    align-self: center;
    margin-right: 45vh;
}

