import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useEffect } from "react";
import SelectElement from "@/Components/SelectElement";
import SelectMultiple from "@/Components/SelectMultiple";

export default function UpdateVacante(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: props.auth.user.id,
        id: props.vacante.id,
        titulo: props.vacante.titulo,
        descripcion: props.vacante.descripcion,
        experiencia: props.vacante.experiencia,
        skills: JSON.parse(props.vacante.skills),
        ubicacion: props.vacante.ubicacion_id,
        salario: props.vacante.salario_id,
        categoria: props.vacante.categoria_id,
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };
    const handleOnChangeSelect = (skillList) => {
        setData("skills", skillList);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("vacante.update"));
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Crear Vacante
                </h2>
            }
        >
            <Head title="Vacante Editar" />
            {props.status}

            {JSON.stringify(data)}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel
                                        htmlFor="titulo"
                                        value="Titulo"
                                    />

                                    <TextInput
                                        id="titulo"
                                        name="titulo"
                                        value={data.titulo}
                                        className="mt-1 block w-full"
                                        autoComplete="titulo"
                                        isFocused={true}
                                        onChange={handleOnChange}
                                        required
                                    />

                                    <InputError
                                        message={errors.titulo}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor=""
                                        value="Descripcion"
                                    />
                                    <textarea
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        name="descripcion"
                                        id="descripcion"
                                        cols="30"
                                        rows="5"
                                        onChange={handleOnChange}
                                        required
                                        value={data.descripcion}
                                    ></textarea>

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="experiencia"
                                        value="Experiencia"
                                    />

                                    <TextInput
                                        id="experiencia"
                                        type="text"
                                        name="experiencia"
                                        value={data.experiencia}
                                        className="mt-1 block w-full"
                                        autoComplete="experiencia"
                                        onChange={handleOnChange}
                                        required
                                    />

                                    <InputError
                                        message={errors.experiencia}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="categoria"
                                        value="Categoria"
                                        onChange={handleOnChange}
                                    />
                                    <SelectElement
                                        id="categoria"
                                        name="categoria"
                                        opciones={props.categorias}
                                        onChange={handleOnChange}
                                        value={data.categoria}
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="salario"
                                        value="Salario"
                                    />
                                    <SelectElement
                                        id="salario"
                                        name="salario"
                                        opciones={props.salarios}
                                        onChange={handleOnChange}
                                        value={data.salario}
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="ubicacion"
                                        value="Ubicacion"
                                    />
                                    <SelectElement
                                        id="ubicacion"
                                        name="ubicacion"
                                        opciones={props.ubicaciones}
                                        onChange={handleOnChange}
                                        value={data.ubicacion}
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="skills"
                                        value="Skills"
                                    />
                                    <SelectMultiple
                                        id="skills"
                                        name="skills"
                                        list={props.skills}
                                        onChange={handleOnChangeSelect}
                                        value={data.skills}
                                    />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton
                                        className="ml-4"
                                        disabled={processing}
                                    >
                                        Actualizar Vacante
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
