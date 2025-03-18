import AudioIcon from './components/AudioIcon';
import BatteryIcon from './components/BatteryIcon';
import NetworkIcon from './components/NetworkIcon';

const ControlCenter = () => (
    <button className="top-bar__control-center">
        <box spacing={12}>
            <AudioIcon />
            <NetworkIcon />
            <BatteryIcon />
        </box>
    </button>
);

export default ControlCenter;
