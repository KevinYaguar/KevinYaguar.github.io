import Layout from "./components/Layout";
import { skills, experiencies, projects } from '../profile';
import Link from 'next/link';

const Index = () => (
    <Layout>
        {/* Header Card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4 d-flex justify-content-center">
                            <img className="img-fluid w-50 rounded" src="/photo.jfif" alt="photo"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Kevin Yaguar</h1>
                            <h3>FullStack Developer</h3>
                            <p>I'm +2 year experienced developer, with strong skills for communication and problem-solver. I'm
                                really commited to the proyects I assume. I like teamwork using agile methologies. I enjoy facing new
                                challenges, taking responsabilities and training myself continually to keep me updated.</p>
                            <p>Contact me: 1154682556 - kevin.yaguar@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** Second section */}
        <div className="row py-2">
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
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experiencie</h1>

                        <ul>
                            {experiencies.map(({ title, description, from, to }, i) => (
                                <li key={i}>
                                    <h3>{title}</h3>
                                    <h5>{from} to {to}</h5>
                                    <p>{description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/** Portfolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark rounded">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        {
                            projects.map(({ name, description, image }, i) => {
                                const nextUrl = `/project?title=${name?.replaceAll(' ', '_')}`
                                
                                return (
                                    <div className="col-md-4 p-2" key={i}>
                                        <div className="card h-100 rounded">
                                            <div className="overflow">
                                                <img src={`/${image}`} alt="photo" className="card-img-top" />
                                            </div>
                                            <div className="card-body">
                                                <h3>{name}</h3>
                                                <p>{description}</p>
                                                <a href={nextUrl}>See More</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* <div className="text-center mt-4">
                        <Link href={'/porfolio'} legacyBehavior>
                            <a className="btn btn-outline-light">
                                More Projects
                            </a>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>

    </Layout>
)

export default Index;