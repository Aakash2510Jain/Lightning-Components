({
	doInit : function(component, event, helper) {
		debugger;
        helper.createFirstRow(component, event);
	},
    Save : function(component, event, helper) {
        debugger;
        var action = component.get("c.saveContacts");
        action.setParams({
            "ListContact": component.get("v.contactList")
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.contactList", []);
                helper.createFirstRow(component, event);
                alert('record Save');
            }
        });
        $A.enqueueAction(action);
	},
    addNewRow : function(component, event, helper) {
        debugger;
        helper.createFirstRow(component, event);
	},
    
    removeDeletedRow : function(component, event, helper) {
        debugger;
        var index = event.getParam("indexVar");
        var listOfRecords = component.get("v.contactList");
        listOfRecords.splice(index, 1);
        component.set("v.contactList", listOfRecords);
	}
})
