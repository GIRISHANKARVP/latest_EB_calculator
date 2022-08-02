function fun()
{
var pu=parseInt(document.getElementById("pu").value); 
var cu=parseInt(document.getElementById("cu").value); 
var tu=document.getElementById("tu").innerHTML=cu-pu;
var m=document.getElementById("m").innerHTML;
var bm=document.getElementById("bm").innerHTML;
var c;
if (document.getElementById("m").checked==true)
{ c=1;
}
if(document.getElementById("bm").checked==true)
{c=2
}
var tt1=0,tt2=0,tt3=0,tt4=0,fix;
if(tu<=100)
{
    document.getElementById("free").innerHTML=("FREE");
    document.getElementById("cfix").innerHTML=30;
   fix= document.getElementById("gfix").innerHTML=0;
}
else if(tu<=200 && c==1)  //2
{
    t2=  ((tu-100)*1.5);
    document.getElementById("free").innerHTML=("FREE");
   tt2= document.getElementById("t2").innerHTML=t2;
    document.getElementById("cfix").innerHTML=15;
    fix=document.getElementById("gfix").innerHTML=10;
}
else if(tu<=200 && c==2)
{
    t2=((tu-100)*1.5);
    document.getElementById("free").innerHTML=("FREE");
   tt2= document.getElementById("t2").innerHTML=t2;
    document.getElementById("cfix").innerHTML=30;
   fix= document.getElementById("gfix").innerHTML=20;
}
else if(tu<=500 )   //3
{
    var t3,t2;
    var y;
    if( c==1)
    {
        y=tu-200;
        t3=(y*3);
        document.getElementById("free").innerHTML=("FREE");
        tt2=document.getElementById("t2").innerHTML=((100)*2);
      tt3=  document.getElementById("t3").innerHTML=t3;
        document.getElementById("cfix").innerHTML=20;
        fix=document.getElementById("gfix").innerHTML=15;
    }
    else if(  c==2)
    {
        y=tu-200;
        t3=(y*3);
        document.getElementById("free").innerHTML=("FREE");
        tt2=document.getElementById("t2").innerHTML=((100)*2);
       tt3= document.getElementById("t3").innerHTML=t3;
        document.getElementById("cfix").innerHTML=40;
        fix=document.getElementById("gfix").innerHTML=30;
    }
}
else if(tu>500)  //4
{
    var x,t4;
    if(c==1)
    {
        x=tu-500;
        t4=(x*6.6);
        document.getElementById("free").innerHTML=("FREE");
        tt2=document.getElementById("t2").innerHTML=((100)*3.5);
        tt3=document.getElementById("t3").innerHTML=((300)*4.6);
       tt4= document.getElementById("t4").innerHTML=t4;
        document.getElementById("cfix").innerHTML=25;
       fix= document.getElementById("gfix").innerHTML=25;
    }
    else if(c==2)
    {0,0,0,
        x=tu-500;
        t4=(x*6.6);
        document.getElementById("free").innerHTML=("FREE");
       tt2= document.getElementById("t2").innerHTML=((100)*3.5);
      tt3=  document.getElementById("t3").innerHTML=((300)*4.6);
      tt4=  document.getElementById("t4").innerHTML=t4;
        document.getElementById("cfix").innerHTML=40;
       fix= document.getElementById("gfix").innerHTML=40;
    }
}
 var total=tt1+tt2+tt3+tt4+fix;
 document.getElementById("ta").innerHTML=total;
}