 // Retrieve textarea element and set an event listener for input changes
 const textarea = document.getElementById('myTextarea');
 textarea.addEventListener('input', autoSave);

 // Changing color 
 document.getElementById("btn").addEventListener('click',()=>{
    textarea.style.backgroundColor = document.getElementById("background-color").value;
    textarea.style.color = document.getElementById("color").value;
 })

 // Reseting color
 document.getElementById("resetbtn").addEventListener('click',()=>{
    document.getElementById("color").value = "#424242";
    document.getElementById("background-color").value = "#ffffff";
    textarea.style.backgroundColor = "#ffffff";
    textarea.style.color = "#424242";
 })

 // Function to save textarea content to localStorage
 function autoSave() {
   const content = textarea.value;
   localStorage.setItem('autoSaveContent', content);
 }

 // Function to load saved content from localStorage
 function loadAutoSaveContent() {
   const savedContent = localStorage.getItem('autoSaveContent');
   if (savedContent) {
     textarea.value = savedContent;
   }
 }

 // Load saved content when the page loads
 window.addEventListener('load', loadAutoSaveContent);