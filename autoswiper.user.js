// ==UserScript== 
// @name UNC Charlotte Swipper 
// @namespace http://userscripts.org
// @description CCI Auto Confirmer
// @include https://cci-events.uncc.edu/event/97/register
// ==/UserScript==

function main()
{
	console.log("Execute!")
	document.getElementsByTagName("input")[5].checked = true;
	document.getElementsByTagName("form")[0].submit();	
}

//Execute Main
main()
