let clicked = false

const displayDate = () => {
    if(!clicked) {
        document.getElementById('dateShow').innerHTML = Date()
        document.getElementById('btnDate').innerText = "Hide Date"
    }
    
    else {
        document.getElementById('dateShow').innerHTML = ""
        document.getElementById('btnDate').innerText = "Click me to display Date and Time."
    }

    clicked = !clicked;
}