webOrganizerApp.controller('calculatorController', ['calculatorService', function(calculatorService) {

    var vm = this;

    vm.enterField = '';
    vm.isExpressionCorrect = true;

    vm.setRandomNumber = function() {
        // debugger
        var min = parseFloat(vm.minRandomNumber),
            max = parseFloat(vm.maxRandomNumber),
            randomNumber = Math.floor(min + Math.random() * (max + 1 - min));

        vm.enterNumericSymbol(randomNumber);
    };

    vm.cleanEnterField = function() {
        vm.enterField = '';
    };

    vm.removeLastChar = function() {
        var lastEnterStringChar = vm.enterField.length - 1,
            clippedEnterString = vm.enterField.slice(0, lastEnterStringChar);

        vm.enterField = clippedEnterString;
    };

    vm.enterNumericSymbol = function(numericSymbol) {
        vm.enterField += numericSymbol;
    };

    vm.enterOperatorSymbol = function(operatorSymbol, isOneArgumentOperator) {

        if (isOneArgumentOperator) {
            vm.enterField += operatorSymbol + " ";
        } else {
            vm.enterField += " " + operatorSymbol + " ";
        }
    };

    vm.implementCalculating = function() {
        var mathExpression = vm.enterField || '';
        vm.result = calculatorService.implementationOfCalculator(mathExpression);
        vm.enterField = (vm.result || vm.result === 0) ? vm.result : vm.enterField;
        vm.isExpressionCorrect = Boolean(vm.result);
    };
}]);
