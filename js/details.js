var Details = (function(){

	var $items;
	var $content;
	
	$items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
	 $content = $("[rel=js-details]");
	
	function fetchDetails(imageID){
		$.ajax("details/"+ imageID +".html", {dataType:"text"})
		.then(function(details){
			$content.html(details);
		});
	}

	function loadDetails(){

		$items.on("click","[rel^='js-item-']",clickPerson);		
	}
	

	return {
		loadDetails:loadDetails,
		fetchDetails:fetchDetails
	};



	
})()


