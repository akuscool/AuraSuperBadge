({
	doInit : function(component, event, helper) {
		helper.onInit(component, event);
	},
    
    onUserInfoClick: function(component, event, helper){
        var dataUserId = event.target.getAttribute("data-userid");
        var navigateEvent = $A.get("e.force:navigateToSObject");
        //var id = component.get("v.boat.Id");
        navigateEvent.setParams({
            "recordId": dataUserId,
            "slideDevName": "detail"
        });
		navigateEvent.fire();
    }
})