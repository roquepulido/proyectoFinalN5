import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Log in" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            {status && (
                                <div className="mb-4 font-medium text-sm text-green-600">
                                    {status}
                                </div>
                            )}

                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-5">
                                    Login
                                </h5>
                                <form onSubmit={submit}>
                                    <p className="my-2 text-danger">
                                        {errors.email}
                                    </p>
                                    <div className="form-floating mb-3 ">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={data.email}
                                            onChange={handleOnChange}
                                            placeholder="name@example.com"
                                        />
                                        <label htmlFor="floatingInput">
                                            Correo Electronico
                                        </label>
                                    </div>
                                    <p className="my-2 text-danger">
                                        {errors.password}
                                    </p>
                                    <div className="form-floating mb-3">
                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            onChange={handleOnChange}
                                            placeholder="Password"
                                            value={data.password}
                                        />
                                        <label htmlFor="floatingPassword">
                                            Contraseña
                                        </label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="remember"
                                            value={data.remember}
                                            onChange={handleOnChange}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="rememberPasswordCheck"
                                        >
                                            Recordar Contraseña
                                        </label>
                                    </div>
                                    <div className="d-grid">
                                        <button
                                            className="btn btn-primary btn-login text-uppercase fw-bold"
                                            type="submit"
                                        >
                                            Ingresar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
