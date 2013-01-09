// Gallery
$(function() {
	$(".thumb").overlay({
		target: '#gallery',
		expose: '#000000',
	}).gallery({
		speed: 400,
		template : '<span>${title}</span> | <span>${index} / ${total}</span>'
	});
});

// ToolTips
$(function() {
    $(".thumb").tooltip({ // .thumb img[title]
        tip: '#thumbtip',  
		position: 'bottom center',
        offset: [-5, 0] ,
		effect: 'slide',
		predelay: '200',
		lazy:'false' // dynamic plugin requires lazy:'false'
    	}).dynamic( { 
        	bottom: { 
            	direction: 'down',  
            	bounce: true 
        	},
			classNames: 'top right bottom left'
	    });
})