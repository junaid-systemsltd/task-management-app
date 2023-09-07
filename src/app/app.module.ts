import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './components/filters/filters.component';
import { TaskStatusPipe } from './pipes/task-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskListComponent,
    AddTaskComponent,
    FiltersComponent,
    TaskStatusPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
