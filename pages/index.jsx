// Import the action creators 'incremented' and 'decremented' from the 'counterSlice'.
import { decremented, incremented } from "@/src/store/features/counterSlice";

// Import the 'Head' component from 'next/head' to set document head metadata.
import Head from "next/head";

// Import 'useDispatch' and 'useSelector' hooks from 'react-redux' to interact with the Redux store.
import { useDispatch, useSelector } from "react-redux";

// Define your main application component.
export default function Home() {
  // Use 'useSelector' to select the 'counter' state from the Redux store.
  const { value } = useSelector((state) => state.counter);

  // Use 'useDispatch' to get access to the Redux store's 'dispatch' function.
  const dispatch = useDispatch();

  return (
    <>
      {/* Set document head metadata */}
      <Head>
        <title>Boilerplate</title>
      </Head>

      <main>
        {/* Display the current counter value */}
        <h1 className="text-xl lg:text-6xl text-center my-10 uppercase tracking-[2px]">
          Hello {value}
        </h1>
        <div className="flex justify-center gap-x-8 items-center">
          {/* Button to increment the counter value, also using bg silver on this button which is declared into tailwind config */}
          
          <button
            onClick={() => dispatch(incremented())}
            className="bg-silver text-white px-12 py-2 text-2xl rounded-lg"
          >
            +
          </button>
          {/* Button to decrement the counter value */}
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
