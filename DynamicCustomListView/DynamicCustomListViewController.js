({
    doinit : function(component, event, helper) {
        debugger;
        var action = component.get("c.getRecords");
        action.setParams({
            'obj':component.get("v.objectName"),
            'fieldList':component.get("v.fieldList")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                component.set("v.sObjectList",response.getReturnValue());
                component.set("v.recordList",response.getReturnValue());
            }
        });
        $A.enqueueAction(action); 
    },
    listViewChanged : function(component, event, helper) {
        debugger;
        var listviewName = event.getSource().get("v.value");
        var sobjectList = component.get("v.sObjectList");
        var listToBeModified = [];
        
        if(listviewName == 'All Accounts'){
            for(let i= 0;i<sobjectList.length;i++){
                listToBeModified.push(sobjectList[i]);
            }
             
        }
        else if(listviewName == 'VIP accounts'){
            for(let i= 0;i<sobjectList.length;i++){
                if(sobjectList[i].VIP_Account__c == true){
                    listToBeModified.push(sobjectList[i]);
                }
            }
        }
            else if(listviewName == 'Normal Accounts'){
                for(let i= 0;i<sobjectList.length;i++){
                if(sobjectList[i].VIP_Account__c == false){
                    listToBeModified.push(sobjectList[i]);
                }
            }

            }
        component.set("v.recordList",listToBeModified);
    }
    
})