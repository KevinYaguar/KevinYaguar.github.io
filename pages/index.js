import Layout from "../components/Layout";
import { skills, experiencies, projects } from '../profile';
import dynamic from 'next/dynamic';
import Projects from "../components/Projects";
import Experiences from "../components/Experiencies";
import Skills from "../components/Skills";

const Header = dynamic(
    () => import('../components/Header'),
    { ssr: false }
)


const Index = () => {

    return (
        <Layout>
            <Header />
            <div className="d-flex">
                <Skills />
                <Experiences />
            </div>
    
            {/** Second section */}

    
            {/** Portfolio */}
            <Projects />
    
        </Layout>
    )
}

export default Index;