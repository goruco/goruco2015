$(function() {
  $('.js-modal-trigger').on('click', function() {
    console.log('clickin!')
    var $trigger = $(this)
    $trigger.find('.js-modal').addClass('active');

    $trigger.find('.js-modal-content').on('click', function(e) {
      e.stopPropagation();
    });

  });

  $('.js-modal-close').on('click', function(e) {
    closeModal(e)
  });

  $(document).on('keyup', function(e) {
    if (e.which == 27) {
      closeModal(e)
    }
  });

  var closeModal = function(e) {
    e.stopPropagation();
    console.log($('.js-modal').filter('.active'));
    $('.js-modal').filter('.active').removeClass('active');
  }
});
