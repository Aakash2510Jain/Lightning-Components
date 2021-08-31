({
    doInit : function(component, event, helper) {
        debugger;
    },
    
    upload : function(component, event, helper) {
        debugger;
        var fileName = component.get("v.fileName");
        if (event.getSource().get("v.files").length > 0) {
            fileName = event.getSource().get("v.files")[0]['name'];
        }
        component.set("v.fileName", fileName);
    },
    
    saveFile : function(component, event, helper) {
        debugger;
        if (component.find("fileId").get("v.files").length > 0) {
            component.set("v.showLoadingSpinner", true);
            helper.uploadHelper(component, event);
        } else {
            alert('Please Select a Valid File');
        }
    }
})
