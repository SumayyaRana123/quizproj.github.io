let index=0;
let score=0;
const quizContainer=document.querySelector('.quiz-container');
const welcmContainer=document.querySelector('.welcome-container');
welcmContainer.style.display="none";
quizContainer.style.display="block";
nextButton=document.querySelector('.btn-next');
const quesNum =document.querySelector('.quiz-container h3');
const Label=document.getElementsByTagName('label');
const question=document.querySelector('.question-text ');
const rButtons=document.querySelectorAll('.option');
const resultbox=document.getElementById('resultbox');
console.log(rButtons.innerHTML);

function pageLoad()
{

quizContainer.style.display="block";

//welcmContainer.style.display="block";
}
function startQuiz()
{
   index=0;score=0;
    welcmContainer.style.display="none";
    quizContainer.style.display="block";
    FirstLoad();
  

}
function recordAnswer(index)
{
   //alert("index is "+index);
          for(let i=0;i<4;i++)
 {
         if(rButtons[i].checked){
   
   
          quiz.questions[index].given=i;
             }}
             
            // alert("answer"+quiz.questions[index].answer+"given"+quiz.questions[index].given);
             if((quiz.questions[index].answer)==(quiz.questions[index].given))
             {
                      score+=1;
             }
   
   } 


const quiz={
    questions:[{
                   q:'Inside which HTML element do we put the JavaScript?',
                   options:['&lt;scripting&gt;','&lt;script&gt;','&lt;Javascript&gt;','&lt;Js&gt;'],
                   answer:1,
                   given:0
             },
             {
                q:'Where is the correct place to insert a JavaScript??',
                options:['head section','body section','Both of them','None of them'],
                answer:2,
                given:0
             },
             {
                q:'How do you write "Hello World" in an alert box?',
                options:['alerBox("Hello World");','msg("Hello World");','msgBox(Hello World");','alert("Hello World");'],
                answer:3,
                given:0
             },
             {
                q:'How do you create a function in JavaScript?',
                options:['function myFunction()','function =myFunction();','function: myFunction();','function myFunction;'],
                answer:0,
                given:0
             },
             {
                q:'How do you call a function named "myFunction"?',
                options:['call myFunction()','myFunction();','call function myFunction()','myFunction{}'],
                answer:1,
                given:0
             },
             {
                q:'How to write an IF statement in JavaScript?',
                options:[' if i == 5 then',' if i = 5',' if (i == 5)',' if i = 5 then'],
                answer:2,
                given:0
             },
             {
                q:'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
                options:['  if (i &lt;&gt; 5)','  if i &lt;&gt; 5','  if (i != 5)','  if i =! 5 then'],
                answer:2,
                given:0
             },
             {
                q:'How does a WHILE loop start?',
                options:[' while (i &lt;= 10; i++) ',' while i = 1 to 10 ',' while (i &lt;= 10)  ','while (i &lt;= 10; i+) '],
                answer:2,
                given:0
             },
             {
                q:'How can you add a comment in a JavaScript?',
                options:[' //This is a comment','  &lt;!--This is a comment--&gt;','  This is a comment ',' \\This is a comment'],
                answer:0,
                given:0
             },
             {
                q:'What is the correct way to write a JavaScript array?',
                options:['  var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")','  var colors = (1:"red", 2:"green", 3:"blue")','  var colors = "red", "green", "blue" ',' var colors = ["red", "green", "blue"] '],
                answer:3,
                given:0
             },

]};

 const questionLoad=function ()
 {
    if(index<10)
    {
     recordAnswer(index);
     rButtons.forEach(rbutton=>{
     rbutton.checked=false;});
     index++;
     question.textContent=quiz.questions[index].q;
     const options=quiz.questions[index].options;
     let optionIndex=0;
     options.forEach(option =>{
   // rButtons[optionIndex].innerHTML=option;
     Label[optionIndex].innerHTML=option;
     optionIndex++;

   });
   quesNum.innerHTML= `<h3>Question ${index+1} of 10</h3>`
   
  
    }
  else
  {
   quizContainer.style.display="none";
   resultbox.innerHTML=`you scored: ${score} out of 10`;
   welcmContainer.style.display="block";
  }
};

 const FirstLoad=function ()
 {
   question.textContent=quiz.questions[index].q;
   const options=quiz.questions[index].options;
   let optionIndex=0;
   options.forEach(option =>{
   Label[optionIndex].innerHTML=option;
    optionIndex++;

   });
    quesNum.innerHTML= `<h3>Question ${index+1} of 10</h3>`
 }
FirstLoad();