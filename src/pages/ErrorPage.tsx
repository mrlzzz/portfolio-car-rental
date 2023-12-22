import { useRouteError } from "react-router-dom";

type ErrorMessage = {
  statusText: string;
  message: string;
  data: string;
  status: number;
};

const ErrorPage = () => {
  const error: unknown = useRouteError();

  console.error(error);

  return (
    <>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>
            {(error as ErrorMessage).statusText ||
              (error as ErrorMessage).message}
          </i>
        </p>
        <p>{(error as ErrorMessage).data}</p>
        <p>Error code: {(error as ErrorMessage).status}</p>
      </div>
    </>
  );
};

export default ErrorPage;
