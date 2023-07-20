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
            <div className="container d-flex justify-content-between">
                <Link legacyBehavior href="/">
                    <a className="navbar-brand" >Portfolio</a>
                </Link>
                <div className='d-flex'>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active px-3">
                                <Link href="/resume" legacyBehavior>
                                    <a className="nav-link" >
                                        {t('proyects')}
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link href="/github" legacyBehavior>
                                    <a className="nav-link" >
                                        Github
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='rounded-4'>
                        <select defaultValue={'es'} onChange={onChangeLang} className="form-select rounded-4">
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
                </div>
            </div>
        </nav>
    )
}

export default Navbar;