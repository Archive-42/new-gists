beforeCreate: function () {
    const generateAppointments =  function () {
     const appointments = new Array();
     const appointment1 = {
         id: 'id1',
         description: 'George brings projector for presentations.',
         location: '',
         subject: 'Quarterly Project Review Meeting',
         calendar: 'Room 1',
         start: new Date(2016, 10, 23, 9, 0, 0),
         end: new Date(2016, 10, 23, 16, 0, 0)
        };
       appointments.push(appointment1);
       this.source =
        {
            dataType: 'array',
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date' },
                { name: 'end', type: 'date' }
              ],
                id: 'id',
                localData: generateAppointments()
         };
         this.dataAdapter = new jqx.dataAdapter(this.source);
    }
}