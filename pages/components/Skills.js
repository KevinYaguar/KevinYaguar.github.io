
import { skills } from "../../profile";
import { useTranslation } from 'react-i18next';

export const Skills = () => (
    <div className="col-md-4">
        <div className="card bg-light">
            <div className="card-body">
                <h1>Skills</h1>

                {
                    skills.map(({ skill, percentage }, i) => (
                        <div className="py-3" key={i}>
                            <h5>{skill}</h5>
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