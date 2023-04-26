1. The bug was that in the calculateSum() function, it was given num1 and num2 as 2 string parameters and thus `num1 + num2` resulted in string concatentation instead of numerical addition. 
2. I fixed this bug by casting num1 and num2 to Number data types so that `num1 + num2` would result in number addition instead of string concatenation and return the accurate sum. [fix screenshot](fix.png)
