let string = "";
var but = document.querySelectorAll('.btn1');
var inp = document.getElementById('inp1');

but.forEach(element => {
    element.onclick = () =>{
        if(element.innerHTML === "="){
            if(string.length > 0){
                console.log(eval(string));
                string = eval(string);
                inp.value = string;
            }
            else{
                inp.value = "Enter valid input";
            }
        }
        else if(element.innerHTML === "AC"){
            inp.value = "";
            string = "";
        }
        else if(element.innerHTML === "C"){
            string = string.substring(0,string.length-1);
            inp.value = string;
        }
        else{
            string+=element.innerHTML;
            inp.value = string;
        }
    }
});