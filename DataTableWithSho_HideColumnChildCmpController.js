({
    doInit : function(component, event, helper) {
        debugger;
        component.set("v.start", 0);
        var allRecords = component.get("v.recordList");
        component.set("v.modifiedList",allRecords);
    },
    pageRecordsChanged : function(component, event, helper) {
        debugger;
        
        var recsPerPage = event.getSource().get("v.value");
        var allRecordsData = component.get("v.recordList");
        var recordListToBeUpdated = [];
        var totalRecords = allRecordsData.length;
        
        var start = component.get("v.start"); 
        var end = start + parseInt(recsPerPage) ;
        for(let i = 0; i<recsPerPage; i++){
            recordListToBeUpdated.push(allRecordsData[i]);
        }
        component.set("v.modifiedList", recordListToBeUpdated);
        component.set("v.start ", 0 + parseInt(recsPerPage));
        component.set("v.end", end + parseInt(recsPerPage));
        component.set("v.paginationApplied", true);
        component.set("v.recordsPerPage", recsPerPage);
        component.set("v.disablePrevious", true);
        component.set("v.disableNext", false);
    },
    next : function(component, event, helper) {
        debugger;
        
        var recsPerPage = component.get("v.recordsPerPage"); 
        var allRecordsData = component.get("v.recordList");
        var recordListToBeUpdated = [];
        var totalRecords = allRecordsData.length;
        
        var start = component.get("v.start"); 
        var end = start + parseInt(recsPerPage) ;
        if(end > totalRecords){
            end = recsPerPage - (end - totalRecords) + start;
            component.set("v.disableNext", true);
            recsPerPage = 0;
        }
        
        for(let i = start; i<end; i++){
            recordListToBeUpdated.push(allRecordsData[i]);
        }
        component.set("v.modifiedList", recordListToBeUpdated);
        component.set("v.start ", start +parseInt(recsPerPage) );
        component.set("v.end", end + parseInt(recsPerPage));
        component.set("v.paginationApplied", true);
        component.set("v.disablePrevious", false);
    },
    previous : function(component, event, helper) {
        debugger;
        var recsPerPage = component.get("v.recordsPerPage");
        var allRecordsData = component.get("v.recordList");
        var recordListToBeUpdated = [];
        var totalRecords = allRecordsData.length;
        
        var start = component.get("v.start") ;
        var end = start - parseInt(recsPerPage);
        if(end <= 0){
            component.set("v.disablePrevious", true);
            component.set("v.disableNext", true);
            for(let i = start; i > end; i-- ){
                recordListToBeUpdated.push(allRecordsData[i]);
            }
        }
        else{
            for(let i = start; i > end; i-- ){
                recordListToBeUpdated.push(allRecordsData[i]);
            }
        }
        component.set("v.modifiedList", recordListToBeUpdated);
        component.set("v.start ", start - parseInt(recsPerPage) );
        component.set("v.end", end - parseInt(recsPerPage));
        component.set("v.paginationApplied", true);
        component.set("v.disableNext", false);
    }
})
