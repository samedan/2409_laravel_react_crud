import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();

export const SkillProvider = ({ children }) => {
    const [formValues, setFormValues] = useState({
        name: "",
        slug: "",
    });

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

    // GET Skill
    const getSkill = async (id) => {
        const response = await axios.get(`skills/` + id);
        // console.log(apiSkills);
        setSkill(response.data.data);
    };

    // POST Skill
    const storeSkill = async (e) => {
        e.preventDefault();
        try {
            await axios.post("skills", formValues);
            getSkills();
            navigate("/skills");
        } catch (e) {
            console.log(e);

            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
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
            }}
        >
            {children}
        </SkillContext.Provider>
    );
};

export default SkillContext;
