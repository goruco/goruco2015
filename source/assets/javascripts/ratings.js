var ratings = {};

ratings.fetchRating = function(url, target) {
  $.getJSON(url, {}, function(data) {
    $('li.icon-emoji-happy').text(data['ratings'].happy);
    $('li.icon-emoji-neutral').text(data['ratings'].meh);
    $('li.icon-emoji-sad').text(data['ratings'].unhappy);
  });
};
