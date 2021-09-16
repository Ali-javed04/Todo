import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  doctorForm: FormGroup;
  submitted:boolean = false
  taskName: string;
  constructor(private formBuilder: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskName = this.activeRoute.snapshot.queryParams.task

    this.doctorForm = this.formBuilder.group({

      name: ['', Validators.required],
      userTasks: this.formBuilder.array([this.initItemRowsofExperience()]),
  })
  this.checkRoute()
}
addNewRowofExperience() {
  this.formArrofExperience.push(this.initItemRowsofExperience());
}
initItemRowsofExperience() {
  return this.formBuilder.group({
    name:[''],
    deadline:[''],
    user:[''],
    status:['']
  })
}
get formArrofExperience() {
  return this.doctorForm.get('userTasks') as FormArray
}
deleteRowofExperience(index:number) {
  this.formArrofExperience.removeAt(index)
}
submit() {
  this.submitted = true;
  if (this.doctorForm.invalid) {
    return;
  }
  let a = this.doctorForm.value
  if(this.taskName =='new') {
    this.taskService.addNewUser(a)
    this.router.navigate(['/'])
  }else {
    this.taskService.deleteTask(this.taskName)
    this.taskService.addNewUser(a)
    this.router.navigate(['/'])

  }
}
get f() { return this.doctorForm.controls; }

getSpecifictaskgroup() {
  let a = this.taskService.specificTaskDetails(this.taskName)
  let b = a[0]
  this.doctorForm.patchValue({
    name:b.name,

  })
  this.formArrofExperience.removeAt(0)
  b.userTasks.forEach((x)=>{
    this.formArrofExperience.push(this.formBuilder.group(x))
  })

}
checkRoute() {
  if(this.taskName =='new') {

  }else {
    this.getSpecifictaskgroup()
  }
}
}
