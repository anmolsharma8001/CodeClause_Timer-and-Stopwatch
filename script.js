function change(){
    var currentdate = new Date();
    var datetime =currentdate.getHours() + ":"+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
    //(datetime);
    document.getElementById("currentdate").value=(datetime);
}
let h,m,s,ms;
let stop=0;
h=m=s=ms=00;
function for_hour(){
    document.getElementById("hour").value=h;
    h=h+1;
}
function for_minute(){
    m=m+1;
    document.getElementById("minute").value=m;
    
}
function for_second(){
    s=s+1;
    document.getElementById("second").value=s;

}
function for_milsecond(){
    document.getElementById("startbtn").style.display="none";
    document.getElementById("stopbtn").style.display="inline";
    ms=ms+1;
    document.getElementById("controlStart").value="Reset";      
    if(ms>=59){
        window.setTimeout(for_second,100);
        ms=0;
        if(s>=59){
            window.setTimeout(for_minute,100);
            s=0;
            if(m>=59){
                window.setTimeout(for_hour,100);
                m=0;
            }
    
        }
        window.setTimeout(for_milsecond, 100);
        
    }
    else if(ms<59){
        if(stop==0){
            window.setTimeout(for_milsecond, 10);
            document.getElementById("milisecond").value=ms;
            document.getElementById("stopbtn").style.backgroundColor="red";
        }
    }

}
function for_stop(){
    if(stop==0){
        stop=1;
        document.getElementById("stopbtn").value="▶️";
        document.getElementById("stopbtn").style.backgroundColor="green";
        //document.getElementById("stopbtn").style.backgroundColor="red";
    } else{
        stop=0;
        document.getElementById("stopbtn").value="⏸️";
        for_milsecond();
    }

}            
function Resettimer(){
    location.reload();
    openstopwatch();

}
//window.setTimeout(change, 100);


// for timer
function opentimer(){
    document.getElementById("timerbox2").style.display="block";
    document.getElementById("timerbox").style.display="none";
    document.getElementById("timeropen").style.backgroundColor="rgb(250, 168, 168)";
    document.getElementById("stopwatchopen").style.backgroundColor="blueviolet";
}
function openstopwatch(){
    document.getElementById("timerbox2").style.display="none";
    document.getElementById("timerbox").style.display="block ";
    document.getElementById("stopwatchopen").style.backgroundColor="rgb(250, 168, 168)"; 
    document.getElementById("timeropen").style.backgroundColor="blueviolet";  
}


let tm,ts,tms;
tms=ts=0;
tm=parseInt(document.getElementById("tminute").value);
function for_timerminute(){
    
    tm=parseInt(document.getElementById("tminute").value);
    tm=tm-1;
    document.getElementById("tminute").value=tm;
}
function for_timersecond(){
    document.getElementById("tsecond").value=ts;
    ts=ts-1;

}
function for_timermilsecond(){
    if(tms==0){
        if((tm==0) && (ts==0) && (tms==0)) {
            tstop=1;
            
        }
        tms=59;
        window.setTimeout(for_timersecond, 10);
        if(ts==0){
            ts=59;
            window.setTimeout(for_timerminute, 10);
           
        }
    }
    document.getElementById("tmilisecond").value=tms;
    tms=tms-1;
    //window.setTimeout(for_timermilsecond, 10);
    window.setTimeout(timermain, 10);

}
var forcestop=0;
function timermain(){
    if(forcestop==1){
        
    }
    else{
    let tstop=0;
    tmptm=tm;
    document.getElementById("tstartbtn").style.display="none";
    document.getElementById("tstartbtn").style.transition="5s";
    document.getElementById("tstopbtn").style.display="inline";

    if((tm==0) && (ts==0) && (tms==0)) {
        tstop=1;
        document.getElementById("tmilisecond").value=tms;
        document.getElementById("tminute").value=tm;
        document.getElementById("tsecond").value=ts;
        playAudio();
    }
    else if(tstop==0){
    window.setTimeout(for_timermilsecond, 10);
}
}
}
var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

//check if minutes  is zero
function Checkzero(){
    ctm=parseInt(document.getElementById("tminute").value);
    if((ctm==0) ||(ctm>20)){
        alert("Zero '0' is Invalid you can Set Atlest 1 minute or Max 20 minutes!");
        document.getElementById("tminute").value=1;
    }
}
function timerstop(){
    if(forcestop==1){
        forcestop=0;
        document.getElementById("tstopbtn").value="⏸️";
        timermain();
    }
    else{
        forcestop=1;
        document.getElementById("tstartbtn").ariaDisabled="true";
        document.getElementById("tstopbtn").value="▶️";
    }
}
//if((tm==0) && (ts==0) && (tms==0)){
   // tstop=1;
//}