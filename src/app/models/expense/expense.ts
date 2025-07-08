import { ExpenseType } from "../expense-type/expense-type";

export class Expense {
    id!: number;
    amount!: number;
    date!: Date;
    expenseTypeId?: number;
    expenseDescription?: string;
    type!: ExpenseType;
    description?: string;
}
