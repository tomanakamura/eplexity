//js-dropdown-change class in dropdown parent for setting the clicked dropdown item data-value in input and html in button
var $dropdownInput = $('.js-dropdown-change');

$dropdownInput.on('click', 'a', function(e) {
  e.preventDefault();

  var $this = $(this),
      value = $this.data('value'),
      $parent = $this.closest('.js-dropdown-change'),
      $input = $parent.find('input');

  if ($input.length) {
    $input.val(value).trigger('change');
  }

  $parent.find('.dropdown-toggle').html($this.html());

});