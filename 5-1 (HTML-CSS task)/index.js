function validateform() 
{
     var name=document.getElementById("name");  
     name=name.value;

     var comment=document.getElementById("comment");
     comment=comment.value;
     
     if (name==null || name=="")
     {  
          alert("Name can't be blank");  
          document.getElementById("name").focus();
          return false;  
     }
     if(comment == null || comment=="")
     {
          alert("Comment can't be blank");  
          document.getElementById("comment").focus();
          return false;

     }

     var male=document.getElementById("male");
     var female=document.getElementById("female");
     
     if(male.checked || female.checked)
     {
          alert("Submitted successfully");  
          // return true;
     }
     else
     {
          alert("Select your gender");  
          // document.getElementById("comment").focus();
          return false;
     }


     
     
}