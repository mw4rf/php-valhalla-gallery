function toggle(id)
{
	var c = document.getElementById(id)
	if(c.style.display == 'block')
		c.style.display = 'none'
	else
		c.style.display = 'block'
}

function form_validation(form)
{
	// Title
	if(empty(form.title))
	{
		form.title.style.borderColor = 'red'
		form.title.focus()
		return false
	}
	
	// User
	if(empty(form.user))
	{
		form.user.style.borderColor = 'red'
		form.user.focus()
		return false
	}
	
	// Category
	if(empty(form.cat))
	{
		form.cat.style.borderColor = 'red'
		form.cat.focus()
		return false
	}
	
	// Files
	if(empty(form.images))
	{
		form.images.style.borderColor = 'red'
		form.images.focus()
		return false
	}
}

function empty(item)
{
	if(item.value == null || item.value == "")
		return true;
	else
		return false;
}

function list(type,param)
{	
	$.post("core/list.php", { type:type, param:param },
	  function(data){
	    $('thumbnails').html(data)
	  });
}

function pagination(type,param)
{
	if(type == 'null')
		list('null','null')
	else if(type == 'next' || type == 'prev')
		$.post("core/list.php", { x:param },
		  function(data){
			$('thumbnails').slideToggle(500, function(){
				$('thumbnails').html(data)
				$('thumbnails').slideToggle(500)
			})
		  });
	else if(type == "combo")
		$.post("core/list.php", { x:$("#menu_pagination").val() },
		  function(data){
			$('thumbnails').slideToggle(500, function(){
				$('thumbnails').html(data)
				$('thumbnails').slideToggle(500)
			})
		  });
	else if(type="page")
		$.post("core/list.php", { x:param },
		  function(data){
			$('thumbnails').slideToggle(500, function(){
				$('thumbnails').html(data)
				$('thumbnails').slideToggle(500)
			})
		  });
}