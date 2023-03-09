import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import Toggle from "@/Components/Toggle";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        aplicante: true,
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
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

        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100 d-flex justify-content-center align-items-center">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div
                            className="card shadow-2-strong card-registration"
                            style={{ borderRadius: "15px" }}
                        >
                            <div className="card-body p-4 p-md-5">
                                <div className="row justify-content-center align-items-center h-100">
                                    <h2>Registro</h2>
                                    <form onSubmit={submit}>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputEmail1"
                                                className="form-label"
                                            >
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                aria-describedby="nameHelp"
                                                name="name"
                                                value={data.name}
                                                onChange={handleOnChange}
                                                required
                                            />
                                            <p className="text-danger">
                                                {errors.name}
                                            </p>
                                            <div
                                                id="emailHelp"
                                                className="form-text"
                                            >
                                                Ingresa tu nombre.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputEmail1"
                                                className="form-label"
                                            >
                                                Correo Electronico
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                value={data.email}
                                                name="email"
                                                onChange={handleOnChange}
                                                required
                                            />
                                            <p className="text-danger">
                                                {errors.email}
                                            </p>
                                            <div
                                                id="emailHelp"
                                                className="form-text"
                                            >
                                                Ingresa tu correo electronico.
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-6">
                                                <label
                                                    htmlFor="password1"
                                                    className="form-label"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password1"
                                                    name="password"
                                                    value={data.password}
                                                    onChange={handleOnChange}
                                                    required
                                                />
                                                <p className="text-danger">
                                                    {errors.password}
                                                </p>
                                            </div>
                                            <div className="col-6">
                                                <label
                                                    htmlFor="password2"
                                                    className="form-label"
                                                >
                                                    Password confirmacion
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password2"
                                                    name="password_confirmation"
                                                    value={
                                                        data.password_confirmation
                                                    }
                                                    onChange={handleOnChange}
                                                    required
                                                />
                                                <p className="text-danger">
                                                    {
                                                        errors.password_confirmation
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="empresaRol"
                                                    name="empresaRol"
                                                    value="empresa"
                                                    onChange={handleOnChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="empresaRol"
                                                >
                                                    Empresa
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="empresaRol"
                                                    id="empresaRol2"
                                                    value="postulante"
                                                    onChange={handleOnChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="exampleRadios2"
                                                >
                                                    Postulante
                                                </label>
                                                <p className="text-danger">
                                                    {errors.empresaRol}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Registrar
                                        </button>
                                    </form>
                                    <a
                                        className="mt-2 text-center"
                                        href={route("login")}
                                    >
                                        Ya tienes cuenta...
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        // <GuestLayout>
        //     <Head title="Register" />

        //     <form onSubmit={submit}>
        //         <div>
        //             <InputLabel htmlFor="name" value="Name" />

        //             <TextInput
        //                 id="name"
        //                 name="name"
        //                 value={data.name}
        //                 className="mt-1 block w-full"
        //                 autoComplete="name"
        //                 isFocused={true}
        //                 onChange={handleOnChange}
        //                 required
        //             />

        //             <InputError message={errors.name} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="email" value="Email" />

        //             <TextInput
        //                 id="email"
        //                 type="email"
        //                 name="email"
        //                 value={data.email}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 onChange={handleOnChange}
        //                 required
        //             />

        //             <InputError message={errors.email} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="password" value="Password" />

        //             <TextInput
        //                 id="password"
        //                 type="password"
        //                 name="password"
        //                 value={data.password}
        //                 className="mt-1 block w-full"
        //                 autoComplete="new-password"
        //                 onChange={handleOnChange}
        //                 required
        //             />

        //             <InputError message={errors.password} className="mt-2" />
        //         </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

        //             <TextInput
        //                 id="password_confirmation"
        //                 type="password"
        //                 name="password_confirmation"
        //                 value={data.password_confirmation}
        //                 className="mt-1 block w-full"
        //                 autoComplete="new-password"
        //                 onChange={handleOnChange}
        //                 required
        //             />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>
                <div className="mt-4">
                    <Toggle
                        name={"Empresa"}
                        onChange={handleOnChange}
                        value="Empresa"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        ¿Ya estas registrado?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Registrarse
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
