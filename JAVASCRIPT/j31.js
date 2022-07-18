function getFullName(group) {
 return group[1] + " " + group[0];
}

var scientist = ["Vera", "Rubin"];
var name = getFullName(scientist);
console.log(name);