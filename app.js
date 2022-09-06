//test test test

function generate(){
    $.get('test.csv', function(CSVdata){
        data = $.csv.toArray(CSVdata);
        console.log(data)
        randomNum = Math.floor(Math.random() * data.length)
        console.log("i pick...")
        console.log(data[randomNum])
        document.getElementById("quoteAreaHome").innerHTML = data[randomNum]
    })
}

// var icon = document.getElementById("icon");

// icon.onclick = function(){
//     document.body.classList.toggle("dark-theme");
//     if( document.body.classList.contains("dark-theme")){
//         icon.src = "Images/sun.png";
//         icon.src = "../Images/sun.png";
//     }else{
//         icon.src = "Images/moon.png";
//         icon.src = "../Images/moon.png";
//     }
// }