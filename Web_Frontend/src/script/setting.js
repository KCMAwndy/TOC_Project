var colorArray = ["red","blue","yellow","green","purple","gray"];
var mapPathArray = ["map1.jpg","map2.jpg","map3.jpg","map4.jpg","map5.jpg","map1.jpg"];
var charObj = [];
var efStatus = [];
var charColor = ["","","","","",""];
var mapChoosen = "";
var colorBool = [false,false,false,false,false,false];

var playerBox = document.getElementById("player-box");
var efBox = document.getElementById("ef-box");
var colorDiv = document.getElementById("color-choosen");
var characterDiv = document.getElementById("player-choosen");
var mapDiv = document.getElementById("map-choosen");
var choosenChar  = document.getElementById("check-character");
var mapEmpty = document.getElementById("check-map-empty");
var charEmpty = document.getElementById("check-character-empty");

colorDiv.setAttribute("style","display: none");
colorDiv.addEventListener("mouseleave",function(){
    setTimeout(function() {
        colorDiv.setAttribute("style","display: none");
    }, 5000);
})

for(let i=0; i<6; i++){
    //color button
    var cirBtn = document.createElement("button");
    cirBtn.className="col m-1 rounded-circle";
    cirBtn.style="width: 40px; height: 40px;"
    cirBtn.style.backgroundColor = colorArray[i];
    let icon = document.createElement("img");
    icon.setAttribute('src',"../img/X.png");
    icon.setAttribute('style',"display: none;");
    cirBtn.appendChild(icon);
    colorDiv.appendChild(cirBtn);
}

let colorBtn = colorDiv.querySelectorAll('button');
colorBtn.forEach(function (i) {
    i.addEventListener('click', function() {
        let oldArray = [...charColor];
        let numBtn = colorArray.indexOf(i.style.backgroundColor);
        if(!charColor.includes(i.style.backgroundColor) && !colorBool[numBtn]){
            charColor[divNum] = i.style.backgroundColor;
            ((colorDiv.childNodes[numBtn]).childNodes[0]).setAttribute('style',"display: flex;");
            colorBool[numBtn] = true;
            for (let j = 0; j < oldArray.length; j++) {
                if(oldArray[j] === '')
                    continue
                else if(oldArray[j] !== charColor[j]){
                    let oldNumBtn = colorArray.indexOf(oldArray[j]);
                    ((colorDiv.childNodes[oldNumBtn]).childNodes[0]).setAttribute('style',"display: none");
                    colorBool[oldNumBtn] = false;
                }
            }
            (charObj[divNum].childNodes[1]).style.fill = charColor[divNum];
        }
    });
});

for(let i=0; i<5; i++){
    //map
    let mapBtn = document.createElement("button");
    mapBtn.className="m-2";
    mapBtn.style="width: 210px; height: 210px; display: flex; justify-content: center; align-items: center;  border-radius: 25px;"
    let map = document.createElement("img");
    map.setAttribute('src',"../img/"+mapPathArray[i]);
    map.style=" width: 100%; height: 100%; object-fit: cover; border-radius: 25px;"
    mapBtn.appendChild(map);
    mapDiv.appendChild(mapBtn);
}

let mapBtn = mapDiv.querySelectorAll('button');
mapBtn.forEach(function (i) {
    i.addEventListener('click', function() {
        if(mapEmpty.style.display === 'flex')
            mapEmpty.style.display = 'none';
        choosenChar.setAttribute("style","display: none");
        let choosenMap  = document.getElementById("check-map");
        let posY = i.offsetTop;
        let posX = i.offsetLeft;
        choosenMap.setAttribute("style","display: flex; position: absolute; height: 50px; width: 50px");
        choosenMap.style.top = (posY+(i.offsetHeight/2)-(choosenMap.offsetHeight/2)).toString()+'px';
        choosenMap.style.left = (posX+(i.offsetWidth/2)-(choosenMap.offsetWidth/2)).toString()+'px';
        mapChoosen = getMapName((i.childNodes[0]).getAttribute("src"));
    });
});

