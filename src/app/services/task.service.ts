import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  TaskGroups = [
    {
      name:'Ali Javed',
      userTasks:[
        {
          name:'Buy Milk',
          deadline:'2021-06-16T16:10',
          user:'',
          status:'New'
        },
        {
          name:'Buy Milk',
          deadline:'2021-06-16T16:10',
          user:'',
          status:'New'
        },
        {
          name:'Buy Milk',
          deadline:'2021-06-16T16:10',
          user:'',
          status:'New'
        },

      ]
    },
    {
      name:'Alex',
      userTasks:[
        {
          name:'Pay Bill',
          deadline:'2021-06-16T16:10',
          user:'',
          status:'New'
        },
        {
          name:'Buy Milk',
          deadline:'2021-06-16T16:10',
          user:'',
          status:'New'
        },
        {
          name:'Buy Milk',
          deadline:'2021-06-16T16:10',
          user:'',
          status:'New'
        },

      ]
    },
    {
      name:'John Sheperad',
      userTasks:[
        {
          name:'Buy Milk',
          deadline:'2021-06-16T16:10',
          user:'',
          status:'New'
        },
        {
          name:'Buy Milk',
          deadline:'2021-06-16T16:10',
          user:'',
          status:'New'
        },
        {
          name:'Buy Milk',
          deadline:'2021-06-16T16:10',
          user:'',
          status:'New'
        },
        {
          name:'Buy Milk',
          deadline:'2021-06-16T16:10',
          user:'',
          status:'New'
        },

      ]
    },
    {
      name:'Zahid khan',
      userTasks:[
        {
          name:'Buy Milk',
          deadline:'2021-06-16T16:10',
          user:'',
          status:'New'
        },
        {
          name:'Buy Milk',
          deadline:'2021-06-16T16:10',
          user:'',
          status:'New'
        },


      ]
    },
    {
      name:'Fahad Khan',
      userTasks:[
        {
          name:'Buy Milk',
          deadline:'2021-06-16T16:10',
          user:'',
          status:'New'
        },

      ]
    },

  ]

  constructor() { }

  getAlltaskGroup() {
    return this.TaskGroups
  }
  deleteTask(task) {
    this.TaskGroups.forEach((element,index)=>{
      if(element.name==task) this.TaskGroups.splice(index,1);
   });
  }
  specificTaskDetails(task) {
   return  this.TaskGroups.filter(x=>x.name==task)

  }
  addNewUser(a) {
    this.TaskGroups.push(a)
  }
}
