// logic to display the current year
// target the container for the current year
document.querySelector(".year").innerHTML = new Date().getFullYear()

// check result logic
// -----------------

// - check if user enters anything in the matric field
const check_btn = document.querySelector(".check-btn")

// add click event listener to the button
check_btn.addEventListener("click", check_result)

function check_result(){
        // GET what the user enters as matric no
        let user_matric = document.querySelector(".matric-no").value

         //    target the error message and display it
      const error_display =  document.querySelector(".error")
      
        if(user_matric === ""){
           
              error_display.style.display = "flex"
              error_display.innerHTML = "Ooops! matric field cannot be empty!"
        }else{
                //  Search if matric exist in DB
                 let matric_owner = students.find(function(student){
                       return student.matric_no === user_matric
                 })

                //  if matric no not found
                 if(! matric_owner){
                     //    target the error message and display it
                      error_display.style.display = "flex"
                      error_display.innerHTML = "Ooops! matric no does not exist!"
                 }
                 else{   // if matric no is found
                        //    target the error message and display it
                      error_display.style.display = "none"
                      error_display.innerHTML = ""
                        // spitting out the student data

                        document.querySelector(".passport").src = matric_owner.image
                        document.querySelector(".matric").innerHTML = matric_owner.matric_no
                        document.querySelector(".firstname").innerHTML = matric_owner.firstname
                        document.querySelector(".lastname").innerHTML = matric_owner.lastname
                        document.querySelector(".gender").innerHTML = matric_owner.gender
                        document.querySelector(".course").innerHTML = matric_owner.course
                        document.querySelector(".score").innerHTML = matric_owner.score
                        document.querySelector(".remark").innerHTML = matric_owner.result

                        // display the result
                        document.querySelector(".result").style.display = "flex"
                        document.querySelector(".student-input").style.display = "none"
                 }
        }
}


// your logic for close btn goes here
const closebtn = document.querySelector(".close-btn")
closebtn.addEventListener("click", turn_back)
function turn_back() {
      document.querySelector(".student-input").style.display = "flex";
      document.querySelector(".result").style.display = "none";
  }

  //logic to download result
  const downloaddoc = document.querySelector(".downloadimg")
  downloaddoc.addEventListener("click", download)
   function download(){
      alert("Your result has been successfully downloaded! ")
   }