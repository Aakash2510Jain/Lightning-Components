({
    doInit: function(component, event, helper) {
        debugger;
    },
    handleIconClick : function(component, event, helper) {
        debugger;
        component.set("v.modalForSelectingFields", true);
    },
    closeModel : function(component, event, helper) {
        debugger;
        component.set("v.modalForSelectingFields", false);
    },
    submitDetails : function(component, event, helper) {
        debugger;
        
        var allValues = component.get("v.fieldList");
        var selectedFields = [];
        for(var i=0;i<allValues.length;i++){
            if(allValues[i].value == true){
                selectedFields.push(allValues[i].Key);
            }
        }
        component.set("v.selectedFieldsList", selectedFields);
        
        helper.doInitHelper(component, event);
    },
    handleCheckBox : function(component, event, helper) {
        debugger;
        var value = event.getSource().get("v.value");
        // Change metadata
        var fieldNameWhichIsSelecetd = event.getSource().get("v.name");
        var allValues = component.get("v.fieldList");
        for(var i=0;i<allValues.length;i++){
            if(allValues[i].Key == fieldNameWhichIsSelecetd){
                
                if(value == true){
                    allValues[i].value = true;
                }else if(value == false){
                    allValues[i].value = false;
                }
            }
        }
        component.set("v.fieldList",allValues);
    },
})
