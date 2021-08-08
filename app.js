/*
var a = prompt("What is your name ");
alert("Welcome " +a);
*/

var buttonTranslate = document.querySelector("#btn-translate");
var textAreas = document.querySelector("#input-textarea");
console.log(textAreas);
var output = document.querySelector("#output-textarea");

// the translation api url
var url = "https://api.funtranslations.com/translate/minion.json";

// this function will attach the particular text to url which is need to be converted to bananan language 
function getText(text){
    return url+"?"+"text="+text;
}

// this function will handle error if the link is not working
function errorHandler(error){
    console.log("error occured" + error);
    alert("something went wrong with the server please try again later");
}

// function that will be called out when translate button is clicked

buttonTranslate.addEventListener('click',function clickEventHandler(){
    console.log("clicked");
   var inputText = textAreas.value;
   
// the below code will fetch the given api and convert it to json format
fetch(getText(textAreas.value)).then(response => response.json()).then(json=>{
    var outputs = json.contents.translated;
    console.log(json);
    output.innerText = outputs;
})
.catch(errorHandler);
// the above catch function will catch the error 
    
}
);

/*var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";*/


