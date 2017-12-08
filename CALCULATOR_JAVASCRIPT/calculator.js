var fop=0;
var op=0;
var a=0;
var b=0;
var point=0;
var min;
var dis=0;

function display7()
{
	if(op==0)
	{
		dis=1;
		if(a!=0)
		{
			a=a+"7";
		}
		else if(point==1)
		{
			a="0"+"."+"7";
		}
		else
		{
			a=7;
		}
	}
	else
	{
		dis=2;
		if(b!=0)
		{
			b=b+"7";
		}
		else if(point==1)
		{
			b="0"+"."+"7";
		}
		else
		{
			b=7;
		}
	}
	if(dis==1)
		document.getElementById("res").innerHTML=a;
	if(dis==2)
		document.getElementById("res").innerHTML=b;
	dis=0;
}
function display0()
{
	if(op==0)
	{
		dis=1;
		if(a!=0)
		{
			a=a+"0";
		}
		else if(point==1)
		{
			a="0"+"."+"0";
		}
		else
		{
			a=0;
		}
	}

	else
	{
		dis=2;
		if(b!=0)
		{
			b=b+"0";
		}
		else if(point==1)
		{
			b="0"+"."+"0";
		}
		else
		{
			b=0;
		}
	}
	if(dis==1)
		document.getElementById("res").innerHTML=a;
	if(dis==2)
		document.getElementById("res").innerHTML=b;
	dis=0;
}


function display1()
{
	if(op==0)
	{
		dis=1;
		if(a!=0)
		{
			a=a+"1";
		}
		else if(point==1)
		{
			a="0"+"."+"1";
		}
		else
		{
			a=1;
		}
	}

	else
	{
		dis=2;
		if(b!=0)
		{
			b=b+"1";
		}
		else if(point==1)
		{
			b="0"+"."+"1";
		}
		else
		{
			b=1;
		}
	}
	if(dis==1)
		document.getElementById("res").innerHTML=a;
	if(dis==2)
		document.getElementById("res").innerHTML=b;
	dis=0;
}

function display2()
{
	if(op==0)
	{
		dis=1;
		if(a!=0)
		{
			a=a+"2";
		}
		else if(point==1)
		{
			a="0"+"."+"2";
		}
		else
		{
			a=2;
		}
	}

	else
	{
		dis=2;
		if(b!=0)
		{
			b=b+"2";
		}
		else if(point==1)
		{
			b="0"+"."+"2";
		}
		else
		{
			b=2;
		}
	}
	if(dis==1)
		document.getElementById("res").innerHTML=a;
	if(dis==2)
		document.getElementById("res").innerHTML=b;
	dis=0;
}

function display3()
{
	if(op==0)
	{
		dis=1;
		if(a!=0)
		{
			a=a+"3";
		}
		else if(point==1)
		{
			a="0"+"."+"3";
		}
		else
		{
			a=3;
		}
	}

	else
	{
		dis=2;
		if(b!=0)
		{
			b=b+"3";
		}
		else if(point==1)
		{
			b="0"+"."+"3";
		}
		else
		{
			b=3;
		}
	}
	if(dis==1)
		document.getElementById("res").innerHTML=a;
	if(dis==2)
		document.getElementById("res").innerHTML=b;
	dis=0;
}

function display4()
{
	if(op==0)
	{
		dis=1;
		if(a!=0)
		{
			a=a+"4";
		}
		else if(point==1)
		{
			a="0"+"."+"4";
		}
		else
		{
			a=4;
		}
	}

	else
	{
		dis=2;
		if(b!=0)
		{
			b=b+"4";
		}
		else if(point==1)
		{
			b="0"+"."+"4";
		}
		else
		{
			b=4;
		}
	}
	if(dis==1)
		document.getElementById("res").innerHTML=a;
	if(dis==2)
		document.getElementById("res").innerHTML=b;
	dis=0;
}

function display5()
{
	if(op==0)
	{
		dis=1;
		if(a!=0)
		{
			a=a+"5";
		}
		else if(point==1)
		{
			a="0"+"."+"5";
		}
		else
		{
			a=5;
		}
	}

	else
	{
		dis=2;
		if(b!=0)
		{
			b=b+"5";
		}
		else if(point==1)
		{
			b="0"+"."+"5";
		}
		else
		{
			b=5;
		}
	}
	if(dis==1)
		document.getElementById("res").innerHTML=a;
	if(dis==2)
		document.getElementById("res").innerHTML=b;
	dis=0;
}

