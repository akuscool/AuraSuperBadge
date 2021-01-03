({
	onSearch : function(component) {
        var action = component.get("c.getBoats");
        action.setParams({
            "boatTypeId" : component.get("v.boatTypeIdentifier")
        });
        action.setCallback(this, function(response){
        	var state= response.getState();
            alert(state);
            alert(response.getReturnValue());
        if(state==="SUCCESS")
        {
            component.set("v.boat", response.getReturnValue());
            
        } else {
            console.log(response.getError());
           // component.set("v.boat", response.getReturnValue());
            component.set("v.resultsNotFound", "true");
            
        }        
     });
        $A.enqueueAction(action);
	}
})