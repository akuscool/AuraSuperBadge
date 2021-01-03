({
	doInit : function(component, event, helper) {
		var redirectToSObjectPageEvent = $A.get("e.force:navigateToSObject");
        
        if (redirectToSObjectPageEvent) {
            component.set("v.showDetailsButton", true);
        }
	},
    
    onFullDetails : function(component, event, helper) {
        
        var navigateEvent = $A.get("e.force:navigateToSObject");
        var id = component.get("v.boat.Id");
        navigateEvent.setParams({
            "recordId": id,
            "slideDevName": "detail"
        });
		navigateEvent.fire();
	}
    
})