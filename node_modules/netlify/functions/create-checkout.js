// netlify/functions/create-checkout.js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const items = JSON.parse(event.body);

  const line_items = items.map(item => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.qty,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "paynow"],
      mode: "payment",
      line_items,
      success_url: "https://j0vanw.netlify.app/shop.html?success=true",
      cancel_url: "https://j0vanw.netlify.app/shop.html?canceled=true",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
