import { IsString, IsNumber, IsDate, IsOptional, Min, Max, IsBoolean, IsUUID } from 'class-validator';

export class InvestorTrackingDto {
    @IsUUID()
    investorId: string;

    @IsUUID()
    dealId: string;

    @IsNumber()
    @Min(0)
    @IsOptional()
    investmentAmount?: number;

    @IsDate()
    @IsOptional()
    investmentDate?: Date;

    @IsNumber()
    @Min(-100)
    @Max(100)
    @IsOptional()
    roi?: number; 

    @IsNumber()
    @IsOptional()
    valuationChange?: number; 

    @IsNumber()
    @Min(-100)
    @Max(100)
    @IsOptional()
    irr?: number; 

    @IsNumber()
    @IsOptional()
    profitLoss?: number; 

    @IsBoolean()
    @IsOptional()
    exitCompleted?: boolean; 
}
