webOrganizerApp.controller('calculatorController', function() {
    var vm = this;


    vm.removeLastChar = function () {
        var lastEnterStringChar = vm.enterField.length - 1,
            clippedEnterString = vm.enterField.slice(0, lastEnterStringChar);

        vm.enterField = clippedEnterString;
    };
});
