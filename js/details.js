var Details = (function(){

	var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
	var $content = $("[rel=js-details]");
	
	
	function fetchDetails(e){
		//grabbing the rel attr and stripping everything but the digit using Regex
		var imageID = $(e.target).attr("rel").replace(/^.*(\d+)$/,"$1");
		
		
		$.ajax("details/"+ imageID +".html", {dataType:"text"})
		.then(function(details){
			$content.html(details);
		});
	}

	function loadDetails(){

		$items.on("click","[rel^='js-item-']",fetchDetails);		
	}
	

	return {
		loadDetails:loadDetails
	};



	
})()


