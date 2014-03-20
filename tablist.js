// gets the current ativated window //loads all the opened tabs in activated window one by one
chrome.tabs.getAllInWindow(null, function(tabs) {
        
		tabs.forEach(function(tab){
          //function to dispaly tabid,icon,title,url,and status of the tab.
		  myFunction(tab.id,tab.favIconUrl,tab.title,tab.url,tab.status);  
		  
		  // used for formating the values for copy
		  mfc(tab.url,tab.title);			  
        });
      });
function reloadAll(){
	chrome.tabs.getAllInWindow(null,function(tabs){
	tabs.forEach(function(tab){
	myFunction(tab.id)
	{
	chrome.tabs.reload(tabid);
	console.log(tab.id+" Reloaded");
	}
	});
	});
	}
	// used for formating the values for copy  
function mfc(tburl,tbname)
{
console.log(tburl,tbname);
// Creates the <div> element
var div1 =document.createElement("div");
//fragment which holds the elements
var docfrag1 = document.createDocumentFragment();
//dispalys  title of the tab
var TbName = document.createElement("dd");
docfrag1.appendChild(TbName);
TbName.innerText= "\n-----------\n"+tbname ;
//dispalys url of the tab
var TbUrl = document.createElement("dd");
docfrag1.appendChild(TbUrl);

TbUrl.innerText="URL : "+tburl+ "\n-----------";

		div1.id="copytoclip";
		div1.appendChild(docfrag1);
		//used for appending fragmnet to the div element i.e. <div><dd/>.<dd/>.</div>
		tblist.appendChild(div1);

} 


//function display information about the opend tabs in the window 
function myFunction(tabid,favIcon,tabname,tablink,tabstatus) {
        console.log(tabid,favIcon,tabname,tablink,tabstatus);

		var div =document.createElement("div");


		var docfrag = document.createDocumentFragment();



        var TabName = document.createElement("LI");
      // now using fragment insted of separe elemets    //urlList.appendChild(TabName);
		docfrag.appendChild(TabName);
		TabName.innerText=tabname;

		var FavIcon = document.createElement('img');
		//urlList.appendChild(FavIcon);
		docfrag.appendChild(FavIcon);
	//style already declared in the html file	//FavIcon.attr({src:"favIcon", width:"16", height:"16", border:"0"});
		 FavIcon.src=favIcon;


		var TabLink = document.createElement("DD");
		//urlList.appendChild(TabLink);
		docfrag.appendChild(TabLink);
		//TabLink.innerText="URL  " + " : " + tablink; //only for text link
		TabLink.innerHTML='<p>URL : <a href="'+tablink+'" target="_blank" >'+tablink+'</a></p>';//show the link which open in new tab


		var TabStatus = document.createElement("DD");
        //urlList.appendChild(TabStatus);
		       docfrag.appendChild(TabStatus);
			   TabStatus.setAttribute("id","tbstatus");
		TabStatus.innerText="Status : "+tabstatus;

		var TabID = document.createElement("DD");
        //urlList.appendChild(TabID);
		docfrag.appendChild(TabID);
		TabID.innerText="TAB ID : "+tabid;
		TabID.setAttribute("id","tbid");
		

		var bReload = document.createElement("BUTTON");
		bReload.setAttribute("id","btnReload");
		urlList.appendChild(bReload);
		docfrag.appendChild(bReload);
		bReload.innerText="Refresh";
	
		bReload.addEventListener("click",function(){ 
					chrome.tabs.reload(tabid);							
					/*chrome.downloads.download({url:tablink,saveAs:true},
                                             function(id) {
      });*/
	  });

		var bRemove = document.createElement("BUTTON");
		bRemove.setAttribute("id","btnClose");
		urlList.appendChild(bRemove);
		docfrag.appendChild(bRemove);
		bRemove.innerText="Close";
		bRemove.addEventListener("click",function(){
		notification.show();
											chrome.tabs.remove(tabid);		
											});

		//Closes the particular tab
		//Use for loop for activating this feature
		
		/*var CloseTab = document.createElement("BUTTON");
		//urlList.appendChild(CloseTab);
		docfrag.appendChild(CloseTab);
		CloseTab.innerText="Close (not working)";
*/

		//CloseTab.addEventListener("click", function() {chrome.tabs.remove(tabId);});

		//CloseTab.onclick = chrome.tabs.remove(this.tabid); //closeTabs(tabIds);//chrome.tabs.remove(tabId);
		div.id="tab";
		div.appendChild(docfrag);
		urlList.appendChild(div);
		var Line = document.createElement("hr");
		urlList.appendChild(Line);
		// Create a simple text notification: desktop and chrome
		
		var notification = webkitNotifications.createNotification(
			favIcon,//'icon_48.png',  // icon url - can be relative
			'OpenedTabs | Tab Closed',  // notification title
			'Tab Name : '+tabname+'\nUrl : '+tablink+' \nis Closed.' // notification body text
);

      }


// adds event listenrs to the DOM Contents after load 
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
  doc
});

function clickHandler(e) {
  setTimeout(awesomeTask, 10);
}


function awesomeTask() {
 main();
}
function main(){

	  copyToClipboard();

	  }
	  

	  //Trick to copy contents to Clipboard.
	 //copies the <p> to the textarea and then initialize copy to clipboard 
function copyToClipboard() {

  var obj=document.getElementById("copy1");
	if( obj )
	{
    	var tabb=document.getElementById("tblist");//gets <p>
		obj.value = tabb.innerText;//gets the text of <p>

		obj.select();//selects the text in <p>
    document.execCommand("copy", false, null);//initialize the copy command which copy the data to clipboard in well format.
 alert("\t\tAll URLs Successfully Copied to CLIPBOARD!! :) \n\n		PASTE the Clipboard contents to FILE/E-mail.\n\nThanks For Using!(anaghvj)! :D ");
 var r=confirm("			Close the extension?");
if (r==true)
  {
window.close();
  }
else{}

 }
 
 }
