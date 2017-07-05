webOrganizerApp.service('calculatorService', function() {

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

    this.implementCalculating = function(mathExpression) {

        a = removeAllSpaces(mathExpression);
        a = separateMathExpression(a);

        console.log(a);
    };

});