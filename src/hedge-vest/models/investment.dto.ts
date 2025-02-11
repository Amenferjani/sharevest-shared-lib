import { IsString, IsNumber, IsDateString, IsOptional, Min, IsUUID } from 'class-validator';

export class InvestmentDto {
    @IsString()
    investorName: string;

    @IsString()
    investorId: string;

    @IsNumber()
    @Min(0)
    @IsOptional()
    amount?: number;

    @IsDateString()
    @IsOptional()
    investmentDate?: string;  

    @IsString()
    @IsOptional()
    status?: string = 'pending';  

    @IsUUID()
    hedgeFundId: string;  

    @IsNumber()
    @IsOptional()
    returns?: number;
}
