function addNewWeField(){
    let newNode =document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter Here ");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode,weAddButtonOb)
}


function addNewAQField()
{
    let newNode =document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter Here ");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById('aqAddButton');

    aqOb.insertBefore(newNode,aqAddButtonOb)
}

// cvGanerate


function ganerateCV(){
    
    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML =nameField;

    document.getElementById("nameT2").innerHTML=nameField;


    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value

    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value

    document.getElementById("gitT").innerHTML=document.getElementById("gitField").value


    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value

    // work experience

    let wes=document.getElementsByClassName('weField')
    let str=""

    for (let e of wes){
        str=str+`<li> ${e.value} </li>`

    }
document.getElementById('weT').innerHTML=str;

// acadmic Qualification

let aq=document.getElementsByClassName('eqField')
    let s=""

    for (let e of aq){
        s=s+`<li> ${e.value} </li>`

    }
document.getElementById('aqT').innerHTML=s;

document.getElementById('cv-form').style.display='none'
document.getElementById('cv-template').style.display='block'








//profile pic


// let profilePic=document.getElementById("profile-pic");
// let inputFile=document.getElementById("upload-img");


// inputFile.addEventListener('change',function(){
//     const chosedfile =this.files[0];
//     if(chosedfile){
//         const reader = new FileReader()
//         reader.addEventListener('load',function(){
//             profilePic.setAttribute('src',reader.result)
//         })
//         reader.readAsDataURL (chosedfile);
//     }
// })

}


function printCV(){
    window.print();
}
