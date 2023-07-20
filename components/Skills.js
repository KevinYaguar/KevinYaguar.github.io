
import { skills } from "../profile";
import { useTranslation } from 'react-i18next';

const Skills = () => (
    <div className="col-md-4 me-1 my-1">
        <div className="card bg-light">
            <div className="card-body">
                <h3>Skills</h3>
                {
                    skills.map(({ skill, percentage }, i) => (
                        <div className="py-1" key={i}>
                            <p className="fs-5 mb-2">{skill}</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${percentage}%` }}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
)

export default Skills;