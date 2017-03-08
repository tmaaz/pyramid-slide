


// listen for the menu to change, re-run the draw to switch icons properly
var newBricks = document.getElementById("brickChoice");
newBricks.addEventListener('change', function() { getHeightAndDraw(document.getElementById("brickCount").value) }, false);

// Determines the current value that the user has input and draws a pyramid @ proper height
function getHeightAndDraw(heightStr)
    {
        // collect the height from the slider
        // var heightStr = document.getElementById("brickrange").value;
        // document.getElementById("brickCount").innerHTML = heightStr;

        // here we convert the string to an int
        var height = parseInt(heightStr);

        // double-check what type of brick to use
        var brickType = stylePyramid();

        // draw the pyramid with the given height and style
        drawPyramid(height, brickType);
    }

// Determines which material and style of brick to use for the pyramid, sends it back to gHAD
function stylePyramid()
    {
        var x = document.getElementById("brickChoice");
        var brickMat = x.options[x.selectedIndex].value;
        var brickStyle = ""
        if (brickMat == "ice") {brickStyle = "\u25a2";}
        else if (brickMat == "wood") {brickStyle = "\u25a8";}
        else if (brickMat == "brick") {brickStyle = "\u25a6";}
        else {brickStyle = "\u25a3";}

        return [brickMat, brickStyle];
    }

// Renders the pyramid in HTML with the proper height and proper bricks
 function drawPyramid(height, brickType)
     {
         // before drawing, clear the old content
         document.getElementById("pyramid").innerHTML = "";

         // add the proper style, depending on brick type
         var brickID = brickType[0], brickStyle = brickType[1];

         // create each row
         for (var row = 0; row < height; row++)
             {

                 // figure out number of bricks and spaces
                 var numBricks = row + 2;
                 var numSpaces = height - row - 1;

                 // build up a string for this row
                 var rowStr = "";
                 for (var i = 0; i < numSpaces; i++)
                     {
                         rowStr += "\u3000";
                     }
                 for (var i = 0; i < numBricks; i++)
                     {
                         rowStr += brickStyle;
                     }

                // create a text element with the string of characters
                textElem = document.createTextNode(rowStr);

                // create a <p> element with the text inside
                rowElem = document.createElement("p");
                rowElem.id = brickID;
                rowElem.appendChild(textElem);

                // insert the paragraph as a child of the container <div>
                document.getElementById("pyramid").appendChild(rowElem);
            }
    }
