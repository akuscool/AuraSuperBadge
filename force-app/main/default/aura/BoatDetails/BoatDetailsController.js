({
	onBoatSelected : function(component, event, helper) {
        console.log("on boat selected from boat details component");
		var param = event.getParam("boat");
        component.set("v.id", param.Id);
        
        setTimeout($A.getCallback(function(){
				console.log("reloaded");
            	component.find("service").reloadRecord();
			            
        }));
	},
    onRecordUpdated : function(component, event, helper) {
        component.find("service").reloadRecord();
        var boatReviewsCmp = component.find("boatreviewtab");
        if(boatReviewsCmp!=null){
            boatReviewsCmp.refresh();
        }
	},
    onBoatReviewAdded : function(component, event, helper){
        
        component.find("tabset").set("v.selectedTabId","boatreviewtab");
        var boatReviewsCmp = component.find("boatreviewtab");
        if(boatReviewsCmp!=null){
            boatReviewsCmp.refresh();
        }
    }
})