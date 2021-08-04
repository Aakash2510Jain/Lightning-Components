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
                component.set("v.paginationList",response.getReturnValue());
                var noOfRecs = response.getReturnValue().length;
                component.set("v.totalRecs",noOfRecs);
            }
        });
        $A.enqueueAction(action); 
    },
    onCheck : function(component,event){
        debugger;
        var value = event.getSource().get("v.value");
        var selectedRecs = component.get("v.totalSelectedRecs");
        if(value == true){
            selectedRecs = selectedRecs + 1;
            component.set("v.totalSelectedRecs",selectedRecs);
        }
        else if(value == false){
            selectedRecs =  selectedRecs - 1;
            component.set("v.totalSelectedRecs",selectedRecs);
        }
        
    },
    pageRecordsChanged : function(component, event, helper) {
        debugger;
        var listTobeModified = [];
        var selectedvalueOfRecsPerPage = component.get("v.recsPerpage");
        var recordList = component.get("v.sObjectList");
        
        for(let i = 0; i<selectedvalueOfRecsPerPage; i++){
            listTobeModified.push(recordList[i]);
        }
        var noOfPages =  component.get("v.totalRecs")/selectedvalueOfRecsPerPage;
        noOfPages = Math.ceil(noOfPages) ;
        
        component.set("v.paginationList",listTobeModified);
        component.set("v.showPaginationButtons",true);
        component.set("v.totalPages",noOfPages);
        component.set("v.end",selectedvalueOfRecsPerPage-1);
        component.set("v.start",0);
        component.set("v.currentPageNo",1);
    },
    next : function(component,evnt){
        debugger;
        var listTobeModified = []; 
        var count =0;
        
        var recordPerPage = component.get("v.recsPerpage");
        var end = component.get("v.end");
        var start = component.get("v.start");
        var recordList = component.get("v.sObjectList");
        var totalListSize = recordList.length;
        var numberOfpages = totalListSize/parseInt(recordPerPage);
        var currentPagenumber  = component.get("v.currentPageNo");
        currentPagenumber = currentPagenumber +1;
        
        if(totalListSize < end+1+parseInt(recordPerPage)){
            var lastRecLoop = end+1+parseInt(recordPerPage) - totalListSize;
            for(var i= end+1;i< (parseInt(recordPerPage) - lastRecLoop) + end+1;i++){
                listTobeModified.push(recordList[i]);
                count++;
            }
        }else{
            for(var i = end+1;i< parseInt(recordPerPage)+parseInt(end)+1;i++ ){
                debugger;
                console.log('i:::'+i);
                listTobeModified.push(recordList[i]);
                count++;
            }
        }
        
        component.set("v.paginationList",listTobeModified);
        component.set("v.end",end+count);
        component.set("v.start",start+count);
        component.set("v.currentPageNo",currentPagenumber);
    },
    previous : function(component,evnt){
        debugger;
        var listTobeModified = []; 
        var count =0;
        
        var recordPerPage = component.get("v.recsPerpage");
        var end = component.get("v.end");
        var start = component.get("v.start");
        var recordList = component.get("v.sObjectList");
        var totalListSize = recordList.length;
        var currentPagenumber  = component.get("v.currentPageNo");
        currentPagenumber = currentPagenumber -1;
        
        for(var i = start-recordPerPage;i< start;i++ ){
            if(i > -1)
            {
                listTobeModified.push(recordList[i]);
                count ++;
            }
            else {
                start++;
            }
        }
        
        start = (start)-(count);
        end = (end)-(count);
        component.set("v.currentPageNo",currentPagenumber);
        component.set("v.paginationList",listTobeModified);
        component.set("v.end",end);
        component.set("v.start",start);
    }
})
