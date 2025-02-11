import { IsString, IsOptional, IsEmail, IsEnum } from 'class-validator';

export class CompanyDto {
    @IsString()
    name: string;

    @IsString()
    industry: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    headquarters?: string;

    @IsEmail({}, { message: 'Contact email must be a valid email address' })
    contactEmail: string;

    @IsString()
    @IsOptional()
    phoneNumber?: string;

    @IsString()
    @IsOptional()
    website?: string;

    @IsEnum(['active', 'inactive'] as const, {
        message: 'Status must be either "active" or "inactive"',
    })
    status: 'active' | 'inactive';
}
