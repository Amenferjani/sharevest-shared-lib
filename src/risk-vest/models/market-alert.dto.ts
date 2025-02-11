import {
    IsBoolean,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Max,
    Min,
} from 'class-validator';
import { AlertType, ConditionType } from '../schemas/market-alert.schema';

export class CreateAlertDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsEnum(AlertType)
    alertType: AlertType;

    @IsNumber()
    @Min(0)
    @Max(100)
    threshold: number;

    @IsOptional()
    @IsEnum(ConditionType)
    condition?: ConditionType;

    @IsOptional()
    @IsString()
    assetSymbol?: string;

    @IsOptional()
    @IsString()
    sector?: string;

    @IsOptional()
    @IsString()
    portfolioId?: string;

    @IsOptional()
    @IsString()
    campaignId?: string;

    @IsOptional()
    @IsString()
    market?: string;

    @IsOptional()
    @IsString()
    message?: string;

    @IsEnum(['email', 'sms', 'in-app'])
    notificationChannel: string;

    @IsOptional()
    @IsEnum(['immediate', 'daily', 'weekly'])
    alertFrequency?: string;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

    @IsOptional()
    @IsBoolean()
    isManual?: boolean;

    @IsOptional()
    @IsString()
    triggeredBy?: string;

    @IsOptional()
    @IsString()
    lastTriggeredAt?: Date;
}
