import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();

const initialForm = {
    name: "",
    slug: "",
};

export const SkillProvider = ({ children }) => {
    const [formValues, setFormValues] = useState(initialForm);

    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState([]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // GET SkillS
    const getSkills = async () => {
        const apiSkills = await axios.get("skills");
        console.log(apiSkills);
        setSkills(apiSkills.data.data);
    };

    // GET Single Skill
    const getSkill = async (id) => {
        const response = await axios.get(`skills/` + id);
        const apiSkill = response.data.data;
        // console.log(apiSkills);
        setSkill(apiSkill);
        setFormValues({
            name: apiSkill.name,
            slug: apiSkill.slug,
        });
    };

    // POST Skill
    const storeSkill = async (e) => {
        e.preventDefault();
        setFormValues(initialForm);
        try {
            await axios.post("skills", formValues);
            navigate("/skills");
        } catch (e) {
            console.log(e);

            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    };

    // UPDATE PUT Skill
    const updateSkill = async (e) => {
        e.preventDefault();
        try {
            await axios.put("skills/" + skill.id, formValues);
            setFormValues(initialForm);
            navigate("/skills");
        } catch (e) {
            console.log(e);
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    };

    // DELETE Skill
    const deleteSkill = async (id) => {
        if (!window.confirm("Are you sure?")) {
            return;
        }
        await axios.delete("skills/" + id);
        getSkills();
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <SkillContext.Provider
            value={{
                skill,
                skills,
                getSkill,
                getSkills,
                storeSkill,
                onChange,
                formValues,
                errors,
                setErrors,
                updateSkill,
                deleteSkill,
            }}
        >
            {children}
        </SkillContext.Provider>
    );
};

export default SkillContext;
