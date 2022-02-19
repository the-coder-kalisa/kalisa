    var ullist = document.querySelectorAll("li.king")
    var list = [];
    for(i=0; i<=ullist.length; i++){
        list.push(ullist[i])
    }
    list[0].onclick = ()=>{
        list[0].style.color = "red"
        list[1].style.color = "white"
        list[2].style.color = "white"
        list[3].style.color = "white"
    }
    list[1].onclick = ()=>{
        list[1].style.color = "red"
        list[0].style.color = "white"
        list[2].style.color = "white"
        list[3].style.color = "white"
    }
    list[2].onclick = ()=>{
        list[2].style.color = "red"
        list[1].style.color = "white"
        list[0].style.color = "white"
        list[3].style.color = "white"
    }
    list[3].onclick = ()=>{
        list[3].style.color = "red"
        list[1].style.color = "white"
        list[0].style.color = "white"
        list[2].style.color = "white"
    }