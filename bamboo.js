$.getJSON("https://api.ipify.org?format=json", 
										function(data) { 

			// Setting text of element P with id gfg 
			$("#gfg").html('Your IP:  '+(data.ip));
            $("#ip").val(data.ip);
		}) 
		
		
		
		var config = {
    apiKey: "AIzaSyAdPKibwyp1idbgcGUo6ZQxY5xqIDXcLoA",
  authDomain: "iptrecker-ad63b.firebaseapp.com",
  databaseURL: "https://iptrecker-ad63b.firebaseio.com",
  projectId: "iptrecker-ad63b",
  storageBucket: "iptrecker-ad63b.appspot.com",
  messagingSenderId: "1000966313630",
  appId: "1:1000966313630:web:2bef03011b28a387f20d8f",
  measurementId: "G-HJYTJM4790"};
firebase.initializeApp(config);

   
      

  
  function drv() {  
  
  
  location.href = "https://drive.google.com/file/d/1mEm245BzwE-djOQu8JZntUQzxwxYo1zN/view";
	  

    var d = new Date();
         var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
         var m = months[d.getMonth()];
         var e = d.getFullYear();
         var n = d.getDate();
         var h = d.getHours();
         var mi = d.getMinutes();
         var s = d.getSeconds();
  
  var Y5 = (m)+" "+(n)+" "+(e);
  var Y6 = (h)+"h "+(mi)+"m "+(s)+"s";
 var ip = document.getElementById('ip').value; 
  var res = ip.replace(/\./g, "-");
  
   var downlod = "Drive";
 var tag = "FF-BAMBOO-HK/Downlod/"+(res)+"/"+(Y5)+(Y6); 
  
 firebase.database().ref(tag).update({
      time : Y6,
	  date : Y5,
	  ip : ip,
	  downlod: downlod,
  });
    
  }
  
  
function drc() {  
	  
location.href = "https://foldeoxft9myz1jsw6as1a-on.drv.tw/HakingApps/FF_Bamboo_hk.apk";

    var d = new Date();
         var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
         var m = months[d.getMonth()];
         var e = d.getFullYear();
         var n = d.getDate();
         var h = d.getHours();
         var mi = d.getMinutes();
         var s = d.getSeconds();
  
  var Y5 = (m)+" "+(n)+" "+(e);
  var Y6 = (h)+"h "+(mi)+"m "+(s)+"s";
 var ip = document.getElementById('ip').value; 
  var res = ip.replace(/\./g, "-");
  var downlod = "Dreact";
   
 var tag = "FF-BAMBOO-HK/Downlod/"+(res)+"/"+(Y5)+(Y6); 
  
 firebase.database().ref(tag).update({
      time : Y6,
	  date : Y5,
	  ip : ip,
	  downlod: downlod,
  });
    
  }
  
   
   
   function showb() {  
	  
document.getElementById("code").style.display = "block";

    var d = new Date();
         var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
         var m = months[d.getMonth()];
         var e = d.getFullYear();
         var n = d.getDate();
         var h = d.getHours();
         var mi = d.getMinutes();
         var s = d.getSeconds();
  
  var Y5 = (m)+" "+(n)+" "+(e);
  var Y6 = (h)+"h "+(mi)+"m "+(s)+"s";
 var ip = document.getElementById('ip').value; 
  var res = ip.replace(/\./g, "-");
  var downlod = "Code-view";
   
 var tag = "FF-BAMBOO-HK/Code-View/"+(res)+"/"+(Y5)+(Y6); 
  
 firebase.database().ref(tag).update({
      time : Y6,
	  date : Y5,
	  ip : ip,
	  downlod: downlod,
  });
    
  }
  
   
