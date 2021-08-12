console.log("Program to demonstrate Functions");

function add(a, b)
{
    console.log(arguments);
    console.log(a+b);
}

function sub(a,b)
{
    return a-b;
}

add(5,5);

add(15,5);


console.log(sub(15,5));

//Default value to the function Arguments
function printmessage(count=1)
{
    for (let index = 0; index < count; index++)
     {
        console.log("Welcome to functions");        
    }
    
}

printmessage(3)