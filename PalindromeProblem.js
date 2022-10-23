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
<<<<<<< HEAD
    console.log("Palindrome  not String");
=======
    console.log("Not Palindrome String");
>>>>>>> ab446f94d849dae3e97d6c7c267705d9c0992f2c
}