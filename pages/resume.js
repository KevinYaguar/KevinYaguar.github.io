import Layout from "./components/Layout";
import { projects } from "../profile";
import Link from 'next/link'
import { useTranslation } from "react-i18next";

const ProjectCard = ({project}) => {
    
    const nextUrl = `/project?title=${project.name.replaceAll(' ', '_')}`;

    const { i18n, t } = useTranslation();
    
    return (
        <div className="col-md-4 my-1 bg-green">
            <div className="card">
                <div className="blog">
                    <img src={project.image} className="card-img-top"/>
                </div>
                <div className="card-body">
                    <h3>{t(project.name)}</h3>
                    <p>{t(project.description)}</p>
    
                    <Link href={nextUrl} as={`/project/${nextUrl}`}>
                        <button className="btn btn-light">
                        {t('read')}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Proyects = () => (
    <Layout footer={false} title={'Projects'}>
        <div className="row">
            {
                projects.map((project, i)=> <ProjectCard project={project} key={i}/>)
            }
        </div>
    </Layout>
)

export default Proyects;