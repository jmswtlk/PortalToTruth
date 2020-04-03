/* writes the HTML for handling the text roll */

var rollArray = new Array;

setRollArray();

var lngth = rollArray.length;

var result;
result = document.getElementById('notes');
var div;

var indx = document.getElementById('indx');
indx=indx.innerHTML; 
console.log('#texts = ' + lngth + ', index = ' + indx); 

indx=parseInt(indx); 

showNotes();  

function showNotes() {

   itext1 = rollArray[indx];
   div = document.createElement('div');
   div.innerHTML = itext1;
   result.appendChild(div);

   }

function setRollArray (){
rollArray = [
/* if you add a row, update text_parm */
/* 18 */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/10/about-generations.html">About generations</a>. <br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2018/06/pageant-of-salem.html">Salem Pageant</a>.<br> 3. See <a href="https://thomasgardnerofsalem.blogspot.com/2020/01/america-250.html">American celebrations</a>.'],
/* 17 */
['1. See <a href="https://en.wikipedia.org/wiki/Massachusetts_Magazine">Massachusetts Magazine</a> (1700s).<br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/p/tmm.html">The Massachusetts Magazine</a> (1900s).'],
/* 16 */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2020/02/frances-rose-troup.html">Frances Rose-Troup</a>. <br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/04/history-of-new-england.html">History of New England</a>.'],
/* 15 */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape  Ann, Retrospective</a>.<br>2. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/04/the-1st-year.html">The 1st year</a>.<br>3. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/08/threads-through-five-generations.html">Five generations</a>.<br>4. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/11/thomas-gardner.html">Thomas Gardner</a>.<br>5. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/11/george-gardner.html">George Gardner</a>.<br>6. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/08/seeth-gardner.html">Seeth Gardner</a>.<br>'],
/* 14  */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a><br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/04/the-1st-year.html">The 1st year</a>.<br>3. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/08/threads-through-five-generations.html">Five generations</a>.<br>4. See <a  href="http://www.wargs.com/family/shattuck.html">William Shattuck @ wargs</a>.<br>5. See <a href="https://thomasgardnerofsalem.blogspot.com/2011/07/richard-and-john.html">Richard and John (and Thomas)</a>.<br>6. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/11/winter-island.html">Sidney Perley - History of Salem</a>. </small>'],
/* 13  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>.<br>2. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/04/the-1st-year.html">The 1st year</a>.<br>3. See <a href= "https://thomasgardnerofsalem.blogspot.com/2014/07/john-gardner-and-merrimack-river.html">John Gardner and the Merrimack River</a>.'],
/* 12  */ 
['1. See <a href= "http://thomasgardnerofsalem.blogspot.com/2014/07/1st-governor.html">1st Governor</a>.'],
/* 11  */
['1. Website: thomasgardnersociety.org (<a href="https://thomasgardnersociety.org/html/GardnersBeacon.html">Gardner\'s Beacon</a>, Annals/Research)<br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>. <br> 3. Incorporation papers for the Thomas Gardner Society, Inc.<br>'],
/* 10  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>. <br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/07/massachusetts-400.html">Massachusetts 400</a>.<br>3. See <a  href= "https://en.wikipedia.org/wiki/Massachusetts_Bay_Colony#Timeline_of_settlement">Timeline of settlement</a>. <br>4. See <a  href= "https://en.wikipedia.org/wiki/John_Winthrop">John Winthrop</a>. <br>5. See <a  href="https://www.mass.gov/executive-orders/no-502-establishing-the-plymouth-massachusetts-400th-anniversary-commission">Massachusetts Executive Orders</a>.<br>6. See <a href="https://www.facebook.com/Gloucester400/posts/2573446936019847">Gloucester 400</a>'],
/*  9  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>. <br>2. See <a href="https://thomasgardnersociety.org/html/Newsletters/VolIII_No3.html">Gardner\'s Beacon, Vol. III, No. 3</a>.<br>3. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/06/true-stories.html">True stories</a>. <br>4. See <a href= "https://thomasgardnerofsalem.blogspot.com/2013/11/dorchester-company.html">Dorchester Company</a>. <br>5. See <a href= "https://thomasgardnersociety.org/html/Newsletters/VolIV_No1.html">Gardner\'s Beacon, Vol. IV, No. 1</a>.<br>'],
/*  8  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>.<br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2013/01/gardner-and-conant-families.htm">Gardner and Conant families</a>.<br>3. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/05/masseys-cove.html">Massey\'s Cove</a>.<br>4. See <a href= "https://thomasgardnerofsalem.blogspot.com/2014/03/far-from-idyllic.html">(Not) far from idyllic</a>.<br>5. See <a href= "https://thomasgardnerofsalem.blogspot.com/2011/02/great-migration.html">Great migration</a>.<br>6. See <a href= "https://thomasgardnerofsalem.blogspot.com/2018/12/fifteen-generations.html">Fifteen generations</a>.'],
/*  7  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>. <br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2013/11/gardners-beacon-vol-iii-no-3.html">Gardner\'s Beacon, Vol. III, No. 3</a>.<br>3. See <a href="https://www.capeannmuseum.org/about/history-cape-ann/">History of Cape Ann</a>.<br>4. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/04/history-of-new-england.html">History of New England</a>.<br>5. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/05/sidneys-antiquarian.html">Sidney\'s Antiquarian</a>.<br>6. See <a href= "https://thomasgardnerofsalem.blogspot.com/2010/09/gardners-and-gardners.html">Gardners and Gardners</a>.'],
/*  6  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>.<br>2. See <a href= "https://thomasgardnerofsalem.blogspot.com/2012/12/no-shadow-over-thomas.html">No shadow over Thomas</a>.<br>3. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/05/masseys-cove.html">Massey\'s Cove</a>.<br>4. See <a href= "https://thomasgardnerofsalem.blogspot.com/2012/01/where-was-thomas.html">Where was Thomas?</a><br>5. See <a href= "https://thomasgardnerofsalem.blogspot.com/2014/03/far-from-idyllic.html">(Not) far  from idyllic</a>.'],
/*  5   */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>. <br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2011/08/john-tylly.html">John Tylly</a>.<br>3. See <a href= "https://thomasgardnerofsalem.blogspot.com/2013/01/gardner-and-conant-families.html">Gardner and Conant Families</a>.<br>4. See <a href=https://thomasgardnerofsalem.blogspot.com/2012/12/gardners-beacon-vol-ii-no-6.html">Gardner\'s Beacon, Vol. II, No. 6</a>.<br>5. See <a href="https://thomasgardnerofsalem.blogspot.com/2018/06/pageant-of-salem.html">Pageant of Salem</a>.<br>6. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/05/gardners-bridge.html">Gardner\'s bridge</a>.'],
/*  4  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2015/12/cape-ann-1623.html">Cape Ann, 1623</a>.&nbsp; <br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>.<br>3. See <a href= "https://thomasgardnerofsalem.blogspot.com/2011/08/thomas-house.html">Thomas\' house</a>.<br>4. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/04/the-1st-year.html">The 1st Year</a>.<br>5. See <a href= "https://thomasgardnerofsalem.blogspot.com/2013/11/gardners-beacon-vol-iii-no-3.html">Gardner\'s Beacon, Vol. III, No. 3</a>.<br>'], 
/*  3   */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2018/08/margaret-anew.html">Margaret, anew</a>. <br> 2. See <a  href="https://thomasgardnerofsalem.blogspot.com/2015/12/cape-ann-1623.html">Cape Ann, 1623</a>.<br> 3. See <a  href="http://thomasgardnersociety.org/html/Newsletters/VolII_No1.html">Gardner\'s Beacon, Vol. II, No. 1</a>.<br> 4. See <a href="https://thomasgardnerofsalem.blogspot.com/2011/02/dr-frank-gardner.html">Dr. Frank A. Gardner</a>. <br> 5. See <a href="https://thomasgardnerofsalem.blogspot.com/2015/07/regimental-history-series-background.html">Regimental History Series, background.</a> '],
/* 2  */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann retrospective</a>.<br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2013/03/plus-or-minus-arrival.html">Plus or minus the arrival</a>.<br> 3.See <a href= "https://thomasgardnerofsalem.blogspot.com/2013/03/gardners-beacon-vol-iii-no-1.html">Gardner\'s Beacon, Vol. III, No. 1</a>.'],
/* 1  */
['1. See <a href="http://thomasgardnerofsalem.blogspot.com/2014/07/1st-governor.html">1st Governor</a>.<br> 2. See <a href="http://thomasgardnerofsalem.blogspot.com/2012/11/how-many-wives.html">How many wives?</a>.<br>3. See Research Project (<a                         href="http://thomasgardnersociety.org/html/Research/Sherborne.html">Sherborne,Dorset</a>).'],
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2014/09/thomas-and-margaret.html">Marriage of Thomas and Margaret</a>. <br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2018/08/margaret-anew.html">Margaret, anew</a>.<br>3. See <a href="https://www.wikitree.com/wiki/Fryer-892">WikiTree</a>.']
]
}

