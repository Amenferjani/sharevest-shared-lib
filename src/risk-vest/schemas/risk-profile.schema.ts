import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Pre } from '@typegoose/typegoose';

enum RiskType {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
}

@Schema({ timestamps: true }) 
export class RiskProfile extends Document {
  @Prop({ required: true, index: true })
  userId: string;

  @Prop({ required: true, enum: RiskType })
  riskType: RiskType;

  @Prop({ required: true})
  score: number;

  @Prop({ required: true, type: [String] })
  investmentGoals: string[];

  @Prop({ required: true, enum: ['short-term', 'medium-term', 'long-term'] })
  timeHorizon: 'short-term' | 'medium-term' | 'long-term';

  @Prop({
      type: {
          income: { type: Number, required: true },
          netWorth: { type: Number, required: true },
          investmentExperience: { type: String, required: true },
    },
      _id: false,
      required: true,
  })
  financialSituation: {
      income: number;
      netWorth: number;
      investmentExperience: string;
  };

  @Prop({
      type: {
          assetClasses: { type: [String], required: true },
          ethicalInvesting: { type: Boolean, default: false },
    },
      _id: false,
      required: true,
  })
  preferences: {
      assetClasses: string[];
      ethicalInvesting: boolean;
  };

  @Prop({ required: true, max: 100 ,min: 0 })
  liquidityNeeds: number;

  @Prop({ required: true, max: 100 ,min: 0 })
  debtLevel: number;

  @Prop({ required: true, default: 'single' })
  taxStatus: 'single' | 'married' | 'joint';

  @Prop({ default: Date.now })
  createdAt?: Date;

  @Prop({ default: () => new Date() })
  updatedAt: Date;

  @Prop()
  description?: string;
}

export const RiskProfileSchema = SchemaFactory.createForClass(RiskProfile);