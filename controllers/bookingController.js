import stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);


export const getCheckoutSession = async(req,res)=>{

    console.log(`${req.protocol}://${req.get('host')}/api/bookings/checkout-success`)
    console.log(`${req.protocol}://${'127.0.0.1:8000'}/api/bookings/checkout-cancel`)

 const session = await  stripeInstance.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: "payment",
        success_url: `${req.protocol}://${req.get('host')}/api/blogs`,
        cancel_url: `${req.protocol}://${req.get('host')}/api/blogs`,
        customer_email: 'randommail@mymail.com',
        client_reference_id: req.params.id,
        line_items: [
            {
              quantity: 1,
              price_data: {
                currency: 'inr',
                unit_amount: 2000,
                product_data: {
                  name: `${req.params.id} Tour`,
                  description: 'A tour description',
                  images: [`https://www.natours.dev/img/tours/tour-1-cover.jpg`],
                },
              },
            },
          ],
    });
    res.json({message:'Checkout session created',data:session});
}

export const success = (req,res)=>{
    res.json({message:'Payment successful'});
}

export const cancel = (req,res)=>{
    res.json({message:'Payment cancelled'});
}

