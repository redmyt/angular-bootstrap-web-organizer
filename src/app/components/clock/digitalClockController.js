webOrganizerApp.controller('digitalClockController', function() {
    var vm = this;
    vm.test = '!!!';
    
    $(document).ready(function() {
    $('.clicker').click(function() {
        $('.second-hand, .minute-hand, .hour-hand').toggleClass('new');
    });
});
});