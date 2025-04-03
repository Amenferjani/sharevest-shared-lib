// src/payments/dto/create-payment.dto.ts
import { IsUUID, IsString, IsDecimal, IsEnum, IsEmail, IsOptional } from 'class-validator';
import { PaymentStatus } from '../entities/payment-transaction.entity';

export class CreatePaymentDto {
    @IsUUID()
    userId: string;

    @IsString()
    provider: string; 

    @IsString()
    sessionId: string;

    @IsDecimal()
    amount: number;

    @IsString()
    currency: string;

    @IsEnum(PaymentStatus)
    status: PaymentStatus = PaymentStatus.PENDING;

    @IsEmail()
    email: string;
}
