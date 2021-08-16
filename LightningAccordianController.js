({
    doinit : function(component, event, helper) {
        debugger;
        var action = component.get("c.getRecords");
        action.setParams({
            'objName'		:	component.get("v.objectName"),
            'fieldList'		:	component.get("v.fieldList")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                //alert('Success');
                var result = response.getReturnValue();
                component.set("v.recordList", result);
            }
            else{
                alert('Error');
            }
        });
        $A.enqueueAction(action); 
    },
    
})
