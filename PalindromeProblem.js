let s="nitin";
let e=s.length-1;
for(let i=0;i<s.length;i++)
{
    if(s[i]==s[e])
    {
        e--;
        flag=false;
    }
    else
    {
        flag=true;
        break;
    }
}
if(flag==false)
{
    console.log("Palindrome string");
}
else{
    console.log("Not Palindrome String");
}