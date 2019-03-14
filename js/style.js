document.addEventListener("DOMContentLoaded", function() {

  $('#bookHome').fullCalendar({
    selectable: true,
    header: {
      left: 'prev',
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