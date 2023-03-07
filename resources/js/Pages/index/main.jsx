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
                        <h2 className="fw-bolder">Customer testimonials</h2>
                        <p className="lead mb-0">
                            Our customers love working with us
                        </p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-6">
                            <div className="card mb-4">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <i className="bi bi-chat-right-quote-fill text-primary fs-1"></i>
                                        </div>
                                        <div className="ms-4">
                                            <p className="mb-1">
                                                Thank you for putting together
                                                such a great product. We loved
                                                working with you and the whole
                                                team, and we will be
                                                recommending you to others!
                                            </p>
                                            <div className="small text-muted">
                                                - Client Name, Location
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <i className="bi bi-chat-right-quote-fill text-primary fs-1"></i>
                                        </div>
                                        <div className="ms-4">
                                            <p className="mb-1">
                                                The whole team was a huge help
                                                with putting things together for
                                                our company and brand. We will
                                                be hiring them again in the near
                                                future for additional work!
                                            </p>
                                            <div className="small text-muted">
                                                - Client Name, Location
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light py-5">
                <div className="container px-5 my-5 px-5">
                    <div className="text-center mb-5">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                            <i className="bi bi-envelope"></i>
                        </div>
                        <h2 className="fw-bolder">Get in touch</h2>
                        <p className="lead mb-0">We'd love to hear from you</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-6">
                            <form
                                id="contactForm"
                                data-sb-form-api-token="API_TOKEN"
                            >
                                <div className="form-floating mb-3">
                                    <input
                                        className="form-control"
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name..."
                                        data-sb-validations="required"
                                    />
                                    <label htmlFor="name">Full name</label>
                                    <div
                                        className="invalid-feedback"
                                        data-sb-feedback="name:required"
                                    >
                                        A name is required.
                                    </div>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        className="form-control"
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        data-sb-validations="required,email"
                                    />
                                    <label htmlFor="email">Email address</label>
                                    <div
                                        className="invalid-feedback"
                                        data-sb-feedback="email:required"
                                    >
                                        An email is required.
                                    </div>
                                    <div
                                        className="invalid-feedback"
                                        data-sb-feedback="email:email"
                                    >
                                        Email is not valid.
                                    </div>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        className="form-control"
                                        id="phone"
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                        data-sb-validations="required"
                                    />
                                    <label htmlFor="phone">Phone number</label>
                                    <div
                                        className="invalid-feedback"
                                        data-sb-feedback="phone:required"
                                    >
                                        A phone number is required.
                                    </div>
                                </div>

                                <div className="form-floating mb-3">
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        type="text"
                                        placeholder="Enter your message here..."
                                        style={{ height: "10rem" }}
                                        data-sb-validations="required"
                                    ></textarea>
                                    <label htmlFor="message">Message</label>
                                    <div
                                        className="invalid-feedback"
                                        data-sb-feedback="message:required"
                                    >
                                        A message is required.
                                    </div>
                                </div>

                                <div
                                    className="d-none"
                                    id="submitSuccessMessage"
                                >
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">
                                            Form submission successful!
                                        </div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">
                                            https://startbootstrap.com/solution/contact-forms
                                        </a>
                                    </div>
                                </div>

                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">
                                        Error sending message!
                                    </div>
                                </div>

                                <div className="d-grid">
                                    <button
                                        className="btn btn-primary btn-lg disabled"
                                        id="submitButton"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
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
