
var addServerName = {
  count : 1,
  add : function(block) {
    addServerName.count++;
    var tmpl = templates.make('serverName' , {num :addServerName.count })
    $(block).before(tmpl);
  },
  remove : function(link) {
    addServerName.count--;
    var $row = $(link).closest('.js-servername-row');

    $row.fadeOut(300, function() {
      $row.remove();
      addServerName.updateList();
    });
  },
  updateList : function() {
    for (var i = 0, max = $('.js-servername-row').length; i < max; i++ ){
      var $row = $('.js-servername-row').eq(i),
          num = i+1;

      $row.find('label span').text(num);
      $row.find('input').attr('name', 'server_name_'+ num);
    }
  },
  init : function() {
    $('.js-servername-add').click(function(e) {
      e.preventDefault();
      addServerName.add(this);
    });

    $(document).on('click', '.js-servername-remove', function(e) {
      e.preventDefault();
      addServerName.remove(this);
    });
  }
}

addServerName.init();
