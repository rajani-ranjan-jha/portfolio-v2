"use client";
import { Smile } from "lucide-react";
import React, { useEffect, useState } from "react";

const Loading = () => {
  const [dot, setDot] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDot((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-3xl gap-4">
      <p className="text-white">Loading{dot}</p>
    </div>
  );
};

export default Loading;
