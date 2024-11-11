"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
// import useMasonry from "@/utils/useMasonry";
// import BasicPlanImg from "@/public/images/basic-plan.jpg";
// import ProPlanImg from "@/public/images/pro-plan.jpg";
// import EnterprisePlanImg from "@/public/images/enterprise-plan.jpg";

const plans = [
  {
    // img: BasicPlanImg,
    name: "Basic Plan",
    priceMonthly: "$9",
    priceYearly: "$90",
    description: "Essential tools for small businesses to get started.",
    features: ["5 Projects", "Basic Support", "1 GB Storage"],
  },
  {
    // img: ProPlanImg,
    name: "Pro Plan",
    priceMonthly: "$29",
    priceYearly: "$290",
    description: "Advanced features for growing businesses.",
    features: ["20 Projects", "Priority Support", "10 GB Storage"],
  },
  {
    // img: EnterprisePlanImg,
    name: "Enterprise Plan",
    priceMonthly: "$99",
    priceYearly: "$990",
    description: "Full access and premium support for large teams.",
    features: ["Unlimited Projects", "24/7 Support", "100 GB Storage"],
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Choose Your Plan
          </h2>
          <p className="text-lg text-indigo-200/65">
            Select the best plan that fits your needs and grow your business.
          </p>
        </div>

        <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
          {/* Billing Cycle Toggle */}
          <div className="relative inline-flex flex-wrap justify-center rounded-full bg-gray-800/40 p-1">
            <button
              className={`flex h-8 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors ${billingCycle === "monthly" ? "bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 text-indigo-500" : "text-gray-600 hover:text-indigo-500"}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`flex h-8 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors ${billingCycle === "yearly" ? "bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 text-indigo-500" : "text-gray-600 hover:text-indigo-500"}`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg border border-gray-700 p-6">
              <Image src={plan.img} alt={plan.name} className="mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-sm text-gray-400">{plan.description}</p>
              <div className="my-4 text-3xl font-bold text-indigo-500">
                {billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly}
                <span className="text-base font-medium"> / {billingCycle}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-indigo-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-9h4a1 1 0 010 2h-4a1 1 0 010-2zm0 4h4a1 1 0 110 2h-4a1 1 0 110-2zm0-8h4a1 1 0 110 2h-4a1 1 0 010-2z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-full bg-indigo-500 px-4 py-2 text-white font-medium hover:bg-indigo-600">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
