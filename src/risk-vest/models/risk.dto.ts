import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

enum RiskType {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
}

export class FinancialSituationDto {
  @IsNumber()
  @IsNotEmpty()
  income: number;

  @IsNumber()
  @IsNotEmpty()
  netWorth: number;

  @IsString()
  @IsNotEmpty()
  investmentExperience: string;
}

export class PreferencesDto {
  @IsArray()
  @IsNotEmpty()
  assetClasses: string[];

  @IsBoolean()
  @IsOptional()
  ethicalInvesting?: boolean;
}

export class RiskProfileDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEnum(RiskType)
  riskType: RiskType;

  @IsNumber()
  @Min(0)
  @Max(100)
  score: number;

  @IsArray()
  @IsNotEmpty()
  investmentGoals: string[];

  @IsEnum(['short-term', 'medium-term', 'long-term'])
  timeHorizon: 'short-term' | 'medium-term' | 'long-term';

  @IsNotEmpty()
  financialSituation: FinancialSituationDto;

  @IsNotEmpty()
  preferences: PreferencesDto;

  @IsOptional()
  @IsNumber()
  calculatedRisk?: number;

  @IsOptional()
  @IsString()
  description?: string;
}