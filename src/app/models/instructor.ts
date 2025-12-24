export interface Instructor {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  idCard?: string;
  photoUrl?: string;
  cvUrl?: string;
  specialties?: string[];
}