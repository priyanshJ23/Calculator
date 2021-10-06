/*jshint onevar: true */
function calculatetotal() {

  var o = document.getElementById("courseone").value;
  var t = document.getElementById("coursetwo").value;
  var th = document.getElementById("coursethree").value;
  var fo = document.getElementById("coursefour").value;
  var fi = document.getElementById("coursefive").value;
  var one = parseInt(o);
  var two = parseInt(t);
  var three = parseInt(th);
  var four = parseInt(fo);
  var five = parseInt(fi);
  var total = one + two + three + four + five;
  if( !o || !t || !th || !fo || !fi)
  {
    alert("Enter all the subject marks");
  }
  else {
  document.getElementById("result").innerHTML = "Your total marks is " + total;

}}
function calculateaverage()
     {
       var o = document.getElementById("courseone").value;
       var t = document.getElementById("coursetwo").value;
       var th = document.getElementById("coursethree").value;
       var fo = document.getElementById("coursefour").value;
       var fi = document.getElementById("coursefive").value;
       var one = parseInt(o);
       var two = parseInt(t);
       var three = parseInt(th);
       var four = parseInt(fo);
       var five = parseInt(fi);
       var total = one+two+three+four+five;
        var percent = (total/500);
        var percent = (total/500)*100;
        if( !o || !t || !th || !fo || !fi)
        {
          alert("Enter all the subject marks");
        }
        else {
        if(parseInt(one)>100 ||  parseInt(two)>100 || parseInt(three)>100 || parseInt(four)>100 || parseInt(five)>100)
        {
          alert('Enter valid marks');
        }
        else {
         document.getElementById("result").innerHTML  = "Your Average marks is " + Math.ceil(percent);
       }}}
function calculatepercent()
         {

         var o = document.getElementById("courseone").value;
         var t = document.getElementById("coursetwo").value;
         var th = document.getElementById("coursethree").value;
         var fo = document.getElementById("coursefour").value;
         var fi = document.getElementById("coursefive").value;

         var one = parseInt(o);
         var two = parseInt(t);
         var three = parseInt(th);
         var four = parseInt(fo);
         var five = parseInt(fi);
         var total = one+two+three+four+five;
          var percent = (total/500)*100;
          if( !o || !t || !th || !fo || !fi)
          {
            alert("Enter all the subject marks");
          }
          else {
          if(parseInt(one)>100 ||  parseInt(two)>100 || parseInt(three)>100 || parseInt(four)>100 || parseInt(five)>100)
            {
              alert('Enter valid marks');
            }
            else {
             document.getElementById("result").innerHTML  = "Your Percentage  is " + percent.toFixed(2) + "%";
           }}}
function overall() {

 var o = document.getElementById("courseone").value;
 var t = document.getElementById("coursetwo").value;
 var th = document.getElementById("coursethree").value;
 var fo = document.getElementById("coursefour").value;
 var fi = document.getElementById("coursefive").value;
 var one = parseInt(o);
 var two = parseInt(t);
 var three = parseInt(th);
 var four = parseInt(fo);
 var five = parseInt(fi);
 var total = one + two + three + four +five;
 if( !o || !t || !th || !fo || !fi)
 {
   alert("Enter all the subject marks");
 }
 else {
 if(parseInt(one)>100 ||  parseInt(two)>100 || parseInt(three)>100 || parseInt(four)>100 || parseInt(five)>100)
   {
     alert('Enter valid marks');
   }
   else {
 if(one>=50 && two>=50 && three>=50 && four>=50 && five>=50 && total>=375)
 {
          var random = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
          if(random>=1 && random<=10)
          {
            var str = "Excellent performance Keep it up"
          }
          else {
            var str = "Good performance Keep it up!"
          }
          document.getElementById("performance").innerHTML =  "Result: pass" + "<br>"+ "Division : 1st" + "<br>" +"Rank:" +  random  + "<br>"+ "Remark:" + str;
   }
   else if(one>=50 && two>=50 && three>=50 && four>=50 && five>=50 && total<=375)
   {
     var random = Math.floor(Math.random() * (60 - 31 + 1)) + 31;
     if(random>=31 && random<=50)
     {
       var str = "You need to imporve your performance"
     }
     else {
       var str = "Need to improve a lot!"
     }
     document.getElementById("performance").innerHTML =     "Result: pass" + "<br>"+   "Division : 1st" + "<br>"+   "Rank:" +  random  + "<br>"+   "Remark:" + str;
   }
 else {
   var s = "Fail";
   var fai = s.fontcolor('red');
   document.getElementById("performance").innerHTML = "Result  : " + fai + "<br>" + " If Your marks is less than 50 in any subject" + "<br>" + " you are considered as fail";
 }}
}}
