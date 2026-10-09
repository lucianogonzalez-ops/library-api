import * as AuthorsRepository from '../repositories/authors.repository.js';
import { Author, NewAuthor } from '../types/author.js';

export async function getAuthorByIdService(id: number): Promise<Author | "AUTHOR_NOT_FOUND"> {
    const author = await AuthorsRepository.getAuthorByID(id);
    if (!author) return "AUTHOR_NOT_FOUND";
    return author;
}

export async function listAuthorsService(): Promise<Author[]> {
    return AuthorsRepository.getAllAuthors();
}

export async function createAuthorService(authorData: NewAuthor): Promise<Author> {
    const result = await AuthorsRepository.insertAuthor(authorData);
    return result[0];
}

export async function replaceAuthorService(authorData: NewAuthor, id: number): Promise<Author | "AUTHOR_NOT_FOUND"> {
    const author = await AuthorsRepository.getAuthorByID(id);
    if (!author) return "AUTHOR_NOT_FOUND";

    const replaced = await AuthorsRepository.putAuthor(authorData, id);
    return replaced[0];
}

export async function deleteAuthorService(id: number): Promise<"AUTHOR_NOT_FOUND" |"AUTHOR_HAS_BOOKS"  |"DELETED"> {
    const author = await AuthorsRepository.getAuthorByID(id);
    if (!author) return "AUTHOR_NOT_FOUND";
    const hasBooks = await AuthorsRepository.authorHasBooks(id)
    if (hasBooks) return "AUTHOR_HAS_BOOKS";

    await AuthorsRepository.deleteAuthor(id);
    return "DELETED";
}