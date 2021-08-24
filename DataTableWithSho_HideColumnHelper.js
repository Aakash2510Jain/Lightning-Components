({
	doInitHelper : function(component,event) {
		debugger;
        var action = component.get("c.getRecords");
        action.setParams({
            'objectName': component.get("v.objectName"),
            'fieldList': component.get("v.selectedFieldsList")
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state == 'SUCCESS') {
                component.set("v.recordList", response.getReturnValue());
                component.set("v.modalForSelectingFields", false);
                component.set("v.showChildComponent", true);
            }
        });
        $A.enqueueAction(action);
	}
})
