
// Add Server 
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

// Add Nic Type
var addNicType = {
	  count : 1,
	  add : function(block) {
		  addNicType.count++;
		  var tmpl = templates.make('nicType' , {num :addNicType.count })
		  $(block).before(tmpl);
		  
		  customSelectInit();
	  },
	  remove : function(link) {
		  addNicType.count--;
		  var $nic_type = $(link).closest('.nic-type');
	
		  $nic_type.fadeOut(300, function() {
			  $nic_type.remove();
	      	  //addNicType.updateList();
		  });
	  },
	  updateList : function() {

	  },
	  init : function() {
		  $('.add-nic').click(function(e) {
			  e.preventDefault();
		      addNicType.add(this);
		  });
	
		  $(document).on('click', '.remove-nic', function(e) {
			  e.preventDefault();
			  addNicType.remove(this);
		  });
	  }
}

//Add Storage
var addStorage = {
	  count : 1,
	  add : function(block) {
		  addStorage.count++;
		  var tmpl = templates.make('storage' , {num : addStorage.count })
		  $(block).before(tmpl);
		  
		  customSelectInit();
	  },
	  remove : function(link) {
		  addStorage.count--;
		  var $storage = $(link).closest('.storage');
	
		  $storage.fadeOut(300, function() {
			  $storage.remove();
	      	  //addStorage.updateList();
		  });
	  },
	  updateList : function() {

	  },
	  init : function() {
		  $('.add-storage').click(function(e) {
			  e.preventDefault();
			  addStorage.add(this);
		  });
	
		  $(document).on('click', '.remove-storage', function(e) {
			  e.preventDefault();
			  addStorage.remove(this);
		  });
	  }
}

//Add Gateway Virtual Network
var addGatewayVN = {
	  count : 1,
	  add : function(block) {
		  addGatewayVN.count++;
		  var tmpl = templates.make('gateway-vn' , {num : addGatewayVN.count })
		  $(block).before(tmpl);
		  
		  customSelectInit();
	  },
	  remove : function(link) {
		  addGatewayVN.count--;
		  var $gateway_vn = $(link).closest('.gateway-vn');
	
		  $gateway_vn.fadeOut(300, function() {
			  $gateway_vn.remove();
	      	  //addStorage.updateList();
		  });
	  },
	  updateList : function() {

	  },
	  init : function() {
		  $('.add-gateway-vn').click(function(e) {
			  e.preventDefault();
			  addGatewayVN.add(this);
		  });
	
		  $(document).on('click', '.remove-gateway-vn', function(e) {
			  e.preventDefault();
			  addGatewayVN.remove(this);
		  });
	  }
}

//Add Security Policy
var addSecurityPolicy = {
	  count : 1,
	  add : function(block) {
		  addSecurityPolicy.count++;
		  var tmpl = templates.make('security-policy' , {num : addSecurityPolicy.count })
		  $(block).before(tmpl);
		  
		  customSelectInit();
	  },
	  remove : function(link) {
		  addSecurityPolicy.count--;
		  var $security_policy = $(link).closest('.security-policy');
	
		  $security_policy.fadeOut(300, function() {
			  $security_policy.remove();
		  });
	  },
	  updateList : function() {

	  },
	  init : function() {
		  $('.add-security-policy').click(function(e) {
			  e.preventDefault();
			  addSecurityPolicy.add(this);
		  });
	
		  $(document).on('click', '.remove-security-policy', function(e) {
			  e.preventDefault();
			  addSecurityPolicy.remove(this);
		  });
	  }
}

//Add Policy
var addPolicy = {
	  count : 1,
	  add : function(block) {
		  addPolicy.count++;
		  var tmpl = templates.make('policy' , {num : addPolicy.count })
		  $(block).before(tmpl);
		  
		  customSelectInit();
	  },
	  remove : function(link) {
		  addPolicy.count--;
		  var $policy = $(link).closest('.policy');
	
		  $policy.fadeOut(300, function() {
			  $policy.remove();
		  });
	  },
	  updateList : function() {

	  },
	  init : function() {
		  $('.add-policy').click(function(e) {
			  e.preventDefault();
			  addPolicy.add(this);
		  });
	
		  $(document).on('click', '.remove-policy', function(e) {
			  e.preventDefault();
			  addPolicy.remove(this);
		  });
	  }
}

addServerName.init();
addNicType.init();
addStorage.init();
addGatewayVN.init();
addSecurityPolicy.init();
addPolicy.init();