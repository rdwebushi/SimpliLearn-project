var count =1;
function addData() {
    var name = document.getElementById("name").value;
    var ta = document.getElementById("ta").value; 
    
    //Code to create the p tag
    var myPTag = document.createElement("p");
    
    
    var myPTagContent = document.createTextNode("< " +name );
    var myPTagContent1 = document.createTextNode(" "+ta);
   
    // Adding the attribute for p tag
    myPTag.setAttribute("style","color:black;font-size:24px;");  
    myPTag.setAttribute("class","myClass");  

 
    myPTag.setAttribute("id",count);
     //Add the cotent to p tag;
     myPTag.appendChild(myPTagContent);
     document.getElementById("blogg").appendChild(myPTag);
     myPTag.appendChild(myPTagContent1);
     document.getElementById("blogg").appendChild(myPTag);

    reset();
}    
    
    function reset() {
        document.getElementById("name").value="";
        document.getElementById("ta").value=""; 
    }