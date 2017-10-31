function jsStr(key,data) {
	return "'"+key+"'" + ":'"+ data + "'"
}
function todoTemplate(text,data)
{
	return '<li class="card"><div class="tick-box"><input onclick="markDone(this,{'+ jsStr("type",data.type)+ ','+ jsStr("id",data.id) +"})" + '"' + 'type="checkbox" name="check"></div><div class="list-text">'+ text +'</div><div class="pull-right"><a href="#" onclick=deleteList(this,{' + jsStr("type",data.type)+ "," +  jsStr("id",data.id) + '}) class="no-link" >Delete</a></div></li>'
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
	$.ajax({
		data : {kind : data.type ,job : addBox.value},
		url :  '/add',
		datatype : "json",
	success : function(response) {
		// console.log(response)
		data["id"] = response.id
		appendToList(list,addBox.value,data)
		addBox.value = ""
	}
	})

}


function deleteList(elm,data)
{
	$.ajax({
		data : {id : data.id},
		url : '/delete',
		datatype : "json",
	})
	$(elm).closest('li').remove();
}


function markDone(elm,data)
{
	if(elm.checked == true)
		data['done'] = "True"
	else
		data['done'] = "False"
	$.ajax({
		data : {id : data.id , done : data.done},
		url : '/done',
		datatype : "json",
	})
}