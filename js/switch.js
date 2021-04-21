window.addEventListener("load",init);

function $(nev){
    return document.querySelectorAll(nev);
}
var index=0;
//description of the picture object
var pic1 = {
    source:"media/2020-bmw-m8-m-performance-parts.jpg",
    address:"BMW m8 performance",
    description:"BMW m8 performance"
};

var pic2 = {
    source:"media/BMW M Performance parts Sep 2020-5.jpg",
    address:"BMW m8 performance",
    description:"BMW m8 performance"
};

var pic3 = {
    source:"media/bmw-8-series_100702961.jpg",
    address:"BMW m8 performance",
    description:"BMW m8 performance"
};

var pic4 = {
    source:"media/bmw-m3-comp-mpp-mg-01.jpg",
    address:"BMW m8 performance",
    description:"BMW m8 performance"
}
var picblock=[pic1, pic2, pic3, pic4];

function init(){
    for (var i = 0; i < picblock.length; i++) {
        var elem='<div><h3></h3><img id="'+i+'" src="" alt=""/><p></p></div>';
        $("article")[0].innerHTML += elem;
    }
    var picelementblock=$("article div img");
    var addresselementblock=$("article div h3");
    var descriptionelementblock=$("article div p");
    console.log(picblock);
    
    for (var i = 0; i < picelementblock.length; i++) {
        picelementblock[i].src=picblock[i].address;
        addresselementblock[i].innerHTML=picblock[i].address;
        descriptionelementblock[i].innerHTML=picblock[i].description;
    }   

    for (var i = 0; i < picelementblock.length; i++) {
        picelementblock[i].addEventListener("click",kepCsere);
    }
    $("#left")[0].addEventListener("click",previous);
    $("#right")[0].addEventListener("click",next);
}

function kepCsere(){
    var i = this.id;
    $("#picturecontainer img")[0].src=picblock[i].source;
    $("#picturecontainer h3")[0].innerHTML=picblock[i].address;
    $("#picturecontainer p")[0].innerHTML=picblock[i].description;
}
function previous(){
    $("#picturecontainer img")[0].src=picblock[index].source;
    index--;
    if(index<0){
        index=picblock.length-1;
    }
}
function next(){
    $("#picturecontainer img")[0].src=picblock[index].source;
    index++;
    if(index>picblock.length-1){
        index=0;
    }
}