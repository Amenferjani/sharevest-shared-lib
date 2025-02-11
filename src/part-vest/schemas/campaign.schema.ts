import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Pre } from '@typegoose/typegoose';

@Schema()
@Pre<Campaign>('save', function(next) {
    this.duration = Math.ceil((this.endDate.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24));
    this.fundingProgress = Math.min(100, (this.currentAmount / this.targetAmount) * 100);
    next();
})
export class Campaign extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ maxlength: 500 })
    description: string;

    @Prop({ required: true, min: 0 })
    targetAmount: number;

    @Prop({ default: 0, min: 0 })
    currentAmount: number;

    @Prop({ required: true })
    creatorId: string;

    @Prop({ required: true, default: Date.now })
    startDate: Date;

    @Prop({ required: true })
    endDate: Date;

    @Prop({ enum: ['active', 'completed', 'canceled'], default: 'active' })
    status: string;

    @Prop({ min: 0 })
    duration: number; 

    @Prop({ default: 0, min: 0, max: 100 })
    fundingProgress: number; 

    @Prop({ required: true })
    category: string;

    @Prop({ default: 1, min: 0, max: 1 })
    successRate: number;

    @Prop({ min: 0 })
    minContribution: number;

    @Prop({ min: 0 })
    maxContribution: number;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Update' }], default: [] })
    updates: Types.ObjectId[];
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
