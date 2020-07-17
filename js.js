
function showForm() {
	//Here we are searching for the document for element with the id 'tableStyles'. This returns only one DOM element.
var table = document.getElementById("tableStyles");

//Here we are searching the table element for all elements of the tag 'tbody'. This returns an array of elements. Here there is only one so we just use the first one (hence the [0] at the end)
var body = table.getElementsByTagName("tbody")[0];

//Here we are searching the body element for all elements of the tag 'tr'. This returns an array of row elements.
var rows = body.getElementsByTagName("tr");

//Here we are looping through the elements in the rows array.
for (var i=0 ; i<rows.length; i++) {
    //Here we select the nth row in the array based on the loop index.
    var row = rows[i];
    
    //Here we are searching the row element for all elements of the tag 'td'. This returns an array of cells in the row.
    var cells = row.getElementsByTagName("td");
    
    //We are looping through all the cells in the array.
    for(var j=0; j<cells.length; j++) {
        //set the fontsize
        cells[j].style.fontSize = "12px";
        
        //check if the row is even. see how we dont need the isEven function. you can directly use the == function with the modulo operator.
        if( i%2==0 ) {
            //if it is even then the color is set to blue
            cells[j].style.background = "black";
            cells[j].style.color = "white";
        } else {
            //if it is even then the color is set to blue
            cells[j].style.background = "red";
        }
    }
}}

function showFormw() {
	//Here we are searching for the document for element with the id 'tableStyles'. This returns only one DOM element.
var table = document.getElementById("tableStyles1");

//Here we are searching the table element for all elements of the tag 'tbody'. This returns an array of elements. Here there is only one so we just use the first one (hence the [0] at the end)
var body = table.getElementsByTagName("tbody")[0];

//Here we are searching the body element for all elements of the tag 'tr'. This returns an array of row elements.
var rows = body.getElementsByTagName("tr");

//Here we are looping through the elements in the rows array.
for (var i=0 ; i<rows.length; i++) {
    //Here we select the nth row in the array based on the loop index.
    var row = rows[i];
    
    //Here we are searching the row element for all elements of the tag 'td'. This returns an array of cells in the row.
    var cells = row.getElementsByTagName("td");
    
    //We are looping through all the cells in the array.
    for(var j=0; j<cells.length; j++) {
        //set the fontsize
        cells[j].style.fontSize = "12px";
        
        //check if the row is even. see how we dont need the isEven function. you can directly use the == function with the modulo operator.
        if( i%2==0 ) {
            //if it is even then the color is set to blue
            cells[j].style.background = "black";
            cells[j].style.color = "white";
        } else {
            //if it is even then the color is set to blue
            cells[j].style.background = "lightblue";
        }
    }
}}
