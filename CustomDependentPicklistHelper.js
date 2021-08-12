({
    handleOnLoad : function(component, event, helper) {
        debugger;
        var action = component.get("c.getObjects");
        action.setParams({
            
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                //alert('Success');
                var result = response.getReturnValue();
                var arrayMapKeys = [];
                for(var key in result){
                    arrayMapKeys.push({key: key, value: result[key]});
                    
                }
                component.set("v.mapValues", arrayMapKeys);
            }
            else{
                alert('Error');
            }
        });
        $A.enqueueAction(action); 
    },
    handleObjectValue : function(component, event, helper) {
        debugger;
        var selectedObjName = event.getSource().get("v.value");
        var recordMap = component.get("v.mapValues");
        var valuesforselectedObjectsFields = [];
        
        var mapvalues = Object.values(recordMap);
        var arrayMapKeys = [];
        for(let i=0; i<mapvalues.length; i++){
            if (mapvalues[i].key == (selectedObjName)) {
                arrayMapKeys = mapvalues[i].value;
            }
        }
        valuesforselectedObjectsFields = Object.keys(arrayMapKeys);
        
        component.set("v.ListOfFields",valuesforselectedObjectsFields);     
        component.set("v.mapOfFieldValues", arrayMapKeys);
        component.set("v.fieldSection", true);
    },
    handleFieldValue : function(component, event, helper) {
        debugger;
        var selectedFieldName = event.getSource().get("v.value");
        var fieldNamesAndItsValues = component.get("v.mapOfFieldValues");
        var valuesCorrespondingToPicklistField = fieldNamesAndItsValues[event.getSource().get("v.value")];
        
        
        component.set("v.ListOfFieldsValues", valuesCorrespondingToPicklistField);
        component.set("v.valueSection", true);
    }
})