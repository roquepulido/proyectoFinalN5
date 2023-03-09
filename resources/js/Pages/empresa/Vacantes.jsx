import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import VacanteCard from "@/Components/VacanteCard";

function Vacantes(props) {
    const vacantes = props.vacantes;
    return (
        <>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Vacantes
                    </h2>
                }
            >
                <Head title="Vacantes - Empresa" />
                <h1>{props.flash.message}</h1>
                <div className="pt-5 ml-6">
                    <Link
                        href={route("vacante.crear")}
                        className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        Crear vacante
                    </Link>
                </div>

                <div className="p-12 flex flex-wrap justify-center gap-5">
                    {vacantes.map((vacante, id) => {
                        return <VacanteCard key={id} data={vacante} />;
                    })}
                </div>
            </AuthenticatedLayout>
        </>
    );
}

export default Vacantes;
