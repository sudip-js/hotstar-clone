import { useSelector } from "react-redux";

export const useAuth = () => {
  const user = useSelector(({ auth }) => auth?.user);
  return {
    user,
  };
};
