import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS:Contato[] = [
  {
    nome: "Bruno Grassi Ferreira 1",
    email: "bruno@teste.com",
    telefones: ['1111 - 1111','1111 - 1111','1111 - 1111']
  },
  {
    nome: "Bruno Grassi Ferreira 2",
    email: "bruno@teste.com",
    telefones: ['2222 - 2222']
  },
  {
    nome: "Bruno Grassi Ferreira 3",
    email: "bruno@teste.com",
    telefones: ['3333 - 3333']
  },
  {
    nome: "Bruno Grassi Ferreira 4",
    email: "bruno@teste.com",
    telefones: ['4444 - 4444']
  },
  {
    nome: "Bruno Grassi Ferreira 5",
    email: "bruno@teste.com",
    telefones: ['5555 - 5555']
  },
  {
    nome: "Bruno Grassi Ferreira 6",
    email: "bruno@teste.com",
    telefones: ['6666 - 6666']
  },
  {
    nome: "Bruno Grassi Ferreira 9",
    email: "bruno@teste.com",
    telefones: ['9999 - 9999']
  },
  {
    nome: "Bruno Grassi Ferreira 7",
    email: "bruno@teste.com",
    telefones: ['7777 - 7777']
  },
  {
    nome: "Bruno Grassi Ferreira 8",
    email: "bruno@teste.com",
    telefones: ['8888 - 8888']
  },
]

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly chave:string = "CONTATOS";

  constructor() { }

  getContatos():Contato[] {

    // Tentar carregar os dados da localStorage
    let dados = window.localStorage.getItem(this.chave);
    // Verificar se havia dados na localStorage
    if(dados){
      // Se houver dados => {Transformar dados em array; Retornar os array de contatos}
      let contatosCarregados:Contato[] = JSON.parse(dados);
      return contatosCarregados;
    } else {
      // Se não houver dados => {Crio um array vazia; Guardo uma array vazia no localStorage; Retorna o array vazia;}
      window.localStorage.setItem(this.chave, "[]");
      return [];

    }



    
  }

  addContato(c:Contato): void {
    // Levantar os contatos do localStorage para um array de contatos
    let contatos = this.getContatos();

    // Adicionar o contato c ao final do array
    contatos.push(c);

    // Salvar o array de volta no localStorage
    window.localStorage.setItem(this.chave,JSON.stringify(contatos));
  }

}