function addPlayer(){
    let divCheck = characterDiv.querySelectorAll("div");
    colorDiv.setAttribute("style","display: none");
    choosenChar.setAttribute("style","display: none");
    if(charEmpty.style.display === 'flex')
        charEmpty.style.display = 'none';
    if(divCheck.length < 6 ){
        createEF();
        var elements = document.createElement("div");
        var insertName = document.createElement("input");
        elements.className = "mx-3 mt-4 position: relative";
        elements.style = "width: 150px; height: 150px;";
        insertName.maxLength="15";
        insertName.type = "text";
        insertName.name = "username";
        insertName.placeholder = "Input Name";
        insertName.className = "position-relative top-0 start-50 translate-middle focus-ring text-white text-center fw-bold border border-0 rounded-pill bg-secondary";
        insertName.style = "width: 120px; height: 30px;";
        elements.append(insertName);
        createSVG(elements);
        characterDiv.appendChild(elements);
        charObj.push(elements);
        insertName.addEventListener('input', function () {
            insertName.style.width = (insertName.value.length + 3) + 'ch';
        });
        elements.onclick=function(){
            let posY = elements.offsetTop;
            let posX = elements.offsetLeft;
            colorDiv.setAttribute("style","display: flex; position: absolute");
            colorDiv.style.top = (posY+elements.offsetHeight+15).toString()+'px';
            colorDiv.style.left = (posX-(elements.offsetWidth/2)).toString()+'px';
            divNum = charObj.indexOf(elements);
            (efBox.childNodes[divNum]).style.display="none";
            let inputElement = characterDiv.querySelectorAll("input");
            inputElement.forEach(function(i){
                if (i.value.trim() === "") {
                    i.placeholder = "Input Name";
                    i.style = "width: 120px; height: 30px;"
                }
            });
            choosenChar.setAttribute("style","display: flex; position: absolute; height: 50px; width: 50px");
            choosenChar.style.top = (posY-insertName.offsetHeight-(choosenChar.offsetHeight/2)).toString()+'px';
            choosenChar.style.left = (posX+(elements.offsetWidth/2)-(choosenChar.offsetWidth/2)).toString()+'px';
        };
        insertName.addEventListener("input", function () {
            if (insertName.value.trim() === "") {
                insertName.placeholder = "";
            } else {
                insertName.placeholder = "Input Name";
            }
        });
    }
    updateXY();
}

function removePlayer(){

    if(charObj.length > 0 ){
        colorDiv.setAttribute("style","display: none");
        choosenChar.setAttribute("style","display: none");
        (charObj[charObj.length-1]).remove();
        efBox.removeChild(efBox.lastElementChild);
        colorBool[colorArray.indexOf(charColor[charObj.length-1])] = false;
        if(charColor[charObj.length-1]!=="")
            ((colorDiv.childNodes[colorArray.indexOf(charColor[charObj.length-1])]).childNodes[0]).setAttribute('style',"display: none");
        charColor[charObj.length-1] = "";
        charObj.pop();
        efStatus.pop();
        updateXY();
    }
}

function updateXY() {
    let count = 0;
    for (const child of efBox.children) {
        let inpDiv = charObj[count].firstElementChild;
        let posY = 10;
        let inpDivRect = inpDiv.getBoundingClientRect();
        let posX = inpDivRect.left + inpDivRect.width+10;
        child.style.top = posY + 'px';
        child.style.left = posX + 'px';
        count++;
    }
}

