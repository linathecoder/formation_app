import { Component } from '@angular/core';
import { SidebarAdmin } from "../sidebar-admin/sidebar-admin";

@Component({
  selector: 'app-dashboard',
  imports: [SidebarAdmin],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
