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
/* if you add a row, update text_parm and sync with roll_text */
/* 27b*/
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2020/11/all-that-louisiana-brought.html">All that Louisiana brought</a>.<br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2021/04/frontier-century.html">Frontier century</a>.'],
/* 27a*/
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2020/11/all-that-louisiana-brought.html">All that Louisiana brought</a>.<br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2021/04/frontier-century.html">Frontier century</a>.'],
/* 26*/
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2021/02/rivers-and-more.html">Rivers and more</a>.<br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2021/04/ohio-river.html">Ohio River</a>. <br> 3. See <a href="https://thomasgardnerofsalem.blogspot.com/2020/07/cumberland-pass.html">Cumberland Gap</a> '],
/* 25*/
['1. See See <a href="https://thomasgardnerofsalem.blogspot.com/2021/04/amelia-earhart.html">Amelia Earhart</a>.<br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2021/05/technologys-influence.html">Technology\'s influences</a>.'],
/* 24*/
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2021/04/400ths.html">400ths</a>.<br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2021/05/upcoming-celebrations.html">Upcoming celebrations</a>.<br> 3. See <a href="https://thomasgardnerofsalem.blogspot.com/2021/04/in-small.html">In the small</a>.'],
/* 23*/
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2021/01/queen-anne.html">Queen Anne</a>.<br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2020/01/america-250.html">American 100s</a>. '],
/* 22 */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2021/02/super-bowl.html">Super Bowl</a> (TGS, Inc.). <br> 2. See <a href="https://vitabrevis.americanancestors.org/2021/02/super-bowl-surprise/">Super Bowl surprise</a> (NEHGS). '],
/* 21 */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2014/11/historic-nantucket.html">Historic Nantucket</a>.<br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2011/07/richard-and-john.html">John and Richard (and Thomas)</a>.'],
/* 20 */
['1. See <a href="https://www.wikitree.com/wiki/Balch-6">John Balch - Wikitree</a>. <br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>.<br> 3. See <a href="https://thomasgardnerofsalem.blogspot.com/2011/02/sarah-balch.html">Sarah (Gardner) Balch</a>.<br> 4. See <a  href="https://en.wikipedia.org/wiki/List_of_female_Nobel_laureates">List of female Nobel laureates</a> . <br> 5. See <a href="https://thomasgardnerofsalem.blogspot.com/2020/08/emily-greene-balch.html">Emily Greene Balch</a>.'],
/* 19 */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2020/07/5th-generation.html">5th generation</a>. <br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2020/07/6th-generation.html">6th generation</a>.<br> 3. See <a href="https://thomasgardnerofsalem.blogspot.com/2020/07/7th-generation.html">7th generation</a>.'], 
/* 18 */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/10/about-generations.html">About generations</a>. <br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2018/06/pageant-of-salem.html">Salem Pageant</a>.<br> 3. See <a href="https://thomasgardnerofsalem.blogspot.com/2020/01/america-250.html">American celebrations</a>.'],
/* 17 */
['1. See <a href="https://en.wikipedia.org/wiki/Massachusetts_Magazine">Massachusetts Magazine</a> (1700s).<br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/p/tmm.html">The Massachusetts Magazine</a> (1900s).'],
/* 16 */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2020/02/frances-rose-troup.html">Frances Rose-Troup</a>. <br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/04/history-of-new-england.html">History of New England</a>.'],
/* 15a */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/11/thomas-gardner.html">Thomas Gardner</a>.<br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/11/george-gardner.html">George Gardner</a>.'],
/* 15b */
['1. See <a href="http://www.wargs.com/family/shattuck.html">William Shattuck @ wargs</a>.<br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2011/07/richard-and-john.html">Richard and John (and Thomas)</a>.'], 
/* 14a  */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/11/winter-island.html">Sidney Perley - History of Salem</a>.'],
/* 14b */
['<br> 1. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/08/seeth-gardner.html">Seeth Gardner</a>.'], 
/* 13a  */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2014/07/john-gardner-and-merrimack-river.html">John Gardner, Merrimack River</a>'],
/* 13b */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a><br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/04/the-1st-year.html">The 1st year</a>.<br> 3. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/08/threads-through-five-generations.html">Five generations</a>.<br> 4. Joseph and Ann had no children.'], 
/* 12  */ 
['1. See <a href= "http://thomasgardnerofsalem.blogspot.com/2014/07/1st-governor.html">1st Governor</a>.'],
/* 11a  */
['1. <a href="https://thomasgardnersociety.org/html/GardnersBeacon.html">Gardner\'s Beacon</a>, Annals/Research<br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>. <br> 3. Incorp, Thomas Gardner Society, Inc.'],
/* 11b  */
['1. <a href="https://thomasgardnersociety.org/html/GardnersBeacon.html">Gardner\'s Beacon</a>, Annals/Research<br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>. <br> 3. Incorp, Thomas Gardner Society, Inc.'],
/* 10a  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>. <br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/07/massachusetts-400.html">Massachusetts 400</a>.<br>3. See <a  href= "https://en.wikipedia.org/wiki/Massachusetts_Bay_Colony#Timeline_of_settlement">Timeline of settlement</a>.'],
/* 10b  */
['1. See <a  href= "https://en.wikipedia.org/wiki/John_Winthrop">John Winthrop</a>. <br>2. See <a  href="https://www.mass.gov/executive-orders/no-502-establishing-the-plymouth-massachusetts-400th-anniversary-commission">Massachusetts Executive Orders</a>.<br>3. See <a href="https://www.facebook.com/Gloucester400/posts/2573446936019847">Gloucester 400</a>'],
/*  9a  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>. <br>2. See <a href="https://thomasgardnersociety.org/html/Newsletters/VolIII_No3.html">Gardner\'s Beacon, Vol. III, No. 3</a>.'],
/*  9b  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/06/true-stories.html">True stories</a>. '],
/*  9c  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2013/11/dorchester-company.html">Dorchester Company</a>. <br>2. See <a href= "https://thomasgardnersociety.org/html/Newsletters/VolIV_No1.html">Gardner\'s Beacon, Vol. IV, No. 1</a>.'],
/*  8a  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>.<br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2013/01/gardner-and-conant-families.htm">Gardner and Conant families</a>.'],
/*  8b  */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/05/masseys-cove.html">Massey\'s Cove</a>.<br>2. See <a href= "https://thomasgardnerofsalem.blogspot.com/2014/03/far-from-idyllic.html">(Not) far from idyllic</a>.<br>3. See <a href= "https://thomasgardnerofsalem.blogspot.com/2011/02/great-migration.html">Great migration</a>.<br>4. See <a href= "https://thomasgardnerofsalem.blogspot.com/2018/12/fifteen-generations.html">Fifteen generations</a>.'],
/*  7a  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>. <br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2013/11/gardners-beacon-vol-iii-no-3.html">Gardner\'s Beacon, Vol. III, No. 3</a>.<br>3. See <a href="https://www.capeannmuseum.org/about/history-cape-ann/">History of Cape Ann</a>.<br>4. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/04/history-of-new-england.html">History of New England</a>.'],
/*  7b  */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2019/04/history-of-new-england.html">History of New England</a>.<br>5. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/05/sidneys-antiquarian.html">Sidney\'s Antiquarian</a>.<br>2. See <a href= "https://thomasgardnerofsalem.blogspot.com/2010/09/gardners-and-gardners.html">Gardners and Gardners</a>.'],
/*  6a  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>.<br>2. See <a href= "https://thomasgardnerofsalem.blogspot.com/2012/12/no-shadow-over-thomas.html">No shadow over Thomas</a>.<br>3. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/05/masseys-cove.html">Massey\'s Cove</a>.'],
/*  6b  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2012/01/where-was-thomas.html">Where was Thomas?</a><br>2. See <a href= "https://thomasgardnerofsalem.blogspot.com/2014/03/far-from-idyllic.html">(Not) far  from idyllic</a>.'],
/*  5a   */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>. <br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2011/08/john-tylly.html">John Tylly</a>.<br>3. See <a href= "https://thomasgardnerofsalem.blogspot.com/2013/01/gardner-and-conant-families.html">Gardner and Conant Families</a>.'],
/*  5b   */
['1. See <a href=https://thomasgardnerofsalem.blogspot.com/2012/12/gardners-beacon-vol-ii-no-6.html">Gardner\'s Beacon, Vol. II, No. 6</a>.<br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2018/06/pageant-of-salem.html">Pageant of Salem</a>.<br>3. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/05/gardners-bridge.html">Gardner\'s bridge</a>.'],
/*  4a  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2015/12/cape-ann-1623.html">Cape Ann, 1623</a>.&nbsp; <br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann, Retrospective</a>.<br>3. See <a href= "https://thomasgardnerofsalem.blogspot.com/2011/08/thomas-house.html">Thomas\' house</a>.'], 
/*  4b  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2019/04/the-1st-year.html">The 1st Year</a>.<br>2. See <a href= "https://thomasgardnerofsalem.blogspot.com/2013/11/gardners-beacon-vol-iii-no-3.html">Gardner\'s Beacon, Vol. III, No. 3</a>.'], 
/*  3a   */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2018/08/margaret-anew.html">Margaret, anew</a>. <br> 2. See <a  href="https://thomasgardnerofsalem.blogspot.com/2015/12/cape-ann-1623.html">Cape Ann, 1623</a>.<br> 3. See <a  href="http://thomasgardnersociety.org/html/Newsletters/VolII_No1.html">Gardner\'s Beacon, Vol. II, No. 1</a>.<br> '],
/*  3b   */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2011/02/dr-frank-gardner.html">Dr. Frank A. Gardner</a>. <br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2015/07/regimental-history-series-background.html">Regimental History Series.</a> '],
/* 2a  */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2016/04/cape-ann-retrospective.html">Cape Ann retrospective</a>.<br> 2. See <a href="https://thomasgardnerofsalem.blogspot.com/2013/03/plus-or-minus-arrival.html">Plus or minus the arrival</a>.'],
/* 2b  */
['1. See <a href= "https://thomasgardnerofsalem.blogspot.com/2013/03/gardners-beacon-vol-iii-no-1.html">Gardner\'s Beacon, Vol. III, No. 1</a>.'],
/* 1a  */
['1. See <a href="http://thomasgardnerofsalem.blogspot.com/2014/07/1st-governor.html">1st Governor</a>.<br> 2. See <a href="http://thomasgardnerofsalem.blogspot.com/2012/11/how-many-wives.html">How many wives?</a>.<br>3. See Research Project (<a                         href="http://thomasgardnersociety.org/html/Research/Sherborne.html">Sherborne,Dorset</a>).'],
/* 1b  */
['1. See <a href="https://thomasgardnerofsalem.blogspot.com/2014/09/thomas-and-margaret.html">Marriage of Thomas and Margaret</a>. <br>2. See <a href="https://thomasgardnerofsalem.blogspot.com/2018/08/margaret-anew.html">Margaret, anew</a>.<br>3. See <a href="https://www.wikitree.com/wiki/Fryer-892">WikiTree</a>.']
]
}

