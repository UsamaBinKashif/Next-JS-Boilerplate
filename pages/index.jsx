import { decremented, incremented } from "@/src/store/features/counterSlice";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>

      <main>
        <h1 className="text-xl lg:text-6xl text-center my-10 uppercase tracking-[2px]">
          Hello {value}
        </h1>
        <div className="flex justify-center gap-x-8 items-center">
          <button
            onClick={() => dispatch(incremented())}
            className="bg-black text-white px-12 py-2 text-2xl rounded-lg"
          >
            +
          </button>
          <button
            onClick={() => dispatch(decremented())}
            className="bg-black text-white px-12 py-2 text-2xl rounded-lg"
          >
            -
          </button>
        </div>
      </main>
    </>
  );
}
