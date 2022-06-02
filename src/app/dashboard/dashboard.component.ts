import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Demo } from '../store/models/todo-app-model';
import * as DemoActions from '../store/actions/todo-app-actions'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  demo: Observable<Demo[]>;
  constructor(private store: Store<AppState>) {
    this.demo = store.select('demoStore');
  }
  removeFromTable(id: string) {
    this.store.dispatch(new DemoActions.RemoveDemo(id)); 
  }
  ngOnInit() {
  
  }

}
