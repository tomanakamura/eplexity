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
			containerCssClass: custom_class
		});
	});
	
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
	
	$('.pie-chart').easyPieChart({
        barColor: '#0a8dff',
		scaleColor: false,
		lineWidth: 13,
		lineCap: 'square'    
	});
	
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
