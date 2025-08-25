const { log, error } = require('console');
const fs = require('fs');

// fs.writeFile("Hey.txt" , " mein toh acha hu" , function(err)
// {
//     if (err)
//     {
//         console.error(err);
        
//     }
//     else 
//     {
//         console.log("Done");
//     }
// })

// fs.appendFile("Hey.txt" , " mein toh acha hu" , function(err)
// {
//     if (err)
//     {
//         console.error(err);
        
//     }
//     else 
//     {
//         console.log("Done");
//     }
// })

fs.rename("Hello.txt" , "Hey.txt" , function(err)
{
    if (err)
    {
        console.error(err);
    }
    else
    {
        console.log("done");
        
    }
})