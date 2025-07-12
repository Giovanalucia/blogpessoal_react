import type Postagem from "./Postagem"

export default interface Usuario {
	id: number | undefined
	nome: string
	usuario: string
	senha: string
	foto: string
    postagem?: Postagem[] | null;
}