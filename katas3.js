const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let arr = []
    for(let i = 1; i <= 25; i++ ){
        arr.push(i)
    }
    return arr
}


function kata2() {
    let arr = []
    for(let i = 25; i >= 1; i--){
        arr.push(i)
    }
    return arr
}


function kata3() {
    let arr = []
    for (let i = -1; i >= -25; i--){
        arr.push(i)
    }
    return arr
}


function kata4() {
    let arr = []
    for(let i = -25; i <= -1; i++){
        arr.push(i)
    }
    return arr    
}



function kata5() {
    let arr = []
    for (let i = 25; i >= -25; i--){
        if(i % 2 !== 0){
            arr.push(i)
        }
    }
    return arr
}

function kata6() {
    let arr = []
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0){
            arr.push(i)
        }
    }
    return arr
}


function kata7() {
    let arr = []
    for(let i = 1; i <= 100; i++){
        if(i % 7 === 0){
            arr.push(i)
        }
    }
    return arr
}


function kata8() {
    let arr = []
    for(let i = 100; i >= 1; i--){
        if(i % 3 === 0 || i % 7 === 0){
            arr.push(i)
        }
    }
    return arr
}


function kata9() {
    let arr = []
    for(let i = 0; i <= 100; i++){
        if(i % 5 === 0 && i % 2 !== 0){
            arr.push(i)
        }
    }
    return arr
}

function kata10() {
    return sampleArray    
}


function kata11() {
    let arr = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            arr.push(sampleArray[i])
        }
    }    
    return arr
}


function kata12() {
    let arr = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 !== 0){
            arr.push(sampleArray[i])
        }
    }    
    return arr    
}


function kata13() {
    let arr = []
    for(let i = 0; i < sampleArray.length ; i++){
        if(sampleArray[i] % 8 === 0){
            arr.push(sampleArray[i])
        }
    }
    return arr
}


function kata14() {
    let arr = []
    for(let i = 0; i <sampleArray.length; i++){
        arr.push(sampleArray[i] * sampleArray[i])
    }
    return arr
}


function kata15() {
    let arr = 0
    for (let i = 1; i <= 20; i++){
        arr += i
    }
    return arr
}


function kata16() {
    let arr = 0
    for(let i = 0; i < sampleArray.length; i++){
        arr+= sampleArray[i]
    }
    return arr
}


function kata17() {
    let menor = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i++){
        if(menor < sampleArray[i]){
            menor = sampleArray[i]
        }
    }
    return menor
}


function kata18() {
    let maior = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i++){
        if(maior > sampleArray[i]){
            maior = sampleArray[i]
        }
    }
    return maior
}


function kataScreen(){

    const katas = [0, kata1(), kata2(), kata3(), kata4(), kata5(), kata6(), kata7(), kata8(), kata9(),
    kata10(), kata11(), kata12(), kata13(), kata14(), kata15(), kata16(), kata17(), kata18()]

    for(let i = 1; i <= 18; i ++){

        const parentDiv = document.getElementById("parent")
        const newElement = document.createElement("div")
        const newTitle = document.createElement("h2")
        const newText = document.createElement("p")

        newElement.setAttribute("class", "child")
        
        newTitle.innerText = `Kata ${i}`;
        newText.innerText = `${katas[i]}`

        newElement.appendChild(newTitle)
        newElement.appendChild(newText)

        parentDiv.appendChild(newElement)
    }
}
kataScreen()


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    
    for(let i = 1; i <= 20; i ++){
        const parentDiv = document.getElementById("bonus")
        const newElement = document.createElement("div")   
      
        newElement.setAttribute("class", "retangulo")
        newElement.style.width = "100px"
        newElement.style.backgroundColor = "grey"
        
        parentDiv.appendChild(newElement)
    }
}
kataBonus1()

function kataBonus2() {
    for(let i = 0; i <= 19; i ++){
        const parentDiv = document.getElementById("bonus2")
        const newElement = document.createElement("div")   
      
        newElement.setAttribute("class", "retangulo")


        let arr = []
        for(let j = 105; j <= 200; j++){
            if(j % 5 === 0){
                arr.push(j)
            }        
        }        
        newElement.style.width = `${arr[i]}px`  
        newElement.style.backgroundColor = "grey"   
        
        parentDiv.appendChild(newElement)
    }
}
kataBonus2()
        
       

function kataBonus3() {
    for(let i = 0; i < sampleArray.length; i ++){

        const parentDiv = document.getElementById("bonus3")
        const newElement = document.createElement("div")   
      
        newElement.setAttribute("class", "retangulo")
      
        newElement.style.width = `${sampleArray[i]}px`  
        newElement.style.backgroundColor = "grey" 
        
        parentDiv.appendChild(newElement)
    }
}
kataBonus3()

function kataBonus4() {
    for(let i = 0; i < sampleArray.length; i ++){

        const parentDiv = document.getElementById("bonus4")
        const newElement = document.createElement("div")   
      
        newElement.setAttribute("class", "retangulo")
      
        newElement.style.width = `${sampleArray[i]}px`   

        if(i % 2 !== 0){
            newElement.style.backgroundColor = "red"
        }else{
            newElement.style.backgroundColor = "grey"
        }
        
        parentDiv.appendChild(newElement)
    }
}
kataBonus4()

function kataBonus5() {
    for(let i = 0; i < sampleArray.length; i ++){

        const parentDiv = document.getElementById("bonus5")
        const newElement = document.createElement("div")   
      
        newElement.setAttribute("class", "retangulo")
      
        newElement.style.width = `${sampleArray[i]}px`   

        if(sampleArray[i] % 2 === 0){
            newElement.style.backgroundColor = "red"
        }else{
            newElement.style.backgroundColor = "grey"
        }
        
        parentDiv.appendChild(newElement)
    }
}
kataBonus5()
