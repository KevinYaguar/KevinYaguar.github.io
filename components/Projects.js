import { useTranslation } from "react-i18next"
import { projects } from "../profile"
import Link from "next/link"


const Projects = () => {
    
    const { i18n, t } = useTranslation()

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark rounded">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        {
                            projects.map(({ name, description, image }, i) => {
                                const nextUrl = `/project?title=${t(`${name}`)?.replaceAll(' ', '_')}`
                                
                                return (
                                    <div className="col-md-4 p-2" key={i}>
                                        <div className="card h-100 rounded">
                                            <div className="overflow rounded">
                                                <img src={`/${image}`} alt="photo" className="card-img-top" />
                                            </div>
                                            <div className="card-body">
                                                <h3>{t(`${name}`)}</h3>
                                                <p>{t(`${description}`)}</p>
                                                <Link href={nextUrl} legacyBehavior>
                                                    <a >{t('seeMore')}</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/*More Projects button */}
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
    )
}


export default Projects;