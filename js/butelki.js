/**
 * Created by fazax on 12.12.2015.
 */
    var word = "butelek";
    var count = 99;

    while(count > 0){
        document.write(count + " " + word + " piwa na ścianie ");
        document.write(count + " " + word + " piwa, ");
        document.write(count + " " + word + " Jedną weź i podaj w koło, ");
        count -= 1;
        if(count > 0){
            document.write(count + " " + word + " piwa na ścianie. "+ "<br />");
        }else {
            document.write("Nie ma już " + word + " piwa na ścianie "+ "<br />");
        }
    }

