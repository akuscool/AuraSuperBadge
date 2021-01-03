({
	onFormSubmit : function(component, event, helper) {
		var action = event.getParam("formData");
        var boatTypeId = action.boatTypeId;
        var boatsearchresultscmp = component.find("boatSearchResultsCmp");
        if(boatsearchresultscmp)
        {
            alert("boat Type id. "+boatTypeId);
            boatsearchresultscmp.search(boatTypeId);
        }
	}
})