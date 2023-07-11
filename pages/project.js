import Layout from "./components/Layout";
import { useRouter } from 'next/router';
import { projects } from "../profile";

const Project = () => {

    const router = useRouter();
    
    const currentProject = projects.filter((project) => {
        return project?.name.replaceAll(' ', '_') === router?.query?.title?.replaceAll(' ', '_')
    })[0]

    return (
        <Layout footer={false} title={currentProject?.name}>
            <div className="text-center d-flex justify-content-around">
                <img src={`/${currentProject?.image}`} alt="" className="img-fluid" style={{width: '30%'}}/>
                <p>{currentProject?.content}</p>
            </div>
        </Layout>
    )
}

export default Project;