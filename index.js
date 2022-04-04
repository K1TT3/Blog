var inputnewpost = document.getElementById("input-new-post")
var divcontent = document.getElementById("div-content")

function NewPost()
{
    inputvalue = inputnewpost.value
    var newdivpost = document.createElement("div")
    newdivpost.style.width = "100%"
    newdivpost.style.height = "10%"
    newdivpost.style.backgroundColor = "white"
    var newppost = document.createElement("p")
    newppost.innerHTML = inputvalue
    newdivpost.appendChild(newppost)

    divcontent.appendChild(newdivpost)
}