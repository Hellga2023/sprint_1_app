import Handlebars from 'handlebars';
import error from 'bundle-text:./error.hbs';
import './error.css'; 

export const Error = ({code})=> { return Handlebars.compile(error)({code}); };