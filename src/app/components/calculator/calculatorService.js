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

    var mathExpression = null;

    // Remove all unneeded spaces
    var removeAllExpressionSpaces = function() {
        mathExpression = mathExpression.replace(/\s+/g, '');
    };

    // Separate math expression on numbers and math operators
    var separateMathExpression = function() {

        var filterEmptyElements = function(arrayElement) {
            return arrayElement;
        };

        mathExpression = mathExpression
                         .split(/(\+|\-|\*|\/|sqrt|pow|sin|cos|tan|ctg)/)
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

    // Switch string argument representation to it number representation
    var convertExpressionArgumentToNumbers = function() {

        mathExpression.forEach(function(argument, argumentIndex) {

            var numberArgument = parseFloat(argument);

            if (numberArgument) {
                mathExpression[argumentIndex] = numberArgument;
            }

        });
    };

// -----------------------------------------------------------------------
TODO

    var getCurrentMathOperators = function(mathExpression) {

        var choosedOperators = [];

        for (var i = 0; i < mathExpression.length; i++) {
            if (mathExpression[i] in allMathOperators) {
                choosedOperators.push(mathExpression[i]);
            }
        }

        return choosedOperators;
    };

    var sortMathOperators = function(firstOperator, secondOperator) {
        return allMathOperators[secondOperator].priority - allMathOperators[firstOperator].priority;
    };

    var getOperatorPosition = function(mathExpression, opertor) {
        return mathExpression.indexOf(opertor);
    };

    var getOperatorsArguments = function(mathExpression, operatorPosition, isOneArgumentOperator) {

        var operatorArguments = [];

        if (isOneArgumentOperator) {
            operatorArguments.push(mathExpression[operatorPosition + 1]);
        } else {
            operatorArguments.push(mathExpression[operatorPosition - 1]);
            operatorArguments.push(mathExpression[operatorPosition + 1]);
        }

        return operatorArguments;
    };

    var updateMathExpression = function(mathExpression, result, operatorPosition, isOneArgumentOperator) {

        // var updatedExpression;
        // debugger
        mathExpression[operatorPosition] = result.toString();
        if (isOneArgumentOperator) {
            mathExpression.splice(operatorPosition + 1, 1);
        } else {
            mathExpression.splice(operatorPosition + 1, 1);
            mathExpression.splice(operatorPosition - 1, 1);
        }
        return mathExpression;
    };

    var calculating = function(operator, operatorArguments) {
        var firstArgument = operatorArguments[0],
            secondArgument = operatorArguments[1],
            calculatingFunction = allMathOperators[operator].implementation;

        var result = secondArgument ? calculatingFunction(firstArgument, secondArgument) : calculatingFunction(firstArgument);
        // var result = secondArgument ? calculatingFunction(firstOperator, secondOperator) : calculatingFunction(firstOperator);
        return result;
    };

    var implementCalculating = function(mathExpression, mathOperators) {

        var expresssion = mathExpression;

        for (var i = 0; i < mathOperators.length; i++) {

            currentOpe = mathOperators[i];

            var a = getOperatorPosition(expresssion, currentOpe);
            var b = getOperatorsArguments(expresssion, a, allMathOperators[currentOpe].isOneArgumentOperator);

            // console.log(expresssion);
            var result = calculating(currentOpe, b);
            var gg = updateMathExpression(expresssion, result, a, allMathOperators[currentOpe].isOneArgumentOperator);
            // debugger;

            expresssion = gg;
            console.log(expresssion);
            
        }
    };

    this.implementationOfCalculator = function(inputMathExpression) {

        mathExpression = inputMathExpression;
        removeAllExpressionSpaces();
        separateMathExpression();
        if (!mathExpressionValidation()) return false;
        convertExpressionArgumentToNumbers();
        console.log(mathExpression);

        // var currentMathOperators = getCurrentMathOperators(separatedMathExpression);
        // currentMathOperators.sort(sortMathOperators);
        // implementCalculating(separatedMathExpression, currentMathOperators);
    };

});
