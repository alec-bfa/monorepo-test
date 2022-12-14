import { ReactElement, useEffect, useState } from "react";
import Header from "@components/Header";
import Layout from "@components/Layout";
import { NextSeo } from "next-seo";
import Link from "next/link";
import * as ga from "../lib/ga";
import { useMetadata } from "context/metadata";
import { useForm } from "react-hook-form";
import { registerAuthorForm } from "models/forms";
import { useRouter } from "next/router";
import TextField from "@components/FormFields/TextField";

const Applications = () => {
    const { setMetadata } = useMetadata();

    useEffect(() => {
        setMetadata({
            title: "Book Fair Australia is open to applications!",
            content:
                "Submit your application now to exibit at our inaugural event",
            useHome: false,
        });
    }, [setMetadata]);

    const { register, handleSubmit, formState } = useForm<registerAuthorForm>({
        defaultValues: { email: "", name: "", authorName: "" },
    });

    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const onSubmit = async (data: registerAuthorForm) => {
        setIsLoading(true);
        const rawResponse = await fetch("/api/applications/registerAuthor", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const status = await rawResponse.status;
        if (status === 201) {
            ga.event({ action: "author_registration", params: {} });
            router.push("/applications/registered");
        } else {
            router.push("/applications/failed");
        }
    };
    return (
        <>
            <NextSeo
                title="Applications"
                description=""
                canonical="https://bookfairaustralia.com/applications"
                openGraph={{
                    title: "Applications",
                    description:
                        "Vendors and Authors can apply to exhibit at Book Fair Australias's inaugural event.",
                }}
            />
            <div className="container">
                <Header title="Applications" subtitle="" />
                <main
                    className="container"
                    style={{ maxWidth: 900, marginBottom: 48 }}
                >
                    <div className="mb-5 mx-auto text-center">
                        {/* <p>
                            Book Fair Australia is looking for authors and other
                            merchants to exhibit at our Sydney event! Our event
                            will be held on the 26th and 27th November 2022,
                            Sydney Showground at Sydney Olympic Park. Whether
                            you&apos;re established or just starting out,
                            we&apos;d love to hear from you. Click the links
                            below to apply to exhibit at our inaugural event.
                        </p> */}
                        <p>
                            <strong>Applications are now closed.</strong>
                        </p>
                    </div>

                    {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link href="applications/author">
                            <a className="btn btn-outline-primary btn-lg px-4 gap-3">
                                Single author applications
                            </a>
                        </Link>
                        <Link href="applications/vendor">
                            <a className="btn btn-outline-primary btn-lg px-4">
                                Other application
                            </a>
                        </Link>
                    </div> */}

                    <div
                        className="px-4 py-5 my-5 mx-auto text-center"
                        style={{ maxWidth: "700px" }}
                    >
                        {/* <Image className="d-block mx-auto" src="/Book_Fair_Australia.png" alt="" width="100%" height="100%" /> */}
                        <h2 id="register" className="">
                            Missed out this year?
                        </h2>
                        <p className="lead mb-4">
                            To be notified when applications open for 2023,
                            please fill out your details below.
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <TextField
                                        register={register}
                                        name="name"
                                        errors={formState.errors}
                                        friendlyName="Name"
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <TextField
                                        register={register}
                                        name="authorName"
                                        errors={formState.errors}
                                        friendlyName="Author Name"
                                        placeholder="Author Name"
                                        required
                                    />
                                </div>
                                <div className="col-md-12">
                                    <TextField
                                        register={register}
                                        name="email"
                                        errors={formState.errors}
                                        friendlyName="Email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <button
                                        type="submit"
                                        className="btn btn-outline-primary btn-lg px-4 gap-3"
                                        disabled={isLoading}
                                    >
                                        {isLoading && (
                                            <>
                                                <div
                                                    className="spinner-border spinner-border-sm"
                                                    role="status"
                                                ></div>
                                                <strong>Submitting...</strong>
                                            </>
                                        )}
                                        {!isLoading && "Register"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Applications;

Applications.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
