/* writes the HTML for handling the scrolling text   */

var textArray = new Array;

setTextArray();

var lngth = textArray.length+1;

console.log('#texts = ' + lngth);

var i;
var result;
result = document.getElementById('text');
var div;
var itext1;

showText();

function showText() {

   i = Math.floor((Math.random() * textArray.length-1) +1);

   itext1 = '<small>' + textArray[i] + '</small>';
   console.log(i + ', ' + itext1);
   
   div = document.createElement('div');

   div.innerHTML = itext1;
   result.appendChild(div);

   }

function setTextArray (){
textArray = [
['1215 �- Magna Charta: sealed by King John, named, then denied by the King, and declared invalid by Pope Innocent III. First Barons\� War ensued.'], 
['1217 �- King John died. William Marshall, Earl of Pembroke saved England from troops of Prince Louis of France. Most of the Barons turned to support Henry III.'],   
['1225 �- King Henry III issued a property tax while reaffirming the Magna Charta.'],  
['1264 �- Second Barons\� War arose in an effort to force the King to honor the Magna Charta.'],
['1265 �- Parliament first met in Westminster.'], 
['1297 �- King Edward I reissued, again for a new tax. The concept of due process of law was introduced.'], 
['1433 �- By the time, the Magna Charta had been reconfirmed 45 times. The last time was by Henry VI.'], 
['1497 -- John Cabot reported to England about the North American coast.'],
['1517 -- Fifty ships were fishing yearly along the Newfoundland banks this early. Pre-1580 -- There had been regular exploration before and after Columbus. Verrazano explored the Maine coast for France while Gomez did so for Spain. Cabot roamed the area.'],
['1558 -- Start of the reign of Elizabeth I (1558-1603).'], 
['1578 -- Between England, Spain, Portugal, and France, there were 350 boats fishing in the area.'],
['1580s -- At Newfoundland, several thousand people from England, France and Portugal had established themselves. The Earl of Northampton, with 40 others, had a patent for 46 to 52 deg north.'],   
['1580s -- John Davis tried to find the Northwest Passage.'],
['1580s -- Of early settlements, we can point to Sir Walter Raleigh�s attempt in Roanoke, North Carolina. He made several attempts before conflicts with Spain proved too troublesome.'],
['1580s -- An interesting point is that Sir Walter retired to Sherborne which is where some claim Thomas originated. Did these families know each other?'], 
['1580s - Brownist Congregationalists have to leave and to go to the Netherlands.'],   
['1580s- Mary, Queen of Scots, beheaded (ordered so by Queen Elizabeth I) Spanish Armada headed to the English Channel.'], 
['1588 -- Elizabeth led a procession to St. Paul in thanksgiving for the troubles experienced by the Spanish Armada. Exploration gets more attention.'], 
['1590/91 -- William Shakespeare wrote Richard III.'],
['1590/91 -- There was a record made for Thomas Gardner being born in Sherborne.'],
['1590/91 -- John White, governor of the Colony of Roanoke, went to England for supplies. When he returned in October of 1590, he found his colony deserted.'], 
['1592 -- Thomas Gardner of Salem born.'], 
['1600 -- Thousands of Englishmen were fishing bays and coves.'],
['1602 -- Captain Bartholomew Gosnold discovered what became known as Cape Ann. Also Gosnold named Cape Cod and Martha\'s Vineyard; Queen Elizabeth died; King James I crowned; Puritans put on notice.'],
['1602 -- Captain Bartholomew Gosnold reached Maine and came south to Cape Cod. Being in the early summer, the area was very pleasant with an abundance of fish.'], 
['1602 -- The crew of Captain Bartholomew Gosnold explored the area and provided some of the names that we use today, such as Cape Cod and Martha\'s Vineyard.'], 
['1602 -- Captain Bartholomew Gosnold had enough people with him to start a colony, but most didn�t want to stay in the area given the problems.'],
['1603 -- Start of the reign of James VI & I (1603-1625).'],
['1607 -- Captain Bartholomew Gosnold captained one of the ships that went to Virginia with the intent to settle the area. Hence, we have the story of Jamestown.'],
['1607 -- Captain Bartholomew Gosnold noted that some of the natives had items that indicated the prior visits by Europeans.'],
['1607 -- The crew of Captain Bartholomew Gosnold group had problems in the beginning; some were on the verge of leaving but reinforcements from England saved the day.'],
['1607 -- About the same time as the Jamestown effort, a group went to Maine under the command of Sir John Popham. This group made some significant strides.'],
['1607 -- The group under Sir John Popham in Maine built a fort and other buildings. Plus, they built and sailed a ship (a pinnace, named Virginia, which later sailed to Virginia and to England).'],
['1607 -- Whereas Jamestown, and later Plymouth, lost a lot of people, the Maine group lost only one person, it is believed, in the year that they were in Maine. The group returned to England since one of the leaders had a death in the family and had to return to England.'],
['1607 -- Sagadahoc (Popham) colony started and spent the winter. The fork was introduced into English society from Italy.'], 
['1608 -- Sagadohoc (Popham) colony abandoned.'],
['1609 -- The pinnace, Virginia, was at Jamestown since the Popham group split up. John Ratcliffe went out with the pinnace to trade with the Indians. Several of his party were killed.'],
['1610 -- In the Newfoundland settlement, \�a regular government had been formed in 1610.\� John Guy came to Conception bay, where John Cabot had visited in 1497 while exploring for Henry VII of England, with thirty nine people and started a fishing settlement.'],
['1614 -- Captain John Smith explored Maine as his men fished the area. Smith was the first to use New England rather than North Virginia.'],
['1614 -- Captain John Smith wrote that there are \�two fishing seasons in the Gulf of Maine\� and suggested fishing stations. Captain John Smith maps out the area of Cape Ann (named by Prince Charles).'],
['1617 -- Nicholas Hobson tried to establish trade in the Martha�s Vineyard area, but hostility by the natives caused the party to go back to England. There is a marriage recorded in Sherborne for Thomas Gardner and Margaret Frier.'],
['1619 -- Thomas Dermer started trading at Monhegan. In the period from 1608 to 1619, fishing trips from England became a regular occurrence.'],
['1620 -- There was a severe frost in England. The Thames was frozen. One farmer lost almost 20,000 sheep. Mayflower compact: written and signed in Plymouth.'],
['1621/22/23 -- Who was first? Ferdinando Gorges claimed to have established plantations prior to 1620.'],
['1621/22/23 -- Rev. John White began organizing �Dorchester Adventurers� to put a fishing station at Cape Ann. First Thanksgiving held at Plymouth. A small group overwinters at Cape Ann.'], 
['1621 -- Ten to twelve ships are fishing around Monhegan.'],
['1622 -- Wessagusset colony established by Thomas Weston.'],
['Before 1623/24 -- Exploration of the east coast had continued without stop after the 1492 discovery. New England started with the Virginia colony.'],
['Before 1623/24 -- As well, English ships had been traveling up and down the coast, mapping the area, looking for spots to fish, or to settle.'], 
['Before 1623/24 -- Cape Cod had been visited and named as early as 1606 because of the plentiful fish found there.'],
['Settlement attempts had been made at several points, from Maine down with Virginia being well-known as the first successful attempt. The Plymouth colony found some success, too, albeit at other than their expected location.'],
['1622 -- Cape Ann was known, too. Prior to the arrival of the Dorchester group, fishermen from the Plymouth colony had built structures for the drying and salting of their fish catch. Thomas and Margaret wedded.'],
['1614/1622 -- Son, Thomas, was born in 1618. Son, George, was born in 1620. Son, Richard, was born in 1621.'],
['1622 -- At the time that Rev. John White organized the Cape Ann venture, several other colonization schemes for the same area were in the works in other parts of England. Some of these efforts actually made an attempt by sending settlers.'],
['1622 -- Many of colonization attempts were not successful. What we saw with Thomas� group, though, was success in all ways except filling the expectations of the capitalists who funded the venture.'],
['1623 -- Cape Ann crew left to overwinter. Shakespeare published. A major fire breaks out in the Plymouth colony. Thomas, Margaret and the early kids are in England.'],
['1623/24 �- Thomas and Margaret arrive with three boys, Thomas, George and Richard. John is born at Cape Ann. Thomas\� group arrived at Cape Ann (J.B. Felt says 1623 while W. Hubbard has a year later) and started to establish themselves.'],
['1623/24 -- One task of the Cape Ann crew was to put together living quarters, such as the frame house for which a lot of the material had been brought on the ship.'],
['1623/24 �- Phippen, in his notes (see 1859) on the group members, says that several members of the group were carpenters. They had to build other dwellings which would have been, for the most part, of the English wigwam type over which the great frame house (two-story, steep roof) loomed.'],
['1623/24 -- Cape Ann. Other activities, a very long list, related to settling were accomplished, too. Organizing this activity and securing the provisions brought in the ships would have been on the top of the list for Thomas.'],
['1623/24 -- Cape Ann. Nevertheless, the first winter in Cape Ann would have presented several challenges. The climate differs by a lot from the old country. Yet, nothing of a dire nature was recorded. Thomas, George, and Richard came with their parents. Son, John, was born.'],
['1624 -- Manhattan Island purchased (on the behalf of the Netherlands).'],
['1624 to 1636 -� Births, John, Cape Ann (1624); all of Salem: Sarah (1627), Samuel (1629), Joseph (1630), Miriam (1635), Seeth (1636).'],
['1625 -- Communication means were slow. Whatever there may have been must have easily gotten out of sync. Conant at Nantasket, about this time, received notice from White to go to Cape Ann.'], 
['1625 --The request for Conant to got Cape Ann was precipitated, primarily, by Conant�s brother in England and really had not much to do with supposed failure at Cape Ann (that was an ex post facto rationalization � trying to explain the expectations for almost miraculous returns).'],
['1625 -- When Conant arrived at Cape Ann, he found a hearty, healthy group albeit one that had not yet sent back production to England.'], 
['1625 -- Thomas� role was taken over by Conant. Given his authority, Conant�s family likely took over the frame house. Margaret and her kids, then, squeezed into the smaller structure of the English wigwam. Start of the reign of Charles I (1625-1649).'],
['1625 -- A dozen harbors supported fishing between Cape Code and Penobscot Bay. By the time Roger Conant gets to Cape Ann, there are fifty people in the area.'],
['1626/1629 -� Thomas and Margaret spend their time in Cape Ann taking care of the house, the plantings in the area and their children. John Endicott had the house moved to Salem.'],
['1626 -- Sir Francis Bacon dies in North London.'],
['1626 -- The Cape Ann group, or part of it, removed to Naumkeag from Cape Ann, and, it was not a one-and-done deal (see Balch leaflets, for example). The two places were not far enough apart to prohibit the group to travel back and forth.'],
['1626 -- At Cape Ann, there was the big house to care for. Also, there were gardens and other resources. So, back-and-forth would have been the order of the day and would have been taken as normal (hence, no need to document this as unusual).'],
['1626 -- One thing to look at is whether Thomas and Margaret house sat in the Cape Area while the old planters (who got land in Beverly in 1635) were moving their families and getting established in the new area.'],
['1627 -- Time was spent between Naumkeag and Cape Ann. Too, there may have been some exploration further south and west. Daughter, Sarah, was born.'],
['1627 -- The Dorchester company reorganized and Endicott was named to be the new boss, on the ground, at Naumkeag. He and his group prepared for departure. France and Spain agree "to fight Protestantism."'],
['1627/28 -- Salem\'s deadly winter. Dr. Samuel Fuller comes up from Plymouth to help.'],
['1628 -- Washington Street laid out in Salem �perpendicular to the old Indian trail.� A new Massachusetts Bay charter is signed by Endicott and others.'],
['1628 -- Craddock, the governor of the company in England, is cousin of Endicott�s wife. Endicott arrives with wife and 30 others, and replaces Conant. Endicott, of course, has to relay the message as there had been no forewarning to Conant.'],    
['1628 -- Endicott sends back an encouraging letter to the bosses in England, White, et al, so that they were able to get off their bed of nails. They had been worrying that a successful colony could be founded.'],
['1628 -- Rev. White, et al, completely overlooked (or misunderstood) the successes of the little group, even on Cape Ann. In fact, the modus operandi was to cast aspersions against characters of those who were in the group (expect more about this � arises from some need to expect confession of sins).'],
['1628 -- Endicott saw Thomas and his family enjoying the great house and orders that it be moved from Cape Ann to Naumkeag. Endicott records a bad winter. Did his little influx of people swamp the resources acquired with so much work by the little group of older planters?'],
['1628 -- Higginson writes well of Naumkeag (in his diary) but argues that the ills of the Cape Ann team was due to their not being religious enough.'],
['1629 -- Endicott�s wife died over the winter. Thomas, as Mr. Gardner, is mentioned by a Mr. Webb in a July 28 meeting in London. Webb was reading from a letter sent by Mr. Endicott.'],
['1629 -- Son, Samuel, was born. Naumkeag renamed to Salem (Peace, Hebrew). Higginson shows up with 350 passengers on six ships with some provisions (including cattle), evidently not enough. '],
['1629 -- Higginson writes about the dwellings of Naumkeag including the �faire House� recently built by the governor, which house had been moved from Cape Ann on the orders of Endicott. They had another bad winter, with too many people for the resources. Higginson, and others, died.'],
['1629/30 -� The first winter in Salem was terrible for the colonists. Endicott had brought a lot with him who swamped resources, and the deaths were due largely to lack of food and inadequate housing.'],
['1630 -- Rev. Francis Higginson\�s diary published as New England�s Plantation which details his venture to the colonies. Son, Joseph, was born. Population of Salem at this time: 1626 about 30, 1629 about 336.'], 
['1630 -- Winthrop arrives with another bunch of people. Salem does not sit well with him so he goes south and west. He does record, later, in his diary about going back to visit Endicott in Salem. He was feasted in the great house. Too, his people went to Cape Ann and brought back strawberries.'],
['1630 -- Lady Arabella came with Winthrop�s group. As Endicott said, she went from the paradise of plenty to the wilderness of want (paraphrase).'],
['1630 -- John Winthrop arrives and dines in the great house in Salem. The "Wampanoag Indians� introduce popcorn to the pilgrims.'],
['1632 -- Oliver Cromwell prevented from coming here. A wet and cold summer resulted in a reduced corn harvest.'],
['1635 -- Thomas Gardner, born 1565, died in Salem (some have claimed him to be the father-in-law of Margaret).'],
['1635 -- Daughter, Miriam, was born in 1635. On November 11th, there was a grant of land to Townsend Bishop that was signed by Endicott, Conant, Gardner, Massey, Batter (we\�ll fill in the intervening years). In the same month, Gardner signed on grant of 300 acres to Thomas Scruggs.'],
['1635 -- In December, Gardner signed on grant of 300 acres to John Blackleech. On the 25th day 11th month, there were 1000 acre grants in Beverly to Conant, Balch, Palfray, Woodbury, Trask. These are traditionally called the �old planters� in several places.'],
['1635 -- Craddock, in a letter, said that he did not want the "old planters" folks fearing that they were being enslaved. Thomas, being a Mr (which implies a lot), was not of this group (we ought not try to force him into it, okay? � there will be more about this, too). William Wood publishes New England Prospects in London.'],
['1636 -- The Pequot war in which John Tylly was killed. Daughter, Seeth, was born.'], 
['1636 -- Thomas was made member of the First Church (please note that he was already active and respected in the community � so, Thomas was other than the church or military).'],
['1636 -- Thomas was one of the town representatives and was granted 100 acres (I would bet that he didn�t envy the 1000 acres of the Beverly group). Sons, Thomas and George, got land grants from Salem signifying their adulthood.'],
['1637 -- Thomas made Freeman on the 17th of the 3rd month. It�s interesting that he and Hathorne were voted to the General Court as representatives. Thomas, after that, kept a local focus. The place was growing.'],
['1637 -- Salem�s population: 1637 about 900, 1639 about 950, 1644 about 1200, 1654 about 1068, 1665 about 1466.'],
['1638 -- On June 1st, there was a severe earthquake; objects were thrown around. Aftershocks continued for 20 days.'],
['1640 -- Population in the colonies thought to be less than 6,000.'],
['1643/44 � George married Hannah __. Thomas, the son, married __ Hapscott.'],
['1645 -- Archbishop William Laud, the plague of the Puritans, was executed. '],
['1645 -- Before and after 1641 -- Margaret died. Thomas married Demaris Shattuck (a Quaker). Later, he had sons who were Quakers.'], 
['1645 -- On Quakers. Thomas is not mentioned anywhere as being harassed (we�ll go into why this is so, to boot) for his views or his preferences in regard to what he thought about his lifestyle or how to raise his kids. Thomas had several roles (see Great Migration book) in Salem.'],
['1648 -- Reverend John White dies in Dorchester, England.'],
['1649 -- Start of Oliver Cromwell�s and subsequent terms.'],
['1650 -� Sarah married Benjamin Balch. In England, George Fox was brought up on blasphemy charges.'],
['1652 �- Richard married Sarah Shattuck, the daughter of his step-mother, Damaris.'],
['1653 �- John married Priscilla Grafton.'],
['1654 �- George married Elizabeth (Freestone) Turner. Captain Edward Johnson who came over with the Winthrop fleet (1630) published his notes in what was the first history of Massachusetts.'], 
['1654 -- History of Massachusetts by Captain Edward Johnson covers the period from 1628 to 1651, and includes some thoughts about the Cape Ann venture prior to Endicott.'],
['1654 -- Capt. Edward Johnson was one of the founders of Woburn but added commentary about other towns, such as Salem, in his review. The theme of the book definitely allows one to see the religious arguments that went on (Thomas seems to have stayed out of this).'],
['1656 �- Seeth married Joshua Conant. Joseph married Ann Downing.'],
['1657 �- Samuel married Mary White. Miriam married John Hill. George married Elizabeth (Allen) Stone who was the widow of Reverend Samuel Stone.'],
['1659 �- Joshua Conant died. Seeth Gardner Conant married Joseph Grafton.'],
['1660 �- Mary Dyer, supporter of Anne Hutchinson, hanged in Boston for her Quaker beliefs.'],
['1660 �- Daughter #2, Miriam Gardner Hill, died in Salem. Start of the reign of Charles II (1660-1685).'],
['1661 �- Samuel Shattuck, step-son of Thomas, Senior, brought back writ from Charles II that told New England authorities to lay off the Quakers.'],
['1662 -- Henry Vane, who had served one term as Governor of Mass Bay and was a supporter of Mrs. Hutchinson, was beheaded by on order of Charles II.'],
['1664 �- Miriam (Gardner) Hill died, leaving a husband and small children.'],
['1667 �- Damaris Shattuck Gardner, last wife of Thomas Senior, fined for absence from public worship. Richard and Sarah packed up their belongings and, with daughter, Sarah, and sailed for Nantucket.'],
['1672 �- George Gardner removed from Salem to live in Hartford, CT. John Gardner got a land grant on Nantucket.'],
['1673 �- Richard and John Gardner go to New York to see Governor Francis Lovelace on the behalf of Nantucket.'],
['1674 �- Thomas Gardner, Senior, died, December 29th and was buried in Salem at the old burying ground.'],
['1675 -- Population in the colonies reaches 50,000. The King Philip\'s War breaks out in the colonies. Joseph Gardner, son #6, killed at Great Swamp fight, leaving widow, Ann (Downing) Gardner.'],
['1676 �- Ann, Joseph\�s widow, married Governor Simon Bradstreet after he signed her pre-nuptial. John and Richard meet opposition on Nantucket; John writes the Governor in New York. George Gardner died, leaving widow Elizabeth (Allen) Stone Gardner. Samuel married Elizabeth () Paine.'], 
['1679 �- Son #2, George, died in Salem. Habeas Corpus Act passed.'],
['1680 -- Rev. William Hubbard finished his manuscript (History of New England) and gave it to those in charge for review. In Chapter XVIII, he mentions that Mr. John Tylly and Mr. Thomas Gardener were employed as overseers of the Cape Ann effort.'],
['1680 -- Rev. Hubbard\'s report was the first mention. Rev. Hubbard talked to all of the principals including Conant (at length, Conant expressed displeasure at how he was treated).'],
['1680 -- Rev. William Hubbard died in 1704. His manuscript was almost burned when there was a mob induced fire at the house of Gov. Thomas Hutchinson in 1765.'],
['1680 -- Hubbard\�s narrative was not published until 1815 (Hubbard has an extensive list of references that we need to add to the list and to review).'], 
['1682 �- Thomas Gardner, Junior, son #1, died leaving widow, Elizabeth (Horne) Gardner.'],
['1686 �- Sarah (Gardner) Balch, daughter #1, died in Beverly.'],  
['1688 �- Richard Gardner, son #3, died, in Nantucket, leaving widow Sarah (Shattuck) Gardner. John Gardner bought land on Martha�s Vineyard.'],
['1688 -- Colonial clergyman, Rev. John Wise, was arrested and fined for protesting taxation. Gov. Edmund Andros declares that colonists gave up all rights when they left England.'],  
['1689 �- Samuel Gardner, son #5, died in Salem.'],
['1695 �- John Gardner reports to the Governor of Massachusetts that the French had landed on Nantucket and did some plundering.'], 
['1706 �- John Gardner, son #4, died, on Nantucket, leaving widow Priscilla (Grafton) Gardner.'],
['1707 �- Seeth Gardner Conant Grafton, daughter #3, died in Salem.'], 
['1713 �- Ann Downing Gardner Bradstreet died at age of 79.'],
['1724 �- Sarah Shattuck Gardner died; she was 92 years old.'],
['1736 -- Thomas Prince publishes his look (A Chronological History of New England, in the form of Annals) which covers the period up to 1630. Also, he has several pages of references, including those from Hubbard, Mathers, Bradford, and many more.'], 
['1736 -- In his look, Thomas Prince provides a broad sweep of history from six days after Creation all the way up to the time of King James VI. His use of New England includes Virginia.'],
['1736 -- There was a lot of activity in the northern region prior to 1620. Prince mentions that Gardner and Tylly oversaw the Cape Ann Plantation (following Rev. Hubbard, of course).'],  
['1747 -- Daniel Neal writes his book (History of New-England) and mentions Joseph Gardner being killed.'], 
['1764 -- Governor Hutchinson publishes his work (History of Massachusetts) in which he touts the lack of facts in Hubbard�s work (rather than celebrate the guy�s early effort, almost a century earlier).'], 
['1765 -- On August 26th, a mob related to the tax riot burnt the Governor�s house (Thomas Hutchinson). In that instance, we almost lost the manuscript of Rev. William Hubbard (who had talked to Thomas Gardner).'],
['1765 -- Rev. Hubbard\'s 1680 manuscript which was almost burned In August had been in possession of Hutchinson\�s family for several generations.'], 
['1773 -- Boston Tea Party, taxation without representation.'],
['1776 -- Declaration of Independence.'],
['1789 -- U.S. Constitution.'],  
['1792 -- The great frame house which had been moved over to Salem on Endicott�s orders was extensively modified, including an additional floor and the exterior trimmings that were popular at the time.'],
['1840s -- Thomas� grave, along with several others, at Salem�s old burying ground was lost.'],
['1840s -- Some graves were moved to the Trask plot or to Harmony Grove cemetery (the northwest corner � where are the stones?) in order to allow for street expansion. Others who only had their stones moved include Abel (grandson via Samuel) and Abel�s wife (Sarah Porter).'],  
['1846 -- Young publishes his book (Chronicles of the First Planters of Massachusetts Bay). He includes Hubbard�s Narrative (1680) which was the first to make reference to Thomas Gardner and John Tylly as the overseers of the Cape Ann effort.'], 
['1859 -- The Essex Institute publishes (Volume I of their Collections) the in-depth paper of George D. Phippen who had done research on the old planters. Phippen says more than the five (and their families) moved to Naumkeag.'],
['1859 -- Using prior sources (Hubbard, Prince, Felt), Phippen documents the venture and follows Hubbard�s reference to Thomas Gardner and John Tylly as leads. Phippen then writes what he could find out about each of the planters (see his list below, 1888).'], 
['1860 -- James Savage publishes his Genealogical Dictionary of the First Settlers of New England. Gardners are in Volume 2.'], 
['1870s -- Elizabeth Gardner Amory ascribes the title of �first governor� on her ancestor, Thomas (Dorothy Winthrop Bradford quoted in the book of Dorothy B. Wexler).'], 
['1854 -- Thornton writing about Cape Ann leaves Thomas off the old planters list which includes the following: Conant, Allen, Balch, Gray, Knight, Norman, Norman, Jr., Palfray, Tylly, Woodbery.'], 
['1873 -- John Palfrey writes his History of New England and lists the children of Thomas and Margaret.'], 
['1877 -- David D. Balch, in Balch Leaflets, writes of the Cape Ann and Salem ventures. He iterates that there were the four friends who were the Old Planters and who got the large land grants. He leaves off Trask.'],
['1877 -- David D. Balch notes that Cape Ann was not abandoned completely. His article mentions Thomas and references the work of George D. Phippen who had included Thomas Gardner in the list of people who removed to Salem.'], 
['1880 -- Drake�s look about old planters versus new (those who came with Endicott and after).'], 
['1888 -- Johns Hopkins Universities, Studies in Historical and Political Science, Herbert B. Adams, editor, publishes Phippen\.�s paper which has this list of people going over to Salem: Conant, Lyford, Woodbury (John and Humphrey), Balch, Palfrey, Traske, Jeffrey, Tylly, Gardner, Allen, Gray, Knight, Norman (Richard and son).'], 
['1888 -- According to Phippen, including men and women and children, there were thirty people in Naumkeag prior to Endicott\�s arrival.'], 
['1899 -- Dr. Frank A. helps organize the Old Planters Society (arrival prior to 1630) which includes illustrious descendants of Thomas and Margaret.'],
['1907 -- Dr. Frank A. publishes his book on Thomas (Thomas Gardner, Planter, and some of his descendants) and his descendants giving lines for several generations.'],
['1910 -- Captain Johnson�s 1654 book is republished with annotations by J. Franklin Jameson, who is a descendant.'], 
['1930 -- George Francis Dow uses his study of the great frame house (by now, demolished due from the ravages of time and the elements � though some of the support structures are said to still be in use in another building in Salem)'],
['1930 -- George Francis Dow constructs a fully-dimensioned replica of the \'great frame\' house in the Salem Pioneer Village for the 300th Anniversary celebrations.'],
['1930 -- The Salem Pioneer Village also includes English wigwams and other artifacts of the era of Thomas and Margaret.'],
['1935 -- Frank A. publishes the Gardner Memorial with lines leading up to John Lowell Gardner II and with a featured look at his wife, Isabella Stewart Gardner.'],
['1948 -- Universal Declaration of Human Rights.'], 
['CoOS, 1642 -- Code of laws for the colony adopted. These were drawn up by Rev. Nathaniel Ward of Ipswich.'],
['CoOS, 1642 -- Rev Hugh Peter of Salem became Chaplain of Cromwell\'s Parliamentary Army.'],
['CoOS, 1642-43 -- The General Court is divided into two houses as a result of the famous Sow Case. These houses were to be known as the Massachusetts House of Representatives and Senate.'],
['CoOS, 1661 -- Quakers Vagabond Act replaces the death penalty as public opinion reacts against clerical violence.'],
['CoOS, 1663 -- John Higginson writes to the General Court that Salem is a nest of Quakers.'],
['CoOS, 1799 -- The Eighteenth Century opens with Salem well on the way to becoming a great shipbuilding center and important commercial port.'],
['CoOS, 1764 -- First Census. Population of Salem was 4,427. By 1766, it was 5,337. In 1790, there were 7,921 souls in the area. 1800 saw a population of 9,457. By 1915, it was 36,825.'], 
['CoOS, 1776 -- June 17. A few men from Salem are in the Battle of Bunker Hill. Lieut. Benjamin West is killed within the trenches.'],
['CoOS, 1787 -- June 23. There is rejoicing in Salem, records Felt, for the adoption of the federal Constitution'], 
['CoOs, 1789 -- April 30th. George Washington inaugurated as 1st President of the U.S. at Federal Hall on Wall Street, NYC.'],
['CoOS, 1825 -- Nathaniel Hawthorne, Henry Wadsworth Longfellow, and Franklin Pierce graduate from Bowdoin College.'],
['CoOS, 1826 -- July 4th. The 50th of the U.S. was celebrated with the 200th of Salem. In a parade, a printing press being pulled by white horses printed throwaways of the occasion which were thrown out to the parade watchers.'],
['CoOS, 1834 -- Shoe pegging machine invented by Samuel Preston of Danvers.'],
['CoOS, 1844 -- A large portion of Salem is opposed to the annexation of Texas lest this promote slavery and bring a war with Mexico'],
['CoOS, 1860 -- Salem Lyceum opens with a lecture by Rev. Henry Ward Beecher, brother of Harriet Beecher Stowe.'], 
['CoaOS, 1861 -- April 23. Rev. G.D.Wildes raises a Field Hospital Corps of 60 volunteers from Salem and vicinity which becomes the first ambulance department in the United States Army',],
['CoOS, 1866 -- April 5. A Fast day for fasting, humiliation, and prayer set apart by the Governor of the Commonwealth (custom of long standing).'],
['CoOS, 1876 -- July 4th. 100 years of U.S. Parade of more than 3 miles in length in Salem.'],
['CoOS, 1869 -- Rev Joseph B. Felt dies. Lived at 27 Norman Street.'],
['CoOS, 1914 -- June 25th. The greatest disaster in Salem\'s history descends as fire breaks out in the Korn Leather Company\'s factory on Boston Street near Bridge Street, in Blubber Hollow. Within moments the conflagration is beyond control.'], 
['CoOS, 1917 -- June 11. The X-Ray invention of Frank Balch of Salem is adopted for Army and Navy Hospitals.'],
['1995 -- Publication by the New England Historic Genealogical Society of The Great Migration Begins. Thomas Gardner has six pages.'],  
['1999 -- On March 20, David Goss talked to the Essex Society of Genealogists about the �Old Planters� who received land grants in Beverly in 1635. Thomas was not of that group (we will address this subject).'],
['2009 -- John Goff provides a few details on Thomas and Margaret in his book (Salem�s Witch House: A Touchstone to Antiquity).'],
['TGS, 1895 -- Despite having been mentioned by Rev. Felt, Lt Ben West\'s role in Bunker Hill was finally recognized. He had been killed in 1776.'],
['TGS, 1909 -- Last issue of Sidney Perley\'s The Essex Antiquarian which had published quarterly since 1897.'],
['TGS, 1908 -- First issue of The Massachusetts Magazine with Dr. Frank A. Gardner as co-founder and editor.'],
['TGS, 1918 -- January. Last issue of The Massachusetts Magazine which published for eleven years.'], 
['TGS, 2010 -- January. Thomas Gardner Society formed.'],
['TGS, 2010 -- September. First post, blog for Thomas Gardner Society.'],
['TGS, 2010 -- September. Website started: ThomasGardnerSociety.org; it was hosted on Microsoft\'s OfficeLive.'],
['TGS, 2010 -- September 1. First entry of What\'s New.'],
['TGS, 2011 -- May. Gardner\'s Beacon Vol. I, No. 1.'],
['TGS, 2012 -- March 15. Notice that OfficeLive will end in April.'],
['TGS, 2012 -- April 18. All content moved from OfficeLive (apsx) to Webhosting Hub (HTML, icons).'],
['TGS, 2013 -- January 7. Bulletin Board established on TGS site with easy registration and no moderation.'],
['TGS, 2013 -- January 22. For the Bulletin Board, put in Admin approval due to improper registrations.'],
['TGS, 2013 -- January. John Goff (descendant of Thomas through Richard) references the TGS in an article for the Salem Gazette\'s on-line publication.'], 
['TGS, 2013 -- July. Started to look at improvements for the TGS site. Studied the options for web development.'],  
['TGS, 2014 -- May. First post, technical blog for TGS using WordPress.'],
['TGS, 2014 -- July 19. Started the TGS Facebook informational page.'],
['TGS, 2014 -- August. The Gardner Annals Vol. I, No. 1.'],
['TGS, 2014 -- TGS incorporated. Tax exempt status.'],

['GBIV3,1638 � John Gardner assigned as part of Nathaniel Woodward\�s crew that was to survey the Merrimack River.'],
['GBIV3,1649 � Thomas, Jr., George, Samuel and Joseph Gardner were ordered to survey from the meeting house to the westerly river (Forest) to determine the boundary with Lynn.'],
['GBIV3,1658 � Sarah, wife of Richard Gardner, fined for being absent �on the Lord�s Day.�'],
['GBIV3,1659 � John Gardner ran the bounds between Boston, Charlestown and Lynn.'], 
['GBIV3,1662 � Richard Gardner\�s wife �excommunicated from the First Church in Salem� for being present at a Quaker meeting.'],
['GBIV3,1663 � John and Samuel Gardner, and others, were granted permission �to build a mill over the South river.�'], 
['GBIV3,1664 � Richard Gardner, and others, charged with absenting themselves �from public ordinances.� Richard moves to Nantucket.'],
['GBIV3,1672 � John Gardner granted land on Nantucket.'],
['GBIV3,1673 � George Gardner removes to Hartford, CT. Richard Gardner named Chief Magistrate of Nantucket by Governor Francis Lovelace. John Gardner named Chief Military Office for Nantucket by the Governor.'],
['GBIV3,1673-77 � There was controversy over the Governor\�s support for John Gardner, including a warrant for arrest of John. Turmoil continued until the new Governor, Andros, settled the matter. '],
['GBIV3,1674 � Joseph Gardner, with Major Hathorne and Henry Bartholomew, was appointed to settle the boundaries between Salem and Marblehead. '],
['GBIV3,1675 � Samuel Gardner admitted as �freeman of this colony� (delayed the event, just like his father?). '],
['GBIV3,1682 � John Gardner, Richard Gardner and Steven Coffin were selected to lay out the bounds of all lots on Nantucket.'],
['GBIV3,1686 � Samuel Gardner appointed as Coroner for the county.'], 
['GBIV3,1900 � Annotated copy of a map from the 1638 survey that had been signed by John Gardner found among old papers in Essex County.'],

['GBIV4,1497 � Cabot established the right by discovery, requiring settlement.'],
['GBIV4,1525+ � Spain settled Florida. Then, France �established a new colony along the St. Lawrence.�'],
['GBIV4,1607 � John Smith located at Jamestown, Va. Mason and Georges settled the area near Kennebec River.'], 
['GBIV4,1621 � Plymouth grant included islands south of Cape Cod.'],
['GBIV4,1635 � Lord Sterling was given Long Island by King Charles I.'],
['GBIV4,1637 � James Forrett came to New York to sell, for Lord Sterling, the islands between Cape Code and the Hudson River. At the same time, Sir Ferdinand Georges considers that he owns the islands as part of Maine.'], 
['GBIV4,1641 � Thomas Mayhew of Watertown purchased the islands south of Cape Code from James Forrett. It was unsettled whether Mayhew to pay tax to Winthrop or Georges.'],
['GBIV4,1659 � Mayhew got twenty purchasers for land on Nantucket.'],
['GBIV4,1664 � English King gave Nantucket to the Duke of York who appoints Francis Lovelace.'],
['GBIV4,1666 � Richard and John Gardner received land grants (half share) on Nantucket. Richard moved to Nantucket with his family. '],
['GBIV4,1670 � Governor Lovelace arrived in New York. He orders all claimants to show him their proof of ownership.'],
['GBIV4,1671 � Tristram Coffin and Thomas Macy went to New York on the behalf of the Nantucket owners. Governor Lovelace settled the patent and tax issue in favor of Forrett..'],
['GBIV4, Nantucket was to ship �four barrels of merchantable codfish� to New York every year. The town was named Sherburne. '],
['GBIV4,1672 � Thomas Mayhew purchased islands south of Cape Code.'],
['GBIV4,1673/74 � The Dutch capture New York invalidating, according to the English King, the claim of the Duke of York.  The Nantucket Insurrection started (Coffin vs Gardner controversy -- future Annals). '],
['GBIV4,1680 � The Nantucket Insurrection settled (future Annals).'],
['GBIV4,1684 � A new patent, Dongan, limited claims to ownership obtained from the Indians, otherwise property of the King.'],
['GBIV4,1687 � The Dongan Patent was rewritten to include the whole island. John Gardner was among the members of the �Trustees of the Freeholders of the Town of Sherburne.�'],
['GBIV4,1688 � Richard Gardner died on Nantucket leaving widow Sarah Shattuck.'],
['GBIV4,1692 � Parliament transferred all of Nantucket that was bought by Mayhew to the Massachusetts Province. Matthew Mayhew threatened dire calamities, �particularly, on John Gardner.� '],
['GBIV4,1706 � John Gardner died on Nantucket leaving widow Priscilla Grafton.']

]
}
