import Handlebars from 'handlebars';
import section from 'bundle-text:./section_nav_left.hbs';
import './section_nav_left.css';
import leftArrow from '../../../static/arrowLeft.png';

export const SectionLeft = () => Handlebars.compile(section)({url : leftArrow});

