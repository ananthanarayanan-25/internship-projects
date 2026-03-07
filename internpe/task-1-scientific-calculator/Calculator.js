function dis(a) { 
    if(a==="del")
    {
        var x = document.getElementById("result").value;
        document.getElementById("result").value = x.slice(0,-1);
    }
    else{
        document.getElementById("result").value += a; 
    }
} 
function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 
var cal = document.getElementById("calculator"); 
cal.onkeyup = function (event) { 
    if (event.key === "Enter") { 
        console.log("Enter"); 
        solve(); 
    } 
} 
function solve() { 
    let x = document.getElementById("result").value; 
    x = x.replace(/root\((.*?)\)/g , 'sqrt($1)');
    x = x.replace(/log\((.*?)\)/g , 'log10($1)');
    try{
        let y = math.evaluate(x); 
        document.getElementById("result").value = y;  
    }
    catch(error){
        console.error("Error:",error);
        alert("Invalid");
    }
} 
function clr() { 
    document.getElementById("result").value = ""; 
} 
