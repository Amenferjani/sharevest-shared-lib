import { IsString, IsNotEmpty, IsOptional, IsEnum, IsDate, IsUUID, IsArray, ArrayNotEmpty } from 'class-validator';

export class EventDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsEnum(['Webinar', 'Annual Meeting', 'Q&A Session'] as const, {
        message: 'eventType must be one of: Webinar, Annual Meeting, Q&A Session',
    })
    eventType: 'Webinar' | 'Annual Meeting' | 'Q&A Session';

    @IsDate()
    @IsNotEmpty()
    date: Date;

    @IsString()
    @IsOptional()
    location?: string;

    @IsEnum(['upcoming', 'completed', 'cancelled'] as const, {
        message: 'status must be one of: upcoming, completed, cancelled',
    })
    @IsOptional()
    status?: 'upcoming' | 'completed' | 'cancelled';

    @IsUUID()
    @IsNotEmpty()
    companyId: string;

    @IsArray()
    @IsUUID('all', { each: true })
    @IsOptional()
    investorIds?: string[];
}
