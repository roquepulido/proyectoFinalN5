import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
function Vacante(props) {
    const vacante = props.vacante[0];
    const skills = JSON.parse(vacante.skills);
    const { data, setData, post, progress } = useForm({
        email: "",
        CV: null,
        vacante_id: vacante.id,
    });

    function submit(e) {
        e.preventDefault();
        post(route("aplicar"));
    }

    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center flex-col">
                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {vacante.categoria}
                            </h5>
                            <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {vacante.titulo}
                            </h6>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {vacante.descripcion}
                            </p>
                            <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Experiencia : {vacante.experiencia}
                            </h6>
                            <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Salario : $ {vacante.salario}
                            </h6>
                            <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Ubicacion : {vacante.ubicacion}
                            </h6>
                            <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {skills.map((skill, id) => {
                                    return (
                                        <span
                                            key={id}
                                            className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"
                                        >
                                            {skill.label}
                                        </span>
                                    );
                                })}
                            </h6>
                        </div>

                        <div className="w-full max-w-sm my-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <form className="space-y-6" onSubmit={submit}>
                                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                                    Quieres Aplicar
                                </h5>
                                {props.flash.message}

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Tu Correo
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="CV"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Ingresa tu CV
                                    </label>
                                    <input
                                        type="file"
                                        name="CV"
                                        id="CV"
                                        value={data.avatar}
                                        onChange={(e) =>
                                            setData("CV", e.target.files[0])
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                    {progress && (
                                        <progress
                                            value={progress.percentage}
                                            max="100"
                                        >
                                            {progress.percentage}%
                                        </progress>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    disabled={
                                        props.flash.message ? true : false
                                    }
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Vacante;
