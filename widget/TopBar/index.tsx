import {App, Astal, Gdk, Gtk} from 'astal/gtk3';
import ControlCenter from './components/ControlCenter';
import NotificationCenter from './components/NotificationCenter';

const {TOP, LEFT, RIGHT} = Astal.WindowAnchor;

// const LeftRegion = () => (
//     <box className="top-bar__left-region" halign={Gtk.Align.START}>
//         <label>Left</label>
//     </box>
// );

// const CenterRegion = () => (
//     <box className="top-bar__center-region" halign={Gtk.Align.CENTER}>
//         <label>Center</label>
//     </box>
// );

const LeftRegion = () => null;
const CenterRegion = () => null;

const RightRegion = () => (
    <box className="top-bar__right-region" spacing={8} halign={Gtk.Align.END}>
        <ControlCenter />
        <NotificationCenter />
    </box>
);

const Container = () => (
    <centerbox className="top-bar__container">
        <LeftRegion />
        <CenterRegion />
        <RightRegion />
    </centerbox>
);

const TopBar = (gdkmonitor: Gdk.Monitor) => (
    <window
        className="top-bar"
        gdkmonitor={gdkmonitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={TOP | LEFT | RIGHT}
        application={App}
    >
        <Container />
    </window>
);

export default TopBar;
