import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard(props) {
    let persona = "";
    switch (props.auth.user.rol) {
        case "empresa":
            persona = "EMPRESA";
            break;
        case "postulante":
            persona = "Postulante";
            break;
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            {props.auth.user.rol == "empresa" ? (
                <div className="pt-5 ml-6">
                    <Link
                        href={route("vacante.crear")}
                        className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        Crear vacante
                    </Link>
                </div>
            ) : (
                ""
            )}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in! {persona}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
