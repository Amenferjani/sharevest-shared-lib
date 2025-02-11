import { IsUUID, IsEnum, IsNumber, IsOptional, IsDate } from 'class-validator';
import { TransactionType } from '../entity/transaction.entity';

export class TransactionDto {
    @IsOptional()
    @IsUUID()
    id?: string;

    @IsUUID()
    assetId: string;

    @IsUUID()
    portfolioId: string;

    @IsEnum(TransactionType)
    type: TransactionType;

    @IsNumber({ maxDecimalPlaces: 2 })
    quantity: number;

    @IsNumber({ maxDecimalPlaces: 2 })
    price: number;

    @IsOptional()
    @IsDate()
    transactionDate?: Date;

    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 })
    transactionRiskImpact?: number;
}
