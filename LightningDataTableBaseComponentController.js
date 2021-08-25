({
    doInit : function(component, event, helper) {
        debugger;
        var action = component.get("c.getRecords");
        action.setParams({
            objName : component.get("v.objName"),
            fieldSetName : component.get("v.fieldSetName")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                component.set("v.mycolumns", response.getReturnValue().lstDataTableColumns);
                component.set("v.mydata", response.getReturnValue().lstDataTableData);    
            }
        });
        $A.enqueueAction(action);
    }
})
