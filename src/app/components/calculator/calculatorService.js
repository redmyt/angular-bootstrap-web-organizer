webOrganizerApp.service('calculatorService', function() {

    // Describe behavior for all math operators which are included to calculator
    var allMathOperators = {
        '+': {
            priority: 1,
            implementation: function(a, b) {
                return a + b;
            },
            isOneArgumentOperator: false
        },
        '-': {
            priority: 1,
            implementation: function(a, b) {
                return a - b;
            },
            isOneArgumentOperator: false
        },
        '*': {
            priority: 2,
            implementation: function(a, b) {
                return a * b;
            },
            isOneArgumentOperator: false
        },
        '/': {
            priority: 2,
            implementation: function(a, b) {
                return a / b;
            },
            isOneArgumentOperator: false
        },
        'pow': {
            priority: 3,
            implementation: function(a, b) {
                return Math.pow(a, b);
            },
            isOneArgumentOperator: false
        },
        'sqrt': {
            priority: 3,
            implementation: function(a) {
                return Math.sqrt(a);
            },
            isOneArgumentOperator: true
        },
        'cos': {
            priority: 4,
            implementation: function(a) {
                return Math.cos(a);
            },
            isOneArgumentOperator: true
        },
        'sin': {
            priority: 4,
            implementation: function(a) {
                return Math.sin(a);
            },
            isOneArgumentOperator: true
        },
        'tan': {
            priority: 4,
            implementation: function(a) {
                return Math.tan(a);
            },
            isOneArgumentOperator: true
        },
        'atan': {
            priority: 4,
            implementation: function(a) {
                return Math.atan(a);
            },
            isOneArgumentOperator: true
        }
    };

    var mathExpression = null,
        mathOperators = [];

    // Remove all unneeded spaces
    var removeAllExpressionSpaces = function() {
        mathExpression = mathExpression.replace(/\s+/g, '');
    };

    // Separate the math expression on numbers and math operators
    var separateMathExpression = function() {

        var filterEmptyElements = function(arrayElement) {
            return arrayElement;
        };

        mathExpression = mathExpression
                         .split(/(\+|\-|\*|\/|sqrt|pow|sin|cos|tan|atan)/)
                         .filter(filterEmptyElements);
    };

    // Verify hasn't user entered something else except operators and numbers
    var mathExpressionValidation = function() {

        var isExpressionValid = true,
            isNumeric = function(n) {
                return ! isNaN(parseFloat(n)) && isFinite(n);
            },
            isOperator = function(o) {
                return o in allMathOperators;
            };

        for (var i = 0; i < mathExpression.length; i++) {

            var currentMathArgument = mathExpression[i];

            if (!isNumeric(currentMathArgument) && 
                !isOperator(currentMathArgument)) {
                
                isExpressionValid = false;
                break;
            }
        }

        return isExpressionValid;
    };

    // Switch the string argument representation to it number representation
    var convertExpressionArgumentToNumbers = function() {

        mathExpression.forEach(function(argument, argumentIndex) {

            var numberArgument = parseFloat(argument);
            if (numberArgument) mathExpression[argumentIndex] = numberArgument;
        });
    };

    // Save all operators which are used by user to variable 
    var getCurrentMathOperators = function() {

        mathExpression.forEach(function(expresssionElement) {

            if (expresssionElement in allMathOperators) {
                mathOperators.push(expresssionElement);
            }
        });
    };

    // Function which sorts the math operators based on their priority
    var sortMathOperators = function(firstOperator, secondOperator) {
        return allMathOperators[secondOperator].priority - allMathOperators[firstOperator].priority;
    };

    // Evaluate an expression which is entered by user
    var calculateCurrentExpression = function() {

        // Variables for saving the current operator parameters
        var currentOperator = null,
            currentOperatorPosition = null,
            isCurrentArgumentAcceptOneArgument = null,
            currentOperationResult = null;


        // Save the current operator type
        var setCurrentOperator = function(operator) {
            currentOperator = operator;
        };

        // Get amount of the operator's arguments
        var setCurrentOperatorArgumentsAmount = function() {
            isCurrentArgumentAcceptOneArgument = allMathOperators[currentOperator].isOneArgumentOperator;
        };

        // Get the position of the certain operator in the math expression array
        var getCurrentOperatorPosition = function() {
            currentOperatorPosition = mathExpression.indexOf(currentOperator);
        };

        // Get and save the current operator arguments
        var getCurrentOperatorArguments = function() {

            if (isCurrentArgumentAcceptOneArgument) {
                currentOperatorArguments.push(mathExpression[currentOperatorPosition + 1]);
            } else {
                currentOperatorArguments.push(mathExpression[currentOperatorPosition - 1]);
                currentOperatorArguments.push(mathExpression[currentOperatorPosition + 1]);
            }
        };

        // Calculate the expression for only one operator and save the result in a certain variable
        var calculateOneArgumentExpression = function() {

            var operatorFunction = allMathOperators[currentOperator].implementation;
            currentOperationResult = operatorFunction.apply(this, currentOperatorArguments);
        };

        // Save result which was being produced after calculation finish instead of a wasted operator
        var updateMathExpression = function() {
            mathExpression[currentOperatorPosition] = currentOperationResult;
        };

        // Remove calculated arguments and evaluated operator from the math expression
        var removeCurrentOperatorArguments = function() {

            if (isCurrentArgumentAcceptOneArgument) {
                mathExpression.splice(currentOperatorPosition + 1, 1);
            } else {
                mathExpression.splice(currentOperatorPosition + 1, 1);
                mathExpression.splice(currentOperatorPosition - 1, 1);
            }
        };

        for (var i = 0; i < mathOperators.length; i++) {

            var currentOperatorArguments = [];
            setCurrentOperator(mathOperators[i]);
            setCurrentOperatorArgumentsAmount();
            getCurrentOperatorPosition();
            getCurrentOperatorArguments();
            calculateOneArgumentExpression();
            updateMathExpression();
            removeCurrentOperatorArguments();
        }
    };

    this.implementationOfCalculator = function(inputMathExpression) {

        mathExpression = inputMathExpression;
        removeAllExpressionSpaces();
        separateMathExpression();
        if (!mathExpressionValidation()) return false;
        convertExpressionArgumentToNumbers();
        getCurrentMathOperators();
        mathOperators.sort(sortMathOperators);
        calculateCurrentExpression();
        mathOperators = [];
        console.log(mathExpression[0]);
        // return mathExpression[0];
    };
});
