import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Demo } from '../store/models/todo-app-model';
import * as DemoActions from '../store/actions/todo-app-actions'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  demo: Observable<Demo[]>;
  registerForm: any;
  submitted = false;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.demo = store.select('demoStore');
  }
  removeFromTable(name: string) {
    console.log(name);
    this.store.dispatch(new DemoActions.RemoveDemo(name));
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]
    }
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log("this.registerForm.value::",this.registerForm.value);
    this.store.dispatch(new DemoActions.AddDemo({
      title : this.registerForm.value.title,
      firstName : this.registerForm.value.firstName,
      lastName : this.registerForm.value.lastName,
      phone : this.registerForm.value.phone,
      email : this.registerForm.value.email,
    }))
    this.onReset();
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
