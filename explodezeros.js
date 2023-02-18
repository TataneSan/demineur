
	function explodeZeros(cell){
		var col = parseInt(cell.attr('class').match(/\bcol(\d+)\b/)[1]);
		var row = parseInt(cell.attr('class').match(/\brow(\d+)\b/)[1]);
		var selectors = [
			'.col'+(col-1)+'.row'+(row-1),
			'.col'+col+'.row'+(row-1),
			'.col'+(col+1)+'.row'+(row-1),
			'.col'+(col-1)+'.row'+row,
			'.col'+(col+1)+'.row'+row,
			'.col'+(col-1)+'.row'+(row+1),
			'.col'+col+'.row'+(row+1),
			'.col'+(col+1)+'.row'+(row+1)
		];
		
		$.each(selectors, function(key, value){
			var current_cell = $(selectors[key]);
			if(current_cell.text() == "0" && current_cell.hasClass('overlays')){
				current_cell.removeClass('overlays');
				explodeZeros(current_cell);
			} else {
				current_cell.removeClass('overlays');		
			}		
		});
	}

