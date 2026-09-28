import { Loan as LoanModel } from "../models/index.js";
import { Loan } from "../types/loan.js"


export async function bookHasLoans(bookId: number): Promise<boolean> {
    const loan = await LoanModel.findOne(
        {
            where:
            {
                book_id: bookId
            }
        });
        return !!loan
    }



export async function getLoanByID(id: number): Promise<Loan | null> {
    const row = await LoanModel.findByPk(id);
    return row ? row.toJSON() : null;
}

export async function getAllLoans(): Promise<Loan[]> {
    const rows = await LoanModel.findAll();
    return rows.map(row => row.toJSON());
}



