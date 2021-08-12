({
	doinit : function(component, event, helper) {
		debugger;
        helper.handleOnLoad(component, event, helper);
	},
    onObjectValueSelection : function(component, event, helper) {
		debugger;
        helper.handleObjectValue(component, event, helper);
	},
    onFieldSelection : function(component, event, helper) {
        debugger;
        helper.handleFieldValue(component, event, helper);
    },
    showselectedvalue : function(component, event, helper) {
        debugger;
        var selectedValue = event.getSource().get("v.value");
        component.set("v.selectedValueFromPicklistValues",selectedValue);
         component.set("v.showSelectedValue",true);
    }
})