import { IsString, IsNumber, IsDate, IsOptional, IsIn, Min } from 'class-validator';

export class DealDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    industry: string;

    @IsNumber()
    @Min(0)
    @IsOptional()
    requiredInvestment?: number;

    @IsNumber()
    @Min(0)
    @IsOptional()
    currentInvestment?: number;

    @IsString()
    @IsIn(['open', 'closed', 'pending']) 
    status: string;
    
    @IsString()
    @IsIn(['Idea', 'Funding', 'Growth', 'Exit']) 
    lifecycleStage: 'Idea' | 'Funding' | 'Growth' | 'Exit';

    @IsDate()
    @IsOptional() 
    createdAt?: Date;

    @IsDate()
    @IsOptional()
    updatedAt?: Date;
}
