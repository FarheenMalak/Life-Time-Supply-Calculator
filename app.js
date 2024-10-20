document.getElementById("calculate-btn").addEventListener("click", function() {
    const favSnacks = document.getElementById("snack-input").value;
    const currentAge = parseInt(document.getElementById("age-input").value);
    const maxAge = parseInt(document.getElementById("max-age-input").value);
    const perDay = parseInt(document.getElementById("snacks-per-day-input").value);

    if (!isNaN(currentAge) && !isNaN(maxAge) && !isNaN(perDay) && currentAge < maxAge) {
        const lifetime = (maxAge - currentAge) * perDay * 365;
        document.getElementById("lifetime-supply").innerText = 
            "You will need " + lifetime + " " + favSnacks + " to last you until the ripe old age of " + maxAge + ".";
    } else {
        document.getElementById("lifetime-supply").innerText = "Please enter valid inputs.";
    }
});
