const currentDate = new Date();
const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
console.log(formattedDate);
// dayjs.extend(toObject);
const timeblock = $("#currentDay")
timeblock.text(formattedDate)

function timeformatter() {
  let currtime = new Date()
  // let corredttime = currtime.toLocaleTimeString()
  let fixtime = currtime.getHours()
  //if(currtime.getHours() >= 13) {
  //  fixtime = fixtime - 12
  //}
  let name = "hour-"

  for(let t = 9; t <= 17; t++) {
   console.log("t="+t)
   const element = name+t;
   const cdarray = $("#"+element);
   if (fixtime > t ){
    cdarray.removeClass("future")
    cdarray.addClass("past")
   }else if (fixtime === t ) {
    cdarray.removeClass("future")
    cdarray.addClass("present")
   }
}
}

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

 const savebutton = $("button")
 savebutton.each(function(){ $(this).on("click",function(event) {
  // console.log($(this).siblings("textarea").val())
  let butnparent = $(this).parent().attr("id")
  let notetosave = $(this).siblings("textarea").val()
  console.log(butnparent)
  localStorage.setItem(butnparent,JSON.stringify(notetosave))
  // const savednote = localStorage.getItem(butnparent)
  // console.log(savednote)
 })})


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  let name = "hour-"

  for(let t = 9; t <= 17; t++) {
   console.log("t="+t)
   const element = name+t;
   const cdarray = $("#"+element);
   const data = JSON.parse(localStorage.getItem(element))
   if (data) {
    cdarray.children("textarea").text(data)
   }
}
  
  });


//function internationalization(){
  timeformatter();
//}

//internationalization ()