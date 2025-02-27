import { useState, useEffect } from "react";
import useSessionTimeOut from "../hooks/useSessionTimeOut";
import { useDispatch } from "react-redux";
import { setAPI } from "../redux/APISlice";
import { ApiCardsList, MyListLoader } from "../components/exports";
import Layout from "../layout/Layout";
import Navbar from "../layout/Navbar";
<<<<<<< HEAD
import axios from "axios";
=======
import axios from "../api/axios";
>>>>>>> c916af2 (feat: vercel deployment)

function UserPage() {
  const [searchInput, setSearchInput] = useState<string>("");

  const [isDataReady, setIsDataReady] = useState<boolean>(false);

  //15 hour session expire
  const expireTime = 1000 * 60 * 15;

  //status user
  useSessionTimeOut(expireTime);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
<<<<<<< HEAD
      const res = await axios.get("http://localhost:3000/APIs/");

      if (res.status === 200) {
        dispatch(setAPI(res.data));
=======
      const res = await axios.get("/APIs/");

      if (res.status === 200) {
        dispatch(setAPI(res.data));
        console.log(res.data);
>>>>>>> c916af2 (feat: vercel deployment)
        setIsDataReady(true);
      } else {
        console.error(res.status);
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <Layout>
      <Navbar />
<<<<<<< HEAD
      <main className="w-screen p-20">
=======
      <main className="mx-auto h-screen w-screen xs:px-4 sm:px-6 md:px-8 lg:px-20">
>>>>>>> c916af2 (feat: vercel deployment)
        <h1 className="text-center font-poppins text-4xl font-medium">
          Explore API's
        </h1>
        <br />
        <p className="text-center font-poppins text-lg">
          Find the exact API's for your next project to Unlock the potential of
          your next project
        </p>
        <br />
        <div className="relative h-10 w-full">
          <img
            src="/icons/search.svg"
            className="absolute left-4 top-2 h-6 w-6"
          />
          <input
            className="h-full w-full rounded-md bg-bgwhite px-14 font-poppins outline-none"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <br />

<<<<<<< HEAD
        <div className="h-[700px] overflow-scroll">
=======
        <div className="h-full flex-1 overflow-scroll">
>>>>>>> c916af2 (feat: vercel deployment)
          {(isDataReady && <ApiCardsList searchInput={searchInput} />) || (
            <div className="flex flex-col items-center justify-center">
              <MyListLoader />
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default UserPage;
