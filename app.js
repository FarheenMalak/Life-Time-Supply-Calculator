var favSnacks = "lays";
var currentAge = 18;
var maxAge = 55;
var perDay = 2;

var lifetime = (maxAge - currentAge) * perDay * 365;
document.getElementById("lifetime-supply").innerText = 
    "You will need " + lifetime + " lays to last you until the ripe old age of " + maxAge + ".";