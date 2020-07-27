/* writes the HTML for the text roll functions   */


/*  keep count in sync with roll_text and
             roll_text_notes, array length -1  */
/*  with zero positioning       length = 20, index up to 19
                   including zero    */
var i = Math.floor((Math.random() * 18));

console.log('index = ' + i); 

var result = document.getElementById('setIndx');
var div = document.createElement('div');

var itext1 = '<div class="pDiv" id="indx">';
itext1 += i;
itext1 += '</div>';

div.innerHTML = itext1;
result.appendChild(div);
