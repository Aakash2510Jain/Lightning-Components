public class DynamicListViewHelper {
    @auraEnabled
    public static List<recordsWrapper> getListView(String objName,List<String> fieldListforListView, String sObjecttype, List<String> fieldList){
        // list<ListView> lict = [Select SobjectType,Id, DeveloperName From ListView Where SobjectType = 'Account'];
        // 
        // List<String> fieldListforListView= new List<String>{'SobjectType','Id', 'DeveloperName'};
        //List<String> fieldList =   new List<String>{'Name','Id', 'Website'};
        //DynamicListViewHelper.getListView('ListView',fieldListforListView,'Account',fieldList);
        // 
        // 
        // 
        // 
        List<sObject> listViewRecordList = new List<sObject>();
        String query = ' Select ';
        for(String field : fieldListforListView){
            query += field+',';
        }
        query = query.removeEnd(',');
        system.debug('query::'+query);
        query += ' From '+objName+' Where SobjectType = '+'\''+sObjecttype+'\' ';
        system.debug('query::'+query);
        
        listViewRecordList = database.query(query);
        system.debug('listViewRecordList::'+listViewRecordList);
        
        String queryRecords = ' Select ';
        List<sObject> recordList = new List<sObject>();
        for(String field : fieldList){
            queryRecords += field+',';
        }
        queryRecords = queryRecords.removeEnd(',');
        system.debug('queryRecords::'+queryRecords);
        queryRecords += ' From '+SobjectType;
        system.debug('queryRecords::'+queryRecords);
        
        recordList = database.query(queryRecords);
        system.debug('recordList::'+recordList);
        
        List<recordsWrapper> wrapList = new List<recordsWrapper>();
        wrapList.add(new recordsWrapper(recordList, listViewRecordList));
        
        system.debug('wrapList::'+wrapList);
        return wrapList;
    }
    
    public class recordsWrapper{
        @auraEnabled
        public List<sObject> recordList {get;set;}
        @auraEnabled
        public List<sObject> listViewRecordList {get; set;}
        public recordsWrapper(List<sObject> recordList,List<sObject> listViewRecordList ){
            this.recordList = recordList;
            this.listViewRecordList = listViewRecordList;
        }
    }
    @auraEnabled
    public static List<Account> sortRecordsAsPerListView(String listViewName){
        List<Account> accListToBeReturned = new List<Account>();
        if(listViewName == 'NewThisWeek'){
            Date todayDate = system.today(); 
            date thisWeekLastDate = todayDate.addDays(-7);
            system.debug('thisWeekLastDate::'+thisWeekLastDate);
            accListToBeReturned = [ SELECT Id,Name,Industry,Rating,BillingAddress FROM Account WHERE CreatedDate  >: thisWeekLastDate];          
        }else if(listViewName == 'NewLastWeek'){
            Date todayDate = system.today();
            date lastWeekEndDate = todayDate.addDays(-7); 
            date lastWeekStartDate = todayDate.addDays(-14);
            system.debug('lastWeekEndDate::'+lastWeekEndDate);
            system.debug('lastWeekStartDate::'+lastWeekStartDate);
            accListToBeReturned = [ SELECT Id,Name,Industry,Rating,BillingAddress FROM Account WHERE CreatedDate  >: lastWeekStartDate AND CreatedDate <: lastWeekEndDate];   
        }
        else if(listViewName == 'RecentlyViewedAccounts'){
           // LastViewedDate 
            Date todayDate = system.today();
            date lastMonthDate = todayDate.addDays(-28);
            system.debug('lastMonthDate::'+lastMonthDate);
            accListToBeReturned = [ SELECT Id,Name,Industry,Rating,BillingAddress FROM Account WHERE LastViewedDate  >: lastMonthDate AND LastViewedDate <: todayDate];   
        }
        else if(listViewName == 'AllAccounts'){
             accListToBeReturned = [ SELECT Id,Name,Industry,Rating,BillingAddress FROM Account];   
        }
        return accListToBeReturned;
    }
    
}