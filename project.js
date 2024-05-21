
let signup=document.getElementById("signup")
let profile=document.getElementById("profile-nav")
let quiz=document.getElementById("quiz")
let signout=document.getElementById("signout")
let contacts=document.getElementById("contact-nav")
let logindiv= document.getElementById("login")
let contactsdiv= document.getElementById("contacts")
let profilediv= document.getElementById("profile")
let quizdiv= document.getElementById("quizcont");
quiz.addEventListener("click",quizonclicked)
function quizonclicked(){
  signup.classList.remove("linkback");
  profile.classList.remove("linkback");
  quiz.classList.add("linkback");
  signout.classList.remove("linkback");
  contacts.classList.remove("linkback");
  if(username.value!==""&&emailRegex.test(email.value)&&password.value!==""){
    logindiv.style.display="none";
    quizdiv.style.display="flex";
    contactsdiv.style.display="none";
    profilediv.style.display="none";
    successfullcreation.style.display="none"
   
  }
  else{
    window.alert("signin or login to continue")
    signup.classList.add("linkback");
    profile.classList.remove("linkback");
    quiz.classList.remove("linkback");
    signout.classList.remove("linkback");
    contacts.classList.remove("linkback");
    logindiv.style.display="flex";
    quizdiv.style.display="none";
    contactsdiv.style.display="none";
    profilediv.style.display="none";
    successfullcreation.style.display="none"
  }
}
signout.addEventListener("click",signoutonclick)
function signoutonclick(){
  signup.classList.remove("linkback");
  profile.classList.remove("linkback");
  quiz.classList.remove("linkback");
  signout.classList.add("linkback");
  contacts.classList.remove("linkback");
  if(username.value!==""&&emailRegex.test(email.value)&&password.value!==""){
    let confirmationsignout= window.confirm("Are sure you want to sign out")
   if(confirmationsignout){
    window.alert("you were successfully signed out")
    logindiv.style.display="flex";
    quizdiv.style.display="none";
    contactsdiv.style.display="none";
    profilediv.style.display="none";
    successfullcreation.style.display="none"
   signup.classList.add("linkback");
   profile.classList.remove("linkback");
   quiz.classList.remove("linkback");
   signout.classList.remove("linkback");
   contacts.classList.remove("linkback");}
   else{
    logindiv.style.display="none";
    quizdiv.style.display="flex";
    contactsdiv.style.display="none";
    profilediv.style.display="none";
    successfullcreation.style.display="none"
   signup.classList.remove("linkback");
   profile.classList.remove("linkback");
   quiz.classList.add("linkback");
   signout.classList.remove("linkback");
   contacts.classList.remove("linkback");
   }
}else{
  window.alert("to be able to sign out you need to be signed into your account")
  logindiv.style.display="flex";
  quizdiv.style.display="none";
  contactsdiv.style.display="none";
  profilediv.style.display="none";
  successfullcreation.style.display="none"
 signup.classList.add("linkback");
 profile.classList.remove("linkback");
 quiz.classList.remove("linkback");
 signout.classList.remove("linkback");
 contacts.classList.remove("linkback");
}
  }
let profileusername=document.getElementById("profile-user-name")
let begginer=document.getElementById("beginner")
let intermidiet=document.getElementById("intermidiet")
let master=document.getElementById("master")
profile.addEventListener("click",profileclick);
function profileclick(){
    contactsdiv.style.display="none";
    successfullcreation.style.display="none"
    profilediv.style.display="flex";
    quizdiv.style.display="none";
    logindiv.style.display="none";
  
   signup.classList.remove("linkback");
   profile.classList.add("linkback");
   quiz.classList.remove("linkback");
   signout.classList.remove("linkback");
   contacts.classList.remove("linkback");
  if(username.value!==""&&emailRegex.test(email.value)&&password.value!==""){
   profileusername.value= username.value;
  }
}
signup.addEventListener("click",whensignupisclicked);
function whensignupisclicked(){
    contactsdiv.style.display="none";
    successfullcreation.style.display="none"
    profilediv.style.display="none";
    quizdiv.style.display="none";
    logindiv.style.display="flex";
   signup.classList.add("linkback");
   profile.classList.remove("linkback");
   quiz.classList.remove("linkback");
   signout.classList.remove("linkback");
   contacts.classList.remove("linkback");
}
contacts.addEventListener("click",whencontactsisclicked);
function whencontactsisclicked(){
    successfullcreation.style.display="none";
    contactsdiv.style.display="flex";
    profilediv.style.display="none";
    quizdiv.style.display="none";
    logindiv.style.display="none";
   signup.classList.remove("linkback");
   profile.classList.remove("linkback");
   quiz.classList.remove("linkback");
   signout.classList.remove("linkback");
   contacts.classList.add("linkback");
}
let createbutton=document.getElementById("create");
let username=document.getElementById("username")
let email= document.getElementById("email");
let password=document.getElementById("password")
let successfullcreation=document.getElementById("successfull-creation")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
createbutton.addEventListener("click",validation);
function validation(){
    
    let text1=document.getElementById("textappend1");
     let text2=document.getElementById("textappend2");
     let text3 =document.getElementById("textappend3")
 if(username.value==""){
  
   text1.style.display="block";
 }
 else{
 text1.style.display="none";
 };
 if(emailRegex.test(email.value)!==true){
 text2.style.display="block" 
 }
   else{
      text2.style.display="none";
 }
 if(password.value==""){
  text3.style.display="block"
 }
 else{
   text3.style.display="none"
 }
 if(username.value!==""&&emailRegex.test(email.value)&&password.value!==""){
   successfullcreation.style.display="flex";
   logindiv.style.display="none";
 }
}
let eyeicon=document.getElementById("eyeicon");
eyeicon.addEventListener("click",passworddisplay)
function passworddisplay (){
  if(password.type==="password"){
    password.type="text"
    
  }
  else{
    password.type="password"
  }
}
let penicon= document.getElementById("penicon");
penicon.addEventListener("click",peniconclick)
function peniconclick(){
  profileusername.value="";}
  profileusername.addEventListener("input",profileupdate)
   function profileupdate(){
     let newprofilename=profileusername.value.trim();
     profileusername.value=newprofilename;
   }
 
