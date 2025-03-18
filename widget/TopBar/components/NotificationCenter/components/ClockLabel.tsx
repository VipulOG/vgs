import {Variable} from 'astal';

const date = Variable<string>('').poll(1000, 'date "+%A %d, %H:%M"');

const ClockLabel = () => <label label={date()} />;

export default ClockLabel;
