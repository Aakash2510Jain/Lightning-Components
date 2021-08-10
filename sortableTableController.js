({
    doinit : function(component, event, helper) {
        debugger;
        var action = component.get("c.getRecords");
        action.setParams({
            'obj':component.get("v.objName"),
            'fieldList':component.get("v.fieldList")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var toastEvent = $A.get("e.force:showToast");
                component.set("v.recordList", response.getReturnValue());
            }else{
                alert('Error');
            }
        });
        $A.enqueueAction(action);
    },
    handleClick :  function(component, event, helper) {
        debugger;
        component.set("v.loaded",true);
        var sortByField = event.currentTarget.title;
        var recordList = component.get("v.recordList");
        var arrowDir = component.get("v.arrowDirection");
        if(arrowDir == 'asc'){
            component.set("v.arrowDirection",'desc');
        }
        if(arrowDir == 'desc'){
            component.set("v.arrowDirection",'asc');
        }
        var finalisedArrowDirection = component.get("v.arrowDirection");
        helper.sort(component,finalisedArrowDirection,sortByField);
    },
    
})
