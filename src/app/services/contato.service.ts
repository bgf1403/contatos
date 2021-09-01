import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos:Contato[] = [
    {
      nome:"Bruno Grassi Ferreira 1",
      email: "bruno@teste.com",
      telefones: ["11 1111-1111", "11 9 9111-1111"]
    },
    {
      nome:"Bruno Grassi Ferreira 2",
      email: "bruno@teste.com",
      telefones: ["22 2222-2222", "22 9 9222-2222"]
    },
    {
      nome:"Bruno Grassi Ferreira 3",
      email: "bruno@teste.com",
      telefones: ["33 3333-3333", "33 9 9333-3333"]
    },
    {
      nome:"Bruno Grassi Ferreira 4",
      email: "bruno@teste.com",
      telefones: ["44 4444-4444", "44 9 9444-4444"]
    },
    {
      nome:"Bruno Grassi Ferreira 5",
      email: "bruno@teste.com",
      telefones: ["55 5555-5555", "55 9 9555-5555"]
    },
    {
      nome:"Bruno Grassi Ferreira 6",
      email: "bruno@teste.com",
      telefones: ["66 6666-6666", "66 9 9666-6666"]
    },
    {
      nome:"Bruno Grassi Ferreira 7",
      email: "bruno@teste.com",
      telefones: ["77 7777-7777", "77 9 9777-7777"]
    },
    {
      nome:"Bruno Grassi Ferreira 8",
      email: "bruno@teste.com",
      telefones: ["88 8888-8888", "88 9 9888-8888"]
    },
    {
      nome:"Bruno Grassi Ferreira 9",
      email: "bruno@teste.com",
      telefones: ["99 9999-9999", "99 9 9999-9999"]
    },
    {
      nome:"Bruno Grassi Ferreira 0",
      email: "bruno@teste.com",
      telefones: ["00 0000-0000", "00 9 9000-0000"]
    },
  ]

  getContatos():Contato[] {
    return this.contatos;
  }

  constructor() { }
}