let startattempt=document.getElementById("starttime")
let timestamp;
 startattempt.addEventListener("click",timefunction)
 function timefunction(){
  questiondisplay()
  let startdate= Date.now();
    timestamp=setInterval(()=>{
    let startdate2= Date.now()
    let milliseconds= startdate2-startdate;
    let hours = Math.floor(milliseconds / (1000 * 60 * 60));
    let minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    if (hours<10){
      hours="0"+hours;
  };
  if(minutes<10){
      minutes="0"+minutes;
  };
  if (seconds<10){
      seconds="0"+seconds;
  };
  let time=document.getElementById("time");
  time.innerHTML=hours+":"+minutes+":"+seconds
  },500)
 }
 const questions=[{
  qone:" 1.where is js used",
  answers:[{text:"frontend only",correct:"false"},
{text:"backend only",correct:"false"},
{text:"both backend and frontend",correct:"true"},
{text:"none of the above",correct:"false"}]
 },
 {
  qone:"2.Is js same as java",
  answers:[{text:"No",correct:"true"},
{text:"yes",correct:"false"},
{text:"i think so",correct:"false"},
{text:"they are both markup languages",correct:"false"}]
 },
 {
  qone:" 3.what does && represent in js",
  answers:[{text:"And",correct:"true"},
{text:"or",correct:"false"},
{text:"Not",correct:"false"},
{text:"true",correct:"false"}]
 },
 {
  qone:" 4.How do you output something in js",
  answers:[{text:"println()",correct:"false"},
{text:"printf()",correct:"false"},
{text:"print ()",correct:"false"},
{text:"console.log()",correct:"true"}]
 },
 {
  qone:"5.which is not ajs framework",
  answers:[{text:"nodejs",correct:"false"},
{text:"angular",correct:"false"},
{text:".net",correct:"true"},
{text:"reactnative",correct:"false"}]
 }
];
let currentquestion=0;
let score=0;
let nxtbtn=document.getElementById("nextbtn");
let answrsection=document.getElementById("answrsection"); 
let qst =document.getElementById("question")
function questiondisplay(){
 
 qst.innerHTML=questions[currentquestion].qone;
  questions[currentquestion].answers.forEach((answer) => {
    let newbtn=document.createElement("button")
    newbtn.innerHTML= answer.text;
    
    answrsection.appendChild(newbtn);
    newbtn.classList.add("answrbutton")
 if(answer.correct){
  newbtn.dataset.correct=answer.correct
 }
   newbtn.addEventListener("click",special);
  }); 
  
}
let finishbtn=document.getElementById("finishbtn")

nxtbtn.addEventListener("click", changes)
function changes(){
  currentquestion+=1;
  while (answrsection.firstChild){
    answrsection.removeChild(answrsection.firstChild);}
    nxtbtn.style.display="none"
    questiondisplay();}
 function special(e){
let clicked= e.target
let correctness= clicked.dataset.correct==="true"
if(correctness){
  clicked.classList.add("correct")
  score++;
}else{
  clicked.classList.add("wrong")
}
Array.from (answrsection.children).forEach(newbtn=>{
  if(newbtn.dataset.correct==="true"){
    newbtn.classList.add("correct")
  
  }
  })
if((currentquestion+1)===questions.length){
  nxtbtn.style.display="none";
  finishbtn.style.display="block"
      }
      else{
        nxtbtn.style.display="block";
  finishbtn.style.display="none"
      }
 
 }
 finishbtn.addEventListener("click",()=>{
   qst.innerHTML= `Your score is ${score}`
   answrsection.style.display="none"
   startattempt.innerHTML="Time Taken"
   finishbtn.style.display="none"
   clearInterval(timestamp)
 })
