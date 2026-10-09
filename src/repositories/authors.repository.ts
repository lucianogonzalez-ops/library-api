import { Author as AuthorModel } from "../models/index.js";
import { Book as Bookmodel } from "../models/index.js";

import { Author, NewAuthor } from "../types/author.js";

export async function getAuthorByID(id: number): Promise<Author | null> {
    const row = await AuthorModel.findByPk(id);
    return row ? row.toJSON() : null;
}

export async function getAllAuthors(): Promise<Author[]> {
    const rows = await AuthorModel.findAll();
    return rows.map(row => row.toJSON());
}

export async function insertAuthor(authorData: NewAuthor): Promise<Author[]> {
    const row = await AuthorModel.create({
        name: authorData.name,
        nationality: authorData.nationality
    });

    return [row.toJSON()];
}

export async function putAuthor(authorData: NewAuthor, authorId: number): Promise<Author[]> {
    await AuthorModel.update(
        {
            name: authorData.name,
            nationality: authorData.nationality
        },
        { where: { id: authorId } }
    );

    const row = await AuthorModel.findByPk(authorId);
    return row ? [row.toJSON()] : [];
}

export async function deleteAuthor(authorId: number): Promise<boolean> {
    const deleted = await AuthorModel.destroy({ where: { id: authorId } });
    return deleted > 0;
}


export async function authorHasBooks(authorId: number): Promise<boolean> {
    const book = await Bookmodel.findOne({
        where: {
            author_id: authorId
        }
    });
    return !!book;
}



