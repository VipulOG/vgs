import {bind, Variable} from 'astal';
import AstalNotifd from 'gi://AstalNotifd';

const notifd = AstalNotifd.get_default();

const hasNewNotification = bind(notifd, 'notifications').as(n => n.length > 0);
const dndActive = bind(notifd, 'dontDisturb');

const NotificationIcon = () => {
    const content = Variable.derive(
        [hasNewNotification, dndActive],
        (hasNew, dnd) => {
            if (dnd) return <icon icon="notifications-disabled-symbolic" />;
            if (hasNew) return <label label="•" />;
            return null;
        }
    );

    return <>{content()}</>;
};

export default NotificationIcon;
