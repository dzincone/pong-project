var play = document.getElementsByClassName("play")[0];
var formInfo = [];
var formNames = ["mode", "type", "games", "points", "opponent"];
var formNewGame = ["mode", "type", "games", "points", "person1"];


play.addEventListener("click", function (e) {
  var button = document.getElementsByTagName("button");
  if(e.target.className === "button") {
    if(button[0].value === "1 Time Play") {
        formInfo.push(e.target.value);
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
        formInfo.push(e.target.value);
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
        button.className = "button-third1";
        button.type = "button";
        button.value = "3";
        button.innerHTML = "Best of 3";
        div.appendChild(button);
        var button = document.createElement("button");
        button.className = "button-third1";
        button.type = "button";
        button.value = "5";
        button.innerHTML = "Best of 5";
        div.appendChild(button);
      } // Ends else if
    }  // Ends if for target
    else if (e.target.className === "button-third1") {
          formInfo.push(e.target.value);
          var div = document.getElementsByClassName("play")[0];
          div.innerHTML = "";
          var title = document.createElement("h2");
          title.className = "thirds";
          title.innerHTML = "How Many Points?"
          div.appendChild(title);
          var button = document.createElement("button");
          button.className = "button-third2";
          button.type = "button";
          button.value = "11";
          button.innerHTML = "Play to 11";
          div.appendChild(button);
          var button = document.createElement("button");
          button.className = "button-third2";
          button.type = "button";
          button.value = "21";
          button.innerHTML = "Play to 21";
          div.appendChild(button);
    }
    else if (e.target.className === "button-third2") {
      formInfo.push(e.target.value);
      var xhr = new XMLHttpRequest;
      xhr.open("get", "/data", true);
      xhr.addEventListener("load", function() {
        xhr = xhr.response;
        xhr = JSON.parse(xhr);

        var div = document.getElementsByClassName("play")[0];
        div.innerHTML = "";
        var title = document.createElement("h2");
        title.className = "thirds";
        title.innerHTML = "Who to play?"
        div.appendChild(title);
        console.log(xhr.length)

        for (var i = 0; i < xhr.length; i++) {
          var button = document.createElement("button");
          button.className = "button-third3";
          button.type = "button";
          button.value = xhr[i].username;
          button.innerHTML = xhr[i].name;
          div.appendChild(button);
        }
      });
      xhr.send();
    }
    else if (e.target.className === "button-third3") {
      formInfo.push(e.target.value);
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
