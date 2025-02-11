import { IsString, IsNumber, IsDateString, IsOptional, Min, Max } from 'class-validator';

export class HedgeFundDto {
    @IsString()
    name: string;

    @IsString()
    manager: string;

    @IsString()
    @IsOptional()
    description?: string; 

    @IsString()
    strategy: string;

    @IsNumber()
    @Min(0)
    @IsOptional()
    totalAssets?: number;

    @IsNumber()
    @Min(0)
    @IsOptional()
    investedAmount?: number; 

    @IsDateString()
    @IsOptional()
    inceptionDate?: string;  

    @IsNumber()
    @Min(0)
    @Max(100)
    @IsOptional()
    managementFees?: number;

    @IsNumber()
    @Min(0)
    @Max(100)
    @IsOptional()
    performanceFees?: number;

    @IsString()
    @IsOptional()
    status?: string; 
}
