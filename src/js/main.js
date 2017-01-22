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

// Switch Button
function switchButton(){
	
	$('input[data-toggle="toggle"]').bootstrapToggle();
	
    $('input[data-toggle="toggle"]').change(function() {
    	
    	if($(this).prop('checked')){
    		$(this).parents('tr').removeClass('inactive');
    	} else {
    		$(this).parents('tr').addClass('inactive');
    	}
    	
    });	
}

//Multi Step Form
function multiStepForm(){
	
	// Next Action
	$('#btn-next').on('click', function(){
		
		var current_step 	= $('#multistep-panel .step:visible');
		var current_step_id = current_step.data('step');
		var next_step_id	= parseInt(current_step_id) + 1;
		
		
		
		if($(this).hasClass('incomplete')){
			
			current_step.hide();
			
			if($('#btn-prev').hasClass('cancel-step')){
				
				$('#btn-prev').removeClass('cancel-step modal-close').text('back');
				$('.video-panel').removeClass('hidden');
				
			}
			
			$('#multistep-panel .step[data-step="' + next_step_id + '"]').removeClass('hidden').fadeIn();
			
			if(next_step_id == $('#multistep-panel .step').size()){
				
				$(this).removeClass('incomplete').text('finish').addClass('modal-close');
				
			}
		
		} else {
			
			$('.modal').modal('hide');
			$('#multistep-panel .step').hide();
			$('#multistep-panel .step[data-step="1"]').show();
			
		}
		
	});
	
	// Prev Action
	$('#btn-prev').on('click', function(){
		
		var current_step 	= $('#multistep-panel .step:visible');
		var current_step_id = current_step.data('step');
		var prev_step_id	= parseInt(current_step_id) - 1;
				
		if(!$(this).hasClass('cancel-step')){
			
			current_step.hide();
			
			if(!$('#btn-next').hasClass('incomplete')){
				
				$('#btn-next').addClass('incomplete').removeClass('modal-close').text('next');
				
			}
			
			$('#multistep-panel .step[data-step="' + prev_step_id + '"]').removeClass('hidden').fadeIn();
			
			if(prev_step_id == 1){
				
				$(this).addClass('cancel-step modal-close').text('cancel');
				$('.video-panel').addClass('hidden');
				
			}
		
		} else {
			
			$('.modal').modal('hide');
			$('#multistep-panel .step').hide();
			$('#multistep-panel .step[data-step="1"]').show();
			
		}		
		
	});
	
	
}

// Custom Selectbox
function customSelectInit(){
	
	$('select').each(function(){
		
		var custom_class = $(this).data('select-style');
		
		$(this).select2({
			minimumResultsForSearch: Infinity,
			containerCssClass: custom_class,
			tags: true,
			tokenSeparators: [',', ' '],
			templateResult: formatSelectItem,
			templateSelection: formatSelectItem
		});
		
	});
	
}
function formatSelectItem(data) {
	var element = $(data.element);
	
	if(element.data('icon')){
		
		console.log(element.data('icon'));
		var new_data = $(
				 			'<span><img src="' + element.data('icon') + '" class="select-icon" /> ' + data.text + '</span>'
		 				  );
		return new_data;
		
	} else {
		
		return data.text;
	
	}
}
// Video Panel Toggle
function videoPanelToggle(){
	
	// Video panel toggle
	$('#show-video').on('click', function(){
		
		if($('.video-player').css('display') == 'none'){
			$('.video-player').removeClass('hidden');
		} else {
			$('.video-player').addClass('hidden');
		}
		
	});
}

// Dropzone Init
function dropzoneInit(){
	
	$("div#upload-product-panel").dropzone({ 
		url					: "/upload", 
		dictDefaultMessage 	: 'choose image'
	});
	
	$("div#upload-image-panel").dropzone({ 
		url					: "/upload", 
		dictDefaultMessage 	: 'choose image'
	});
	
}

// Chart Init
function chartInit(){
	
	// Pie Chart Init
	$('.pie-chart').easyPieChart({
        barColor: '#0a8dff',
		scaleColor: false,
		lineWidth: 13,
		lineCap: 'square'    
	});
	
	// Bandwidth Chart
    var gateway_bandwidth_private = $('#gateway-bandwidth-private'),
    	gateway_bandwidth_public  = $('#gateway-bandwidth-public');


    // Random data for the charts
    var dataBandWidth = [[1, 0], [2, 50], [3, 150], [4, 100], [5, 75], [6, 130], [7, 100], [8, 200], [9, 170], [10, 30], [11, 80], [12, 90], [13, 50]];

    // Array with month labels used in Classic and Stacked chart
    var chartHours = [[1, '10:00'], [2, '11:00'], [3, '12:00'], [4, '13:00'], [5, '14:00'], [6, '15:00'], [7, '16:00'], [8, '17:00'], [9, '18:00'], [10, '19:00'], [11, '20:00'], [12, '21:00'], [13, '22:00']];
	
    if(gateway_bandwidth_private.length > 0){
    	
	    $.plot(gateway_bandwidth_private,
	            [
	                {
	                    label: '',
	                    data: dataBandWidth,
	                    lines: {show: true, fill: true, fillColor: {colors: [{opacity: 0.25}, {opacity: 0.25}]}},
	                    points: {show: true, radius: 4}
	                }
	            ],
	            {
	                colors: ['#7460ee', '#333333'],
	                legend: {show: true, position: 'nw', margin: [15, 10]},
	                grid: {borderWidth: 0, hoverable: true, clickable: true},
	                yaxis: {ticks: [0, 50, 100, 150, 200], ticksize: 10, tickColor: '#eeeeee'},
	                xaxis: {ticks: chartHours, tickColor: '#eeeeee'}
	            }
	     );
	    
    }
    
    if(gateway_bandwidth_public.length > 0){
    	
	    $.plot(gateway_bandwidth_public,
	            [
	                {
	                    label: '',
	                    data: dataBandWidth,
	                    lines: {show: true, fill: true, fillColor: {colors: [{opacity: 0.25}, {opacity: 0.25}]}},
	                    points: {show: true, radius: 4}
	                }
	            ],
	            {
			        colors: ['#7460ee', '#333333'],
			        legend: {show: true, position: 'nw', margin: [15, 10]},
			        grid: {borderWidth: 0, hoverable: true, clickable: true},
			        yaxis: {ticks: [0, 50, 100, 150, 200],tickColor: '#eeeeee'},
			        xaxis: {ticks: chartHours, tickColor: '#eeeeee'}
	            }
	    );
	    
    }
}

$(document).ready(function() {
	
	layoutToggleInit('#table-servers');
	
	switchButton();
	
	multiStepForm();
	
	customSelectInit();
	
	videoPanelToggle();
	
	dropzoneInit();
	
	chartInit();
	
});
