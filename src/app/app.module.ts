import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './components/filters/filters.component';
import { TaskPipe } from './pipes/task-status.pipe';
import { TaskService } from './services/task.service';
import { AddEditModalComponent } from './components/add-edit-modal/add-edit-modal.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskListComponent,
    AddTaskComponent,
    FiltersComponent,
    TaskPipe,
    AddEditModalComponent,
    TaskListItemComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
