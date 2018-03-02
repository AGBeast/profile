var Header = (function (){

// put event handlers for header links here

    function headerLinkClicks(e){
        
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

                //JQueryfying the event object so that I can easily get the href attr
            var url = $(e.target).attr("href");

            $.ajax(url,{dataType:"text"}).then(function(data){
                $modal.html(data).show();
            });
    } 
   
    function init(){

    
         $modal = $("[rel='js-modal']");

        //attaching event handlers to nodes in html via rel attr
        $("[rel='js-controls']").on("click","[rel*='js-']",headerLinkClicks);

    }

    var $modal;

    return {
        init: init
    };
    

})()
