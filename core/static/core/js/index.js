function todoTemplate(text,data)
{
	return '<li class="card"><div class="tick-box"><input type="checkbox" name="check"></div><div class="list-text">'+ text +'</div><div class="pull-right"><a href="#" onclick=deleteList(this,{'+"'type'" + ":'" + data.type + "'" + '}) class="no-link" >Delete</a></div></li>'
}



function appendToList(list,text,data) {
	list.append(todoTemplate(text,data))
}


function addList(elm,data)
{
	addBox = $(elm).siblings()[0]
	if(addBox.value == "")
	return
	list  = $(elm).closest('.list-box').find('ul')
	appendToList(list,addBox.value,data)
	addBox.value = ""
}


function deleteList(elm,data)
{
	//console.log(elm);
	$(elm).closest('li').remove();
}
