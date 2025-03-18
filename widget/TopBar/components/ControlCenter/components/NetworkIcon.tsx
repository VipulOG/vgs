import {bind} from 'astal';
import AstalNetwork from 'gi://AstalNetwork';

const {WIFI, WIRED, UNKNOWN} = AstalNetwork.Primary;
const network = AstalNetwork.get_default();

const networkIcons = {
    [WIFI]: bind(network.wifi, 'iconName'),
    [WIRED]: bind(network.wired, 'iconName'),
    [UNKNOWN]: null,
};

const NetworkIcon = () => {
    const content = bind(network, 'primary').as(primary => {
        const iconName = networkIcons[primary];
        return iconName ? <icon icon={iconName} /> : <></>;
    });

    return <>{content}</>;
};

export default NetworkIcon;
