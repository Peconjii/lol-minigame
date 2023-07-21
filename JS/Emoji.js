import data from "../json/champions.json" assert { type: "json" };

let holder = document.getElementsByClassName("holder")[0];

for (let i = 0; i < data.length; i++) {
  let item = document.createElement("div");
  item.style.backgroundImage = "url('" + data[i].icon + "')";

  let name = document.createElement("p");
  name.textContent = data[i].id;

  item.appendChild(name);
  holder.appendChild(item);
}

console.log(data[1]);
