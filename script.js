let clicked = false

const displayDate = () => {
    (!clicked) ? (
        
        document.getElementById('dateShow').innerHTML = Date(),
        document.getElementById('btnDate').innerText = "Hide Date"
    
    ) : (
        document.getElementById('dateShow').innerHTML = "",
        document.getElementById('btnDate').innerText = "Click me to display Date and Time."
    )

    clicked = !clicked;
}