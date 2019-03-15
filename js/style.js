document.addEventListener("DOMContentLoaded", function() {

  $('#select-date').fullCalendar({
    themeSystem: 'bootstrap4',
    selectable: true,
    customButtons: {
    myCustomButton: {
      text: 'custom!',
      click: function() {
          alert('clicked the custom button!');
        },
      }
    },
    header: {
      left: 'prev myCustomButton',
      center: 'title',
      right: 'next'
    },
    
    dayClick: function(date) {
      alert('clicked ' + date.format());
    },
    select: function(startDate, endDate) {
      alert('selected ' + startDate.format() + ' to ' + endDate.format());
    }
  });

});