import {ReactComponent as CompanyIcon} from 'assets/icon-company.svg'
import {ReactComponent as LocationIcon} from 'assets/icon-location.svg'
import {ReactComponent as TwitterIcon} from 'assets/icon-twitter.svg'
import {ReactComponent as BLogIcon} from 'assets/icon-website.svg'

import styles from './UserInfo.module.scss';
import {LocalGithubUser} from "../../types";
import {InfoItem, InfoItemProps} from "../InfoItem";

interface UserInfoProps extends Pick<
    LocalGithubUser,
    'blog' | 'company' | 'location' | 'twitter'
> {
}

export const UserInfo = ({company, twitter, location, blog}: UserInfoProps) => {
    const items: InfoItemProps[] = [
        {
            icon: <LocationIcon/>,
            text: location,
        },
        {
            icon: <BLogIcon/>,
            text: blog,
            isLink: true,
        },
        {
            icon: <TwitterIcon/>,
            text: twitter,
        },
        {
            icon: <CompanyIcon/>,
            text: company
        },
    ]
    return (
        <div className={styles.userInfo}>
            {items.map((item, index) => (
                <InfoItem {...item} key={index}/>
            ))}
        </div>
    );
};
