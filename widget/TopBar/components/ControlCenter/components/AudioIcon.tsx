import {bind} from 'astal';
import AstalAudio from 'gi://AstalWp';

const speaker = AstalAudio.get_default()?.audio.defaultSpeaker!;

const AudioIcon = () => <icon icon={bind(speaker, 'volumeIcon')} />;

export default AudioIcon;
