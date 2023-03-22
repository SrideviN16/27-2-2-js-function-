
//functions//
//27-2-23 review//
//1 .do what a need maths//
var c=prompt("enter the operator");
		function maths(a,b)
		{
		    if(c=="+")
			{
				 console.log(a+b);
			}
			else if(c=="-")
			{
				console.log(a-c);
			}
			else if(c=="*")
			{
				 console.log(a*c);
			}
			else 
			{
				 console.log(a/b);
			}
		}
		maths(15,3);
//2.vowels constant//
let count=0;
		function vowelss(sri)
		{
			 for(i=0;i<sri.length;i++)
			 { 
		       if( (sri[i]=="a")||(sri[i]=="e")||(sri[i]=="i")||(sri[i]=="o")||(sri[i]=="u"))
			   {
				    count=count+1;
			   }
			 }
			 console.log("The name has" + count+ "vowels");
		}vowelss("sri devi")