import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  taskgroups = []
  isSelectedKey :number
  taskDetails: { name: string; userTasks: { name: string; deadline: string; user: string; status: string; }[]; }[];
  constructor(private taskService: TaskService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAlltaskgroup()

  }
  SortedList(value) {
    if(value =='1') {
      this.sortAplhabaticallyOrder()
    }else {
      this.sortByNumberofTask()
    }
  }
  getAlltaskgroup() {
    this.taskgroups = this.taskService.getAlltaskGroup()

  }
  sortAplhabaticallyOrder() {
     this.taskgroups = this.taskgroups.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  }
  sortByNumberofTask() {

  this.taskgroups =this.taskgroups.sort(function(a, b) {
    return b.userTasks.length - a.userTasks.length;
});
  }
  AddNewTask() {
    this.router.navigate(['/task'], { queryParams: {task: 'new'} })

  }
  EditTask(task) {
    this.router.navigate(['/task'], { queryParams: {task: task.name} })

  }
  DeleteTask(task) {
    this.taskService.deleteTask(task.name)

  }
  SpecificTaskDetail(task,i) {
    this.isSelectedKey = i
    let a:any = this.taskService.specificTaskDetails(task.name)
    this.taskDetails = a[0].userTasks

  }

}

