// src/components/Calculator.js
import React, { useEffect, useState } from "react";

const Main_clac = () => {
  const [purchasePrice, setPurchasePrice] = useState(30000);
  const [salePrice, setSalePrice] = useState(20000);
  const [expenses, setExpenses] = useState(5000);
  const [investmentType, setInvestmentType] = useState("Long Term");
  const [annualIncome, setAnnualIncome] = useState("$45001 - $120000");
  const [capitalGains, setCapitalGains] = useState(0);
  const [longTermDiscount, setLongTermDiscount] = useState(0);
  const [netCapitalGains, setNetCapitalGains] = useState(0);
  const [taxToPay, setTaxToPay] = useState(0);

  const incomeTaxRates = {
    "$0 - $18200": { base: 0, rate: 0, title: "0 %" },
    "$18201 - $45000": { base: 0, rate: 19, title: "Nil + 19% of over $18201" },
    "$45001 - $120000": {
      base: 5092,
      rate: 32.5,
      title: "$5,092 + 32.5% of over $45001",
    },
    "$120001 - $180000": {
      base: 29467,
      rate: 37,
      title: "$29,467 + 37% of excess over $18201",
    },
    "$180001 and over": {
      base: 51667,
      rate: 45,
      title: "$51,667 + 45% of excess over $18201",
    },
  };

  const calculateTax = () => {
    const gains =
      salePrice > purchasePrice
        ? salePrice - purchasePrice - expenses
        : purchasePrice - salePrice - expenses;
    const discount =
      investmentType === "Long Term" && gains > 0 ? gains * 0.5 : 0;
    const netGains = gains - discount;

    const incomeTaxRate = incomeTaxRates[annualIncome];
    const tax = (incomeTaxRate.rate / 100) * netGains;

    setCapitalGains(gains);
    setLongTermDiscount(discount);
    setNetCapitalGains(netGains);
    setTaxToPay(tax);
  };
  useEffect(() => {
    calculateTax();
  });
  return (
    <div className="calculator bg-white p-6 rounded-lg shadow-md mx-auto max-w-3xl">
      <h2 className="text-3xl text-center font-bold mb-6">
        Free Crypto Tax Calculator Australia
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <label className=" mb-2 w-1/3 text-md mr-4">Financial Year</label>

          <select className=" w-full lg:w-2/3 md:w-2/3  border p-2 bg-gray-100 rounded-md font-bold">
            <option value="Fy-2024-25" className="text-lg">
              FY 2024-2025
            </option>
          </select>
        </div>
        <div className="w-full">
          <label className=" mb-2 w-1/3 text-md mr-4 ">Country</label>
          <select className="w-full lg:w-2/3 md:w-2/3 border p-2 bg-gray-100 rounded-lg font-bold">
            <option value="Fy-2024-25 " className="text-lg">
              Australia
            </option>
          </select>
        </div>
        <hr className="my-3 block mx-0" />
        <hr className="my-3 hidden mx-0 lg:block md:block" />
        <div>
          <label className="block mb-2 text-md">
            Enter purchase price of Crypto
          </label>
          <input
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(Number(e.target.value))}
            className="border p-2 w-full rounded font-bold bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2 text-md">
            Enter sale price of Crypto
          </label>
          <input
            type="number"
            value={salePrice}
            onChange={(e) => setSalePrice(Number(e.target.value))}
            className="border p-2 w-full rounded font-bold bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2 text-md">Enter your Expenses</label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(Number(e.target.value))}
            className="border p-2 w-full rounded font-bold bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2 text-md">Investment Type</label>
          <div className="flex">
            <div className="w-full m-1">
              <button
                className={`border-2 border-solid  p-2 w-full rounded-lg m-1 ${
                  investmentType === "Short Term"
                    ? "border-blue-500 text-blue-500  rounded-lg"
                    : "border-black"
                }`}
                onClick={() => setInvestmentType("Short Term")}
              >
                Short Term
              </button>
              <p>&lt; 12 months</p>
            </div>
            <div className="w-full m-1">
              <button
                className={`  border-2 border-solid p-2 w-full rounded-lg m-1 ${
                  investmentType === "Long Term"
                    ? "border-blue-500 text-blue-500  rounded-lg"
                    : "border-black"
                }`}
                onClick={() => setInvestmentType("Long Term")}
              >
                Long Term
              </button>
              <p>&gt; 12 months</p>
            </div>
          </div>
        </div>
        <div>
          <label className="block mb-2 text-md">
            Select Your Annual Income
          </label>
          <select
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            className="border p-2 w-full rounded font-bold bg-gray-100"
          >
            {Object.keys(incomeTaxRates).map((income) => (
              <option key={income} value={income}>
                {income}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center">
          <p>Tax Rate</p>
          <p>{incomeTaxRates[annualIncome].title}</p>
        </div>
        {investmentType === "Long Term" && (
          <div>
            <p>Capital Gains Amount: </p>
            <p className="p-2 bg-gray-100 rounded-lg">${capitalGains}</p>
          </div>
        )}
        {investmentType === "Long Term" && (
          <div>
            <p>Discount for Long Term Gains: </p>
            <p className="p-2 bg-gray-100 rounded-lg">${longTermDiscount}</p>
          </div>
        )}

        <div className="font-bold mt-4 rounded-xl  bg-green-200 p-4 text-center">
          <p>Net Capital gains tax amount</p>
          <p className="text-green-500 text-2xl">${netCapitalGains}</p>
        </div>
        <div className="font-bold mt-4 rounded-xl  bg-blue-200 p-4 text-center">
          <p>The tax you need to pay</p>
          <p className="text-blue-500 text-2xl">${taxToPay}</p>
        </div>
      </div>
    </div>
  );
};

export default Main_clac;
