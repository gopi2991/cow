"use client";
import React, { useEffect, useState } from "react";
import { Cows } from "../type";
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { createCow, fetchCows } from "@/store/cowMiddleware";

export default function CowManager() {
  const [formData, setFormData] = useState<Cows>({
    name: "",
    age: 0,
    breed: "",
    milkProduction: 0,
  });
  const cowList = useAppSelector((state: any) => state.cows.cows, shallowEqual);
  console.log("cowList", cowList);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCows());
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // setCowList([...cowList, formData]);
    const result = await dispatch(createCow(formData));
    console.log("result", result);
    if (result.type === "cow/create/fulfilled") {
      dispatch(fetchCows());
    }
    setFormData({
      name: "",
      age: 0,
      breed: "",
      milkProduction: 0,
    });
  };
  return (
    <div>
      <div className="flex gap-4">
        <div className="w-1/2 p-4">
          <h2 className="text-lg font-bold mb-4">Add Cow</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cowName" className="block font-medium">
                Cow Name
              </label>
              <input
                type="text"
                id="cowName"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="cowAge" className="block font-medium">
                Cow Age
              </label>
              <input
                type="number"
                id="cowAge"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={formData.age}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    age: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="cowBreed" className="block font-medium">
                Cow Breed
              </label>
              <input
                type="text"
                id="cowBreed"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={formData.breed}
                onChange={(e) =>
                  setFormData({ ...formData, breed: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="cowMilkProduction" className="block font-medium">
                Milk Production
              </label>
              <input
                type="number"
                id="cowMilkProduction"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={formData.milkProduction}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    milkProduction: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Add Cow
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-lg font-bold mb-4">Cow List</h2>
          <div className="space-y-2">
            {cowList.length > 0 &&
              cowList?.map((cow: Cows, index: number) => (
                <ul
                  key={index}
                  className="border border-gray-300 rounded px-3 py-2"
                >
                  <li>
                    <strong>Name:</strong> {cow.name}
                  </li>
                  <li>
                    <strong>Age:</strong> {cow.age}
                  </li>
                  <li>
                    <strong>Breed:</strong> {cow.breed}
                  </li>
                  <li>
                    <strong>Milk Production:</strong> {cow.milkProduction}
                  </li>
                </ul>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
