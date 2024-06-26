let userIdEle=document.getElementById("userInput");
let sendDeletebtnEle=document.getElementById("sendDeleteRequestBtn");

let statusCodeEle=document.getElementById("requestStatus");
let responseBodyEle=document.getElementById("httpResponse");

let loadingEle=document.getElementById("loading");



function apply(){
    loadingEle.classList.remove("d-none");
    statusCodeEle.classList.add("d-none");

    let userId=userIdEle.value;
    let urlText="https://gorest.co.in/public-api/users/"+userId;
    let options={
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            authorization:"Bearer f3b327e706c853240dd37807d3eb5864e7c815010f0ccb6d15f38351eff47b4b"
        }
        //body no need
    }

    fetch(urlText,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        loadingEle.classList.add("d-none");
        statusCodeEle.classList.remove("d-none");
       // console.log(jsonData);
        statusCodeEle.textContent=jsonData.code;
        responseBodyEle.textContent=JSON.stringify(jsonData.data);
    })
}

sendDeletebtnEle.addEventListener("click",apply);


//let see with GET method

//let userId=userIdEle.ariaValueMax;
/*let urlText="https://gorest.co.in/public-api/users";
let options={
    method:"GET"

}
fetch(urlText,options)
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
})*/