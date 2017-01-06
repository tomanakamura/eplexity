function dataTableInit() {
  // data for servers table
  var dataSet = [
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
  var table = $('#servers').DataTable( {
      data: dataSet,
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
            $(td).html(templates.make('vm', {src : cellData}));
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
    $('#servers').DataTable().search(this.value).draw();
  });

};


// toogling the layout between table and grid
function layoutToggleInit(table) {
  // toggle layout
  var $layoutToggle =  $('.js-layout-toggle'),
      $table = $(table);

  $layoutToggle.click(function() {
    var $this = $(this),
       layout = $this.data('layout');

    $layoutToggle.removeClass('is-active');
    $this.addClass('is-active');
    $table[0].className = $table[0].className.replace(/dataTable--.+/g, 'dataTable--'+layout);

  });
}



$(document).ready(function() {
  dataTableInit();
  layoutToggleInit('#servers');
});
