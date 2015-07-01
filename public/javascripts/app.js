var play = document.getElementsByClassName("play")[0];
var formInfo = [];
var formNames = ["mode", "type", "games", "points"];

play.addEventListener("click", function (e) {
  var button = document.getElementsByTagName("button");
  if(e.target.className === "button") {
    if(button[0].value === "1 Time Play") {
        formInfo.push(button[0].value);
        var div = document.getElementsByClassName("play")[0];
        div.innerHTML = "";
        var button = document.createElement("button");
        button.className = "button";
        button.type = "button";
        button.value = "Individual";
        button.innerHTML = "Individual";
        div.appendChild(button);
      }
    else if (button[0].value === "Individual") {
        formInfo.push(button[0].value);
        var div = document.getElementsByClassName("play")[0];
        div.innerHTML = "";
        var title = document.createElement("h2");
        title.className = "thirds";
        title.innerHTML = "How Many Games?"
        div.appendChild(title);
        var button = document.createElement("button");
        button.className = "button-third1";
        button.type = "button";
        button.value = "1";
        button.innerHTML = "Best of 1";
        div.appendChild(button);
        var button = document.createElement("button");
        button.className = "button-third2";
        button.type = "button";
        button.value = "3";
        button.innerHTML = "Best of 3";
        div.appendChild(button);
        var button = document.createElement("button");
        button.className = "button-third3";
        button.type = "button";
        button.value = "5";
        button.innerHTML = "Best of 5";
        div.appendChild(button);
      } // Ends else if
    }  // Ends if for target
    else if (e.target.className === "button-third1") {
          formInfo.push(button[0].value);
          var div = document.getElementsByClassName("play")[0];
          div.innerHTML = "";
          var title = document.createElement("h2");
          title.className = "thirds";
          title.innerHTML = "How Many Points?"
          div.appendChild(title);
          var button = document.createElement("button");
          button.className = "button-third4";
          button.type = "button";
          button.value = "11";
          button.innerHTML = "Play to 11";
          div.appendChild(button);
          var button = document.createElement("button");
          button.className = "button-third5";
          button.type = "button";
          button.value = "21";
          button.innerHTML = "Play to 21";
          div.appendChild(button);
    } //Ends else if for target
    else if (e.target.className === "button-third2") {
          formInfo.push(button[1].value);
          var div = document.getElementsByClassName("play")[0];
          div.innerHTML = "";
          var title = document.createElement("h2");
          title.className = "thirds";
          title.innerHTML = "How Many Points?"
          div.appendChild(title);
          var button = document.createElement("button");
          button.className = "button-third4";
          button.type = "button";
          button.value = "11";
          button.innerHTML = "Play to 11";
          div.appendChild(button);
          var button = document.createElement("button");
          button.className = "button-third5";
          button.type = "button";
          button.value = "21";
          button.innerHTML = "Play to 21";
          div.appendChild(button);
    }
    else if (e.target.className === "button-third3") {
      formInfo.push(button[2].value);
      var div = document.getElementsByClassName("play")[0];
      div.innerHTML = "";
      var title = document.createElement("h2");
      title.className = "thirds";
      title.innerHTML = "How Many Points?"
      div.appendChild(title);
      var button = document.createElement("button");
      button.className = "button-third4";
      button.type = "button";
      button.value = "11";
      button.innerHTML = "Play to 11";
      div.appendChild(button);
      var button = document.createElement("button");
      button.className = "button-third5";
      button.type = "button";
      button.value = "21";
      button.innerHTML = "Play to 21";
      div.appendChild(button);
    }
    else if (e.target.className === "button-third4") {
      formInfo.push(button[0].value);
      var div = document.getElementsByClassName("play")[0];
      div.innerHTML = "";
      var formDiv = document.createElement("div");
      formDiv.className = "formDiv";
      div.appendChild(formDiv);
      var form = document.createElement("form");
      form.action = "/home";
      form.method = "post";
      form.id = "newGame";
      formDiv.appendChild(form);
      console.log(formInfo[1]);

      for(var i = 0; i < formInfo.length; i++) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.value = formInfo[i];
        input.name = formNames[i];
        form.appendChild(input);
        }

      var button = document.createElement("button");
      button.type = "submit";
      button.form = "newgame";
      button.value = "submit";
      button.className = "submit";
      button.innerHTML = "Submit Game";
      form.appendChild(button);
      console.log(formInfo);
    }
    else if (e.target.className === "button-third5") {
      formInfo.push(button[1].value);
      var div = document.getElementsByClassName("play")[0];
      div.innerHTML = "";
      var formDiv = document.createElement("div");
      formDiv.className = "formDiv";
      div.appendChild(formDiv);
      var form = document.createElement("form");
      form.action = "/home";
      form.method = "post";
      form.id = "newGame";
      formDiv.appendChild(form);
      console.log(formInfo[1]);

      for(var i = 0; i < formInfo.length; i++) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.value = formInfo[i];
        input.name = formNames[i];
        form.appendChild(input);
        }

      var button = document.createElement("button");
      button.type = "submit";
      button.form = "newgame";
      button.value = "submit";
      button.className = "submit";
      button.innerHTML = "Submit Game";
      form.appendChild(button);
      console.log(formInfo);
    }
}); //Ends event listener


