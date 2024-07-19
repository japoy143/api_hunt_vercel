function MyListLoader() {
  return (
    <>
<<<<<<< HEAD
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className=" bg-bgwhite h-40 w-full mt-4 rounded-md"
=======
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className="mt-4 h-40 w-full rounded-md bg-bgwhite"
>>>>>>> c916af2 (feat: vercel deployment)
        ></div>
      ))}
    </>
  );
}

export default MyListLoader;
