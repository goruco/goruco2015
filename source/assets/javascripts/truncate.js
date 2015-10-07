$(function() {
  $('.js-truncate').each(function() {
    var $bio = $(this)
    var title = $bio.html()
    var length = $bio.data('truncate')

    if ($bio.text().length > length) {
      var shortTitle = $.trim(title).substring(0, length)
      .split(" ").slice(0, -1).join(" ") + "... <a class='type-truncate-link'>Read More</a>";

      $bio.html(shortTitle)
      $bio.find('a').on('click', function() {
        $bio.html(title)
      });
    }
  })
});
