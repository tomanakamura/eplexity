function dataTableInit() {
	
	///////////////////////////////////////////////////////////////////
	///////  					Server Table					  /////
	///////////////////////////////////////////////////////////////////
	
  // data for servers table
  var server_dataSet = [
      [ "Server Name", "vmware.png", "54.93.182.207", "x5", "EU (Frankfurt)", "active", ""],
      [ "Server Name", "vmware.png", "54.93.182.207", "x1", "EU (Frankfurt)", "active", ""],
      [ "Server Name", "vmware.png", "54.93.182.207", "x4", "EU (Frankfurt)", "active", ""],
      [ "Server Name", "vmware.png", "54.93.182.207", "x1", "EU (Berlin)", "active", ""],
      [ "Server Name", "vmware.png", "54.93.182.207", "x2", "EU (Frankfurt)", "active", ""],
      [ "Server Name", "vmware.png", "54.93.182.207", "x4", "EU (Berlin)", "waiting", ""],
      [ "Server Name", "vmware.png", "54.93.182.207", "x1", "EU (Frankfurt)", "active", ""],
      [ "Server Name", "vmware.png", "54.93.182.207", "x5", "US (New-York)", "onhold", ""]
  ];


  // initialize datatable for servers with cells html customization
  var table_server = $('#table-servers').DataTable( {
      data: server_dataSet,
      autoWidth: false,
      pageLength: 5,
      dom: '<"dataTables_top"<"row"<"col-sm-6"><"col-sm-6"f>>><"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<h3>'+cellData+'</h3>');
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<span>' + cellData + '</span>');
          }
        },
        {
          targets: 3,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('size', {size : cellData}));
          }
        },
        {
          targets: 4,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('datacenter', {dc : cellData}));
          }
        },
        {
          targets: 5,
          createdCell: function (td, cellData, rowData, row, col) {
            if (cellData === 'onhold') {
              statusText = 'ON HOLD';
              $(td).closest('tr').addClass('card--onhold')
            } else {
              statusText = cellData;
            }

            $(td).html(templates.make('status', {status : cellData, statusText : statusText}));
          }
        },
        {
          targets: 6,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('actions'));
          }
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Name", width: '25%' },
          { title: "VM" },
          { className: "text-right-table", title: "IP Address" },
          { className: "text-right-table", title: "Size", width : "80px" },
          { title: "Datacenter" },
          { title: "Status" },
          { className: 'text-xs-center hidden-grid', title: "Actions" }
      ]
  } );

  // bind filter dropdown changing  and datatable view
  $('.js-server-dt-filter').on('change', function() {
    $('#table-servers').DataTable().search(this.value).draw();
  });
  
  
  ///////////////////////////////////////////////////////////////////
  ///////  					Product Table						/////
  ///////////////////////////////////////////////////////////////////
  
  // data for product table
  var product_dataSet = [
      [ "CheckPoint Firewall", "CheckpointFW - IPS and many other...", "30 Minutes", "Networking", "$50", "checked", ""],
      [ "CheckPoint Firewall", "CheckpointFW - IPS and many other...", "30 Minutes", "Networking", "$50", "checked", ""],
      [ "CheckPoint Firewall", "CheckpointFW - IPS and many other...", "30 Minutes", "Networking", "$50", "checked", ""],
      [ "CheckPoint Firewall", "CheckpointFW - IPS and many other...", "30 Minutes", "Networking", "$50", "checked", ""],
      [ "CheckPoint Firewall", "CheckpointFW - IPS and many other...", "30 Minutes", "Networking", "$50", "checked", ""],
      [ "CheckPoint Firewall", "CheckpointFW - IPS and many other...", "30 Minutes", "Networking", "$50", "checked", ""],
      [ "CheckPoint Firewall", "CheckpointFW - IPS and many other...", "30 Minutes", "Networking", "$50", "checked", ""],
      [ "CheckPoint Firewall", "CheckpointFW - IPS and many other...", "30 Minutes", "Networking", "$50", "", ""]
   ];  
  
  var table_product = $('#table-products').DataTable( {
      data: product_dataSet,
      autoWidth: false,
      pageLength: 5,
      searching: false,
      dom: '<"dataTables_top"<"row"<"col-sm-6"><"col-sm-6"f>>><"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<h3>'+cellData+'</h3>');
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
        	  $(td).html('<span>' + cellData + '</span>');
          }
        },
        {
          targets: 2,
          createdCell: function (td, cellData, rowData, row, col) {
        	  $(td).html('<span>' + cellData + '</span>');
          }
        },
        {
            targets: 3,
            createdCell: function (td, cellData, rowData, row, col) {
          	  $(td).html('<span>' + cellData + '</span>');
            }
         },
         {
             targets: 4,
             createdCell: function (td, cellData, rowData, row, col) {
            	 $(td).html('<strong>' + cellData + '</strong>/Month');
             }
         },
         {
             targets: 5,
             createdCell: function (td, cellData, rowData, row, col) {
            	 $(td).html(templates.make('switchstatus', {status : cellData}));
             }
         },        
         {
        	 targets: 6,
    	 	 createdCell: function (td, cellData, rowData, row, col) {
    	 		 $(td).html(templates.make('actions'));
    	 	  }
          }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Product Name", width: '25%' },
          { className: "text-left", title: "Description" },
          { className: "text-center", title: "Depl.Time" },
          { className: "text-left", title: "Target Marketing" },
          { className: "text-center", title: "Product Price" },
          { className: "text-center", title: "Status" },
          { className: 'text-xs-center hidden-grid', title: "Actions" }
      ],
  
  	  // Toggle button initialize in callback function
  	  "createdRow": function ( row, data, index ) {

  		  	var toggleBtn = $('td', row).eq(5).children('input[data-toggle="toggle"]');
  		  	toggleBtn.bootstrapToggle();
	  	    toggleBtn.change(function(){
	  	    	
	  	    	if($(this).prop('checked')){
	  	    		$(this).parents('tr').removeClass('inactive');
	  	    	} else {
	  	    		$(this).parents('tr').addClass('inactive');
	  	    	}
	  	    	
	  	    });	
  	  }
  } );    
  
  
  
  
  ///////////////////////////////////////////////////////////////////
  ///////  					Cloud Table							/////
  ///////////////////////////////////////////////////////////////////
  
  // data for cloud table
  var cloud_dataSet = [
      [ "AWS DC Agent - US - East1", "vmware", "us-east-1", ""],
      [ "AWS DC Agent - US - East1", "vmware", "us-east-1", ""],
      [ "AWS DC Agent - US - East1", "vmware", "us-east-1", ""],
      [ "AWS DC Agent - US - East1", "vmware", "us-east-1", ""],
      [ "AWS DC Agent - US - East1", "vmware", "us-east-1", ""],
      [ "AWS DC Agent - US - East1", "vmware", "us-east-1", ""],
      [ "AWS DC Agent - US - East1", "vmware", "us-east-1", ""]
  ];  
  
  var table_cloud = $('#table-clouds').DataTable( {
      data: cloud_dataSet,
      autoWidth: false,
      pageLength: 5,
      searching: false,
      dom: '<"dataTables_top"<"row"<"col-sm-6"><"col-sm-6"f>>><"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<h3>'+cellData+'</h3>');
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
        	  $(td).html('<span>' + cellData + '</span>');
          }
        },
        {
          targets: 2,
          createdCell: function (td, cellData, rowData, row, col) {
        	  $(td).html('<span>' + cellData + '</span>');
          }
        },
        {
          targets: 3,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('actions'));
          }
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Cloud Name", width: '25%' },
          { title: "VM" },
          { className: "text-center", title: "Region" },
          { className: 'text-xs-center hidden-grid', title: "Actions" }
      ]
  } );  

  ///////////////////////////////////////////////////////////////////
  ///////  					Image Table							/////
  ///////////////////////////////////////////////////////////////////
  
  // data for cloud table
  var image_dataSet = [
      [ "Windows Server 2012", "4GB", "12/01/2016", "Windows Golden Image for server Deploys", "1.x", "vmware", ""],
      [ "Windows Server 2012", "4GB", "12/01/2016", "Windows Golden Image for server Deploys", "1.x", "vmware", ""],
      [ "Windows Server 2012", "4GB", "12/01/2016", "Windows Golden Image for server Deploys", "1.x", "vmware", ""],
      [ "Windows Server 2012", "4GB", "12/01/2016", "Windows Golden Image for server Deploys", "1.x", "vmware", ""],
      [ "Windows Server 2012", "4GB", "12/01/2016", "Windows Golden Image for server Deploys", "1.x", "vmware", ""],
      [ "Windows Server 2012", "4GB", "12/01/2016", "Windows Golden Image for server Deploys", "1.x", "vmware", ""],
      [ "Windows Server 2012", "4GB", "12/01/2016", "Windows Golden Image for server Deploys", "1.x", "vmware", ""],
      [ "Windows Server 2012", "4GB", "12/01/2016", "Windows Golden Image for server Deploys", "1.x", "vmware", ""]
   ];  
  
  var table_image = $('#table-images').DataTable( {
      data: image_dataSet,
      autoWidth: false,
      pageLength: 5,
      searching: false,
      dom: '<"dataTables_top"<"row"<"col-sm-6"><"col-sm-6"f>>><"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<h3>'+cellData+'</h3>');
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
        	  $(td).html('<span>' + cellData + '</span>');
          }
        },
        {
          targets: 2,
          createdCell: function (td, cellData, rowData, row, col) {
        	  $(td).html('<span>' + cellData + '</span>');
          }
        },
        {
            targets: 3,
            createdCell: function (td, cellData, rowData, row, col) {
          	  $(td).html('<span>' + cellData + '</span>');
            }
         },
         {
             targets: 4,
             createdCell: function (td, cellData, rowData, row, col) {
            	 $(td).html('<span>' + cellData + '</span>');
             }
         },
         {
             targets: 5,
             createdCell: function (td, cellData, rowData, row, col) {
            	 $(td).html('<span>' + cellData + '</span>');
             }
         },        
         {
        	 targets: 6,
    	 	 createdCell: function (td, cellData, rowData, row, col) {
    	 		 $(td).html(templates.make('actions'));
    	 	  }
          }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Image Name", width: '25%' },
          { className: "text-center", title: "Size" },
          { className: "text-center", title: "Uploaded" },
          { className: "text-left", title: "Image Description" },
          { className: "text-center", title: "Ver." },
          { className: "text-center", title: "Cloud" },
          { className: 'text-xs-center hidden-grid', title: "Actions" }
      ]
  } );  
  
  ///////////////////////////////////////////////////////////////////
  ///////  					Organization Table					/////
  ///////////////////////////////////////////////////////////////////
  
  // data for organization table
  var organization_dataSet = [
      [ "Bittor", "9", "9", "9", "9", "3500.00", "1232.00", ""],
      [ "Bittor", "9", "9", "9", "9", "3500.00", "1232.00", ""],
      [ "Bittor", "9", "9", "9", "9", "3500.00", "1232.00", ""],
      [ "Bittor", "9", "9", "9", "9", "3500.00", "1232.00", ""],
      [ "Bittor", "9", "9", "9", "9", "3500.00", "1232.00", ""],
      [ "Bittor", "9", "9", "9", "9", "3500.00", "1232.00", ""],
      [ "Bittor", "9", "9", "9", "9", "3500.00", "1232.00", ""],
      [ "Bittor", "9", "9", "9", "9", "3500.00", "1232.00", ""],
      [ "Bittor", "9", "9", "9", "9", "3500.00", "1232.00", ""]
   ];  
  
  var table_organization = $('#table-organizations').DataTable( {
      data: organization_dataSet,
      autoWidth: false,
      pageLength: 5,
      searching: false,
      dom: '<"dataTables_top"<"row"<"col-sm-6"><"col-sm-6"f>>><"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<h3>'+cellData+'</h3>');
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
        	  $(td).html('<span>' + cellData + '</span>');
          }
        },
        {
          targets: 2,
          createdCell: function (td, cellData, rowData, row, col) {
        	  $(td).html('<span>' + cellData + '</span>');
          }
        },
        {
            targets: 3,
            createdCell: function (td, cellData, rowData, row, col) {
          	  $(td).html('<span>' + cellData + '</span>');
            }
         },
         {
             targets: 4,
             createdCell: function (td, cellData, rowData, row, col) {
            	 $(td).html('<strong>' + cellData + '</strong>/Month');
             }
         },
         {
             targets: 5,
             createdCell: function (td, cellData, rowData, row, col) {
            	 $(td).html('<span>' + cellData + '</span>');
             }
         }, 
         {
             targets: 6,
             createdCell: function (td, cellData, rowData, row, col) {
            	 $(td).html(templates.make('spent', {price : cellData}));
             }
         },          
         {
        	 targets: 7,
    	 	 createdCell: function (td, cellData, rowData, row, col) {
    	 		 $(td).html(templates.make('actions'));
    	 	  }
          }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Name", width: '25%' },
          { className: "text-center", title: "Clouds" },
          { className: "text-center", title: "Servers" },
          { className: "text-center", title: "vCPU" },
          { className: "text-center", title: "vRAM" },
          { className: "text-center", title: "Mly Budget,$" },
          { className: "text-center", title: "Spent,$" },
          { className: 'text-xs-center hidden-grid', title: "Actions" }
      ]
  } );      
  
  ///////////////////////////////////////////////////////////////////
  ///////  					Providers Table					    /////
  ///////////////////////////////////////////////////////////////////
  
  // data for provider table
  var provider_dataSet = [
      [ "#1 Provider Name", "Provider Adminstrator", "5", "5", "99", ""],
      [ "#1 Provider Name", "Provider Adminstrator", "5", "5", "99", ""],
      [ "#1 Provider Name", "Provider Adminstrator", "5", "5", "99", ""],
      [ "#1 Provider Name", "Provider Adminstrator", "5", "5", "99", ""],
      [ "#1 Provider Name", "Provider Adminstrator", "5", "5", "99", ""],
      [ "#1 Provider Name", "Provider Adminstrator", "5", "5", "99", ""],
      [ "#1 Provider Name", "Provider Adminstrator", "5", "5", "99", ""],
      [ "#1 Provider Name", "Provider Adminstrator", "5", "5", "99", ""],
      [ "#1 Provider Name", "Provider Adminstrator", "5", "5", "99", ""]
   ];  
  
  var table_provider = $('#table-providers').DataTable( {
      data: provider_dataSet,
      autoWidth: false,
      pageLength: 5,
      searching: false,
      dom: '<"dataTables_top"<"row"<"col-sm-6"><"col-sm-6"f>>><"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<h3>'+cellData+'</h3>');
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
        	  $(td).html('<span>' + cellData + '</span>');
          }
        },
        {
          targets: 2,
          createdCell: function (td, cellData, rowData, row, col) {
        	  $(td).html('<span>' + cellData + '</span>');
          }
        },
        {
            targets: 3,
            createdCell: function (td, cellData, rowData, row, col) {
          	  $(td).html('<span>' + cellData + '</span>');
            }
         },
         {
             targets: 4,
             createdCell: function (td, cellData, rowData, row, col) {
            	 $(td).html('<span>' + cellData + '</span>');
             }
         },         
         {
        	 targets: 5,
    	 	 createdCell: function (td, cellData, rowData, row, col) {
    	 		 $(td).html(templates.make('actions'));
    	 	  }
          }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Provider Name", width: '25%' },
          { className: "text-left", title: "User Role" },
          { className: "text-center", title: "Clouds" },
          { className: "text-center", title: "Servers" },
          { className: "text-center", title: "#License" },
          { className: 'text-xs-center hidden-grid', title: "Actions" }
      ]
  } );  
  
  
  ///////////////////////////////////////////////////////////////////
  ///////  					Marketplace Table					/////
  ///////////////////////////////////////////////////////////////////
  
  // data for marketplace table
  var marketplace_dataSet = [
      [ "Network security solutions", "Services and products that help you secure...", "checked", "220" ],
      [ "Network security solutions", "Services and products that help you secure...", "checked", "220" ],
      [ "Network security solutions", "Services and products that help you secure...", "checked", "220" ],
      [ "Network security solutions", "Services and products that help you secure...", "checked", "220" ],
      [ "Network security solutions", "Services and products that help you secure...", "checked", "220" ],
      [ "Network security solutions", "Services and products that help you secure...", "checked", "220" ],
      [ "Network security solutions", "Services and products that help you secure...", "checked", "220" ],
      [ "Network security solutions", "Services and products that help you secure...", "checked", "220" ],
      [ "Network security solutions", "Services and products that help you secure...", "checked", "220" ]
   ];  
  
  var table_marketplace = $('#table-marketplaces').DataTable( {
      data: marketplace_dataSet,
      autoWidth: false,
      pageLength: 5,
      searching: false,
      dom: '<"dataTables_top"<"row"<"col-sm-6"><"col-sm-6"f>>><"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<h3>'+cellData+'</h3>');
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
        	  $(td).html('<span>' + cellData + '</span>');
          }
        },
        {
            targets: 2,
            createdCell: function (td, cellData, rowData, row, col) {
           	 	$(td).html(templates.make('switchstatus', {status : cellData}));
            }
         },        
         {
        	 targets: 3,
    	 	 createdCell: function (td, cellData, rowData, row, col) {
    	 		 $(td).html('<span>' + cellData + '</span>' + '<a href="#" class="view-all">View all</a>');
    	 	 }
          }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Catalog Name", width: '25%' },
          { className: "text-left", title: "Catalog Description" },
          { className: "text-center", title: "Status" },
          { className: "text-center", title: "Catalog Items" },
      ],
  
  	  // Toggle button initialize in callback function
  	  "createdRow": function ( row, data, index ) {

  		  	var toggleBtn = $('td', row).eq(2).children('input[data-toggle="toggle"]');
  		  	toggleBtn.bootstrapToggle();
	  	    toggleBtn.change(function(){
	  	    	
	  	    	if($(this).prop('checked')){
	  	    		$(this).parents('tr').removeClass('inactive');
	  	    	} else {
	  	    		$(this).parents('tr').addClass('inactive');
	  	    	}
	  	    	
	  	    });	
  	  }
  } );        
  
};

$(document).ready(function() {
	
	dataTableInit();
	
});