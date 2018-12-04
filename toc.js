// ---------------------------------------------------
// BLOGTOC
// ---------------------------------------------------
// BlogToc creates a clickable Table Of Contents for
// Blogger Blogs.
// It uses the JSON post feed, and create a ToC of it.
// The ToC can be sorted by title or by date, both
// ascending and descending, and can be filtered by
// label.
// ---------------------------------------------------
// Copyright 2012-2015 Cluster Amaryllis
// Url: https://www.townoftwilight.blogspot.com
// Date: 2012-02-21
// ---------------------------------------------------
// ATTENTION ! : 
// DO NOT REMOVE ABOVE COPYRIGHT
// THE AUTHOR WORKS VERY HARD TO BUILD IT
// ---------------------------------------------------
var postFilter="";var searchQuery="";var searchRegex;var access;var page;var tempPage=1;var display;function displaydata(){for(var i=0;i<postTitle.length;i++){if(i<newestFlags){labeled.push("<img src=\"https://4.bp.blogspot.com/-2tuYqzcM9-I/T0Nl7UMszUI/AAAAAAAABmQ/NhLzna4XoiQ/s1600/new.gif\" />");}else{labeled.push("");}}sortBy=sorting;sortPosts(sortBy);access=1;page=1;display=checkdisplay(numDisplay);displayItem();if(incLabelAll==true){displayToc(postFilter);}else{if(!exception&&slwep&&labels.length>0){labels.sort();postFilter=labels[0];displayToc(postFilter);}else{blogLabels.sort();postFilter=blogLabels[0];displayToc(postFilter);}}};function ju67iO(){var _1=document.getElementById("donotremove");var _2=_1.getElementsByTagName("a");if(_2[0].href.length==83){displaydata();}};ju67iO();function displayItem(){var _3="";_3+="<table width=\"100%\"><tr>";_3+="<td id=\"ds-id1\"><form>Title Search : <input type=\"text\" id=\"toc-search\" onkeyup=\"javascript:searchPosts()\" /></form></td>";_3+="<td id=\"ds-id2\" align=\"right\"></td>";_3+="</tr></table>";document.getElementById("toc-display").innerHTML=_3;};function filterPosts(_4){sortBy=sorting;sortPosts(sortBy);access=1;page=1;postFilter=_4;displayToc(postFilter);};function selectFilterPosts(){var _5=document.tocForm;filter=_5.tocList.options[_5.tocList.selectedIndex].value;filterPosts(filter);};function selectPage(cp){var x=document.getElementById("toc-display").offsetLeft;var y=document.getElementById("toc-display").offsetTop;page=cp;tempPage=cp;displayToc(postFilter);window.scroll(x,y);};function selectDisplay(){var _6=document.formDisplay;displayTemp=_6.listDisplay.options[_6.listDisplay.selectedIndex].value;display=checkdisplay(displayTemp);page=1;displayToc(postFilter);};function checkdisplay(cd){var _7;if(cd=="All"){_7=postTitle.length;}else{_7=parseInt(cd);}return _7;};function searchPosts(){var _8;searchQuery=document.getElementById("toc-search").value;searchRegex=new RegExp(searchQuery,"i");if(searchQuery!=""){page=1;}else{page=tempPage;}displayToc(postFilter);};function sortPosts(_9){function _a(x,y){var _b=postTitle[x];postTitle[x]=postTitle[y];postTitle[y]=_b;var _b=postDate[x];postDate[x]=postDate[y];postDate[y]=_b;var _b=postDF[x];postDF[x]=postDF[y];postDF[y]=_b;var _b=postUpdate[x];postUpdate[x]=postUpdate[y];postUpdate[y]=_b;var _b=postUDF[x];postUDF[x]=postUDF[y];postUDF[y]=_b;var _b=postURL[x];postURL[x]=postURL[y];postURL[y]=_b;var _b=postSummary[x];postSummary[x]=postSummary[y];postSummary[y]=_b;var _b=postLabels[x];postLabels[x]=postLabels[y];postLabels[y]=_b;var _b=labeled[x];labeled[x]=labeled[y];labeled[y]=_b;};for(var i=0;i<postTitle.length-1;i++){for(var j=i+1;j<postTitle.length;j++){if(_9=="titleasc"){if(postTitle[i]>postTitle[j]){_a(i,j);}}if(_9=="titledesc"){if(postTitle[i]<postTitle[j]){_a(i,j);}}if(_9=="dateoldest"){if(postDF[i]>postDF[j]){_a(i,j);}}if(_9=="datenewest"){if(postDF[i]<postDF[j]){_a(i,j);}}if(_9=="updateoldest"){if(postUDF[i]>postUDF[j]){_a(i,j);}}if(_9=="updatenewest"){if(postUDF[i]<postUDF[j]){_a(i,j);}}}}};function displayToc(_c){var _d="";if(type=="cloud"){if(incLabelAll==true){if(_c=="All"||_c==""){_d+="<span>All</span>";}else{_d+="<a href=\"javascript:filterPosts('All')\">All</a>";}}if(!exception&&slwep&&labels.length>0){labels.sort();for(var i=0;i<labels.length;i++){if(labels[i]==_c){_d+="<span>"+labels[i]+"</span>";}else{_d+="<a href=\"javascript:filterPosts('"+labels[i]+"')\">"+labels[i]+"</a>";}}}else{blogLabels.sort();for(var i=0;i<blogLabels.length;i++){if(blogLabels[i]==_c){_d+="<span>"+blogLabels[i]+"</span>";}else{_d+="<a href=\"javascript:filterPosts('"+blogLabels[i]+"')\">"+blogLabels[i]+"</a>";}}}}else{if(type=="dropdown"){_d+="<form name=\"tocForm\"><select name=\"tocList\" onchange=\"javascript:selectFilterPosts()\">";if(incLabelAll==true){if(_c=="All"||_c==""){_d+="<option value=\"All\" selected=\"selected\">All</option>";}else{_d+="<option value=\"All\">All</option>";}}if(!exception&&slwep&&labels.length>0){labels.sort();for(var i=0;i<labels.length;i++){if(labels[i]==_c){_d+="<option value=\""+labels[i]+"\" selected=\"selected\">"+labels[i]+"</option>";}else{_d+="<option value=\""+labels[i]+"\">"+labels[i]+"</option>";}}}else{blogLabels.sort();for(var i=0;i<blogLabels.length;i++){if(blogLabels[i]==_c){_d+="<option value=\""+blogLabels[i]+"\" selected=\"selected\">"+blogLabels[i]+"</option>";}else{_d+="<option value=\""+blogLabels[i]+"\">"+blogLabels[i]+"</option>";}}}_d+="</select></form>";}}document.getElementById("toc-header").innerHTML=_d;var _e;var _f;var _10;var _11="<img src=\"https://3.bp.blogspot.com/-5bMCoV7fHZw/T0NjSmtb8qI/AAAAAAAABmA/bRJgtARF7Gw/s1600/bt-up.gif\" />";var _12="<img src=\"https://4.bp.blogspot.com/-AsTzooKEt7o/T0NjRynUkdI/AAAAAAAABl4/LWSlw83iKrw/s1600/bt-down.gif\" />";if(access==1){_e=_f=_10="";}else{if(sortBy=="titleasc"){_e=_11;_f=_10="";}else{if(sortBy=="titledesc"){_e=_12;_f=_10="";}else{if(sortBy=="datenewest"){_f=_11;_e=_10="";}else{if(sortBy=="dateoldest"){_f=_12;_e=_10="";}else{if(sortBy=="updatenewest"){_10=_11;_e=_f="";}else{if(sortBy=="updateoldest"){_10=_12;_e=_f="";}}}}}}}var _13="<table id=\"toc-body\"><tr><th width=\"40\">#</th><th><a href=\"javascript:toggleTitleSort()\">Title</a> "+_e+"</th><th width=\"100\"><a href=\"javascript:toggleDateSort()\">Published</a> "+_f+"</th><th width=\"100\"><a href=\"javascript:toggleUpdateSort()\">Last Update</a> "+_10+"</th></tr>";if(page==1){var _14=0;}else{var _14=(page-1)*display;}var idx=_14+1;var _15=idx;var _16=0;var _17;var _18=new Array();var _19=new Array();var _1a=new Array();var _1b=new Array();var _1c=new Array();var _1d=new Array();if(_c.length!=0&&_c!="All"){for(var i=0;i<postTitle.length;i++){for(var k=0;k<postLabels[i].length;k++){if(searchQuery!=""){if(postLabels[i][k]==_c&&postTitle[i].search(searchRegex)!=-1){_18.push(postTitle[i]);_19.push(postURL[i]);_1a.push(postSummary[i]);_1b.push(labeled[i]);_1c.push(postDate[i]);_1d.push(postUpdate[i]);_16++;}}else{if(postLabels[i][k]==_c){_18.push(postTitle[i]);_19.push(postURL[i]);_1a.push(postSummary[i]);_1b.push(labeled[i]);_1c.push(postDate[i]);_1d.push(postUpdate[i]);_16++;}}}}}else{for(var i=0;i<postTitle.length;i++){if(searchQuery!=""){if(postTitle[i].search(searchRegex)!=-1){_18.push(postTitle[i]);_19.push(postURL[i]);_1a.push(postSummary[i]);_1b.push(labeled[i]);_1c.push(postDate[i]);_1d.push(postUpdate[i]);_16++;}}else{_18.push(postTitle[i]);_19.push(postURL[i]);_1a.push(postSummary[i]);_1b.push(labeled[i]);_1c.push(postDate[i]);_1d.push(postUpdate[i]);_16++;}}}for(var i=_14;i<_14+display;i++){if(typeof _18[i]!="undefined"){_17=="#FFF"?_17="#F6F6F6":_17="#FFF";_13+="<tr style=\"background-color:"+_17+"\" id=\"toc-id"+idx+"\"><td>"+idx+"</td><td><a href=\""+_19[i]+"\" title=\""+_1a[i]+"\">"+_18[i]+"</a> "+_1b[i]+"</td><td>"+_1c[i]+"</td><td>"+_1d[i]+"</td></tr>";idx++;}}_13+="</table>";var _1e=idx-1;var _1f="";var _20=[5,10,25,50,100,"All"];if(!in_array(numDisplay,_20)){var _21=_20.pop();_20.push(numDisplay);_20.sort(function(a,b){return a-b;});_20.push(_21);}_1f+="<form name=\"formDisplay\">Display <select name=\"listDisplay\" onchange=\"javascript:selectDisplay()\">";for(var i=0;i<_20.length;i++){if(_20[i]==display||postTitle.length==display){_1f+="<option value=\""+_20[i]+"\" selected=\"selected\">"+_20[i]+"</option>";}else{_1f+="<option value=\""+_20[i]+"\">"+_20[i]+"</option>";}}_1f+="</select></form>";document.getElementById("ds-id2").innerHTML=_1f;document.getElementById("toc").innerHTML=_13;var _22="<table width=\"100%\"><tr>";if(_16>0){_22+="<td align=\"left\"><span style=\"padding-left:0px\">Results <b>"+_15+"</b> to <b>"+_1e+"</b> of <b>"+_16+"</b></span></td>";}else{_22+="<td align=\"left\"><span style=\"padding-left:0px\">Results 0</span></td>";}_22+="<td align=\"right\">";var _23=page-1;var _24=page+1;var _25=Math.ceil(_16/display);var _26=_25-1;if(_25>1){if(page>1){_22+="<a href=\"javascript:selectPage("+_23+")\">&laquo; Previous</a>";}else{_22+="<span>&laquo; Previous</span>";}if(_25<7+(adjacents*2)){for(var _27=1;_27<=_25;_27++){if(_27==page){_22+="<span>"+_27+"</span>";}else{_22+="<a href=\"javascript:selectPage("+_27+")\">"+_27+"</a>";}}}else{if(_25>5+(adjacents*2)){if(page<2+(adjacents*2)){for(var _27=1;_27<4+(adjacents*2);_27++){if(_27==page){_22+="<span>"+_27+"</span>";}else{_22+="<a href=\"javascript:selectPage("+_27+")\">"+_27+"</a>";}}_22+="<span>...</span>";_22+="<a href=\"javascript:selectPage("+_26+")\">"+_26+"</a>";_22+="<a href=\"javascript:selectPage("+_25+")\">"+_25+"</a>";}else{if(_25-(adjacents*2)>page&&page>1+(adjacents*2)){_22+="<a href=\"javascript:selectPage(1)\">1</a>";_22+="<a href=\"javascript:selectPage(2)\">2</a>";_22+="<span>...</span>";for(var _27=page-adjacents;_27<=page+adjacents;_27++){if(_27==page){_22+="<span>"+_27+"</span>";}else{_22+="<a href=\"javascript:selectPage("+_27+")\">"+_27+"</a>";}}_22+="<span>...</span>";_22+="<a href=\"javascript:selectPage("+_26+")\">"+_26+"</a>";_22+="<a href=\"javascript:selectPage("+_25+")\">"+_25+"</a>";}else{_22+="<a href=\"javascript:selectPage(1)\">1</a>";_22+="<a href=\"javascript:selectPage(2)\">2</a>";_22+="<span>...</span>";for(var _27=_25-(2+(adjacents*2));_27<=_25;_27++){if(_27==page){_22+="<span>"+_27+"</span>";}else{_22+="<a href=\"javascript:selectPage("+_27+")\">"+_27+"</a>";}}}}}}if(page<_27-1){_22+="<a href=\"javascript:selectPage("+_24+")\">Next &raquo;</a>";}else{_22+="<span>Next &raquo;</span>";}}_22+="</td></tr></table>";document.getElementById("toc-footer").innerHTML=_22;};function toggleTitleSort(){sortBy=="titleasc"?sortBy="titledesc":sortBy="titleasc";sortPosts(sortBy);access=2;displayToc(postFilter);};function toggleDateSort(){sortBy=="datenewest"?sortBy="dateoldest":sortBy="datenewest";sortPosts(sortBy);access=2;displayToc(postFilter);};function toggleUpdateSort(){sortBy=="updatenewest"?sortBy="updateoldest":sortBy="updatenewest";sortPosts(sortBy);access=2;displayToc(postFilter);};function handleSafari(){if(navigator.appVersion.search(/safari/i)==-1||navigator.appVersion.search(/version/i)==-1){addCss("div#toc-footer a, div#toc-footer span{ display:inline-table; }");}};function addCss(_28){var _29=document.createElement("style");_29.type="text/css";if(_29.styleSheet){_29.styleSheet.cssText=_28;}else{_29.appendChild(document.createTextNode(_28));}document.getElementsByTagName("head")[0].appendChild(_29);};function loading(){document.getElementById("toc-loading").parentNode.removeChild(document.getElementById("toc-loading"));};handleSafari();loading();
