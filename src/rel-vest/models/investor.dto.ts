import { IsString, IsEmail, IsOptional, IsEnum, IsUUID, IsNotEmpty, IsArray } from 'class-validator';

export class InvestorDto {
    @IsUUID()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsUUID()
    @IsNotEmpty()
    companyId: string;

    @IsEmail({}, { message: 'Email must be a valid email address' })
    email: string;

    @IsString()
    @IsOptional()
    phoneNumber?: string;

    @IsString()
    @IsOptional()
    investmentInterest?: string;

    @IsEnum(['active', 'inactive'] as const, {
        message: 'Status must be either "active" or "inactive"',
    })
    @IsOptional()
    status?: 'active' | 'inactive';

    @IsArray()
    @IsUUID('all', { each: true })
    @IsOptional()
    eventIds?: string[];
}
