import React from "react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function SkillSpan({ text }) {
    return (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {text}
        </span>
    );
}
function EditButton({ id }) {
    return (
        <div className="absolute top-10 right-0 p-5 cursor-pointer hover:scale-125 ease-in duration-300">
            <a href={route("Vacantes.update.get", { id: id })}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                </svg>
            </a>
        </div>
    );
}
function DeleteButton({ id }) {
    return (
        <div className="absolute top-0 right-0 p-5 cursor-pointer hover:scale-125 ease-in duration-300">
            <a onClick={() => showSwal(id)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash3 stroke-red-500"
                    viewBox="0 0 16 16"
                >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
            </a>
        </div>
    );
}

function VacanteCard({ data, canEdit }) {
    const skills = JSON.parse(data.skills);
    const showSwal = (id) => {
        MySwal.fire({
            title: "¿Estas Seguro?",
            text: "No podras egresar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Borrar!",
        }).then((result) => {
            if (result.isConfirmed) {
                return fetch(route("Vacantes.delete", { id: id })).then(
                    Swal.fire("Borrado!", "", "success").then((result) => {
                        if (result.isConfirmed) {
                            location.reload();
                        }
                    })
                );
            }
        });
    };

    return (
        <>
            <div className="relative md:w-1/4 w-full rounded overflow-hidden shadow-lg py-5">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl">{data.titulo}</div>
                    <div className=" text-md mb-2">{data.categoria}</div>

                    <p className="text-gray-700 text-base">
                        {data.descripcion}
                    </p>
                    <h3>Salario : {data.salario}</h3>
                    <h3>Ubicacion : {data.ubicacion}</h3>
                </div>

                <div className="px-6 pt-4 pb-2">
                    {skills.map((skill, id) => (
                        <SkillSpan key={id} text={skill.label} />
                    ))}
                </div>
                {canEdit ? (
                    <>
                        <EditButton id={data.id} />
                        <DeleteButton id={data.id} />
                    </>
                ) : (
                    ""
                )}
                <a
                    href={route("get.vacante", { id: data.id })}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
                >
                    Ver vacante
                </a>
            </div>
        </>
    );
}

export default VacanteCard;
