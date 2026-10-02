import { Request, Response } from 'express';
import { getLoanByIdService, listLoansService } from '../services/loans.service.js';

export async function getById(req: Request, res: Response) {
    const result = await getLoanByIdService(Number(req.params.id));
    if (result === "LOAN_NOT_FOUND") return res.status(404).json({ error: "Loan not found" });
    res.json({data:result});
}

export async function list(req: Request, res: Response) {
    res.json({data: await listLoansService()});
}