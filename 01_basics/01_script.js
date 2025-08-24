var arr = [1, 2, 3, 4];

// Map
// returns the same size array and can be used to minupulate the exusting array

// var newarray = arr.map(val => {
//     return 13;
// });

// console.log(newarray);

// filter 
// use to filter the stuff and can return true of false

var ans = arr.filter(function(val)
    {
        if (val >= 3)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
)
console.log(ans);