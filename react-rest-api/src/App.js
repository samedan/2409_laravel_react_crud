import { Routes, Route, Link } from "react-router-dom";
import { SkillProvider } from "./context/SkillContext";
import Home from "./components/Home";
import SkillIndex from "./components/skills/SkillIndex";
import SkillCreate from "./components/skills/SkillCreate";
import SkillEdit from "./components/skills/SkillEdit";

function App() {
    return (
        <SkillProvider>
            <div className="bg-slate-200">
                <div className="max-w-7xl mx-auto min-h-screen">
                    <nav>
                        <ul className="flex">
                            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                                <Link to="/skills">Skills</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/skills" element={<SkillIndex />} />
                        <Route
                            path="/skills/create"
                            element={<SkillCreate />}
                        />
                        <Route
                            path="/skills/:id/edit"
                            element={<SkillEdit />}
                        />
                    </Routes>
                </div>
            </div>
        </SkillProvider>
    );
}

export default App;
