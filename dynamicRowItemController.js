({
    AddNewRow : function(component, event, helper){
        component.getEvent("AddNewRowEvt").fire();     
    },
    
    removeRow : function(component, event, helper){
       component.getEvent("DeleteRowEvt").setParams({"indexVar" : component.get("v.rowIndex") }).fire();
    }, 
  
})