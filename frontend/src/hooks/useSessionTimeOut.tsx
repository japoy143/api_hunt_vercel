import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/AuthSlice";
import { toast } from "sonner";

const useSessionTimeOut = (milliseconds: number) => {
  const isSession = useSelector(
    (state: RootState) => state.auth.isSessionTimeout,
  );
  const dispatch = useDispatch();

  useEffect(() => {
<<<<<<< HEAD
    let sessionId: number;

    if (!isSession) {
      sessionId = setTimeout(() => {
=======
    let sessionId: number | null;

    if (!isSession) {
      sessionId = window.setTimeout(() => {
>>>>>>> c916af2 (feat: vercel deployment)
        dispatch(logout());
        toast.error("Session Expired");
        console.log("Refresh Token Expired");
      }, milliseconds);
    }

    return () => {
<<<<<<< HEAD
      clearTimeout(sessionId);
=======
      if (sessionId !== null) {
        window.clearTimeout(sessionId);
      }
>>>>>>> c916af2 (feat: vercel deployment)
    };
  }, [dispatch, isSession, milliseconds]);
};

export default useSessionTimeOut;
