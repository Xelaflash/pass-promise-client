'use client';

import { useEffect, useState } from 'react';

type ResponseData = {
  name: string;
  age: number;
  email: string;
};

type RequestTimerProps = {
  dataPromise: Promise<ResponseData>;
};

export function RequestTimer({ dataPromise }: RequestTimerProps) {
  const [data, setData] = useState<ResponseData | null>(null);

  useEffect(() => {
    dataPromise.then(setData);
  }, [dataPromise]);

  return (
    <div className="flex flex-col gap-2">
      <Timer stop={!!data} />
      <p className="mt-4">{!data ? 'Loading...' : `Name: ${data.name}, Age: ${data.age}, Email: ${data.email}`}</p>
    </div>
  );
}

function Timer({ stop }: { stop: Boolean }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (stop) return;
    const start = Date.now();
    const interval = setInterval(() => {
      setTime(Date.now() - start);
    }, 10);

    return () => clearInterval(interval);
  }, [stop]);

  return (
    <p className="font-xl font-bold text-yellow-700">
      <span className="tabular-nums">{time}</span>
    </p>
  );
}
