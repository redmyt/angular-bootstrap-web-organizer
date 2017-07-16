webOrganizerApp.controller("funClockController", function () {
    var vm = this;
    vm.text = "!!!";
    vm.hourHand = document.querySelector(".hour-hand");
    vm.minuteHand = document.querySelector(".minute-hand");
    vm.secondHand = document.querySelector(".second-hand");
    vm.toogle = true;
    
    //Stop Clock - toggle class to .new
    vm.stopClock = function () {
        if (vm.toogle == true) {
            vm.hourHand.classList.add("new");
            vm.minuteHand.classList.add("new");
            vm.secondHand.classList.add("new");
            vm.toogle = false;
        }
        else {
            vm.hourHand.classList.remove("new");
            vm.minuteHand.classList.remove("new");
            vm.secondHand.classList.remove("new");
            vm.toogle = true;
        }
    };
});