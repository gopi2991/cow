"use client";

import React, { useEffect, useState } from "react";
import { Milk } from "@/app/type";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { createMilk, fetchMilk } from "@/store/milkMiddleware";
export default function MilkManager() {
  const milkList = useAppSelector((state: any) => state.milk.records);

  const [milkDetails, setMilkDetails] = useState<Milk>({
    id: 0,
    cowName: "",
    morning: 0,
    evening: 0,
    price: "",
    total: 0,
    revenue: 0,
  });
  const [milkRecords, setMilkRecords] = useState<Milk[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMilk());
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newMilkRecord: Milk = {
      id: Date.now(),
      cowName: milkDetails.cowName,
      morning: milkDetails.morning,
      evening: milkDetails.evening,
      price: milkDetails.price,
      total: milkDetails.morning + milkDetails.evening,
      revenue:
        (milkDetails.morning + milkDetails.evening) *
        parseFloat(milkDetails.price),
    };
    const result = await dispatch(createMilk(newMilkRecord));
    console.log("result", result);
    if (result.type === "milk/create/fulfilled") {
      // setMilkRecords([...milkRecords, result.payload]);
      dispatch(fetchMilk());
    }
    setMilkRecords([...milkRecords, newMilkRecord]);
    setMilkDetails({
      id: 0,
      cowName: "",
      morning: 0,
      evening: 0,
      price: "",
      total: 0,
      revenue: 0,
    });
  };
  const totalMilk = milkList.reduce(
    (acc: number, record: Milk) => acc + record.total,
    0,
  );
  const totalRevenue = milkList.reduce(
    (acc: number, record: Milk) => acc + record.revenue,
    0,
  );

  return (
    <div>
      <div className="flex">
        <div className="w-1/2 p-4">
          <h2 className="text-lg font-bold mb-4">Milk Entry</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cowName" className="block font-medium">
                Cow Name
              </label>
              <input
                type="text"
                id="cowName"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={milkDetails.cowName}
                onChange={(e) =>
                  setMilkDetails({ ...milkDetails, cowName: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="morning" className="block font-medium">
                Morning Milk
              </label>
              <input
                type="number"
                id="morning"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={milkDetails.morning}
                onChange={(e) =>
                  setMilkDetails({
                    ...milkDetails,
                    morning: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="evening" className="block font-medium">
                Evening Milk
              </label>
              <input
                type="number"
                id="evening"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={milkDetails.evening}
                onChange={(e) =>
                  setMilkDetails({
                    ...milkDetails,
                    evening: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="price" className="block font-medium">
                Price
              </label>
              <input
                type="number"
                id="price"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={milkDetails.price}
                onChange={(e) =>
                  setMilkDetails({ ...milkDetails, price: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Add Milk Record
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-lg font-bold mb-4">Milk Records</h2>
          <div className="space-y-2">
            {milkList.length > 0 &&
              milkList.map((r: Milk, index: number) => (
                <div
                  key={`cow-${index}`}
                  className="border border-gray-300 rounded px-3 py-2"
                >
                  {r.cowName} → {r.morning} + {r.evening} = {r.total} L | ₹
                  {r.revenue}
                </div>
              ))}
            <hr className="my-3" />
            <h3>Total Milk: {totalMilk} L</h3>
            <h3>Total Revenue: ₹{totalRevenue}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
