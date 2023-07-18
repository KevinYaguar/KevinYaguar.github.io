import Link from 'next/link';
import { LANGUAGES } from '../i18n/constants';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { i18n, t } = useTranslation()

    const onChangeLang = (e) => {
        const lang_code = e.target.value
        i18n.changeLanguage(lang_code)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link legacyBehavior href="/">
                    <a className="navbar-brand" >Portfolio</a>
                </Link>
    
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <Link href="/resume" legacyBehavior>
                                <a className="nav-link" >
                                    {t('proyects')}
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/github" legacyBehavior>
                                <a className="nav-link" >
                                    Github
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <select defaultValue={'es'} onChange={onChangeLang}>
                    {
                        LANGUAGES.map(({ code, label }) => (
                            <option
                                key={code}
                                value={code}
                            >{label}</option>
                        ))
                    }
                </select>
            </div>
        </nav>
    )
}

export default Navbar;