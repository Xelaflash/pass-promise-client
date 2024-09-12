import { RequestTimer } from './utils/components/RequestTimer';
import { getData } from './utils/data';

export default function Home() {
  const dataPromise = getData();

  return (
    <main className="flex min-h-screen justify-center items-center bg-slate-200 text-slate-950">
      <RequestTimer dataPromise={dataPromise} />
    </main>
  );
}
