1. Line 12 prints `i` which stores the value 3 because it is defined using the keyword `var` which means it can be accessed anywhere in the scope of the function it is defined in which in this case is `discountedPrices`
2. Line 12 prints `discountedPrice` which stores the value 150 because it is defined using the keyword `var` which means it can be accessed anywhere in the scope of the function it is defined in which in this case is `discountedPrices`
3. Line 12 prints `finalPrice` which stores the value 150 because it is defined using the keyword `var` which means it can be accessed anywhere in the scope of the function it is defined in which in this case is `discountedPrices`
4. This function returns the array of discounted prices with values [50,100,150]. The function takes the parameter array  `price` ([100,200,300]) and applies a discount of 50% off and returns those discounted values in the array `discounted`. It successfully does so because the variable discounted is defined with keyword `var` which means it can be accessed anywhere in the scope of the function it is defined in.
5. Line 12 causes an error because it tries to access the variable `i` outside of the previous for loop scope it was originally defined in with keyword `let` at line 6
6. Line 13 causes an error because it tries to access the variable `discountedPrice` outside of the previous for loop scope it was originally defined in with keyword `let` at line 7
7. Line 14 prints `finalPrice` which stores the value 150 because it is defined using the keyword `let` in the scope of the function which means it can be accessed anywhere within the same block it was defined in which in this case is the function `discountedPrices`
8. This function successfully returns the array `discounted` with values [50,100,150]. The function takes the parameter array `price` ([100,200,300]) and applies a discount of 50% off and stores those values in an array `discounted`. Since the array `discounted` is defined with keyword `let` in the scope of the entire function, the function successfully returns `discounted`.
9. Line 11 causes an error because it tries to access the variable i outside of the previous for loop scope it was originally defined in with keyword `let` at line 6
10. Line 12 prints `length` which stores the value 3 because it is defined using the keyword `const` which means it can be accessed anywhere in the block where it was declared which in this case is the function discountPrices. Additionally, the function never attempts to reassign `length`
11. This function returns the `discounted` array with values [ 50, 100, 150 ]. Even though discounted was defined with the keyword `const` in the block scope of the function `discountPrices`, it can still be modified by pushing new values as long as it doesn't get reassigned. Therefore, since the return statement is accessing discounted in the same function block it was defined in it successfully returns `discounted`.
12. A. student.name <br>
    B. student['Grad Year'] <br>
    C. student.greeting() <br>
    D. student['Favorite Teacher'].name <br>
    E. student.courseLoad[0] <br>
13. A. `'3' + 2` = '32' because integers map to their exact string representation and `+` acts as the concatenator operator <br>
    B. `'3' - 2` = 1 because numeric conversion in mathematical functions and expressions happens automatically. <br>
    C. `3 + null` = 3 because null converts to 0 in numeric conversion <br>
    D. `'3' + null` = '3null' because null converts to 'null' in string conversion which is then concatenated with the string '3' <br>
    E. `true + 3` = 4 because true converts to 1 in numeric conversion <br>
    F. `false + null` = 0 because false and null both convert to 0 in numeric conversion <br>
    G. `'3' + undefined` = '3undefined' because undefined converts to its exact string representation in string conversion <br>
    H. `'3' - undefined` = NaN because undefined converts to NaN in numeric conversion <br>
14. A. `'2' > 1` outputs true because string 2 converts to its number value of 2 <br>
    B. `'2' < '12'` outputs false because strings are compared letter by letter and '2' < '1 is false <br>
    C. `2 == '2'` outputs true because the string '2' converts to the number value 2 <br>
    D. `2 === '2'` outputs false because they are of different types <br>
    E. `true == 2` outputs false because true converts to the number value of 1 and 1 != 2<br>
    F. `true ==== Boolean(2)` outputs true because convertng any non-zero value to boolean results in true<br>
15. The `==` operator converts operands of different types to numbers while the `===` operator checks equality without type conversion to check if the operands are also of the same type
16. ['question 16'](part2-question16.js)
17. The function returns the array `[2,4,6]`. When modifyArray is called with the array parameter as [1,2,3] and the callback parameter as `doSomething`, it first creates a constant array `newArr`. Then, for each value in `array`, the for loop calls `doSomething` and multiplies the current array value by 2 and pushes it to `newArr`. After `array` has been iterated through, modifyArray returns `newArr` which should just be the original values of `array` multiplied by 2.
18. ['question 18'](part2-question18.js)
19. 1 <br>
    4 <br>
    3 <br>
    2 <br>

