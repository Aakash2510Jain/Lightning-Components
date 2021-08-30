({
	doInit : function(component, event, helper) {
		debugger;
         component.set("v.currentStage","1" );
	},
    next : function(component, event, helper) {
		debugger;
        var currentStage = component.get("v.currentStage");
        var stages = component.get("v.stages");
        var totalStages = stages.length;
        currentStage = parseInt(currentStage) + parseInt("1") ;
        if(currentStage == totalStages){
            component.set("v.next",true );
           
        }
         component.set("v.previous",false );
        component.set("v.currentStage",currentStage.toString());
	},
    previous : function(component, event, helper) {
        debugger;
        var currentStage = component.get("v.currentStage");
        var stages = component.get("v.stages");
        var totalStages = stages.length;
        currentStage = parseInt(currentStage) - parseInt("1");
        if(currentStage < 2 ){
            component.set("v.previous",true );
           
        }
         component.set("v.next",false );
        component.set("v.currentStage",currentStage.toString() );
	}
})
