
import { useTranslation } from 'react-i18next';
import { experiencies } from '../../profile';

export const Experiences = () => {

    const { i18n, t } = useTranslation()

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>{t('experience')}</h1>

                        <ul>
                            {experiencies.map(({ title, description, from, to }, i) => (
                                <li key={i}>
                                    <h3>{t(`${title}`)}</h3>
                                    <h5>{t(`${from}`)} {t('to')} {t(`${to}`)}</h5>
                                    <p>{t(`${description}`)}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}