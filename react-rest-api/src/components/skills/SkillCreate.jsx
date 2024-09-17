import { useState } from "react";

function SkillCreate() {
    const [formValues, setFormValues] = useState({
        name: "",
        slug: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    //127.0.0.1:8000/api/v1/skills

    http: return (
        <div className="mt-12">
            <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
                <div className="space-y-6">
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium"
                        >
                            Name
                        </label>
                        <input
                            className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
                            name="name"
                            value={formValues["name"]}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="slug"
                            className="block mb-2 text-sm font-medium"
                        >
                            Slug
                        </label>
                        <input
                            className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
                            name="slug"
                            value={formValues["slug"]}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="my-4 text-center">
                    <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                        Store
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SkillCreate;
