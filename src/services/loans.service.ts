import * as LoansRepository from '../repositories/loan.repository.js';
import { Loan } from '../types/loan.js';

export async function getLoanByIdService(id: number): Promise<Loan | "LOAN_NOT_FOUND"> {
    const loan = await LoansRepository.getLoanByID(id);
    if (!loan) return "LOAN_NOT_FOUND";
    return loan;
}

export async function listLoansService(): Promise<Loan[]> {
    return LoansRepository.getAllLoans();
}