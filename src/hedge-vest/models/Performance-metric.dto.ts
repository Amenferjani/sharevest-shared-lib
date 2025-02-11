import { IsString, IsNumber, IsDateString, Min, Max, IsOptional, IsUUID } from 'class-validator';

export class PerformanceMetricDto {
    @IsDateString()
    date: string;  

    @IsNumber()
    @Min(-100)
    @Max(100)
    returnPercentage: number;

    @IsNumber()
    @Min(-10)
    @Max(10)
    sharpeRatio: number;

    @IsNumber()
    @Min(0)
    @Max(100)
    volatility: number;

    @IsNumber()
    @Min(-100)
    @Max(0)
    drawdown: number;

    @IsNumber()
    @Min(-100)
    @Max(100)
    benchmarkPerformance: number;

    @IsUUID()
    hedgeFundId: string;  

    @IsString()
    @IsOptional()
    comments?: string;

    @IsNumber()
    riskScore: number;

    @IsDateString()
    @IsOptional()
    updatedAt?: string; 
}
