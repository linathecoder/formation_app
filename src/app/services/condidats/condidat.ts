import { Injectable } from '@angular/core';
import { Candidat } from '../../models/condidats';

@Injectable({
  providedIn: 'root',
})
export class Condidat {
  private storageKey = 'candidats';

  constructor() {}

  getAll(): Candidat[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getById(id: number): Candidat | undefined {
    return this.getAll().find(c => c.id === id);
  }

  add(candidat: Candidat): void {
    const candidats = this.getAll();
    candidat.id = new Date().getTime(); // ID unique
    candidats.push(candidat);
    localStorage.setItem(this.storageKey, JSON.stringify(candidats));
  }

  update(candidat: Candidat): void {
    const candidats = this.getAll();
    const index = candidats.findIndex(c => c.id === candidat.id);
    if (index !== -1) {
      candidats[index] = candidat;
      localStorage.setItem(this.storageKey, JSON.stringify(candidats));
    }
  }

  delete(id: number): void {
    const candidats = this.getAll().filter(c => c.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(candidats));
  }
  
}

