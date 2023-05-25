// Fade-in effect on page load
$(document).ready(function() {
  $('body').addClass('fade-in');
});

// Fade-out effect when clicking a link
$('a').on('click', function(event) {
  event.preventDefault();
  var link = this.href;
  setTimeout(function() {window.location.href = link;}, 1000);
});

// Highlight function on hover
$('li').hover(
  function() {
    $(this).addClass('highlight');
  }, function() {
    $(this).removeClass('highlight');
  }
);

$(document).ready(function() {
  $('.list-item').click(function() {
    var listItem = $(this).text();
    if (!$(this).hasClass('added')) {
      $('#sidebar').append('<div class="sidebar-item">' + listItem + '</div>');
      $(this).addClass('added');
      updateSidebarCount();
      

    }
  });

  $(document).on('click', '.sidebar-item', function() {
    $(this).remove();
    var listItem = $(this).text();
    $('.list-item').each(function() {
      if ($(this).text() == listItem) {
        $(this).removeClass('added');
        updateSidebarCount();
      }
    });
  });
});

function updateSidebarCount() {
  var sidebarCount = $('#sidebar').children().length;
  $('#sidebar-count').text('Satisfied:' + sidebarCount);
}
