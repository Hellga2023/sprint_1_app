import Handlebars from 'handlebars';
import profile from 'bundle-text:./profile.hbs';
import {Button} from '../../components/button/button';
import {Link} from '../../components/link/link';
import {Info} from '../../components/profile_info_line/profile_info_line';
import {SectionLeft} from '../../components/section_nav_left/section_nav_left';
import './profile.css';

export const Profile = (data)=> {

    let infoTemplates=[], links = [];

    data.user.infos.forEach(element => { 
        element.isDisabled = !data.isProfileInEditMode;
        infoTemplates.push(Info(element));
    });
    
    let params ={
        name: data.user.name,
        isInEditMode: data.isProfileInEditMode, 
        infos: infoTemplates,
        sectionLeft: SectionLeft()
    };
    

    if(data.isProfileInEditMode){
        
        params.btn = Button({text:"Save"});
    }else{
        links.push(Link({text:"Edit profile", url: "/editprofile"}));
        links.push(Link({text:"Change password", url: "editpassword"}));
        links.push(Link({text:"Return"}));
        params.links = links;
    }
    return Handlebars.compile(profile)(params); 
};

