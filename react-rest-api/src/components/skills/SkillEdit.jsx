import { useEffect, useContext } from "react";
import SkillContext from "../../context/SkillContext";
import { useParams } from "react-router-dom";

function SkillEdit() {
    const { formValues, onChange, errors, getSkill, updateSkill, setErrors } =
        useContext(SkillContext);

    let { id } = useParams();

    useEffect(() => {
        getSkill(id);
        setErrors({});
    }, []);

    return (
        <div className="mt-12">
            <form
                onSubmit={updateSkill}
                className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm"
            >
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
                        {errors.name && (
                            <span className="text-sm text-red-400">
                                {errors.name[0]}
                            </span>
                        )}
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
                        {errors.slug && (
                            <span className="text-sm text-red-400">
                                {errors.slug[0]}
                            </span>
                        )}
                    </div>
                </div>
                <div className="my-4 text-center">
                    <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                        Update Skill
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SkillEdit;
