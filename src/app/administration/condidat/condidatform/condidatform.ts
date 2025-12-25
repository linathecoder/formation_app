import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Candidat } from '../../../models/condidats';
import {CandidatService } from '../../../services/condidats/condidat';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-condidatform',
  imports: [FormsModule, CommonModule],
  templateUrl: './condidatform.html',
  styleUrl: './condidatform.css',
})
export class Condidatform implements OnInit {

  candidat: Candidat = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    cin: '',
    motDePasse: ''
  };

  isEditMode = false;

  constructor(
    private candidatService: CandidatService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const existing = this.candidatService.getById(+id);
      if (existing) {
        this.candidat = existing;
        this.isEditMode = true;
      }
    }
  }

  save(): void {
    if (this.isEditMode) {
      this.candidatService.update(this.candidat);
    } else {
      this.candidatService.add(this.candidat);
    }
    this.router.navigate(['/admin-space/candidates']);
  }

  cancel(): void {
    this.router.navigate(['/admin-space/candidates']);
  }
}
