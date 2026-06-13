"use client";

import { useState } from "react";

export default function DatePlanner({
  onFinish,
}: {
  onFinish: (data: {
    date: string;
    place: string;
    dress: string;
  }) => void;
}) {
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("Pantai 🏖️");
  const [dress, setDress] = useState("");

  return (
    <div className="bg-white p-10 rounded-3xl shadow-xl w-[500px]">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">
        📅 Aturr jadwal kita sayang
      </h1>
      <p className="text-gray-600">
        Mana habisini aku ditinggalin ke malang,hmm sedih😭
      </p>
      <div className="absolute top-4 right-4 text-3xl animate-pulse">
                             💖
      </div>

      <label>Tanggal</label>

      <input
        type="date"
        className="border p-3 rounded-xl w-full mt-2"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label className="block mt-5">
        Mau Kemana?
      </label>

      <select
        className="border p-3 rounded-xl w-full mt-2"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      >
        <option>mantaiii 🏖️</option>
        <option>ngopii ☕</option>
        <option>muncakkk🏔️</option>
        <option>jalan-jalan 🚶️</option>
        <option>Kuliner 🍜</option>
      </select>

      <label className="block mt-5">
        Dresscode
      </label>

      <input
        className="border p-3 rounded-xl w-full mt-2"
        placeholder="Misal: Hitam Putih"
        value={dress}
        onChange={(e) => setDress(e.target.value)}
      />

      <button
        onClick={() =>
          onFinish({
            date,
            place,
            dress,
          })
        }
        className="bg-pink-500 text-white w-full mt-6 p-3 rounded-xl"
      >
        Lanjut ❤️
      </button>
    </div>
  );

}  