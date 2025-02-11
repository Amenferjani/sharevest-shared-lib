import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document ,Types} from 'mongoose';
import { Pre } from '@typegoose/typegoose';


@Schema()
@Pre<Contribution>('save', function(next) {
    if (this.frequency > 0) {
        this.avgContributionAmount = this.amount / this.frequency;
    } else {
        this.avgContributionAmount = this.amount; 
    }
    next();
})
export class Contribution extends Document {
    @Prop({ type: Types.ObjectId, ref: 'Campaign', required: true })
    campaignId: Types.ObjectId;

    @Prop({ required: true })
    userId: string;

    @Prop({ required: true, min: 0 })
    amount: number;

    @Prop({ default: () => new Date() })
    date: Date;

    @Prop({ default: 1, min: 1 })
    frequency: number; 

    @Prop({ min: 0 })
    avgContributionAmount: number;
}

export const ContributionSchema = SchemaFactory.createForClass(Contribution);
