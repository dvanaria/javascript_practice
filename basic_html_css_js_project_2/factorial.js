function factTable(input_form) {

    var limit = input_form.text_input_field.value;

    // make sure the limit is a valid number
    if(limit >= 1) {

        // initialize variables
        var val = 1;
        var fact = 1;
        var result = "<pre>VALUE      FACTORIAL\n";

        // generate the table as a string
        for (var i = 1; i <= limit; i++) {
            result += val + "           " + fact + "\n";
            val += 1;
            fact = fact * val;
            if(fact > 999999999999999) {
                result += "value too large";
                break;
            }
        }
        result += "</pre>";

    } else {

        result = "invalid limit";
    }

    // output the table
    document.getElementById("text_output_field").innerHTML = result; 
}
