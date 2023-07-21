import data from "../json/champions.json" assert { type: "json" };

for (let i = 0; i < data.length; i++) {
  console.log(data[i].id);
}
