/* writes the HTML for handling the text roll */

var rollArray = new Array;

setRollArray();

var lngth = rollArray.length;

var result;
result = document.getElementById('roll');
var div;

var indx = document.getElementById('indx');
indx=indx.innerHTML; 
console.log('#texts = ' + lngth + ', index = ' + indx); 

indx=parseInt(indx); 

showRoll();

function showRoll() {

   itext1 = rollArray[indx];
   div = document.createElement('div');
   div.innerHTML = itext1;
   result.appendChild(div);
   }

function setRollArray (){
rollArray = [
/* if you add a row, update text_parm and synce with roll_text_notes*/
/* 20 */ 
['20. John Balch<sup><small>1</small></sup> was at Cape Ann<sup><small>2</small></sup> with Thomas and Margaret Gardner. His son, Benjamin, married Sarah Gardner,<sup><small>3</small></sup> daughter of Thomas and Margaret. One of their many descendants won a Nobel Peace Prize in 1946.<sup><small>4</small></sup> Emily Greene Balch collaborated with <a  href="https://en.wikipedia.org/wiki/Jane_Addams">Jane Addams</a> as a leader of the <a href="https://en.wikipedia.org/wiki/Women%27s_International_League_for_Peace_and_Freedom">Women\'s International League for Peace and Freedom</a>.<sup><small>5</small></sup>'], 
/* 19 */
['19. As we look at the history of the U.S. from the perspective of New England, we can make note that the 5th generation bore the brunt of the U.S. start, though the 4th generation was involved, too, and provided a lot of the leadership.<sup><small>1</small></sup> It was the 6th generation that carried the enthusiasm forward resulting in a huge expansion in territory and wealth creation.<sup><small>2</small></sup> Those who enjoyed the benefits of this were the 7th generation.<sup><small>3</small></sup>'], 
/* 18 */
['18. We see the 400th observance of the arrival of the Mayflower unfolding this year.<sup><small>1</small></sup> A hundred years ago, the 300th was the theme. There was a pageant in Salem, MA which depicted a few historical events.<sup><small>2</small></sup> Coming up in 2026, there will be a 250th related to the American Revolution.<sup><small>3</small></sup> At the same  time, we can look at the 200th of the western expansion.'],
/* 17 */ 
['17. A "Massachusetts Magazine" was published (in Boston, 1789-1796) after the Revolution.<sup><small>1</small></sup> Founded by Isaiah Thomas, it published Benjamin Franklin, Judith Sargent Murray and others. Dr. Frank and friends resurrected this magazine as "The Massachusetts Magazine" which published (in Salem) from 1908 to 1918.<sup><small>2</small></sup> There were regular columns: Pilgrims and Planters; Regimental History (Siege of Boston); Family Genealogies (Lucie M. Gardner taking over for Sidney Perley).'],
/* 16 */ 
['16. The effort led by Thomas Gardner was a commercial attempt by the Dorchester Company of southwest England. It was a first effort as the Plymouth experience was not commercial in nature. There have been several researchers over the centuries who looked into this matter. One hundred years ago, Frances Rose-Troup<small><sup>1</sup></small> worked in England to document the attempt. Her results were published in the US. We will look further at her work plus that of several others.<small><sup>2</sup></small>'],
/* 15a */
['15a. Children: <a href="https://thomasgardnerofsalem.blogspot.com/2020/08/descendants-of-thomas.html">Thomas</a>, <a href="https://thomasgardnerofsalem.blogspot.com/2020/08/descendants-of-george.html">George</a>, Richard, John, Sarah, Samuel, Joseph, Miriam, Seeth.</br></br><b>* Thomas Gardner</b> (c. 1620s), born in England, he came to Cape Ann with his folks &nbsp;Thomas (and brother John) had a good reputation on nantucket. They were noted to have been educated which did not come from Harvard. The best guess? Their parents, especially Margaret.<small><sup>1</sup></small></br> <b>* George Gardner</b> (c. 1620s), born in England, he came to Cape Ann with his folks. The story of George and his family is told in the 1933 book by Frank A. Gardner, M.S. titled <i>Gardner Memorial</i> <small><sup>2</sup></small>'],
/* 15b */
['15b. Children: Thomas, George, <a href="https://thomasgardnerofsalem.blogspot.com/2020/09/descendants-of-richard.html">Richard</a>, John, Sarah, Samuel, Joseph, Miriam, Seeth. </br></br><b>* Richard Gardner</b> (c. 1620s), born in England or at Cape Ann, was with his parents in Salem (Naumkeag); later, he moved to Nantucket, with his brother John. He married Sarah Shattuck.<small><sup>1</sup></small> W.C. Folger wrote: The Gardner family have always been reckoned among the First Families of the Island. Richard and Capt. John, exercised much influence in the community here while they lived and they died respected.<small><sup>2</sup></small><br> <b>'],
/* 14a  */
['14a. Children: Thomas, George, Richard, John, Sarah, <a href="https://thomasgardnerofsalem.blogspot.com/2020/10/descendants-of-samuel.html">Samuel</a>, Joseph, <a href="https://thomasgardnerofsalem.blogspot.com/2020/10/descendants-of-miriam.html">Miriam</a>, Seeth. </br></br> <b>* Samuel Gardner</b> (c. 1620s), born in Salem, has many mentions in the town\'s records with regard to civic and church duties. His wife, <a href="https://thomasgardnerofsalem.blogspot.com/2019/08/samuel-and-john.html">Mary White</a>, was a step-sibling of the Corwins of <a href="https://thomasgardnerofsalem.blogspot.com/2013/02/meeting-again.html">Witch Trial</a> infamy. Samuel owned the land that included the <a href="https://thomasgardnerofsalem.blogspot.com/2019/01/29-december-1674.html">Gardner burial plot</a>. <a href="https://thomasgardnerofsalem.blogspot.com/2019/11/dr-franks-burial.html">Dr. Frank</a> is his descendant.</br> <b>* Miriam Gardner</b> (c. 1630s) was born in Salem and married John Hill who was born in Bristol, England. John Hill owned land in Salem and Beverly.<small><sup>1</sup></small>'],
/* 14b  */
['14b. Children: Thomas, George, Richard, John, Sarah, Samuel, <a  href="https://thomasgardnerofsalem.blogspot.com/2019/11/joseph-gardner.html">Joseph</a>, Miriam, <a href="https://thomasgardnerofsalem.blogspot.com/2020/10/descendants-of-seeth.html">Seeth</a>. </br></br><b>* Cpt. Joseph Gardner</b> (c. 1620s) was a <a href="https://en.wikipedia.org/wiki/King_Philip%27s_War">King Philip\'s War</a> casualty, killed in the <a href="https://en.wikipedia.org/wiki/Great_Swamp_Fight">Great Swamp Fight</a> on 19 December 1675. His widow, Ann (Downing) Gardner, is noted for an agreement (early <a href="https://en.wikipedia.org/wiki/Prenuptial_agreement">prenuptial agreement</a>) that she got <a href="https://en.wikipedia.org/wiki/Simon_Bradstreet">Governor Simon Bradstreet, Jr</a>, to sign before they were married. Joseph and Ann had no children.<br><b>* Seeth Gardner</b> (c. 1630s) was born in Salem and married 1) Joshua Conant who was the son of Roger Conant. Their son married a daughter of Richard More. When Joshua died, she married 2) John Grafton. One of their descendants is John Albion Andrew who was the 25th Governor of Massachusetts (1861-1866).<small><sup>1</sup></small>'],
/* 13a  */
['13a. Children: Thomas, George, Richard, <a href="https://thomasgardnerofsalem.blogspot.com/2020/09/descenda nts-of-john.html">John</a>, <a href="https://thomasgardnerofsalem.blogspot.com/2020/08/descendants-of-sarah.html">Sarah</a>, Samuel, Joseph, Miriam, Seeth. </br></br><b>* John Gardner</b>(c. 1620) was on crew for the first survey<small><sup>1</sup></small> of the <a href="https://en.wikipedia.org/wiki/Merrimack_River">Merrimack River</a> for Gov. <a href="https://en.wikipedia.org/wiki/John_Winthrop">John Winthrop</a> (1638); John was also Chief Magistrate (1680�82 &amp; 1684) for <a href="https://en.wikipedia.org/wiki/Nantucket,_Massachusetts">Nantucket, Massachusetts</a>. </br> <b>* Sarah Gardner</b></i> (c. 1630s) married Benjamin Balch who was son of <a href="https://en.wikipedia.org/wiki/John_Balch_House">John Balch</a> (old planter who was at Cape Ann with Thomas and Margaret). One of her descendants was Benjamin Balch (c. 1730s) who was the first <a href="https://en.wikipedia.org/wiki/United_States_Navy_Chaplain_Corps">Chaplain</a>,<a href="https://en.wikipedia.org/wiki/Continental_Navy">Continental Navy</a>.'],
/* 13b */
['13b. Of the nine children of Thomas Gardner, and Margaret Fryer,<small><sup>1</sup></small>eight had progeny. The first four got through their first year and beyond.<small><sup>2</sup></small> Then, after 1627, the family was in the Naukeag area (which became Salem).<small><sup>3</sup></small> Their children were <a href="https://thomasgardnerofsalem.blogspot.com/2020/08/descendants-of-thomas.html">Thomas</a>, <a href="https://thomasgardnerofsalem.blogspot.com/2020/08/descendants-of-george.html">George</a>, <a href="https://thomasgardnerofsalem.blogspot.com/2020/09/descendants-of-richard.html">Richard</a>, <a href="https://thomasgardnerofsalem.blogspot.com/2020/09/descendants-of-john.html">John</a>, <a href="https://thomasgardnerofsalem.blogspot.com/2020/08/descendants-of-sarah.html">Sarah</a>, <a href="https://thomasgardnerofsalem.blogspot.com/2020/10/descendants-of-samuel.html">Samuel</a>, Joseph<small><sup>4</sup></small>, <a href="https://thomasgardnerofsalem.blogspot.com/2020/10/descendants-of-miriam.html">Miriam</a>, <a href="https://thomasgardnerofsalem.blogspot.com/2020/10/descendants-of-seeth.html">Seeth</a>.'], 
/* 12  */ 
['12. Thomas Gardner was an Overseer of the "<b><a href="https://en.wikipedia.org/wiki/Old_Planters_%28Massachusetts%29">old planters</a></b>" party of the <b><a href= "https://en.wikipedia.org/wiki/Massachusetts_Bay_Colony">Dorchester Company</a></b> that landed, in 1623/24 at <b><a href= "https://en.wikipedia.org/wiki/Cape_Ann">Cape Ann</a></b>, to form a colony at, what is now known as, <a href= "https://en.wikipedia.org/wiki/Gloucester,_Massachusetts"><b>Gloucester</b></a>. Thomas&nbsp; has been considered by some as the 1st Governor of Massachusetts,<sup><small>1</small></sup> due to his being in authority in the first settlement that became the <b><a href= "https://en.wikipedia.org/wiki/Massachusetts_Bay_Colony">Massachusetts Bay Colony</a></b> (which later subsumed the <b><a href="https://en.wikipedia.org/wiki/Plymouth_Colony#Growth_of_Plymouth">Plymouth Colony</a></b>). Several parties were in the crew led by Thomas. Our goal is to research these individuals and their families. Like Thomas, some had their wives with them.'],
/* 11a  */
['11a. The purpose of the Society<small><sup>1</sup></small> can be summarized as follows: <b>(a)</b> to establish and to maintain a persistent presence in order to honor the accomplishments of the Cape Ann party (1623/24)<small><sup>2</sup></small> lead by Thomas Gardner; to promote, and to sponsor, scholarly research of a cultural, biographical, historical and <a href="https://www.wikitree.com/wiki/Gardner-11627">genealogical nature</a>, with an emphasis on, but not limited to, the origins and  lives of New England immigrants; to provide means for, and to foster, discussion, and dissemination of, information on those themes; to publish materials periodically and as necessary; <b>(b)</b> ...; and <b>(c)</b> ...</small>'],
['11b. The purpose of the Society<small><sup>1</sup></small> can be summarized as follows: <b>(a)</b> ... <b>(b)</b> to encourage participation by, and interaction of, Thomas Gardner descendants through Society membership; to extend the published works of Frank A. Gardner MD (using modern publication means); to establish, and to document, views based upon timeline date obtained from descendants and other studies; and <b>(c)</b> to sponsor the scholastic efforts of men, women, and children in the context of a continuing educational process.<small><sup>3</sup></small>'],
/* 10a  */
['10a. One focus of the Society is the <a href="https://en.wikipedia.org/wiki/Cape_Ann">Cape Ann</a> crew of Thomas Gardner<small><sup>1</sup></small> that arrived in the 1623/24 time frame. Prior to that, there were other sites with activity: Plymouth (1620), Provincetown (1620), and Weymouth (1622).<small><sup>2</sup></small> After Gloucester (Cape Ann), we can list Chelsea (1624), Quincy (1625), <a href="https://en.wikipedia.org/wiki/Salem,_Massachusetts">Salem (1626)</a>, Charleston (1628), Lynn (1629), Saugus (1629), Manchester-by-the-Sea (1629), and Marblehead (1629).<small><sup>3</sup></small>'],
/* 10b */
['10b. There were eleven settlements prior to the arrival of John Winthrop in 1630.<small><sup>1</sup></small> In 2008, Executive Order No. 502 established a Commission to plan the commerative activities.<small><sup>2</sup></small> A recent meeting in Salem at the Hawthorne Hotel brought together the planners from several of the cities.<small><sup>3</sup><small>'],
/*  9a  */
['9a. Prior to the arrival of the <a href="https://en.wikipedia.org/wiki/Cape_Ann">Cape Ann</a> crew led by Thomas Gardner<small><sup>1</sup></small> in the 1623/24 time frame, there had been activity in the region. Newfoundland had already been established. There was the Plymouth colony. An attempt had been made at Sagadahoc in modern Maine before that.<small><sup>2</sup></small> Hence, there were local fishermen. Cape Ann became a center for fish curing. However, there were also crews coming from England. They would spend a couple of months or so in crossing the Atlantic. Then, they would fish. And, dry their fish in preparation for the return trip.'],
/*  9b  */
['9b. "Every March small ships of between thirty and eight tons, manned by crews of twenty to forty men and boys ... carried salt, provisions, equipment. Brought material for their boats. Took two months to get here. Put their boats together and fished. Split the work between fishing and salting. Filled the hold and returned in autumn. Crews were gathered yearly by the master. Principally young, fifteen to twenty-five years old. Many were trying to get money to get established in their home area."<small><sup>1</sup></small>'],
/*  9c  */
['9c. The idea behind the Dorchester Company created by Rev. John White<small><sup>1</sup></small> was to have a settlement with permanent residents who would ship produce (fish and vegetable) back to the old country. Cape Ann was a rocky cape and was not suitable for farming, as the crew discovered.<small><sup>2</sup></small>'],
/*  8a  */
['8a. The <a  href="https://en.wikipedia.org/wiki/Cape_Ann">Cape Ann</a> crew led by Thomas Gardner<small><sup>1</sup></small> began a commercial effort in the 1623/24 time frame. This effort had been coordinated by Rev. John White<small><sup>2</sup></small> and was to farm sufficiently to send produce back to England. The plan also was to fish through the good seasons and to send back dried fish. In prior years, the round-trip requirement in one year cut down the fishing time. In reality, it proved harder to fish than expected. There had been many years of prior fishing to give New England a good reputation. Too, the soil was found to not be suitable for farming.'],
/*  8b  */
['8b. Further south, the Mayflower experience at Plymouth demonstrated the difficulties that faced any newcomers. The focus at Cape Ann moved to Naumkeag which allowed for more success, with some glowing reports being sent back to England.<small><sup>1</sup></small> By 1630, there was enough interest generated for John Winthrop<small><sup>2</sup></small> to lead a group of ships packed with settlers. Hence started the Puritan Great Migration.<small><sup>3</sup></small> We are 400 years past this event and will be looking across that time span at the families and their fifteen some generations of involvement with the "American Dream."<small><sup>4</sup></small>'],
/*  7a  */
['7a. Thomas Gardner<small><sup>1</sup></small> and crew came to <a href="https://en.wikipedia.org/wiki/Cape_Ann">Cape Ann</a> in 1623/24 for the purpose of establishing a colony. In the area where they landed, there had been prior activity. One early settlement attempt that was related to the Popham colony did not pan out.<small><sup>2</sup></small> The Plymouth crew from the Mayflower arrived in 1620 and had ventured into the area.<small><sup>3</sup></small> They used Cape Ann for fish drying. A lot has been written about the early times. It was Rev. Hubbard who first mentioned Thomas Gardner and his role.<small><sup>4</sup></small>'],
/*  7b  */
['7b. Salem official records have a lot of material as do other towns in Essex County. One person who went through these records and transcribed the material was Sidney Perley.<small><sup>1</sup></small> His work has been of tremendous importance to Gardner Research that has an on-going set of tasks related to documenting the early, and subsequent, eras as well as the people involved in establishment of the framework for the U.S.<small><sup>2</sup></small>'],
/*  6a  */
['6a. When Thomas Gardner<small><sup>1</sup></small> and crew came to <a href="https://en.wikipedia.org/wiki/Cape_Ann">Cape Ann</a> in 1623/24 and started their effort at establishing a colony, they found out quickly that the terrain was not suitable for farming and that the local waters did not produce much fish. The crew was successful, though, at maintaining their health by producing enough for their small crew.<small><sup>2</sup></small> '],
/*  6b  */
['6b. While England expected Roger Conant who came in 1625 to improve matters, this was not to be. Roger got permission to move to Naumkeag. It is thought that the group made landfall near Massey\'s Cove.<small><sup>1</sup></small> Thomas is not recorded as going to Naumkeag. What happened? Most likely, he and Margaret stayed at Cape Ann with their kids in the house.<small><sup>2</sup></small> When John Endicott came a little later, he saw them enjoying the house. It was torn down and moved over to what was then Salem (renaming of Naumkeag) on orders of John.<small><sup>3</sup></small>'],
/*  5a  */
['5a. Thomas Gardner<small><sup>1</sup></small> came to <a href="https://en.wikipedia.org/wiki/Cape_Ann">Cape Ann</a> in 1623/24 as an Overseer for a commercial effort that was to ship food back to England. The other person in charge was John Tylly<small><sup>2</sup></small> who had responsibility for the fishing. Neither of the efforts were successful for reasons that we will study. Roger Conant was sent to Cape Ann to see if he could improve the situation but did not.<small><sup>3</sup></small>'],
/*  5b  */
['5b. A decision was made to move to a new area, called Naumkeag, which became Salem.<small><sup>4</sup></small> When the 300th anniversary was celebrated, a pageant was held in the area. Several Salem families participated.<small><sup>5</sup></small> With the 400th coming up, we have several research areas to attend to. One goal is to get Thomas, and Margaret, more attention. Hence, we will research the early day quite thoroughly.<small><sup>6</sup></small> Oh yes, on the shipping of foodstuff? It did not take long before New England was a prime exporter.'],
/*  4a  */
['4a. The crew led by Thomas Gardner<small><sup>1</sup></small> came into <a href="https://en.wikipedia.org/wiki/Cape_Ann">Cape  Ann</a> in 1623/24 with some provisions, however they were on their own. Since the colony was to provide produce and fish, their tools were for that purpose. Cape Ann was renowned for its fishing.<small><sup>2</sup></small></font> Hence, fishing crews from Plymouth had built structures for drying fish in the area as they had regularly visited the spot. The Dorchester crew brought the material for building a house.<small><sup>3</sup></small>'],
/*  4b  */
['4b. Other structures put up the first year would have been the New England wigwam<small><sup>4</sup></small> which was an adaptation of the one built by natives. It had an internal fireplace. Massachusetts is fairly far north and can have severe winters. In 1607, a party landed in what is now Maine at Popham and survived a winter with no casualties.<small><sup>5</sup></small> Actually, they built a sea-going vessel while there that they sailed to Virginia. Ingenuity was not lacking. Not long after the successful establishment in the Salem area where the Cape Ann party moved in 1626, more people began arriving than resources could handle.'],
/*  3a   */
['3a. Thomas Gardner and Margaret Fryer Gardner<small><sup>1</sup></small> arrived, with other families, at <a href= "https://en.wikipedia.org/wiki/Cape_Ann">Cape Ann</a> in 1623/24 for the purpose of establishing a colony whose goal was to ship foodstuff back to England.<small><sup>2</sup></small> Our Society studies each of the families, as well as concentrating on Thomas and Margaret who had <a href= "https://www.wikitree.com/wiki/Gardner-159">nine children</a> all of whom had offspring except for Joseph who died in the Peaquot war.<small><sup>3</sup></small>'],
/*  3b   */
['3b. We are working on documenting the generations after <a href= "https://thomasgardnerofsalem.blogspot.com/2018/12/culture-history-technology.html">Thomas and Margaret</a> until 1900. Besides the genealogy, we have a <a href="https://tgsoc.org">cultural and historic</a> focus in our work. Of their children, one son, Samuel, had a descendant who did research to support the 300th celebration that occurred 100 years ago.<small><sup>1</sup></small> Dr. Frank was an active physician in the Salem, MA area. Too, he was a Major and Surgeon with the Salem Light Infantry. Also, Dr. Frank wrote two books on <a href= "https://thomasgardnerofsalem.blogspot.com/2011/02/dr-frank-gardner.html">Gardner genealogy</a> and published <a href= "https://thomasgardnerofsalem.blogspot.com/2015/05/the-massachusetts-magazine.html">The Massachusetts Magazine</a> for which he wrote monographs about the Siege of Boston.<small><sup>1</sup></small>'],
/* 2a  */
['2a. Thomas and the Dorchester crew were at <a href="https://en.wikipedia.org/wiki/Cape_Ann">Cape Ann</a> in 1624 for the purpose of establishing a colony. Other than commerce, there were several reasons for leaving England.<small><sup>2</sup></small> After the 1492 voyage of Columbus, exploration of the east coast had continued without stop. English ships traveled up and down the coast, mapped the area, looked for spots to fish or to settle.'],
/* 2b  */
['2b. <a  href="https://en.wikipedia.org/wiki/John_Cabot">John Cabot\'s</a><small><sup>1</sup></small> early exploration for the English is an example. Cape Cod was visited and named as early as 1606 because of the plentiful fish found in the region. Settlement attempts were made at several points, from Maine (<a href= "https://en.wikipedia.org/wiki/Popham_Colony">Popham Colony</a>) down, with Virginia being a well-known survivor. <a href= "https://en.wikipedia.org/wiki/Jamestown,_Virginia">Jamestown</a> was founded in 1607. While Newfoundland found success very early, in 1588, there were other attempts. The effort at <a href= "https://en.wikipedia.org/wiki/Roanoke_Colony">Roanoke Colony</a> (North Carolina) ended in tragedy in the 1580s.'],
/* 1a  */
['1a. Thomas Gardner was an Overseer of the "<a href="https://en.wikipedia.org/wiki/Old_Planters_%28Massachusetts%29">old planters</a> party of the <a href="https://en.wikipedia.org/wiki/Massachusetts_Bay_Colony">Dorchester Company</a> that landed, in 1624 at <a href="https://en.wikipedia.org/wiki/Cape_Ann">Cape Ann</a></b>, to form a colony. The party landed at, what is now known as, <a href="https://en.wikipedia.org/wiki/Gloucester,_Massachusetts">Gloucester</a>. Thomas is considered by some as the 1st Governor of Massachusetts,<small><sup>1</sup></small> due to his being in authority in the first settlement that became the <a href="https://en.wikipedia.org/wiki/Massachusetts_Bay_Colony">Massachusetts Bay Colony</a> (which later subsumed the <a href="https://en.wikipedia.org/wiki/Plymouth_Colony#Growth_of_Plymouth">Plymouth Colony</a>). Thomas, and his wife, Margaret Fryer,<small><sup>2,3</sup></small> had nine children and <a href="https://en.wikipedia.org/wiki/Thomas_Gardner_%28planter%29#Descendants">many descendants</a>.'],
/* 1b  */ 
['1b. Thomas Gardner and Margaret Friar married in Sherborne, Dorset, England in April of 1617 according to local records.<small><sup>1</sup></small> Then, the first three sons were born with the same names as the Cape Ann family.<small><sup>2</sup></small> After that, there is silence on the part of history. But, we have identified Margaret\'s parents. This and other research results suggest to us the origins of this couple.<small><sup>3</sup></small>']
]
}
