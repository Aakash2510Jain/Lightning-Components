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
                var modifiedList = component.get("v.iterableList");
                for(let i = 0;i<result.length;i++){
                    modifiedList.push(result[i].Name);
                }
                component.set("v.iterableList", result);
            }
            else{
                alert('Error');
            }
        });
        $A.enqueueAction(action); 
    },
    onChange  : function(component, event, helper) {
        debugger;
        var selectedValue = event.getSource().get("v.value");
        var modifiedList = component.get("v.iterableList");
        var selectedValuesList = component.get("v.selectedList");
       	var indexOfSelected;
        for(let i = 0;i<modifiedList.length;i++){
            if(modifiedList[i].Name == selectedValue){
                indexOfSelected = i;
                break;
            }
        }
        
        modifiedList.splice(indexOfSelected, 1);
        selectedValuesList.push(selectedValue);
        
        component.set("v.selectedList", selectedValuesList);
        component.set("v.iterableList", modifiedList);
    },
    remove : function(component, event, helper) {
        debugger;
        var selectedValue = event.getSource().get("v.value");
        var modifiedList = component.get("v.iterableList");
        var selectedValuesList = component.get("v.selectedList");
       	var indexOfSelected;
        for(let i = 0;i<modifiedList.length;i++){
            if(selectedValuesList[i] == selectedValue){
                indexOfSelected = i;
                break;
            }
        }
        
        selectedValuesList.splice(indexOfSelected, 1);
        
        
        component.set("v.selectedList", selectedValuesList);
        component.set("v.iterableList", modifiedList);
    }
})
