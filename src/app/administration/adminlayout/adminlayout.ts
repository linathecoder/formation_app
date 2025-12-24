import { Component } from '@angular/core';
import { Header } from '../header/header';
import { RouterModule } from "@angular/router";


@Component({
  selector: 'app-adminlayout',
  imports: [Header, RouterModule],
  templateUrl: './adminlayout.html',
  styleUrl: './adminlayout.css',
})
export class Adminlayout {

}
