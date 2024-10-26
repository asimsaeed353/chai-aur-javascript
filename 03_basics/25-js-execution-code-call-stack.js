// +++++++++++++++++++++++++++++ JavaScript Execution Context ++++++++++++++++++++++++++++++
/* 
    This concept deals with first part of how code in JavaScript is executed.

    * When a JS code file is executed,
        -> a Global Execution Context is made and this is referred to or stored in 'this'.
        -> 'this' object is different in different environments e.g. Node, Deeno.
        -> 'this' object in browser holds 'Window'
        -> Keynote: 'Global Execution Context' will always be there. No matter if it's empty but it will be there always.
        -> JavaScript is 'Single Threaded.'

    * Types of Exectuion Context
        1. Global Execution Context
        2. Function Execution Context
        3. Eval Execution Context 

    * How JavaScript file is executed 
        1. Memory Creation Phase / Creation Phase
            --> The memory for your variables is allocated.

        2. Execution Phase 
            --> Functions are executed.

    * How a JavaScript file runs?
        -> Let's see a code 

        ```js

            let var1 = 10;
            let var2 = 5;

            function addNum(num1, num2){
            let total = num1 + num2;
            return total
            }

            let result1 = addNum(var1, var2);
            let result2 = addNum(12, 6);

        ```
            --> (1) Global Execution Context is made and stored in 'this'
            --> (2) Memory Phase 
                ---> memory for variables is allocated 
                ---> var1       <-     undefined
                ---> var2       <-     undefined
                ---> addNum     <-     definition is stored
                ---> result1    <-     undefined
                ---> result2    <-     undefined
            --> (3) Execution Phase
                ---> values are assigned to variables and functions are executed
                ---> var1       <-     10
                ---> var2       <-     5
                ---> addNum     <-     makes it's own execution context called 'New Execution Context' which is made up of
                                        ___________________________________
                                        |                                  |
                                        |  New Variable Environment        |
                                        |             +                    |
                                        |        Execution Thread          |
                                        |__________________________________|

                                        New Variable Environmet -> variables are stored separately from global context
                                        Execution Thread        -> to perform various calculations
                                        ----> In New Execution Context, both phases i.e. Memory Phase and Execution phase will be made from scratch.

                                            (1) New Executional Context is created (for addNum())
                                            (2) Memory Phase 
                                                val1      ->  undefined
                                                val2      ->  undefined
                                                result    ->  undefined
                                            (3) Execution Phase 
                                                num1      ->  10
                                                num2      ->  5
                                                result    ->  15
                ---> result1 = 15 <-- return -- result returned to Global Execution Context
                                            
                                            ** New Executional Context is delted and control is returned back to Global Execution Context

                ---> result2 = 18     <-- return -- Another New Execution Context is created

*/

// +++++++++++++++++++++++++++++ JavaScript Call Stack ++++++++++++++++++++++++++++++
/*
browser > inspect > Sources
create a snippet with few functions and visually experience the call stack.
*/
