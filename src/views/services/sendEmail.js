import {send} from 'emailjs-com';
import { NotificationManager } from 'react-notifications';

export const sendEmail = (message) => {
    send(
        'service_cxrlh5s',
        'template_evrn09m',
        message,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
    )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            NotificationManager.success('Votre mail a été envoyé avec succès!')
        })
        .catch((err) => {
            console.log('FAILED...', err);
            NotificationManager.error("Erreur, votre email n'a pas pu être envoyé 😢")
        });
}
