({
    doinit : function(component, event, helper) {
        debugger;
        var action = component.get("c.getListOfDocuments");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                component.set("v.documentList",response.getReturnValue());
            }
        });
        $A.enqueueAction(action); 
    },
    getSelected : function(component, event, helper){
        debugger;
        var value = event.currentTarget.getAttribute("data-index");
        component.set("v.isModalOpen",true);
        
        component.set("v.selectedDocId",value);
        //event.getSource().get("v.name")
        //var docId = component.find('documentId').get('v.value');
    },
    closeModel : function(component, event, helper){
        debugger;
        component.set("v.isModalOpen",false);
    },
    submitDetails : function(component, event, helper){
        debugger;
        component.set("v.isModalOpen",false);
    },
})
