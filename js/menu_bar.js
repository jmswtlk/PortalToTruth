/* writes the HTML for the left menu bar   */

var parms = document.getElementById('parms');
var parms = parms.innerHTML;
parms=parms.split(",");
parm1 = parseInt(parms[0]);
parm2 = parseInt(parms[1]); 

var itemArray = new Array;

setItemArray();

var lngth = itemArray.length+1;

/* -----    ------*/

var result = document.getElementById('wrap');
var div = document.createElement('div');

var itext1 = '<ul>';

/* ----  write menu items ---    */

var i, lev;

for (i=0; i< itemArray.length; i++) {

  if (parm1==i) {
    itext1+='<li><a class="active" href="">';
   }
  else { 
    itext1+='<li><a class="button" href="';
    if (parm2==1 & (i == 5 || i == 6 || i > 8)) {
       itext1+= '../' + itemArray[i][0] +'">';
       lev = '../';
           }
    else {
           itext1+= itemArray[i][0] +'">';
       lev = '';
      }
     }

  itext1+= itemArray[i][1] +'</a></li>'
  if (i == 6) { 
   itext1+='<br>';
   } 
  }

/*  put tip jar icon after the menu 
        being aware of level of context   */
var tip = '<a href="' + lev + 'biz/default.html"><img src="' + lev + 'icons/TipJar.jpg" alt="" height="" border="0" width=""></a>'; 

itext1+= tip;

/* console.log(itext1); */

div.innerHTML = itext1;
result.appendChild(div);


function setItemArray (){
itemArray = [
['https://tgsoc.org', 'Home'],
['https://thomasgardnersociety.org', 'Main site'],
['https://thomasgardnerofsalem.blogspot.com', 'Context blog'],
['https://tgsoc.org/tech/', 'Technology blog'],
['https://www.facebook.com/ThomasGardnerofSalem', 'FB page'],
['demo', 'Devlog'],
['Publications', 'Publications (Order)'],
['https://www.wikitree.com/wiki/Gardner-159', 'WikiTree'],
['https://thomasgardnersociety.org/html/search.html', 'Search'],
['ourRoll.html', 'Roll'],
['papers', 'Papers'],

/*   ['demo', 'Demo'],        */
/*   ['biz', 'Biz (Donate)'],   */

];

}


