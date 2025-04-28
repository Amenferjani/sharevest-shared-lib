import { IsEmail, IsNotEmpty, IsString, IsOptional, IsDecimal, IsEnum, IsNumber, IsDate } from 'class-validator';
import { RiskToleranceLevel, SubscriptionPlan } from '../entities/user.entity'; 
import { Role } from '../entities/role.entity';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    role?: Role[];

    @IsOptional()
    @IsString()
    googleId?: string;

    @IsOptional()
    @IsString()
    picture?: string;

    @IsOptional()
    @IsEnum(RiskToleranceLevel)
    riskTolerance?: RiskToleranceLevel;

    @IsOptional()
    @IsNumber({
        maxDecimalPlaces: 2
    })
    overallRiskScore?: number;

    @IsOptional()
    @IsString()
    subscriptionPlan?: SubscriptionPlan;

    @IsOptional()
    @IsDate()
    subscriptionExpiresAt?: Date;
}
