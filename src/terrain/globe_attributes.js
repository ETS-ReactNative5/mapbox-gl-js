// @flow
import {createLayout} from '../util/struct_array.js';

const layout = createLayout([
    { type: 'Float32', name: 'a_globe_pos', components: 3 },
    { type: 'Float32', name: 'a_merc_pos', components: 2 },
    { type: 'Float32', name: 'a_uv', components: 2 }
]);

export default layout;
export const {members, size, alignment} = layout;