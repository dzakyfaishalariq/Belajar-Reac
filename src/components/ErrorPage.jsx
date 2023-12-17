import { useRouteError } from "react-router-dom";

function ErrorPage () {
    const error = useRouteError()
    return <div>Maaf terjadi error 404</div>
}
export default ErrorPage;