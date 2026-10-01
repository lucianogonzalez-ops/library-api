import { Request, Response } from 'express';
import {getAuthorByIdService,listAuthorsService,createAuthorService, replaceAuthorService,deleteAuthorService,
} from '../services/authors.service.js';


export async function getById(req: Request, res: Response) {
    const result = await getAuthorByIdService(Number(req.params.id));
    if (result === "AUTHOR_NOT_FOUND") return res.status(404).json({ error: "Author not found" });
    res.json({data:result});
}

export async function list(req: Request, res: Response) {
    res.json({data :await listAuthorsService()});
}

export async function create(req: Request, res: Response) {
    const result = await createAuthorService(req.body);
    res.status(201).json({data:result});
}

export async function replace(req: Request, res: Response) {
    const result = await replaceAuthorService(req.body, Number(req.params.id));
    if (result === "AUTHOR_NOT_FOUND") return res.status(404).json({ error: "Author not found" });
    res.status(200).json({data:result});
}

export async function remove(req: Request, res: Response) {
    const result = await deleteAuthorService(Number(req.params.id));
    if (result === "AUTHOR_NOT_FOUND") return res.status(404).json({ error: "Author not found" });
    if (result === "AUTHOR_HAS_BOOKS") return res.status(409).json({ error: "Author has books" });
    res.status(204).send();
}