function createSVG(div){
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("fill", "white");
    svgElement.setAttribute("version", "1.1");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    svgElement.setAttribute("viewBox", "0 0 32 32");
    svgElement.setAttribute("xml:space", "preserve");
    svgElement.setAttribute("style","position: relative; top: -10%; left: 0%;")
    svgElement.setAttribute("width", div.style.width);
    svgElement.setAttribute("height", div.style.height);
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M29.4,23.9c-0.3-1.6-1.2-3-2.4-4l-1.9-1.6c-0.4-0.3-0.8-0.7-1.1-1.1V21c0,0.6-0.4,1-1,1s-1-0.4-1-1v-7.3V13v-2 c0-5-2.6-9-6-9s-6,4-6,9v2v0.7V21c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3.8c-0.3,0.4-0.7,0.8-1.1,1.1L5,19.9c-1.2,1-2.1,2.4-2.4,4L2,26.8 c-0.1,0.3,0,0.6,0.2,0.8C2.4,27.9,2.7,28,3,28h7v1c0,0.6,0.4,1,1,1h4v-9c0-0.6,0.4-1,1-1s1,0.4,1,1v9h4c0.6,0,1-0.4,1-1v-1h7 c0.3,0,0.6-0.1,0.8-0.4c0.2-0.2,0.3-0.5,0.2-0.8L29.4,23.9z M18,11c-0.6,0-1-0.4-1-1c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,0.6-0.4,1-1,1 s-1-0.4-1-1c0-1.7,1.3-3,3-3s3,1.3,3,3C19,10.6,18.6,11,18,11z");
    svgElement.appendChild(pathElement);
    div.appendChild(svgElement);
}

function createEF(){
    let checkInput = document.createElement("img");
    checkInput.setAttribute('src',"../img/EF.png");
    checkInput.setAttribute('class',"EFCheck");
    checkInput.setAttribute("style","display: none; position: absolute;")
    efBox.appendChild(checkInput);
    efStatus.push(false);
}

function getMapName(imageUrl){
    let parts = imageUrl.split("/");
    let fileName = parts[parts.length - 1];
    return (fileName.split("."))[0];
}

function exportJASON(){
    var playerData = []
    var nameArray = characterDiv.querySelectorAll("input");
    var count = 0
    nameArray.forEach(i => {
        var playerObject = {} //สร้างใหม่ทุกครั้ง
        playerObject['Player Name'] = i.value;
        playerObject['Color'] = charColor[count];
        playerData.push(playerObject);
        count++;
    });
    var mapObject = {}
    mapObject['Map']=mapChoosen;
    mapObject["PlayerData"]=playerData,null,4;
    var exportData = JSON.stringify(mapObject,null,4);
    // JSON : exportData
}

function checkAll(){
    let allInput = characterDiv.querySelectorAll("input");
    let inputName = [];
    let count = 0;
    allInput.forEach(i => {
        if((i.value.trim() === "" && i.placeholder !== "") || inputName.includes((i.value)) || charColor[count]==""){
            (efBox.childNodes[count]).style.display="flex";
            updateXY();
        }
        else
            efStatus[count]=true;
        inputName.push(i.value);
        count++;
    });

    if(mapChoosen===""){
        mapEmpty.style.display = "flex";
        mapEmpty.style.top = (mapDiv.offsetHeight+playerBox.offsetHeight+30).toString()+'px';
        mapEmpty.style.left = (mapDiv.offsetWidth-170).toString()+'px';
    }
    
    if(charObj.length===0){

        charEmpty.style.display = "flex";
        charEmpty.style.top = (playerBox.offsetHeight-40).toString()+'px';
        charEmpty.style.left = (playerBox.offsetWidth-160).toString()+'px';
    }

    const allTrue = efStatus.every((value) => value === true);
    if (allTrue && efStatus.length!=0 && mapChoosen!=="") 
        alert("Enter Game");
        // exportJASON();
}

function sendCode(){
    let codeInput = (document.getElementById("insert-code")).querySelector("input");
    if(codeInput.value!==''){
        alert("YOUR CODE : "+codeInput.value);
        codeInput.value='';
    }
}