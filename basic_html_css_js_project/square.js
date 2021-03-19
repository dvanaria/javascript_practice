function findSquare(input_form) {

    var input_number = input_form.text_input_field.value;

    var result;

    if(input_number >= 1 && input_number <= 10) {
        result = input_number * input_number;
    } else {
        result = "invalid number";
    }

    document.getElementById("text_output_field").innerHTML = result; 
}
