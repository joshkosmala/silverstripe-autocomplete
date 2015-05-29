/**
 * Register Autocomplete functions with fields.
 * This is not strictly using jQuery, like the rest of the CMS.
 */

(function($) {
	$(function() {

		// Load autocomplete functionality when field gets focused
		$('.field.autocomplete input.text').live('focus', function() {
			
			var input = $(this);
            
			// Prevent this field from loading itself multiple times
			if(input.attr('data-loaded') == 'true')
				return;
			input.attr('data-loaded', 'true');
         
			// Add aria-expanded false for dormant state	
			input.attr('aria-expanded', 'false'); 
			
			
			
				
			// load autocomplete into this field
			input.autocomplete({
				source: input.attr('data-source'),
				minLength: input.attr('data-min-length'),
				change: function( event, ui ) {
					// Add aria-expanded on focus	
					input.attr('aria-expanded', 'true');
					
					alert("listening");
					
					// Check if a selection from the list is required
					if(!input.attr('data-require-selection')) return true;
					
					// Accept if item selected from list
					if(ui.item) return true;

					// remove invalid value, as it didn't match anything
					input.val("");
					input.data("autocomplete").term = "";
					
					// Set aria-expanded to false	
					input.attr('aria-expanded', 'false');
					
					return false;
				}
			});
		});
	});
})(jQuery);