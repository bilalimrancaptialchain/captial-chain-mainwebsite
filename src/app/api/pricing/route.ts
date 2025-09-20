import { NextRequest, NextResponse } from 'next/server';
import { challengePricing, tradingChallengeData } from '@/constants/trading-challenge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const challengeType = searchParams.get('challenge_type');
    const challengeStep = searchParams.get('challenge_step');
    const accountSize = searchParams.get('account_size');

    // If specific parameters are provided, return specific pricing
    if (challengeType && challengeStep && accountSize) {
      const key = `${challengeType}-${challengeStep}-${accountSize}` as keyof typeof challengePricing;
      const pricing = challengePricing[key];
      
      if (pricing) {
        return NextResponse.json({
          success: true,
          data: {
            challenge_type: challengeType,
            challenge_step: challengeStep,
            account_size: accountSize,
            price: pricing.price,
            original_price: pricing.originalPrice,
            product_name: `${challengeType} ${challengeStep === '1' ? 'One Step' : 'Two Step'} ${accountSize}`
          }
        });
      } else {
        return NextResponse.json({
          success: false,
          error: 'Pricing not found for the specified parameters'
        }, { status: 404 });
      }
    }

    // Return all pricing data
    return NextResponse.json({
      success: true,
      data: {
        challengePricing,
        tradingChallengeData: tradingChallengeData.challenges,
        paymentMethods: tradingChallengeData.payment_methods,
        challengeFeatures: tradingChallengeData.challenge_features
      }
    });

  } catch (error) {
    console.error('Pricing API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { challenge_type, challenge_step, account_size } = body;

    if (!challenge_type || !challenge_step || !account_size) {
      return NextResponse.json({
        success: false,
        error: 'Missing required parameters: challenge_type, challenge_step, account_size'
      }, { status: 400 });
    }

    const key = `${challenge_type}-${challenge_step}-${account_size}` as keyof typeof challengePricing;
    const pricing = challengePricing[key];
    
    if (!pricing) {
      return NextResponse.json({
        success: false,
        error: 'Pricing not found for the specified parameters'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: {
        challenge_type,
        challenge_step,
        account_size,
        price: pricing.price,
        original_price: pricing.originalPrice,
        product_name: `${challenge_type} ${challenge_step === '1' ? 'One Step' : 'Two Step'} ${account_size}`
      }
    });

  } catch (error) {
    console.error('Pricing API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
}
