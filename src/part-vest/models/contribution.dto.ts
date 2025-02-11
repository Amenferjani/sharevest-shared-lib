import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

export class ContributionDto {
    @IsString()
    campaignId: string;

    @IsString()
    userId: string;

    @IsNumber()
    amount: number;

    @IsOptional()
    @IsDate()
    date?: Date;

    @IsOptional()
    @IsNumber()
    frequency?: number;

    @IsOptional()
    @IsNumber()
    avgContributionAmount?: number;
}
