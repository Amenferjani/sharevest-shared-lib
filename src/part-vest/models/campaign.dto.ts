import { IsString, IsNumber, IsOptional, IsDate, IsEnum, IsArray } from 'class-validator';
import { Types } from 'mongoose';

export class CampaignDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNumber()
    targetAmount: number;

    @IsOptional()
    @IsNumber()
    currentAmount?: number;

    @IsString()
    creatorId: string;

    @IsOptional()
    @IsDate()
    startDate?: Date;

    @IsOptional()
    @IsDate()
    endDate?: Date;

    @IsOptional()
    @IsEnum(['active', 'completed', 'canceled'])
    status?: string;

    @IsOptional()
    @IsString()
    category?: string;

    @IsOptional()
    @IsNumber()
    duration?: number;

    @IsOptional()
    @IsNumber()
    fundingProgress?: number;

    @IsOptional()
    @IsNumber()
    successRate?: number;

    @IsOptional()
    @IsNumber()
    minContribution?: number;

    @IsOptional()
    @IsNumber()
    maxContribution?: number;

    @IsOptional()
    @IsArray()
    updates?: Types.ObjectId[];
}
