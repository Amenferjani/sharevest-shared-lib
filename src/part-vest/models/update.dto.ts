import { IsString, IsDate, IsOptional } from 'class-validator';

export class UpdateDto {
    @IsString()
    campaignId: string;

    @IsString()
    message: string;

    @IsOptional()
    @IsDate()
    date?: Date;

    @IsOptional()
    @IsString()
    sentiment?: 'positive' | 'negative' | 'neutral';
}
