// add remove button to all missions
let allNodes = document.querySelectorAll("#ulList li");
for (let i = 0; i < allNodes.length; i++) {
  let span = document.createElement("SPAN");
  let tNode = document.createTextNode("\u274C");
  span.className = "remove";
  span.appendChild(tNode);
  allNodes[i].appendChild(span);
};

// hide the chosen mission
let remove = document.getElementsByClassName("remove");
for (let i = 0; i < remove.length; i++) {
  remove[i].onclick = function() {
    let main = this.parentElement;
    main.style.display = "none";
  };
};

// create new mission
function newMission() {
  let li = document.createElement("li");
  let adding = document.getElementById("userInput").value;
  let addTask = document.createTextNode(adding);
  li.appendChild(addTask);
  if (adding === '' || adding.length > 50) {
    alert("Please enter mission detail (less than 50 characters.");
  } else {
    document.getElementById("ulList").appendChild(li);
  };
  document.getElementById("userInput").value = "";
  let span = document.createElement("SPAN");
  let tNode = document.createTextNode("\u274C");
  span.className = "remove";
  span.appendChild(tNode);
  li.appendChild(span);

  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
        var main = this.parentElement;
        main.style.display = "none";
    };
  };
};

// mark completed mission
let missions = document.querySelector('ul');
missions.addEventListener('click', function(x) {
  if (x.target.tagName === 'LI') {
    x.target.hidden = true;
    let li = document.createElement("li");
    let adding = x.target.textContent.split('\u274C');
    adding = adding.slice(0,-1) + "\u2714";
    let addTask = document.createTextNode(adding);
    li.appendChild(addTask); 
    document.getElementById("completed").appendChild(li);
  };
}, false);

// empty all incomplete missions
function emptyList(){
  let toEmpty = document.getElementsByTagName("ul");
    toEmpty[0].innerHTML = "";
};
