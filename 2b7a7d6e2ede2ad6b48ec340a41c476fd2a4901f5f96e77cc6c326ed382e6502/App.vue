data: function () {
    return {
             getWidth: getWidth('scheduler'),
           date: new jqx.date(2016, 11, 23),
           appointmentDataFields: 
           {
               from: 'start',
               to: 'end',
               id: 'id',
               description: 'description',
               location: 'location',
               subject: 'subject',
               resourceId: 'calendar'
           },
           resources:
           {
               colorScheme: 'scheme05',
               dataField: 'calendar',
               source: new jqx.dataAdapter(this.source)
           },
           views:
           [
              'dayView',
              'weekView',
              'monthView'
           ]
     }
},