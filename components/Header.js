import { useTranslation } from "react-i18next"

const Header = () => {

    const { i18n, t } = useTranslation()

    return (
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4 d-flex justify-content-center">
                            <img className="img-fluid w-50 rounded" src="/photo.jfif" alt="photo"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Kevin Yaguar</h1>
                            <h3>{t('position')}</h3>
                            <p>{t('description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;