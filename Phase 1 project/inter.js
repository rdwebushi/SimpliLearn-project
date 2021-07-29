var count =1;
function addData() {
    var name = document.getElementById("name").value;
    var ta = document.getElementById("ta").value; 
    //alert("Event fired");
    //This code is use to create the p tag
    var myPTag = document.createElement("p");
    //This code is use to create the content for any tags 
    //var myPTagContent = document.createTextNode("Welcome to JavaScript");
    var myPTagContent = document.createTextNode(" " +name+"  "+ta);
    // Adding the attribute for p tag
    myPTag.setAttribute("style","color:black;font-size:24px;");
  
    myPTag.setAttribute("class","myClass");
  
    //  else {
    //     myPTag.setAttribute("class","myClass1");    
    // }

    myPTag.setAttribute("id",count);
     //Add the cotent to p tag;
     myPTag.appendChild(myPTagContent);
     document.getElementById("blogg").appendChild(myPTag);
    reset();
}

    
    
    function reset() {
        document.getElementById("name").value="";
        document.getElementById("ta").value=""; 
    }