
let data = fetch("https://www.coursehubiitg.in/api/codingweek/contributions");

data.then((response) => {
    return response.json()
}).then((value2) => {
    value2.sort(function(a, b){
        return b.points - a.points;
    })

    for(let y=0; y < value2.length; y++){
        document.getElementById(`rank${y + 1}`).style.backgroundImage = `url(${value2[y].avatar})`;
        document.getElementById(`rank${y + 1}Name`).innerHTML = `${value2[y].name}`;
        document.getElementById(`rank${y + 1}Points`).innerHTML = `${value2[y].points}`;
    }
})
.catch((error) => {
    console.log(error);
})
