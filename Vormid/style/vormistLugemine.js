function tekstKastiLugemine(){
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");

    vastus.innerHTML="Tere paevast, "+nimi.value;
}
function puhasta(){
    let vastus=document.getElementById("vastus");
    vastus.innerHTML=" ";
    vastus2.innerHTML=" ";
    vastus3.innerHTML=" ";
    vastus4.innerHTML=" ";
    pilt.src="";

}
// radionupp
function radioLugemine(){
    let vastus2=document.getElementById("vastus2");
    let targv23=document.getElementById("targv23");
    let logitgv23=document.getElementById("logitgv23");
    let pilt=document.getElementById("pilt");
    if (targv23.checked){
        vastus2.innerHTML="Sa oled " +targv23.value;
        pilt.src="../Pildid/Air.png";
    }
    else if (logitgv23.checked) {
        vastus2.innerHTML ="Sa oled " + logitgv23.value;
        pilt.src="../Pildid/Fire.png";
    }else {
        vastus2.innerHTML = "Palun vade midagi";
        pilt.src = "../Pildid/Widow.png";
    }
}
//checkbox
function checkboxValik(){
    let vastus3=document.getElementById("vastus3");
    let andmebaasid=document.getElementById("andmebaasid");
    let matemaatika=document.getElementById("matemaatika");
    let programeerimine=document.getElementById("programeerimine");

    let aine=""
    if (andmebaasid.checked){
        aine+=andmebaasid.value+", ";
    }
    if (matemaatika.checked){
        aine+=matemaatika.value+", ";
    }
    if (programeerimine.checked){
        aine+=programeerimine.value+", ";
    }

    vastus3.innerHTML="Lemmikud on "+ aine;
}
//
function selectOptionValik(){
    let vastus4=document.getElementById("vastus4");
    let kodu=document.getElementById("kodu");
    let km=document.getElementById("km");

    if(kodu.selectedIndex!==0){
        vastus4.innerHTML="Valitud linn on"+kodu.value+", sinu kodunimi on"+km.value+"km";
    }else
        vastus4.innerHTML="Palun tee oma valik";
}

function varvValik(){
    let varv=document.getElementById("varv");
    vastus.style.color=varv.value;
    vastus2.style.color=varv.value;
    vastus3.style.color=varv.value;
    vastus4.style.color=varv.value;

}

function text(){

}