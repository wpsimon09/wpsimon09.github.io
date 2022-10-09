//get the nbsa
let nbsaValue = document.getElementById("ECvalue").innerHTML;
console.log(nbsaValue);

const nbsaBarWidht = (nbsaValue/60)*100;
var progressBar = document.getElementById("progressBar");

if(nbsaValue < 30)
{
    progressBar.style.backgroundImage = "linear-gradient(50deg, #E32626, #FF5968 )";
}
else if(nbsaValue > 30 && nbsaValue < 45 )
{
    progressBar.style.backgroundImage = "linear-gradient(50deg, #E39B26, #FFA358 )";
}
else {
    progressBar.style.backgroundImage = "linear-gradient(50deg, #5BF04A, #00D27E )";
}

progressBar.style.width = `${nbsaBarWidht}%`;