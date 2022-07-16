function funAc() {
    document.getElementById("res").value = "";
}

function funClr() {

    var number = document.getElementById("res");
    var remove = number.value;
    remove = number.value.slice(0, -1);        // Remove last character from a string.
    number.value = remove;
}


function show(num) {
    //    var result= document.getElementById("res");
    //    result.value += num;
    document.getElementById("res").value += num;
}

function funCal() {
    var output = eval(document.getElementById("res").value);
    document.getElementById("res").value = output;
}