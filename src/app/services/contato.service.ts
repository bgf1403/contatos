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
      nome:"Bruno Grassi Ferreira 1",
      email: "bruno@teste.com",
      telefones: ["11 1111-1111", "11 9 9111-1111"]
    },
    {
      nome:"Bruno Grassi Ferreira 1",
      email: "bruno@teste.com",
      telefones: ["11 1111-1111", "11 9 9111-1111"]
    },
    {
      nome:"Bruno Grassi Ferreira 1",
      email: "bruno@teste.com",
      telefones: ["11 1111-1111", "11 9 9111-1111"]
    },
    {
      nome:"Bruno Grassi Ferreira 1",
      email: "bruno@teste.com",
      telefones: ["11 1111-1111", "11 9 9111-1111"]
    },
    {
      nome:"Bruno Grassi Ferreira 1",
      email: "bruno@teste.com",
      telefones: ["11 1111-1111", "11 9 9111-1111"]
    },
    {
      nome:"Bruno Grassi Ferreira 1",
      email: "bruno@teste.com",
      telefones: ["11 1111-1111", "11 9 9111-1111"]
    },
    {
      nome:"Bruno Grassi Ferreira 1",
      email: "bruno@teste.com",
      telefones: ["11 1111-1111", "11 9 9111-1111"]
    },
    {
      nome:"Bruno Grassi Ferreira 1",
      email: "bruno@teste.com",
      telefones: ["11 1111-1111", "11 9 9111-1111"]
    },
    {
      nome:"Bruno Grassi Ferreira 1",
      email: "bruno@teste.com",
      telefones: ["11 1111-1111", "11 9 9111-1111"]
    },
  ]

  getContatos():Contato[] {
    return this.contatos;
  }

  constructor() { }
}
