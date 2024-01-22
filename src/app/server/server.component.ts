import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  taskTitle = '';
  clickCount = 0;
  serverCount = 0;
  servers: string[] = [];

  loadTaskTitle() {
    this.taskTitle = 'Aakash Raj Shakya';
  }

  checkCount() {
    this.clickCount++;
  }

  createServer() {
    this.servers.push(++this.serverCount + " server created.");
  }
}
