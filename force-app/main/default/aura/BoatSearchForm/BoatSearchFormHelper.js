({
	initBoatTypes : function(component) {
		var action = component.get("c.showBoatTypesResults");
        action.setCallback(this, function(response){
        var state = response.getState();
     	  if(state==="SUCCESS")
        {
          console.log("response from Boat SearchForm"+response.getReturnValue());
          component.set("v.boatTypes", response.getReturnValue());
        } else {
                console.log("Error from BoatForm");
         		}
        });
        $A.enqueueAction(action);
	}
})