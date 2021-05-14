/* writes the HTML for the text roll functions   */


/*  keep count in sync with roll_text and 
             roll_text_notes, array length -1  */
/*  with zero positioning       array length = 38, 
                index   0 < i < 38            */
/*   splitting several entries caused an increase in count */ 
var i, j;
j = Math.random();
i = Math.floor(j * 37.33);
console.log('ran;ind = ' + j + '; ' + i); 

var result = document.getElementById('setIndx');
var div = document.createElement('div');

var itext1 = '<div class="pDiv" id="indx">';
itext1 += i;
itext1 += '</div>';

div.innerHTML = itext1;
result.appendChild(div);