// play.addEventListener("click", function() {
//   var button = document.getElementsByTagName("button");
//
//   if (button[0].value === "1 Time Play") {
//     formInfo.push("one_time_play");
//     var div = document.getElementsByClassName("play")[0];
//     div.innerHTML = "";
//     var button = document.createElement("button");
//     button.className = "button";
//     button.type = "button";
//     button.value = "Individual";
//     button.innerHTML = "Individual";
//     div.appendChild(button);
//   }
//
//  else if (button[0].value === "Individual") {
//   formInfo.push("individual");
//   var div = document.getElementsByClassName("play")[0];
//   div.innerHTML = "";
//   var title = document.createElement("h2");
//   title.className = "thirds";
//   title.innerHTML = "How Many Games?"
//   div.appendChild(title);
//   var button = document.createElement("button");
//   button.className = "button-third";
//   button.type = "button";
//   button.value = "1";
//   button.innerHTML = "Best of 1";
//   div.appendChild(button);
//   var button = document.createElement("button");
//   button.className = "button-third";
//   button.type = "button";
//   button.value = "3";
//   button.innerHTML = "Best of 3";
//   div.appendChild(button);
//   var button = document.createElement("button");
//   button.className = "button-third";
//   button.type = "button";
//   button.value = "5";
//   button.innerHTML = "Best of 5";
//   div.appendChild(button);
//   }
//
//   else if (button[0].value === "1") {
//     if (button[0].value === "1") {
//     formInfo.push(button[0].value);
//       }
//     var div = document.getElementsByClassName("play")[0];
//     div.innerHTML = "";
//     var button = document.createElement("button");
//     button.className = "button";
//     button.type = "button";
//     button.value = "How Many Points";
//     button.innerHTML = "How Many Points?";
//     div.appendChild(button);
//   }
//
//   else if (button[1].value === "3") {
//     if (button[1].value === "3") {
//     formInfo.push(button[1].value);
//       }
//     var div = document.getElementsByClassName("play")[0];
//     div.innerHTML = "";
//     var button = document.createElement("button");
//     button.className = "button";
//     button.type = "button";
//     button.value = "How Many Points";
//     button.innerHTML = "How Many Points?";
//     div.appendChild(button);
//   }
//
//   else if (button[2].value === "5") {
//     if (button[2].value === "5") {
//     formInfo.push(button[2].value);
//       }
//     var div = document.getElementsByClassName("play")[0];
//     div.innerHTML = "";
//     var button = document.createElement("button");
//     button.className = "button";
//     button.type = "button";
//     button.value = "How Many Points";
//     button.innerHTML = "How Many Points?";
//     div.appendChild(button);
//   }
//
//   else if (button.value === "How Many Points") {
//     formInfo.push("points");
//     var div = document.getElementsByClassName("play")[0];
//     div.innerHTML = "";
//     var formDiv = document.createElement("div");
//     formDiv.className = "formDiv";
//     div.appendChild(formDiv);
//     var form = document.createElement("form");
//     form.action = "/home";
//     form.method = "post";
//     form.id = "newGame";
//     formDiv.appendChild(form);
//     console.log(formInfo[1]);
//
//     for(var i = 0; i < formInfo.length; i++) {
//       var input = document.createElement("input");
//       input.type = "hidden";
//       input.value = formInfo[i];
//       input.name = formInfo[i];
//       form.appendChild(input);
//       }
//
//     var button = document.createElement("button");
//     button.type = "submit";
//     button.form = "newgame";
//     button.value = "submit";
//     button.className = "submit";
//     button.innerHTML = "Submit Game";
//     form.appendChild(button);
//     console.log(formInfo);
//   }
//
// });
