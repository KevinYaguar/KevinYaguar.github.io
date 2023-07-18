import Layout from "./components/Layout";
import { useRouter } from 'next/router';
import { projects } from "../profile";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Project = () => {

    const router = useRouter();

    const { i18n, t } = useTranslation()
    
    const currentProject = projects.filter((project) => {
        return project?.name.replaceAll(' ', '_') === router?.query?.title?.replaceAll(' ', '_')
    })[0]

    return (
        <Layout footer={false} title={currentProject?.name}>
            <div className="text-center d-flex justify-content-around border border-info">
                <img src={`/${currentProject?.image}`} alt="" className="img-fluid border" style={{width: '30%'}}/>
                <p className="py-5 px-5">{t(currentProject?.content)}</p>
            </div>
                
            <div className="d-flex justify-content-center mt-5">
                <Link href={`/resume`}>
                    <button className="btn btn-outline-primary">
                        {t('back')}
                    </button>
                </Link>
            </div>
        </Layout>
    )
}

export default Project;