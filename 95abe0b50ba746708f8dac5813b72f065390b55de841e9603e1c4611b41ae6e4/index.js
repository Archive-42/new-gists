window.onload = function () {
  const gantt = document.querySelector('smart-gantt-chart');
 
gantt.treeSize = '30%';
  gantt.durationUnit = 'hour';
  gantt.taskColumns = [
      {
          label: 'Tasks',
          value: 'label',
          size: '60%'
      },
      {
          label: 'Duration (hours)',
          value: 'duration',
          formatFunction: (date) =>  parseInt(date)
      }];
 
  gantt.dataSource = [
      {
          label: 'PRD & User-Stories',
          dateStart: '2019-01-10',
          dateEnd: '2019-03-10',
          class: 'product-team',
          type: 'task'
      },
      {
          label: 'Persona & Journey',
          dateStart: '2019-03-01',
          dateEnd: '2019-04-30',
          class: 'marketing-team',
          type: 'task'
      },
 
     //Add the details of the tasks.
 
  ]
}
