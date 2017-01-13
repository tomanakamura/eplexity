// templates for servers datatable
var templates = {
    vm  			: '<div class="card__righttop"><img src="images/%src%" alt="" /></div>',
    size			: '<span class="size"><img src="images/icons/%size%.svg" alt="" /> <strong>%size%</strong></span>',
    status			: '<div class="card__lefttop"><span class="status status--%status%">%statusText%</span></div>',
    datacenter		: '<span class="hidden-table">Datacenter:</span> <span class="strong-grid">%dc%</span>',
    switchstatus   	: '<input data-toggle="toggle" data-style="android" data-onstyle="info" type="checkbox" %status%>',	
    spent			: '<div class="row"><div class="col-xs-5">%price%</div>\
						<div class="col-xs-7"><div class="progress">\
						  	<div class="progress-bar progress-bar-default" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">\
						    	<span class="sr-only">50% Complete</span>\
						  	</div>\
						</div></div></div>',
    actions			: '<div class="btn-group">\
			          <span class="btn btn-action dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>\
			          <ul class="dropdown-menu dropdown-menu--secondary">\
			            <li><a href="#">RENAME</a></li>\
			            <li><a href="#">EDIT</a></li>\
			            <li><a href="#">REFRESH</a></li>\
			            <li><a href="#">REMOVE</a></li>\
			          </ul></div>',
    'serverName' : '<div class="row row--flex row--flex-middle mb-2 js-servername-row">\
              <div class="col-xs-11 col-md-6 col-lg-6 col-xl-3">\
                <label>Server <span>%num%</span> Name</label>\
                <input type="text" name="server_name_%num%" class="form-control">\
              </div>\
              <div class="col-xs-1 col-md-6 col-xl-1 pt-2">\
                <a href="#" class="js-servername-remove" title="Remove Server %num% name"><img src="images/icons/del.svg" alt=""/></a>\
              </div>\
            </div>',

  make: function(templateName, data){
          return templates[templateName].replace(/%(\w*)%/g,function(m,key){return data.hasOwnProperty(key)?data[key]:"";});
        }
  };
