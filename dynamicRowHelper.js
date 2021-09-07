({
	createFirstRow : function(component, event) {
		debugger;
        var firstRow = component.get("v.contactList");
        firstRow.push({
            'sobjectType'	:	'Contact',
            'FirstName'		: 	'',
            'LastName'		:	'',
            'Phone'			:	''
        });
        component.set("v.contactList", firstRow);
	}
})
