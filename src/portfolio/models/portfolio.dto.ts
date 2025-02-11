import { IsUUID, IsString, IsOptional, IsDate, IsEnum } from 'class-validator';
import { InvestmentStrategy } from '../entity/portfolio.entity';

export class PortfolioDto {
    @IsOptional()
    @IsUUID()
    id?: string;

    @IsString()
    userId: string;

    @IsOptional()
    @IsDate()
    createdAt?: Date;

    @IsOptional()
    @IsEnum(InvestmentStrategy)
    investmentStrategy?: InvestmentStrategy;
}
