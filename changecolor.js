function ch()
{
    var x = Math.random()*10
    var num = Math.floor(x)
    console.log(num)

    var divtag = document.getElementById("maindiv")
    if(num == 0)
    {
        divtag.style.background = "green"
    }
    else if(num == 1)
    {
        divtag.style.background = "red"
    }
    else if(num == 2)
    {
        divtag.style.background = "blue"
    }
    else if(num == 3)
    {
        divtag.style.background = "silver"
    }
    else if(num == 4)
    {
        divtag.style.background = "purple"
    }
    else if(num == 5)
    {
        divtag.style.background = "pink"
    }
    else if(num == 6)
    {
        divtag.style.background = "brown"
    }
    else if(num == 7)
    {
        divtag.style.background = "black"
    }
    else if(num == 8)
    {
        divtag.style.background = "aqua"
    }
    else if(num == 9)
    {
        divtag.style.background = "yellow"
    }
    else if(num == 10)
    {
        divtag.style.background = "gold"
    }
}
