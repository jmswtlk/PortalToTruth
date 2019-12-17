/* writes the HTML for the text roll functions   */


/*  keep count in sync with text_roll, array length -1  */
/*  with zero positioning       length = 15, index up to 14
                   including zero    */
var i = Math.floor((Math.random() * 15));

console.log('index = ' + i); 

var result = document.getElementById('setIndx');
var div = document.createElement('div');

var itext1 = '<div class="pDiv" id="indx">';
itext1 += i;
itext1 += '</div>';

div.innerHTML = itext1;
result.appendChild(div);
