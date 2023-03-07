import { Head, Link } from "@inertiajs/react";
import React from "react";
import VacanteCard from "./VacanteCard";

function main(props) {
    return (
        <>
            <Head title="Welcome" />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <a className="navbar-brand" href="#!">
                        JobsDev
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {props.auth.user ? (
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href={route("dashboard")}
                                    >
                                        dashboard
                                    </a>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            aria-current="page"
                                            href={route("login")}
                                        >
                                            Log in
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            aria-current="page"
                                            href={route("register")}
                                        >
                                            Register
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center my-5">
                                <h1 className="display-5 fw-bolder text-white mb-2">
                                    El portal donde encontraras tu nuevo empleo
                                </h1>
                                <p className="lead text-white-50 mb-4">
                                    Como lo hacemos... las empresas publican
                                    usus vacates con las skills requeridas y tu
                                    puedes aplicar a las que consideras que
                                    cumples
                                </p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                    <a
                                        className="btn btn-primary btn-lg px-4 me-sm-3"
                                        href="#features"
                                    >
                                        Registrarse
                                    </a>
                                    <a
                                        className="btn btn-outline-light btn-lg px-4"
                                        href="#!"
                                    >
                                        Ingresar con cuenta
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-5 border-bottom" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                <i className="bi bi-collection"></i>
                            </div>
                            <h2 className="h4 fw-bolder">Featured title</h2>
                            <p>
                                Paragraph of text beneath the heading to explain
                                the heading. We'll add onto it with another
                                sentence and probably just keep going until we
                                run out of words.
                            </p>
                            <a className="text-decoration-none" href="#!">
                                Call to action
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                <i className="bi bi-building"></i>
                            </div>
                            <h2 className="h4 fw-bolder">Featured title</h2>
                            <p>
                                Paragraph of text beneath the heading to explain
                                the heading. We'll add onto it with another
                                sentence and probably just keep going until we
                                run out of words.
                            </p>
                            <a className="text-decoration-none" href="#!">
                                Call to action
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                <i className="bi bi-toggles2"></i>
                            </div>
                            <h2 className="h4 fw-bolder">Featured title</h2>
                            <p>
                                Paragraph of text beneath the heading to explain
                                the heading. We'll add onto it with another
                                sentence and probably just keep going until we
                                run out of words.
                            </p>
                            <a className="text-decoration-none" href="#!">
                                Call to action
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light py-5 border-bottom">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bolder">Vacantes</h2>
                        <p className="lead mb-0">
                            Mustra de las vacantes que han publicado
                        </p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <VacanteCard />
                        <VacanteCard />
                        <VacanteCard />
                    </div>
                </div>
            </section>

            <section className="py-5 border-bottom">
                <div className="container px-5 my-5 px-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bolder">Empresa</h2>
                        <p className="lead mb-0">
                            Ingresa para que encuentres el mejor developer para
                            tu equipo
                        </p>
                    </div>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <a
                            className="btn btn-primary btn-lg px-4 me-sm-3"
                            href="#features"
                        >
                            Registrarse
                        </a>
                        <a
                            className="btn btn-outline-dark btn-lg px-4"
                            href="#!"
                        >
                            Ingresar con cuenta
                        </a>
                    </div>
                </div>
            </section>

            <footer className="py-5 bg-dark">
                <div className="container px-5">
                    <p className="m-0 text-center text-white">
                        Copyright &copy; Your Website 2022
                    </p>
                </div>
            </footer>
        </>
    );
}

export default main;
