
chrome.pageAction.onClicked.addListener(function(tabs.Tab tab){
    
});

//Auto check the terms checkbox and then submit the form automatically
function autoAgree()
{
	console.log("Auto Agreeing....")
	document.getElementsByName("accept")[0].checked = true;
	document.getElementsByTagName("form")[0].submit();	
}

//Run the master function
autoAgree()
