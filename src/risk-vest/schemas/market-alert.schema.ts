import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Pre } from '@typegoose/typegoose';

export enum AlertType {
    RiskThreshold = 'riskThreshold',
    MarketDrop = 'marketDrop',
    PriceIncrease = 'priceIncrease',
    PriceDecrease = 'priceDecrease',
    VolatilitySpike = 'volatilitySpike',
    FundingProgress = 'fundingProgress'
}

export enum ConditionType {
    GreaterThan = 'greaterThan',
    LessThan = 'lessThan',
    EqualTo = 'equalTo',
    InRange = 'inRange',
    OutOfRange = 'outOfRange',
}

@Schema({ timestamps: true })
export class MarketAlert extends Document {
    @Prop({ required: true, index: true })
    userId: string; 

    @Prop({ enum: AlertType, required: true })
    alertType: AlertType;

    @Prop({ required: true, type: mongoose.Schema.Types.Mixed })
    threshold: number | [number, number];

    @Prop({ enum: ConditionType, default: ConditionType.LessThan })
    condition?: ConditionType;

    @Prop({ default: null })
    assetSymbol?: string;

    @Prop({ default: null })
    sector?: string;

    @Prop({ default: null })
    portfolioId?: string;

    @Prop({ default: null })
    campaignId?: string;

    @Prop({ default: null })
    market?: string;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: null })
    message?: string;

    @Prop({ enum: ['email', 'sms', 'in-app'], required: true })
    notificationChannel: string;

    @Prop({ enum: ['immediate', 'daily', 'weekly'], default: 'immediate' })
    alertFrequency?: string;

    @Prop({ default: true })
    isActive?: boolean;

    @Prop({ default: null })
    lastTriggeredAt?: Date; 

    @Prop({ default: false })
    isManual?: boolean;

    @Prop({ default: null })
    triggeredBy?: string;

}

export const MarketAlertSchema = SchemaFactory.createForClass(MarketAlert);