import { IsString, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class AssetDto {
    @IsOptional()
    @IsUUID()
    id?: string;

    @IsString()
    ticker: string;

    @IsString()
    name: string;

    @IsString()
    type: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    currentPrice: number;

    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2 })
    riskFactor?: number;

    @IsNumber()
    quantity: number;

}
