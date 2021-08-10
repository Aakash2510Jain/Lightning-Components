({
	sort : function(component,order,sortByField){
        debugger;
        var action = component.get("c.getSortedList");
        action.setParams({
            'objName'		:	component.get("v.objName"),
            'fieldList'		:	component.get("v.fieldList"),
            'order'   		:	order,
            'sortByField'	: 	sortByField
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                component.set("v.loaded",false);
                var toastEvent = $A.get("e.force:showToast");
                component.set("v.recordList", response.getReturnValue());
            }else{
                alert('Error');
            }
        });
        $A.enqueueAction(action);
    }
})
