webOrganizerApp.service('calculatorService', function() {

    var allMathOperators = {
        '+': {
            priority: 1,
            // implementation: 
        },
        '-': {
            priority: 1,
            // implementation: 
        },
        '*': {
            priority: 2,
            // implementation: 
        },
        '/': {
            priority: 2,
            // implementation: 
        },
        'pow': {
            priority: 3,
            // implementation: 
        },
        'sqrt': {
            priority: 3,
            // implementation: 
        },
        'cos': {
            priority: 4,
            // implementation: 
        },
        'sin': {
            priority: 4,
            // implementation: 
        },
        'tan': {
            priority: 4,
            // implementation: 
        },
        'ctg': {
            priority: 4,
            // implementation: 
        }
    };

    var removeAllSpaces = function(inputString) {
        var spacesFreeString = inputString.replace(/\s+/g, '');
        return  spacesFreeString;
    };

    var separateMathExpression = function(mathExpression) {

        var filterEmptyElements = function(arrayElement) {
            return arrayElement;
        };

        return mathExpression.split(/(\+|\-|\*|\/|sqrt|pow|sin|cos|tan|ctg)/)
                             .filter(filterEmptyElements);
    };

    var mathExpressionValidation = function(separatedMathExpression) {

        var isExpressionValid = true,
            isNumeric = function(n) {
                return ! isNaN(parseFloat(n)) && isFinite(n);
            },
            isOperator = function(o) {
                return o in allMathOperators;
            };

        for (var i = 0; i < separatedMathExpression.length; i++) {

            var currentMathArgument = separatedMathExpression[i];

            if (!isNumeric(currentMathArgument) && !isOperator(currentMathArgument)) {
                isExpressionValid = false;
                break;
            }
        }

        return isExpressionValid;
    };

    this.implementCalculating = function(mathExpression) {

        var spaceFreeMathExpression = removeAllSpaces(mathExpression),
            separatedMathExpression = separateMathExpression(spaceFreeMathExpression);

        if (!mathExpressionValidation(separatedMathExpression)) return false;

        console.log(a);
    };

});