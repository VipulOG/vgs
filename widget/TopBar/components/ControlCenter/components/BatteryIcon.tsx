import {bind} from 'astal';
import AstalBattery from 'gi://AstalBattery';

const battery = AstalBattery.get_default();

const enabled = bind(battery, 'isPresent');
const iconName = bind(battery, 'batteryIconName');

const BatteryIcon = () => <>{!enabled && <icon icon={iconName} />}</>;

export default BatteryIcon;
