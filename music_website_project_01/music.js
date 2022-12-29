var icon1=document.getElementById("icon1");
var mysong1=document.getElementById("mysong1");
var progressed=document.getElementById("progressed");
var progress_bar=document.getElementById('progress_bar');
var play=document.getElementById('play');
icon1.onclick=function()
{
    i=0;
    if(mysong1.paused)
    {
        mysong1.play();

    }
    else{
        mysong1.pause();
    }
}
var icon2=document.getElementById("icon2");
var mysong2=document.getElementById("mysong2");
icon2.onclick=function()
{
   
    if(mysong2.paused)
    {
        mysong2.play();

    }
    else{
        mysong2.pause();
    }
}
var icon3=document.getElementById("icon3");
var mysong3=document.getElementById("mysong3");
icon3.onclick=function()
{
   
    if(mysong3.paused)
    {
        mysong3.play();

    }
    else{
        mysong3.pause();
    }
}
var icon4=document.getElementById("icon4");
var mysong4=document.getElementById("mysong4");
icon4.onclick=function()
{
   
    if(mysong4.paused)
    {
        mysong4.play();

    }
    else{
        mysong4.pause();
    }
}
var icon5=document.getElementById("icon5");
var mysong5=document.getElementById("mysong5");
icon5.onclick=function()
{
    if(mysong5.paused)
    {
        mysong5.play();

    }
    else{
        mysong5.pause();
    }
}
mysong1.ontimeupdate=function(e){
    progressed.style.width=Math.floor(mysong1.currentTime*100/mysong1.duration)+"%";
}
progress_bar.onclick=function(e)
{
    mysong1.currentTime=((e.offsetX/progress_bar.offsetWidth)*mysong1.duration);

}
mysong2.ontimeupdate=function(e){
    progressed.style.width=Math.floor(mysong2.currentTime*100/mysong2.duration)+"%";
}
// progress_bar.onclick=function(e)
// {
//     mysong2.currentTime=((e.offsetX/progress_bar.offsetWidth)*mysong2.duration);

// }
mysong3.ontimeupdate=function(e){
    progressed.style.width=Math.floor(mysong3.currentTime*100/mysong3.duration)+"%";
}
// progress_bar.onclick=function(e)
// {
//     mysong3.currentTime=((e.offsetX/progress_bar.offsetWidth)*mysong3.duration);

// }
mysong4.ontimeupdate=function(e){
    progressed.style.width=Math.floor(mysong4.currentTime*100/mysong4.duration)+"%";
}
// progress_bar.onclick=function(e)
// {
//     mysong4.currentTime=((e.offsetX/progress_bar.offsetWidth)*mysong4.duration);

// }
mysong5.ontimeupdate=function(e){
    progressed.style.width=Math.floor(mysong5.currentTime*100/mysong5.duration)+"%";
}
// progress_bar.onclick=function(e)
// {
//     mysong5.currentTime=((e.offsetX/progress_bar.offsetWidth)*mysong5.duration);

// }
play.onclick=function()
{
    
        mysong[i].pause;
    
    
}