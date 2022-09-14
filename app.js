//test test test

function generate(x){
    console.log("reached here")
    if(x == "random"){
        var options = ["inspiration", "love", "mind", "sports"]
        var random = Math.floor(Math.random() * options.length);
        x = options[random];
        console.log("random is " + x);
        var flag = true
    }
    if(x == "inspiration"){
        console.log("reached here inspiration")
        var poop = {"separator":";"};
        $.get('/quotes/inspiration.csv', function(CSVdata){
            data = $.csv.toArray(CSVdata, poop);
            console.log(data)
            randomNum = Math.floor(Math.random() * data.length)
            console.log("i pick...")
            console.log(data[randomNum])
            if(flag){
                document.getElementById("quoteAreaHome").innerHTML = data[randomNum]
            }
            else{
                document.getElementById("quoteAreaHomeInspiration").innerHTML = data[randomNum]
            }
            
        })
    }
    else if(x == "love"){
        console.log("reached here love")
        var poop = {"separator":";"};
        $.get('/quotes/love.csv', function(CSVdata){
            data = $.csv.toArray(CSVdata, poop);
            console.log(data)
            randomNum = Math.floor(Math.random() * data.length)
            console.log("i pick...")
            console.log(data[randomNum])
            if(flag){
                document.getElementById("quoteAreaHome").innerHTML = data[randomNum]
            }
            else{
                document.getElementById("quoteAreaHomeLove").innerHTML = data[randomNum]
            }
        })
    }
    else if(x == "mind"){
        console.log("reached here mind")
        var poop = {"separator":";"};
        $.get('/quotes/mind.csv', function(CSVdata){
            data = $.csv.toArray(CSVdata, poop);
            console.log(data)
            randomNum = Math.floor(Math.random() * data.length)
            console.log("i pick...")
            console.log(data[randomNum])
            if(flag){
                document.getElementById("quoteAreaHome").innerHTML = data[randomNum]
            }
            else{
                document.getElementById("quoteAreaHomeMind").innerHTML = data[randomNum]
            }
        })
    }
    else if(x == "sports"){
        console.log("reached here sports")
        var poop = {"separator":";"};
        $.get('/quotes/sports.csv', function(CSVdata){
            data = $.csv.toArray(CSVdata, poop);
            console.log(data)
            randomNum = Math.floor(Math.random() * data.length)
            console.log("i pick...")
            console.log(data[randomNum])
            if(flag){
                document.getElementById("quoteAreaHome").innerHTML = data[randomNum]
            }
            else{
                document.getElementById("quoteAreaHomeSports").innerHTML = data[randomNum]
            }
        })
    }
}

function testFunction(){
    console.log("reached here 2")
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