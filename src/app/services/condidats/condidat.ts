import { Injectable } from '@angular/core';
import { Candidat } from '../../models/condidats';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private candidats: Candidat[] = [
    {
      id: 1,
      nom: 'Ben Ali',
      prenom: 'Sami',
      email: 'sami.benali@gmail.com',
      cin: '12345678'
    },
    {
      id: 2,
      nom: 'Trabelsi',
      prenom: 'Ines',
      email: 'ines.trabelsi@gmail.com',
      cin: '87654321'
    },
    {
      id: 3,
      nom: 'Karray',
      prenom: 'Youssef',
      email: 'youssef.karray@gmail.com',
      cin: '11223344'
    }
  ];

  constructor() {}

  getAll(): Candidat[] {
    return this.candidats
  }

  getById(id: number): Candidat | undefined {
    return this.candidats.find(c => c.id === id);
  }

  add(candidat: Candidat): void {
    this.candidats.push(candidat)
  }

  update(candidat: Candidat): void {
    const index = this.candidats.findIndex(c => c.id === candidat.id);
    if (index !== -1) {
      this.candidats[index] = candidat
    }
  }

  delete(id: number): void {
    this.candidats = this.candidats.filter(c => c.id !== id)
  }
}
 