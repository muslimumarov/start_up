import { Link, useLocation } from "react-router-dom";

function BredCroump(}) {
  const location = useLocation();
  const currentLink = [];
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "").map((crumb) => {
      currentLink.push(`/${crumb}`)
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink.join("")}>{crumb}</Link>  
        </div>
      );
    });
  return <div className="breadcrumbs">{crumbs}</div>; //breadcrumb
}

export default BredCroump;
