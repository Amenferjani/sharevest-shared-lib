import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Pre } from '@typegoose/typegoose';
import Sentiment from 'sentiment';

@Schema()
@Pre<Update>('save', function (next) {
    this.date = new Date();

    const sentiment = new Sentiment();
    const result = sentiment.analyze(this.message);
    if (result.score > 0) {
        this.sentiment = 'positive';
    } else if (result.score < 0) {
        this.sentiment = 'negative';
    } else {
        this.sentiment = 'neutral';
    }
    next();
})
export class Update extends Document {
    @Prop({ type: Types.ObjectId, ref: 'Campaign', required: true })
    campaignId: Types.ObjectId;

    @Prop({ required: true })
    message: string;

    @Prop({ default: () => new Date() })
    date: Date;

    @Prop()
    sentiment: 'positive' | 'negative' | 'neutral';
}

export const UpdateSchema = SchemaFactory.createForClass(Update);
