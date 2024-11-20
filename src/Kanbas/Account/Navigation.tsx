import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const location = useLocation();
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="wd list-group fs-6 rounded-0">
      {links.includes("Signin") && (
        <Link
          to={`/Kanbas/Account/Signin`}
          className={`list-group-item ${
            location.pathname === "/Kanbas/Account/Signin"
              ? "active"
              : "text-danger"
          } border-0`}
        >
          Signin
        </Link>
      )}
      {links.includes("Signup") && (
        <Link
          to={`/Kanbas/Account/Signup`}
          className={`list-group-item ${
            location.pathname === "/Kanbas/Account/Signup"
              ? "active"
              : "text-danger"
          } border-0`}
        >
          Signup
        </Link>
      )}
      {links.includes("Profile") && (
        <Link
          to={`/Kanbas/Account/Profile`}
          className="list-group-item text-danger border-0"
        >
          Profile
        </Link>
      )}
    </div>
  );
}