function display6()
{
	if(op==0)
	{
		dis=1;
		if(a!=0)
		{
			a=a+"6";
		}
		else if(point==1)
		{
			a="0"+"."+"6";
		}
		else
		{
			a=6;
		}
	}

	else
	{
		dis=2;
		if(b!=0)
		{
			b=b+"6";
		}
		else if(point==1)
		{
			b="0"+"."+"6";
		}
		else
		{
			b=6;
		}
	}
	if(dis==1)
		document.getElementById("res").innerHTML=a;
	if(dis==2)
		document.getElementById("res").innerHTML=b;
	dis=0;
}

function display8()
{
	if(op==0)
	{
		dis=1;
		if(a!=0)
		{
			a=a+"8";
		}
		else if(point==1)
		{
			a="0"+"."+"8";
		}
		else
		{
			a=8;
		}
	}

	else
	{
		dis=2;
		if(b!=0)
		{
			b=b+"8";
		}
		else if(point==1)
		{
			b="0"+"."+"8";
		}
		else
		{
			b=8;
		}
	}
	if(dis==1)
		document.getElementById("res").innerHTML=a;
	if(dis==2)
		document.getElementById("res").innerHTML=b;
	dis=0;
}

function display9()
{
	if(op==0)
	{
		dis=1;
		if(a!=0)
		{
			a=a+"9";
		}
		else if(point==1)
		{
			a="0"+"."+"9";
		}
		else
		{
			a=9;
		}
	}

	else
	{
		dis=2;
		if(b!=0)
		{
			b=b+"9";
		}
		else if(point==1)
		{
			b="0"+"."+"9";
		}
		else
		{
			b=9;
		}
	}
	if(dis==1)
		document.getElementById("res").innerHTML=a;
	if(dis==2)
		document.getElementById("res").innerHTML=b;
	dis=0;
}

function displayp()
{
	fop=1;
	op=1;
	point=0;
	document.getElementById("res").innerHTML="+";
}
function displaypo()
{
	point=1;
	if(op==0)
	{
		dis=1;
		a=a+"."
	}
	else
	{	
		dis=2;
		b=b+"."
	}
	if(dis==1)
		document.getElementById("res").innerHTML=a;
	if(dis==2)
		document.getElementById("res").innerHTML=b;
	dis=0;
}
function displayd()
{
	fop=4;
	op=1;
	document.getElementById("res").innerHTML="/";
}
function displaym()
{
	fop=2;
	op=1;
	document.getElementById("res").innerHTML="-";
}
function displaymu()
{
	fop=3;
	op=1;
	document.getElementById("res").innerHTML="*";
}
function displayc()
{
	fop=0;
	op=0;
	a=0;
	b=0;
	document.getElementById("res").innerHTML=" ";
}

function displayans()
{
	if(fop==1)
	{
		if(a<0)
		{
			document.getElementById("res").innerHTML="j";	
		}
		else
		{
		document.getElementById("res").innerHTML=parseFloat(a)+parseFloat(b);
		a=parseFloat(a)+parseFloat(b);
		}
	}	
	if(fop==2)
	{
		if(a>=b)
		{
			document.getElementById("res").innerHTML=parseFloat(a)-parseFloat(b);
			a=parseFloat(a)-parseFloat(b);
		}
		else
		{
			min=b-a;
			document.getElementById("res").innerHTML=-min;
			a=parseFloat(b)-parseFloat(a);
		}

	}
	if(fop==3)
	{
		document.getElementById("res").innerHTML=parseFloat(a)*parseFloat(b);
		a=parseFloat(a)*parseFloat(b);
	}
	if(fop==4)
		if(b==0)
			window.alert("MATH ERROR");
		else
		{
			document.getElementById("res").innerHTML=parseFloat(a)/parseFloat(b);
			a=parseFloat(a)/parseFloat(b);
		}
	b=0;
	op=0;
	fop=0;
	point=0;
}

