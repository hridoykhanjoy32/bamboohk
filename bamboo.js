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
  
   
 var myTimer;   

  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
  var player;
  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player("player", {
      "height": "315",
      "width": "560",
      "videoId": "9JeQpJwXik0",
      playerVars: {
            controls: 0,
            disablekb: 1
        },
      "events": {
        "onReady": onPlayerReady,
        "onStateChange": onPlayerStateChange
      }
    });
  }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
        
      }
    function onPlayerStateChange(event){
        if(event.data==1) { // playing
            myTimer = setInterval(function(){ 
                var time;
                time = player.getCurrentTime();
                $("#timeHolder").text(time);
                
                if(time>5){
                
                $("#watchtime").text("redy");
			
			
			
			
			
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
                
                else if(time>4){
                
                $("#watchtime").text("Wait 1 sec");
                
                }
                else if(time>3){
                
                $("#watchtime").text("Wait 2 sec");
                
                }
                else if(time>2){
                
                $("#watchtime").text("Wait 3 sec");
                
                }
                
                else if(time>1){
                
                $("#watchtime").text("Wait 4 sec");
                
                }
                
            else{
            
            $("#watchtime").text("Play video");
            
            }    
                
            }, 100);
        }
        else { // not playing
            clearInterval(myTimer);
        }
    }
    



   
   function showb() {  
	  

    
  }
  
   
