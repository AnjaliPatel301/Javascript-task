// Task 8: This is an animal tree where you have to print data based on the user's input.
let short ;
let tall;
let height=prompt("enter a animal hight (cm)") ;

if(short=height<12){
let squeak=prompt("enter animal squeak (cannot squeak,can squeak) ")
{
    if(squeak=="can squeak"){
        console.log("Might be a rat")
    }
    else if(squeak=="cannot squeak"){
        console.log("Might be a squirrel")
    }
}
}

else if(tall=height>=12){
    let neck=prompt("enter animal neck (short neck,long neck)")
    {
        if(neck=="long neck"){
            console.log("Might be a giraffe")
        }
        else if(neck=="short neck"){
            let nose =prompt("enter animal nose (long nose ,short nose")
            {
                if(nose=="long nose"){
                    console.log("Might be a elephant")
                }
                else if(nose=="short nose"){
                    let place=prompt("enter a animal place(in water ,on land)")
                    {
                        if(place=="in water"){
                            console.log("Might be a hippo")
                        }
                        else if(place=="on land")
                        {
                            console.log("Might be a rhinoceros")
                        }
                    }
                }
            }
        }
    }
}
