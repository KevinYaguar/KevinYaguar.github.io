
import { useTranslation } from 'react-i18next';
import { experiencies } from '../profile';

const Experiences = () => {

    const { i18n, t } = useTranslation()

    return (
        <div className="row ms-1 my-1">
            <div className="col-md-12">
                <div className="card bg-light h-100">
                    <div className="card-body">
                        <h1>{t('experience')}</h1>

                        <ul>
                            {experiencies.map(({ title, description, from, to }, i) => (
                                <li key={i} className='py-2'>
                                    <h3 className='py-1'>{t(`${title}`)}</h3>
                                    <h5>{t(`${from}`)} {t('to')} {t(`${to}`)}</h5>
                                    <p className="fs-6">{t(`${description}`)}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences;
