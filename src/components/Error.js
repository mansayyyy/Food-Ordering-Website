import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oopsss!!</h1>
      <h2>Something went wrong</h2>
      <h3>
        {err.status}:{err.status.Text}
      </h3>
    </div>
  );
};

export default Error;
