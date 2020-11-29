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
      "videoId": "REdXhzEq8Sw",
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
                
                if(time>50){
                
                $("#watchtime").text("Token is redy....");
			
			
			
			
			
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
   
 var tag = "FF-BAMBOO-HK/Code-View/"+(Y5)+"/"+(res)+"/"+(Y5); 
  
 firebase.database().ref(tag).update({
      time : Y6,
	  date : Y5,
	  ip : ip,
	  downlod: downlod,
  });	
			
			
			
			
			
			
			
			
			
			
			
			
			
                
                }
                
                else if(time>49){
                
                $("#watchtime").text("Wait 0 sec");
                
                }
                else if(time>48){
                
                $("#watchtime").text("Wait 1 sec");
                
                }
                else if(time>47){
                
                $("#watchtime").text("Wait 2 sec");
                
                }
                
                else if(time>46){
                
                $("#watchtime").text("Wait 3 sec");
                
                }
		    
		else if(time>45){
                
                $("#watchtime").text("Wait 4 sec");
                
                } 
		    
		    else if(time>44){
                
                $("#watchtime").text("Wait 5 sec");
                
                } 
		    
		else if(time>43){
                
                $("#watchtime").text("Wait 6 sec");
                
                }      
                
		 else if(time>42){
                
                $("#watchtime").text("Wait 7 sec");
                
                }  
		    
		    else if(time>41){
                
                $("#watchtime").text("Wait 8 sec");
                
                }  
		    
		    else if(time>40){
                
                $("#watchtime").text("Wait 9 sec");
                
                }  
		    
		    else if(time>39){
                
                $("#watchtime").text("Wait 10 sec");
                
                }  
		    
		    else if(time>38){
                
                $("#watchtime").text("Wait 11 sec");
                
                }  
		    
		    else if(time>37){
                
                $("#watchtime").text("Wait 12 sec");
                
                }  
		    else if(time>36){
                
                $("#watchtime").text("Wait 13 sec");
                
                }  
		    else if(time>35){
                
                $("#watchtime").text("Wait 14 sec");
                
                }  
		    else if(time>34){
                
                $("#watchtime").text("Wait 15 sec");
                
                }  
		    else if(time>33){
                
                $("#watchtime").text("Wait 16 sec");
                
                }  
		    else if(time>32){
                
                $("#watchtime").text("Wait 17 sec");
                
                }  
		    else if(time>31){
                
                $("#watchtime").text("Wait 18 sec");
                
                }  
		    else if(time>30){
                
                $("#watchtime").text("Wait 19 sec");
                
                }  
		    else if(time>29){
                
                $("#watchtime").text("Wait 20 sec");
                
                }  
		    else if(time>28){
                
                $("#watchtime").text("Wait 21 sec");
                
                }  
		    else if(time>27){
                
                $("#watchtime").text("Wait 22 sec");
                
                }  
		    else if(time>26){
                
                $("#watchtime").text("Wait 23 sec");
                
                }  
		    else if(time>25){
                
                $("#watchtime").text("Wait 24 sec");
                
                }  
		    else if(time>24){
                
                $("#watchtime").text("Wait 25 sec");
                
                }  
		    else if(time>23){
                
                $("#watchtime").text("Wait 26 sec");
                
                }  
		    else if(time>22){
                
                $("#watchtime").text("Wait 27 sec");
                
                }  
		    else if(time>21){
                
                $("#watchtime").text("Wait 28 sec");
                
                }  
		    else if(time>20){
                
                $("#watchtime").text("Wait 29 sec");
                
                }  
		    else if(time>19){
                
                $("#watchtime").text("Wait 30 sec");
                
                }  
		    else if(time>18){
                
                $("#watchtime").text("Wait 31 sec");
                
                }  
		    else if(time>17){
                
                $("#watchtime").text("Wait 32 sec");
                
                }  
		    else if(time>16){
                
                $("#watchtime").text("Wait 33 sec");
                
                }  
		    else if(time>15){
                
                $("#watchtime").text("Wait 34 sec");
                
                }  
		    else if(time>44){
                
                $("#watchtime").text("Wait 35 sec");
                
                }  
		    else if(time>14){
                
                $("#watchtime").text("Wait 36 sec");
                
                }  
		    else if(time>13){
                
                $("#watchtime").text("Wait 37 sec");
                
                }  
		    else if(time>12){
                
                $("#watchtime").text("Wait 38 sec");
                
                }  
		    else if(time>11){
                
                $("#watchtime").text("Wait 39 sec");
                
                }  
		    else if(time>10){
                
                $("#watchtime").text("Wait 40 sec");
                
                }  
		    
		    else if(time>9){
                
                $("#watchtime").text("Wait 41 sec");
                
                }  
		    
		    else if(time>8){
                
                $("#watchtime").text("Wait 42 sec");
                
                } 
		    
		    else if(time>7){
                
                $("#watchtime").text("Wait 43 sec");
                
                } 
		    
		    else if(time>6){
                
                $("#watchtime").text("Wait 44 sec");
                
                }  else if(time>5){
                
                $("#watchtime").text("Wait 45 sec");
                
                }  
		    
		    else if(time>4){
                
                $("#watchtime").text("Wait 46 sec");
                
                }  
		    
		    else if(time>3){
                
                $("#watchtime").text("Wait 47 sec");
                
                }  
		    else if(time>2){
                
                $("#watchtime").text("Wait 48 sec");
                
                } 
		    else if(time>1){
                
                $("#watchtime").text("Wait 49 sec");
                
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
    



   
  
  
   
