({
    doinit : function(component, event, helper) {
        debugger;
        component.set("v.back", true);
    },
    next : function(component, event, helper) {
        debugger;
        var idOfTabToBeSelected = component.get("v.tabId");
        var tabsList = component.get("v.tabsetLabels");
        var lengthOfTabsList = tabsList.length;
        if(idOfTabToBeSelected < lengthOfTabsList ){
            idOfTabToBeSelected = parseInt(idOfTabToBeSelected) + parseInt("1");
        }
        if(idOfTabToBeSelected == lengthOfTabsList ){
            component.set("v.next", true);
        }
        component.set("v.back", false);
        component.set("v.tabId", String(idOfTabToBeSelected));
    },
    back : function(component, event, helper) {
        debugger;
        var idOfTabToBeSelected = component.get("v.tabId");
        var tabsList = component.get("v.tabsetLabels");
        var lengthOfTabsList = tabsList.length;
        idOfTabToBeSelected = parseInt(idOfTabToBeSelected) - parseInt("1");
        component.set("v.next", false);
        if(idOfTabToBeSelected == 1){
            component.set("v.back", true);
        }
        component.set("v.tabId", String(idOfTabToBeSelected));
    },
    tabSelected : function(component, event, helper) {
        debugger;
        var idOfTabToBeSelected = event.getParam('id');
        var tabsList = component.get("v.tabsetLabels");
        var lengthOfTabsList = tabsList.length;
        if(idOfTabToBeSelected == lengthOfTabsList ){
            var nextAttribute = true;
        }
        else if(idOfTabToBeSelected != lengthOfTabsList ){
            var nextAttribute = false;
        }
        if(idOfTabToBeSelected != 1){
            var backAttribute = false; 
        }
        else if(idOfTabToBeSelected == 1){
            var backAttribute = true;
        }
        component.set("v.back", backAttribute);
        component.set("v.next", nextAttribute);
        component.set("v.tabId", String(idOfTabToBeSelected));
    }
})
