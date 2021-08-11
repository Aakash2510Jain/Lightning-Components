<aura:application  extends="force:slds">
    <c:DynamicCustomListView objectName="Account" fieldList="['Name','Phone','Website','VIP_Account__c']"  listViewValues="['All Accounts','VIP accounts','Normal Accounts']"/>
	
</aura:application>