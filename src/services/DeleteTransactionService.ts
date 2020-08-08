import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactinRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactinRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exists');
    }

    await transactinRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
