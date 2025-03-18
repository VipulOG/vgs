import ClockLabel from './components/ClockLabel';
import NotificationIcon from './components/NotificationIcon';

const NotificationCenter = () => (
    <button className="top-bar__notification-center">
        <box spacing={6}>
            <ClockLabel />
            <NotificationIcon />
        </box>
    </button>
);

export default NotificationCenter;
