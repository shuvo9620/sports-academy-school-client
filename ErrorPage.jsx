import { useRouteError } from "react-router-dom";
import img from './src/assets/images/404.gif';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img className="mx-auto" src={img} alt="" />
      <p className="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}